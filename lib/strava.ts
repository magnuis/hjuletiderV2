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

  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body,
  })
  return response.json()
}

export const getActivities = async () => {
  const { access_token: accessToken } = await getAccessToken()
  const response = await fetch(`${ATHLETES_ENDPOINT}/activities?access_token=${accessToken}`)
  const json = await response.json()
  return json
}

export const getActivityById = async (id: string) => {
  const { access_token: accessToken } = await getAccessToken()
  const response = await fetch(`${ACTIVITY_ENDPOINT}/activities/${id}?access_token=${accessToken}`)
  const json = await response.json()
  return {
    // distance: json.distance,
    // averageSpeed: json.average_speed,
    // totalElevationGain: json.total_elevation_gain,
    // points: json.map.summary_polyline,
  }
}
