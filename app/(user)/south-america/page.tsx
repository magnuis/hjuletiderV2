import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'
import { client } from '../../../lib/sanity.client'

import Link from 'next/link'
import { raleway } from '../../../lib/fonts'

import brazil from './assets/br'
import peru from './assets/pe'
import Brazil from './assets/br'
import Peru from './assets/pe'
import Argentina from './assets/ar'
import Bolivia from './assets/bo'
import Uruguay from './assets/uy'

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
        <span className="text-center w-full">
          <p className="text-5xl font-bold ">Sør-Amerika</p>
        </span>
        <p>
          Høstsemesteret 2023 har Magnus vært på utveksling i Brasil. Han skal gikk på Universidade
          Federal de Santa Catarina, i byen Florioanópolis. Etter endt semester bærer ferden gjennom
          Chile, Bolivia og Peru, før et nytt semester starter i Barcelona. Her kan du se noe av
          opplevelsene fra et halvår i Sør-Amerika!
        </p>
        <p>
          Ønsker du å se mer om andre turer kan du gå tilbake til
          <Link href={'/'}>
            <span className="ml-1 underline text-blue-700">forsiden</span>
          </Link>
        </p>
        <div className="group flex flex-row">
          <Brazil scaledHeight={150} />
          <span className="flex flex-col ">
            <h2 className="group-hover:scale-105 font-semibold text-xl">Brasil</h2>
            <p className="group-hover:scale-105">Et land med dårlig mat</p>
          </span>
        </div>
        <Peru scaledHeight={150} />
        <Argentina scaledHeight={150} />
        <Bolivia scaledHeight={150} />
        <Uruguay scaledHeight={150} />

        <div className="max-w-96 max-h-96"></div>
      </div>
    </div>
  )
}
