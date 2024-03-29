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

interface Post extends Base {
  title: string
  slug: Slug
  mainImage: Image
  publishedAt: date
  body: Block[]
  shortDesc: string
  images: Image[]
}

interface Country extends Base {
  slug: Slug
  randomFact: string
  continent: {
    continent: string
  }
  population: number
  mainImage: Image
  landscape: Image
  body: Block[]
  description: string
  title: string
  languages: string
  areal: number
  capital: string
  englishName: string
  posts: Post[]
}
