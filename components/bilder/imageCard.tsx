'use client'
import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '../../lib/sanity.client'
import { useState } from 'react'
import ImageModal from './imageModal'

const builder = imageUrlBuilder(client)

interface ImageCardProps {
  image: any
  setShowModal: (value: boolean) => void
  setCurrentImage: (value: number) => void
}
export default function ImageCard({ image, setShowModal }: ImageCardProps) {
  return (
    <div className="mx-auto relative h-24 w-full sm:h-44 hover:cursor-pointer sm:opacity-95 hover:opacity-100 transition-transform duration-200 ease-out">
      <Image
        src={builder.image(image.url).url()}
        alt={image._rev}
        className="object-cover object-left lg:object-center"
        fill
        onClick={() => setShowModal(true)}
      />
    </div>
  )
}
