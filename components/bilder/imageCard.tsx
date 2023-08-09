import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '../../lib/sanity.client'

const builder = imageUrlBuilder(client)

interface ImageCardProps {
  url: string
  alt?: string
  index: number
  setShowModal: (value: boolean) => void
  setCurrentImage: (value: number) => void
}
export default function ImageCard({
  url,
  alt,
  index,
  setShowModal,
  setCurrentImage,
}: ImageCardProps) {
  return (
    <div className="mx-auto relative h-24 w-full sm:h-44 hover:cursor-pointer sm:opacity-95 hover:opacity-100 transition-transform duration-200 ease-out">
      <Image
        src={builder.width(300).height(300).image(url).url()}
        alt={alt ? alt : 'Bilde'}
        className="object-cover object-left lg:object-center"
        fill
        onClick={() => {
          setShowModal(true)
          setCurrentImage(index)
        }}
        sizes="20vw"
      />
    </div>
  )
}
