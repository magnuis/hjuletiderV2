import imageUrlBuilder from '@sanity/image-url'
import { groq } from 'next-sanity'
import Image from 'next/image'
import StageCard from '../../../components/StageCard'
import { client } from '../../../lib/sanity.client'
import { Stage } from '../../../type'
import { inter } from '../../../lib/fonts'
import Link from 'next/link'

const builder = imageUrlBuilder(client)

export default async function Page() {
  const query = groq`
*[_type=='stage'] {
...,
} | order(dayNo asc)`

  const stages = await client.fetch(query)

  return (
    <div className="flex flex-col space-y-6">
      <div className="relative h-96 mb-10">
        <Image
          priority
          className="absolute object-center object-cover top-0 h-full w-full opacity-100"
          src={builder
            .image(
              'https://cdn.sanity.io/images/14nn8v5u/production/c722327102b506b0852c8e37daa55bd4ffde6374-3024x2516.jpg'
            )
            .url()}
          alt={'Framme på Lindesnes'}
          fill
        />
      </div>
      <div className="max-w-7xl mx-auto flex flex-col space-y-8 px-10">
        <hr className="border-black" />
        <span className={`${inter.className} text-lg lg:text-xl`}>
          <p className="text-5xl font-bold ">Norge på langs</p>
          <br />
          <p>
            Sommeren 2022 syklet vi Norge på langs! I løpet av 25 dager syklet vi over 2700 km, og
            fikk kjenne på alt det en Norge-sommer har å by på av vær og vind. Vi full storm over
            Kvænangsfjellet, plaskregn i Foldereid og strålende sol i Dølemo. Det var til tider både
            fysisk og mentalt hardt, men sammen kom vi oss hele veien fra Nordkapp til Lindesnes.
            Dette var virkelig en opplevelse for livet! Under kan du klikke deg inn på de ulike
            etappene for å lese mer om de ulike etappene.{' '}
          </p>
          <br />
          <span className="flex flex-row">
            <p>
              Inne på hver etappe kan du se ruta for den aktuelle dagen. Dersom du ønsker å se hele
              ruta kan du heller sjekke ut
              <Link href={`norge-pa-langs/ruta`}>
                <span className="ml-1 underline text-blue-700">dette kartet</span>
              </Link>
            </p>
          </span>
        </span>
        <hr className="border-black" />
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 gap-y-16 pb-24 ${inter.className}`}>
          {stages.map((stage: Stage) => (
            <Link key={stage._id} href={`norge-pa-langs/${stage.slug.current}`}>
              <StageCard stage={stage} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
