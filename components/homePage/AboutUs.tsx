import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '../../lib/sanity.client'

const builder = imageUrlBuilder(client)

export default function AboutUs() {
  return (
    <div className="max-h-full">
      <div className="relative h-96">
        <Image
          priority
          className="object-center object-cover absolute top-0 h-full w-full opacity-100"
          src={builder
            .image(
              'https://cdn.sanity.io/images/14nn8v5u/production/3ecee50b962f22eb83b0bc6f3fd8c649be23dc30-4032x3024.jpg'
            )
            .url()}
          alt="About us"
          fill
          sizes="100vw"
        />
      </div>
    </div>
  )
}
