import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '../lib/sanity.client'
import { Stage } from '../type'
import { getHistoricalWeather } from '../lib/weather'

const builder = imageUrlBuilder(client)

interface StageProps {
  stage: Stage
}

export default function StageCard({ stage }: StageProps) {
  return (
    <div className="flex flex-col group cursor-pointer">
      <div className="relative w-full h-80 group-hover:scale-105 transition-transform duration-200 ease-out">
        <Image
          src={builder.image(stage.mainImage).url()}
          alt={stage.title}
          className="object-cover object-left lg:object-center"
          fill
        />
        <div className="absolute bottom-0 w-full text-white">
          <p className="text-xl m-2 font-bold">Dag nummer {stage.dayNo}</p>
        </div>
      </div>
      <div className="mt-5 flex-1">
        <p className="underline text-xl 2xl:text-2xl font-bold">{stage.title}</p>
        <p className="line-clamp-2 text-gray-500 text-lg 2xl:text-xl">{stage.description}</p>
      </div>
      <p className="flex items-center mt-5 font-bold group-hover:underline text-lg 2xl:text-xl">
        Les mer <ArrowUpRightIcon className="ml-2 h-4 w-4 " />
      </p>
    </div>
  )
}
