import React from 'react'

import imageUrlBuilder from '@sanity/image-url'
import { client } from '../../../lib/sanity.client'
import { groq } from 'next-sanity'
const builder = imageUrlBuilder(client)

export default async function Page() {
  const query = groq`
*[_type=='sanity.imageAsset'] {
...,
} `
  const images = await client.fetch(query)
  console.log('IMAGES: ' + images)
  return <div></div>
}
