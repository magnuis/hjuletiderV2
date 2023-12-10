import { Country, Post } from '../../../../../type'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '../../../../../lib/sanity.client'
import { groq } from 'next-sanity'
import NotFound from '../../../../../components/NotFoundPage'
import { raleway } from '../../../../../lib/fonts'
import { PortableText } from '@portabletext/react'
import { RichTextComponents } from '../../../../../components/RichTextComponents'
import { useRouter } from 'next/navigation'
import StageGallery from '../../../../../components/norge-pa-langs/stagePage/StageGallery'
import Link from 'next/link'

const builder = imageUrlBuilder(client)

export async function generateStaticParams() {
  const query = groq`
  *[_type=='country']{
    slug,
    posts[] -> {
      slug
    }
  }`
  const countries: Country[] = await client.fetch(query)
  const countryRoutesList: { slug: string; post: string }[] = []
  countries.forEach((country) => {
    if (country.posts) {
      country.posts.forEach((post) => {
        countryRoutesList.push({
          slug: country.slug.current,
          post: post.slug.current,
        })
      })
    }
  })

  const a = countryRoutesList.map((routes) => ({
    slug: routes.slug,
    post: routes.post,
  }))

  return countryRoutesList.map((routes) => ({
    countrySlug: routes.slug,
    postSlug: routes.post,
  }))
}

export default async function CountryPage({
  params,
}: {
  params: { countrySlug: string; postSlug: string }
}) {
  const { countrySlug, postSlug } = params
  const query = groq`
    *[_type=='post' && slug.current == $postSlug][0] {
        ...,
        posts[] -> {
            ...,
        }
    }`
  const post: Post = await client.fetch(query, { postSlug })

  if (!post) {
    return (
      <div className="relative max-w-7xl mx-auto ">
        <NotFound />
      </div>
    )
  }
  return (
    <div className={`${raleway.className} relative max-w-7xl mx-auto flex flex-col space-y-6 `}>
      <div className="relative w-full h-96">
        <img
          className="absolute object-center object-cover top-0 h-full w-full opacity-100"
          src={builder.image(post.mainImage).url()}
          alt={post.title}
          sizes="100vw"
        />
      </div>
      <div className="mx-10 flex flex-col ">
        <h1 className="text-5xl font-bold mx-auto md:mt-12">{post.title}</h1>
        <Link
          href={`south-america/${countrySlug}`}
          className="float-left md:-translate-y-5 trans mt-2 md:mt-0 underline italic text-blue-700"
        >
          <p>Tilbake</p>
        </Link>
        <div className="mt-3">
          <PortableText value={post.body} components={RichTextComponents} />
        </div>
      </div>
      <StageGallery images={post.images} />
    </div>
  )
}
