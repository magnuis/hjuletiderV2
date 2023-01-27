import { stravaData } from '../type'
var polyline = require('@mapbox/polyline')

const clientId = process.env.NEXT_STRAVA_CLIENT_ID
const clientSecret = process.env.NEXT_STRAVA_CLIENT_SECRET
const refreshToken = process.env.NEXT_STRAVA_REFRESH_TOKEN

const userId = process.env.NEXT_STRAVA_CLIENT_ID
const TOKEN_ENDPOINT = 'https://www.strava.com/oauth/token'
const ATHLETES_ENDPOINT = `https://www.strava.com/api/v3/athletes/${userId}`
const ACTIVITY_ENDPOINT = 'https://www.strava.com/api/v3/'

const getAccessToken = async () => {
  const body = JSON.stringify({
    client_id: clientId,
    client_secret: clientSecret,
    refresh_token: refreshToken,
    grant_type: 'refresh_token',
  })

  const response = await fetch(
    `${TOKEN_ENDPOINT}?client_id=${clientId}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`,
    { method: 'POST' }
  ).then((res) => res.json())
  return response
}

export const getActivities = async () => {
  const { access_token: accessToken } = await getAccessToken()
  const response = await fetch(
    `https://www.strava.com/api/v3/athlete//activities?access_token=${accessToken}`
  )
  const json = await response.json()

  return json.map((activity: any) => {
    const points = getPolyPoints(activity.map.summary_polyline)
    return {
      id: activity.id,
      name: activity.name,
      date: activity.start_date,
      distance: activity.distance,
      averageSpeed: activity.average_speed,
      totalElevationGain: activity.total_elevation_gain,
      start_latlng: activity.start_latlng,
      end_latlng: activity.end_latlng,
      points: points,
    }
  })
}

export const getActivityById = async (id: string) => {
  const { access_token: accessToken } = await getAccessToken().then((res) => res.json())
  const response = await fetch(`${ACTIVITY_ENDPOINT}/activities/${id}?access_token=${accessToken}`)
  const json = await response.json()

  return {
    distance: json.distance,
    averageSpeed: json.average_speed,
    totalElevationGain: json.total_elevation_gain,
  }
}

export function concatStageData(stages: stravaData[]): stravaData {
  const stage: stravaData = {
    id: '',
    name: '',
    date: '',
    points: [],
    averageSpeed: 0,
    distance: 0,
    totalElevationGain: 0,
    start_latlng: [],
    end_latlng: [],
  }

  stages.forEach((s) => {
    stage.id = s.id
    stage.name = s.name
    stage.date = s.date
    stage.points = s.points.concat(stage.points)
    stage.averageSpeed = stage.averageSpeed + s.averageSpeed / 2
    stage.distance = stage.distance + s.distance
    stage.totalElevationGain = stage.totalElevationGain + s.totalElevationGain
    stage.start_latlng = s.start_latlng
    stage.end_latlng = s.end_latlng
  })

  return stage
}

export const concatPolyPoints = (stages: stravaData[]) => {
  const p = ['a', 'b']
  const p2 = ['c']

  let points: any[] = []

  stages.forEach((s) => {
    points = points.concat(s.points)
  })
  return points
}

const getPolyPoints = (points: string) => {
  return polyline.decode(points)
}
