import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'
import { client } from '../../../lib/sanity.client'

import Link from 'next/link'
import { raleway } from '../../../lib/fonts'

const builder = imageUrlBuilder(client)

export default function Page() {
  return (
    <div className={`flex flex-col space-y-6 ${raleway.className}`}>
      <div className="relative h-96 mb-10">
        <Image
          priority
          sizes="100vw"
          className="absolute object-center object-cover top-0 h-full w-full opacity-100"
          src={builder
            .image(
              'https://cdn.sanity.io/images/14nn8v5u/production/f400482085e4a94708bc2f23b33ffc77c0cb6c2e-4032x3024.jpg'
            )
            .url()}
          alt={'Rafting på Nilen'}
          fill
        />
      </div>
      <div className="max-w-5xl mx-auto px-10 flex flex-col space-y-8">
        <hr className="border-black" />
        <p className="text-5xl font-bold ">Afrika</p>
        <p>
          Fra januar 2020 og fram til Covid-19s inntog i Norge reiste Magnus gjennom Afrika. Turen
          startet i Kenya, med ti dager på et barnehjem. Deretter gikk turen hele veien ned til
          Sør-Afrika, via Rwanda, Uganda, Tanzania, Malawi, Zambia og Zimbabwe. Denne siden skal gi
          deg et innblikk i turen - så fort Magnus finner tid til å gjøre det.{' '}
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
