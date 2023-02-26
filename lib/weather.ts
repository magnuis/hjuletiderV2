import { readFileSync } from 'fs'
import moment from 'moment'
import { join } from 'path'
import { Weather } from '../type'

interface WeatherProps {
  lat: number
  long: number
  date: string
}

const weatherApiKey = process.env.NEXT_VISUAL_CROSSING_KEY

export const getHistoricalWeather = async ({ lat, long, date }: WeatherProps): Promise<Weather> => {
  if (process.env.NODE_ENV == 'development') {
    console.log('IN DEVELOPMENT MODE WEATHER getHistoricalWeather')
    const data = readFileSync(join(process.cwd(), 'lib', 'weather.json'), 'utf8')
    return JSON.parse(data)
  }

  const startDate = new Date(date).valueOf()
  const endDate = startDate + 24 * 60 * 60 * 1000 + 1

  const startDateString = moment(startDate).format('YYYY-MM-DDTHH:mm:ss')

  const weatherData = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat}%2C${long}/${startDateString}/${startDateString}?unitGroup=metric&key=${weatherApiKey}&contentType=json
`
  )
    .then((res) => res.json())
    .then((res) => {
      return {
        temperature: res.days[0].temp,
        feelsLikeMin: res.days[0].feelslikemin,
        windspd: res.days[0].windspeed,
        windgust: res.days[0].windgust,
        winddir: res.days[0].winddir,
        description: res.days[0].description,
        precip: res.days[0].precip,
        icon: res.days[0].icon,
      }
    })

  return weatherData
}
