import Image from 'next/image'
import { Stage, stravaData, Weather } from '../../../../type'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '../../../../lib/sanity.client'
import { groq } from 'next-sanity'
import { concatStageData, getActivities } from '../../../../lib/strava'
import { GiMountainRoad, GiPathDistance, GiCalendar } from 'react-icons/gi'
import { IoMdBicycle } from 'react-icons/io'
import BottomStageNavigation from '../../../../components/norge-pa-langs/stagePage/BottomStageNavigation'
import NotFound from '../../../../components/NotFoundPage'
import { MapCard } from '../../../../components/norge-pa-langs/MapCard'
import { getHistoricalWeather } from '../../../../lib/weather'
import { BsCloudRain, BsClouds, BsCloudSun, BsSnow, BsSun, BsThermometer } from 'react-icons/bs'
import { WiStrongWind } from 'react-icons/wi'
import { PortableText } from '@portabletext/react'
import { RichTextComponents } from '../../../../components/RichTextComponents'
import { raleway } from '../../../../lib/fonts'

const builder = imageUrlBuilder(client)

interface StageProps {
  params: {
    slug: string
    stravaData: stravaData
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

export default async function StagePage({ params: { slug, stravaData } }: StageProps) {
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

  const weatherData = await getHistoricalWeather({
    lat: filteredStravaStage.start_latlng[0],
    long: filteredStravaStage.start_latlng[1],
    date: filteredStravaStage.date,
  })

  return (
    <div
      className={`${raleway.className} relative max-w-7xl mx-auto flex flex-col space-y-6 mb-40`}
    >
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
        <PortableText value={stage.description} components={RichTextComponents} />
        <h3 className="mx-auto text-3xl font-bold">{`Været i dag`}</h3>
        <div className="sm:text-xl flex flex-col space-y-2 sm:ml-12">
          <span className="flex flex-row items-center space-x-2">
            {weatherData.icon === 'rain' && <BsCloudRain />}
            {weatherData.icon === 'cloudy' && <BsClouds />}
            {weatherData.icon === 'snow' && <BsSnow />}
            {weatherData.icon === 'clear-day' && <BsSun />}
            {weatherData.icon === 'partly-cloudy-day' && <BsCloudSun />}
            <p className="italic">{`${weatherData.description}`}</p>
          </span>
          <span className="flex flex-row items-center space-x-2">
            <BsThermometer />
            <p>{`${weatherData.temperature}°C - føltes som ${weatherData.feelsLikeMin}°C`}</p>
          </span>
          <span className="flex flex-row items-center space-x-2">
            <WiStrongWind />
            <p>{`${weatherData.windspd}m/s, med kast oppe i ${weatherData.windgust}m/s`}</p>
          </span>
        </div>
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
