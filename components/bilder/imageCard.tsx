import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '../../lib/sanity.client'

const builder = imageUrlBuilder(client)

interface ImageCardProps {
  src: string
  alt: string
}
export default function ImageCard({ src, alt }: ImageCardProps) {
  return (
    <div className="mx-auto relative h-24 w-full sm:h-44 hover:cursor-pointer sm:opacity-95 hover:opacity-100 transition-transform duration-200 ease-out">
      <Image
        src={builder.image(src).url()}
        alt={alt}
        className="object-cover object-left lg:object-center"
        fill
      />
    </div>
  )
}
