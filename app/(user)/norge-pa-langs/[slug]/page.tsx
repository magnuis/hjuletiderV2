import Image from 'next/image'
import { Stage, stravaData } from '../../../../type'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '../../../../lib/sanity.client'
import { groq } from 'next-sanity'
import { concatStageData, getActivities } from '../../../../lib/strava'
import { GiMountainRoad, GiPathDistance, GiCalendar } from 'react-icons/gi'
import { IoMdBicycle } from 'react-icons/io'
import BottomStageNavigation from '../../../../components/norge-pa-langs/stagePage/BottomStageNavigation'
import NotFound from '../../../../components/NotFoundPage'
import MapCard from '../../../../components/norge-pa-langs/MapCard'

const builder = imageUrlBuilder(client)

interface StageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const query = groq`
*[_type=='stage']{
  slug
}`

  const slugs: Stage[] = await client.fetch(query)
  const slugRoutes = slugs.map((slug) => slug.slug.current)

  return slugRoutes.map((slug) => ({
    slug,
  }))
}

export default async function StagePage({ params: { slug } }: StageProps) {
  const query = groq`
    *[_type=='stage' && slug.current == $slug][0] {
        ...,
    }`

  const stage: Stage = await client.fetch(query, { slug })
  if (!stage) {
    return (
      <div className="relative max-w-7xl mx-auto ">
        <NotFound />
      </div>
    )
  }
  const strava: stravaData[] = await getActivities()
  const stravaStage = strava.filter((s) => s.name === 'Dag_' + stage.dayNo)
  const filteredStravaStage = stravaStage.length > 1 ? concatStageData(stravaStage) : stravaStage[0]

  return (
    <div className="relative max-w-7xl mx-auto flex flex-col space-y-6 mb-40">
      <div className="relative w-full h-96 mb-10">
        <Image
          priority
          className="absolute object-center object-cover top-0 h-full w-full opacity-100"
          src={builder.image(stage.mainImage).url()}
          alt={stage.title}
          fill
        />
      </div>
      <div className="mx-10 flex flex-col space-y-8 ">
        <div className=" flex flex-col space-y-2 items-center sm:flex-row justify-between mx-10">
          <span className="flex flex-row items-center space-x-2">
            <GiCalendar className="text-gray-900 h-8 w-8" />
            <p className="bottom-0 text-md">{'Dag ' + stage.dayNo}</p>
          </span>
          <span className="flex flex-row items-center space-x-2">
            <GiPathDistance className="text-gray-900 h-8 w-8" />
            <p className="bottom-0 text-md">
              {Math.round(filteredStravaStage.distance / 1000) + ' km'}
            </p>
          </span>
          <span className="flex flex-row items-center space-x-2">
            <IoMdBicycle className="text-gray-900 h-8 w-8" />
            <p className="bottom-0 text-md">
              {Math.round(filteredStravaStage.averageSpeed * 3.6 * 10) / 10 + ' km/h'}
            </p>
          </span>
          <span className="flex flex-row items-center space-x-2">
            <GiMountainRoad className="text-gray-900 h-8 w-8" />
            <p className="bottom-0 text-md">
              {Math.round(filteredStravaStage.totalElevationGain) + ' høydemeter'}
            </p>
          </span>
        </div>
        <hr className="border-black" />
        <h1 className="text-5xl font-bold mx-auto">{stage.title}</h1>
        <p className="text-xl ">{stage.description}</p>
      </div>
      <div>
        <MapCard strava={filteredStravaStage} />
      </div>
      <div className="relative mx-auto flex flex-row space-x-10">
        <BottomStageNavigation dayNo={stage.dayNo} />
      </div>
    </div>
  )
}
