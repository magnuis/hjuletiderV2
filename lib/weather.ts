import moment from 'moment'

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
export const getHistoricalWeather = async ({ lat, long, date }: WeatherProps) => {
  const startDate = new Date(date).valueOf()
  const endDate = startDate + 24 * 60 * 60 * 1000 + 1

  const startDateString = moment(startDate).format('YYYY-MM-DDTHH:mm:ss')
  const endDateString = moment(endDate).format('YYYY-MM-DDTHH:mm:ss')

  console.log(date)

  console.log('START', startDateString)
  console.log('END', endDateString)

  const weatherData = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat}%2C${long}/${startDateString}/${startDateString}?unitGroup=metric&key=${weatherApiKey}&contentType=json
`
  ).then((res) => res.json())
  //   const weatherData = await fetch(
  //     `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/history?&aggregateHours=24&startDateTime=${moment(
  //       startDate
  //     ).format('YYYY-MM-DDTHH:mm:ss')}&endDateTime=${moment(endDate).format(
  //       'YYYY-MM-DDTHH:mm:ss'
  //     )}&unitGroup=metric&contentType=json&dayStartTime=0:0:00&dayEndTime=0:0:00&location=${lat},${long}&key=${weatherApiKey}`
  //   ).then((res) => res.json())
  console.log('WEATHER', weatherData)
}
