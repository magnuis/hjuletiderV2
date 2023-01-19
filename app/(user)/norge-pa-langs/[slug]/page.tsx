import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { Stage } from '../../../../type'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '../../../../lib/sanity.client'
import { groq } from 'next-sanity'

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

  return (
    <div className="relative max-w-7xl mx-auto flex flex-col space-y-6">
      <div className="relative w-full h-96 mb-10">
        <Image
          priority
          className="absolute object-center object-cover top-0 h-full w-full opacity-100"
          src={builder.image(stage.mainImage).url()}
          alt={stage.title}
          fill
        />
      </div>
      <div className="mx-10 flex flex-col space-y-8">
        {/* <hr className="border-black" /> */}
        <h1 className="text-5xl font-bold mx-auto">{stage.title}</h1>
        <hr className="border-black" />
        <div className="my-6 flex flex-col items-center sm:flex-row justify-between mx-10">
          <p>{'hastighet'}</p>
          <p>{'hastighet'}</p>
          <p>{'hastighet'}</p>
        </div>
      </div>
    </div>
  )
}
