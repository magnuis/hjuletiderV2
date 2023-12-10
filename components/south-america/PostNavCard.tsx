import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '../../lib/sanity.client'
import { Post } from '../../type'

const builder = imageUrlBuilder(client)

interface PostNavCardProps {
  post: Post
}

export default function PostNavCard({ post }: PostNavCardProps) {
  return (
    <div className="flex flex-col group cursor-pointer">
      <div className="relative w-full h-80 group-hover:scale-105 transition-transform duration-200 ease-out">
        <Image
          src={builder.image(post.mainImage).url()}
          alt={post.title}
          className="object-cover object-left lg:object-center"
          fill
          sizes="60vw"
        />
      </div>
      <div className="mt-5 flex-1">
        <p className="underline text-xl 2xl:text-2xl font-bold">{post.title}</p>
        <p className="line-clamp-2 text-gray-500 text-lg 2xl:text-xl">{post.shortDesc}</p>
      </div>
      <p className="flex items-center mt-5 font-bold group-hover:underline text-lg 2xl:text-xl">
        Les mer <ArrowUpRightIcon className="ml-2 h-4 w-4 " />
      </p>
    </div>
  )
}