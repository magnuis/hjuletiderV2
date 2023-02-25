import moment from 'moment'
import { Weather } from '../type'

interface WeatherProps {
  lat: number
  long: number
  date: string
}

const weatherApiKey = process.env.NEXT_VISUAL_CROSSING_KEY
const getWeatherToken = () => {
  return fetch(
    `curl -d 'client_id=<client ID>&client_secret=<client secret>&grant_type=client_credentials' 'https://frost.met.no/auth/accessToken'`
  ).then((res) => res.json())
}
export const getHistoricalWeather = async ({ lat, long, date }: WeatherProps): Promise<Weather> => {
  const startDate = new Date(date).valueOf()
  const endDate = startDate + 24 * 60 * 60 * 1000 + 1

  const startDateString = moment(startDate).format('YYYY-MM-DDTHH:mm:ss')
  const endDateString = moment(endDate).format('YYYY-MM-DDTHH:mm:ss')

  // console.log(date)

  // console.log('START', startDateString)
  // console.log('END', endDateString)

  const weatherData = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat}%2C${long}/${startDateString}/${startDateString}?unitGroup=metric&key=${weatherApiKey}&contentType=json
`
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
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
