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
import React from 'react'

import imageUrlBuilder from '@sanity/image-url'
import { client } from '../../../lib/sanity.client'
import { groq } from 'next-sanity'
import Link from 'next/link'
import ImageCard from '../../../components/bilder/imageCard'
import { GiAfrica, GiBrazilFlag } from 'react-icons/gi'
import { MdDirectionsBike } from 'react-icons/md'
const builder = imageUrlBuilder(client)

export default async function Page() {
  const query = groq`
*[_type=='sanity.imageAsset'] {
...,
} `
  const images = await client.fetch(query)
  return (
    <div className="flex flex-col max-w-7xl mx-auto p-5 md:p-10 gap-y-6">
      <div className="flex flex-col sm:flex-row gap-x-16">
        <span className="flex flex-row gap-x-2 items-center">
          <input type="checkbox" className="cursor-pointer"></input>
          <p className="">Norge på langs</p>
          <MdDirectionsBike />
        </span>
        <span className="flex flex-row gap-x-2 items-center">
          <input type="checkbox" className="cursor-pointer"></input>
          <p className="">Afrika</p>
          <GiAfrica />
        </span>
        <span className="flex flex-row gap-x-2 items-center">
          <input type="checkbox" className="cursor-pointer"></input>
          <p className="">Brasil</p>
          <GiBrazilFlag className="h-5 w-5" />
        </span>
      </div>
      <div className={`grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 pb-24`}>
        {images.map((image: any) => (
          <ImageCard src={image.url} alt={image._rev} />
        ))}
      </div>
    </div>
  )
}
