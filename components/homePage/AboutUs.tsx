import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '../../lib/sanity.client'

const builder = imageUrlBuilder(client)

export default function AboutUs() {
  return (
    <div className="mb-16 h-96 max-h-full">
      <div className="relative h-full">
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
        />
        <div className="absolute bottom-0 w-full text-white p-5 flex font-bold">
          <span>
            <p>Livet er en reise. </p>
            <p>Bli med!</p>
          </span>
        </div>
      </div>
    </div>
  )
}
