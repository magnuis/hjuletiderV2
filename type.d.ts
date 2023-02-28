import { Image, Slug } from 'sanity'

type Base = {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
}

interface Stage extends Base {
  body: Block[]
  mainImage: Image
  slug: Slug
  title: string
  dayNo: number
  date: string
  description: Block[]
  shortDesc: string
  images: Image[]
}

interface stravaData {
  id: string
  name: string
  date: string
  points: [number, number][]
  averageSpeed: number
  distance: number
  totalElevationGain: number
  start_latlng: number[]
  end_latlng: number[]
}

type Weather = {
  temperature: number
  feelsLikeMin: number
  windspd: number
  windgust: number
  winddir: number
  description: string
  precip: number
  icon: string
}
