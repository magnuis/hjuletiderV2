import imageUrlBuilder from '@sanity/image-url'

import Image from 'next/image'
import { client } from '../lib/sanity.client'

const builder = imageUrlBuilder(client)

export default function NotFound() {
  return (
    <div className="mt-16 sm:mt-52">
      <div className="relative max-w-xs md:max-w-2xl h-96 mb-10 mx-auto flex flex-col space-y-4">
        <Image
          priority
          className="absolute object-center object-cover top-0 h-full w-full opacity-10"
          src={builder
            .image(
              'https://cdn.sanity.io/images/14nn8v5u/production/f87bd7bb02b8c86472a28b241e3f224f80c308cc-1536x2048.jpg'
            )
            .url()}
          alt={'404 picture'}
          fill
          sizes="100vw"
        />
      </div>
      <div className="mx-auto">
        <p>Sorry Mac, fant ikke siden du lette etter. Bli med tilbake til forsiden heller!</p>
      </div>
    </div>
  )
}
