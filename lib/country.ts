import { stravaData } from '../type'

const COUNTRY_ENDPOINT = process.env.NEXT_COUNTRY_API_URL ?? ''
const COUNTRY_KEY = process.env.NEXT_COUNTRY_API_KEY ?? ''

export const getCountryByName = async (name: string) => {
  if (process.env.NODE_ENV == 'development') {
    return {
      capital: 'Brasília',
      population: 212559000,
    }
  }

  const response = await fetch(`${COUNTRY_ENDPOINT}/country?name=${name}`, {
    method: 'GET',
    headers: { 'X-Api-Key': COUNTRY_KEY },
  })
  const json = await response.json()
  return {
    capital: json[0].capital,
    population: json[0].population * 1000,
  }
}
