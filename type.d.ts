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
  description: string
}

interface stravaData {
  points: number[]
  averageSpeed: number
  distance: number
  totalElevationGain: number
}
