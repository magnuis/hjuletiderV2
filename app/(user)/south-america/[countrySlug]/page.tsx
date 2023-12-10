import { Country, Post } from '../../../../type'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '../../../../lib/sanity.client'
import { groq } from 'next-sanity'
import NotFound from '../../../../components/NotFoundPage'
import { raleway } from '../../../../lib/fonts'
import { PortableText } from '@portabletext/react'
import { RichTextComponents } from '../../../../components/RichTextComponents'
import { IoIosResize } from 'react-icons/io'
import { FaRegLightbulb } from 'react-icons/fa'
import { getCountryByName } from '../../../../lib/country'
import { GiCapitol } from 'react-icons/gi'
import { IoChatbubbleOutline, IoPeopleOutline } from 'react-icons/io5'
import Link from 'next/link'
import PostNavCard from '../../../../components/south-america/PostNavCard'

const builder = imageUrlBuilder(client)

interface CountryProps {
  params: {
    countrySlug: string
  }
}

export async function generateStaticParams() {
  const query = groq`
*[_type=='country']{
  slug
}`

  const slugs: Country[] = await client.fetch(query)
  const slugRoutes = slugs.map((slug) => slug.slug.current)

  return slugRoutes.map((countrySlug) => ({
    countrySlug,
  }))
}

export default async function CountryPage({ params: { countrySlug } }: CountryProps) {
  const query = groq`
    *[_type=='country' && slug.current == $countrySlug][0] {
        ...,
        posts[] -> {
            ...,
        }
    }`
  const country: Country = await client.fetch(query, { countrySlug })

  if (!country) {
    return (
      <div className="relative max-w-7xl mx-auto ">
        <NotFound />
      </div>
    )
  }
  const geoData = await getCountryByName(country.englishName)
  const sizeToNorwayRatio = Math.round((country.areal / 385207) * 10) / 10
  return (
    <div className={`${raleway.className} relative max-w-7xl mx-auto flex flex-col space-y-6 `}>
      <div className="relative w-full h-96">
        <img
          className="absolute object-center object-cover top-0 h-full w-full opacity-100"
          src={builder.image(country.landscape).width(1000).url()}
          alt={country.title}
          sizes="100vw"
        />
      </div>
      <div className="mx-10 flex flex-col md:space-y-8 ">
        <h1 className="text-5xl font-bold mx-auto md:mt-16">{country.title}</h1>
        <div className="md:mt-3">
          <div className="flex flex-col float-right mb-5 md:ml-8">
            <div className="flex flex-col space-y-2 md:border-black md:border p-3 max-w-[385px]">
              <div className="max-w-[100px] max-h-[100px] mx-auto mb-4 md:mb-0">
                <img
                  src={builder.image(country.mainImage).width(600).format('webp').url()}
                  alt={country.title}
                  className="w-full h-full max-h-[100px] object-contain"
                />
              </div>

              <span className="border-t-black border-t pt-2 flex flex-row items-center space-x-2">
                <GiCapitol />
                <p>{`Hovedstad: ${geoData.capital}`}</p>
              </span>
              <span className="border-t-black border-t pt-2 flex flex-row items-center space-x-2">
                <IoPeopleOutline />
                <p>{`Befolkning: ${
                  Math.round((geoData.population / 1000000) * 100) / 100
                } millioner`}</p>
              </span>
              <span className="flex flex-row items-center space-x-2">
                <IoChatbubbleOutline />
                <p>{`Språk: ${country.languages}`}</p>
              </span>
              <span className="flex flex-row items-center space-x-2">
                <IoIosResize />
                <p>{`${sizeToNorwayRatio} ganger større enn Norge`}</p>
              </span>
              <span className="flex flex-row items-center space-x-2">
                <FaRegLightbulb />
                <p>{`${country.randomFact}`}</p>
              </span>
            </div>
          </div>
          <p className="text-lg md:text-xl mb-8">{country.description}</p>
          <PortableText value={country.body} components={RichTextComponents} />
          {country.posts && (
            <div
              className={`mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 gap-y-16 pb-24 ${raleway.className}`}
            >
              {country.posts.map((post: Post) => (
                <Link
                  key={post._id}
                  href={`south-america/${country.slug.current}/${post.slug.current}`}
                >
                  <PostNavCard post={post} />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
