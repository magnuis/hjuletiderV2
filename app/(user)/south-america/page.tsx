import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'
import { client } from '../../../lib/sanity.client'

import Link from 'next/link'
import { raleway } from '../../../lib/fonts'
import { groq } from 'next-sanity'
import { Country } from '../../../type'
import CountryNavCard from '../../../components/south-america/CountryNavCard'

const builder = imageUrlBuilder(client)

export default async function Page() {
  const query = groq`
  *[_type=='country' && references(*[_type == 'continent' && continent == "Sør-Amerika"]._id)] {
    ...,
    continent -> {
      continent
    }
  } | order(title asc)`

  const countries: Country[] = await client.fetch(query)

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
        <p className="md:text-lg">
          Høstsemesteret 2023 har Magnus vært på utveksling i Brasil. Han skal gikk på Universidade
          Federal de Santa Catarina, i byen Florioanópolis. Etter endt semester bærer ferden gjennom
          Chile, Bolivia og Peru, før et nytt semester starter i Barcelona. Her kan du se noe av
          opplevelsene fra et halvår i Sør-Amerika!
        </p>
        <p className="md:text-lg">
          Ønsker du å se mer om andre turer kan du gå tilbake til
          <Link href={'/'}>
            <span className="ml-1 underline text-blue-700">forsiden</span>
          </Link>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-x-14">
          {countries.map((country: Country) => (
            <Link href={`south-america/${country.slug.current}`} key={country._id}>
              <CountryNavCard country={country} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
