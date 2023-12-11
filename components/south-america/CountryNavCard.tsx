import imageUrlBuilder from '@sanity/image-url'
import { client } from '../../lib/sanity.client'
import { Country } from '../../type'

const builder = imageUrlBuilder(client)

export default function CountryNavCard({ country }: { country: Country }) {
  return (
    <span className="group">
      <div className="flex flex-row cursor-pointer mt-12 md:pt-4 md:pl-4 md:pb-4 rounded-xl group-hover:shadow-lg group-hover:scale-105">
        <div className="flex flex-col">
          <p className="underline text-xl 2xl:text-2xl font-bold mb-2">{country.title}</p>
          <p className="line-clamp-4 text-gray-500 md:text-lg 2xl:text-xl">{country.description}</p>
        </div>
        <div className="max-w-[200px] max-h-[150px]">
          <img
            src={builder.image(country.mainImage).width(600).format('webp').url()}
            alt={country.title}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </span>
  )
}
