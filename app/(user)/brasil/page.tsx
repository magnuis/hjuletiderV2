import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'
import { client } from '../../../lib/sanity.client'

import Link from 'next/link'
import { raleway } from '../../../lib/fonts'

const builder = imageUrlBuilder(client)

export default function Page() {
  return (
    <div className={`flex flex-col space-y-6 w-full ${raleway.className}`}>
      <div className="relative h-96 mb-10">
        <Image
          priority
          className="absolute object-center object-cover top-0 h-full w-full opacity-100"
          src={builder
            .image(
              'https://cdn.sanity.io/images/14nn8v5u/production/bd787eb45b4bb21b7a5c8b31eed03f33d593014c-7837x3963.jpg'
            )
            .url()}
          alt={'Brasil'}
          sizes="100vw"
          fill
        />
      </div>
      <div className="max-w-7xl mx-auto px-10 flex flex-col space-y-8">
        <hr className="border-black" />
        <p className="text-5xl font-bold ">Brasil</p>
        <p>
          Høstsemesteret 2023 skal Magnus til Brasil på utveksling. Han skal gå på Universidade
          Federal de Santa Catarina, i byen Florioanopolis. Når han ikke studerer skal han reise
          rundt i Brasil, og kanskje også i andre land i Sør-Amerika. Her kan du følge med på turen,
          og se bilder og videoer derfra.
        </p>
        <p>
          Ønsker du å se mer om andre turer kan du gå tilbake til
          <Link href={'/'}>
            <span className="ml-1 underline text-blue-700">forsiden</span>
          </Link>
        </p>
      </div>
      <div className="mt-50"></div>
    </div>
  )
}
