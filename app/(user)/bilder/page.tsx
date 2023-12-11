import React from 'react'

import imageUrlBuilder from '@sanity/image-url'
import { client } from '../../../lib/sanity.client'
import { groq } from 'next-sanity'
import Gallery from '../../../components/bilder/Gallery'
const builder = imageUrlBuilder(client)

export default async function Page() {
  const query = groq`
    *[_type == 'sanity.imageAsset' && !references(*[_type == 'media.tag' && name.current == "no-show"]._id)] {
      ...,
    }`
  const images = await client.fetch(query)
  return (
    <div className="flex flex-col max-w-5xl mx-auto p-5 md:p-10 gap-y-6">
      {/* <div className="flex flex-col sm:flex-row gap-x-16 ml-4">
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
      </div> */}
      <Gallery images={images} />
    </div>
  )
}
