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
  const startDate = new Date(date).valueOf()
  let startDateString = moment(startDate).format('YYYY-MM-DD')
  try {
    const data = readFileSync(join(process.cwd(), 'data', `${startDateString}.json`), 'utf8')
    return JSON.parse(data)
  } catch (error) {
    startDateString = moment(startDate).format('YYYY-MM-DDTHH:mm:ss')
    const weatherData = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat}%2C${long}/${startDateString}/${startDateString}?unitGroup=metric&key=${weatherApiKey}&contentType=json
      `
    )
      .then((res) => res.json())
      .then((res) => {
        return {
          temperature: res.days[0].temp,
          feelsLikeMin: res.days[0].feelslikemin,
          windspd: (res.days[0].windspeed * 0.5144 * 10) / 10, // knot to m/s
          windgust: (res.days[0].windgust * 0.5144 * 10) / 10, // knot to m/s
          winddir: res.days[0].winddir,
          description: res.days[0].description,
          precip: res.days[0].precip,
          icon: res.days[0].icon,
        }
      })

    return weatherData
  }
}
