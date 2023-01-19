import SubRoute from './SubRoute'

import imageUrlBuilder from '@sanity/image-url'
import { client } from '../../lib/sanity.client'

const builder = imageUrlBuilder(client)
export default function SubRoutes() {
  return (
    <div className="mx-10">
      <hr className="border-black mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-8">
        <SubRoute
          href="/norge-pa-langs"
          imageUrl={builder
            .image(
              'https://cdn.sanity.io/images/14nn8v5u/production/f73e8299581b455b9a1d83764d4d2939160b34d5-3024x4032.jpg'
            )
            .url()}
          name="Norge på langs"
        />
        <SubRoute
          href="/mindre-turer"
          imageUrl={builder
            .image(
              'https://cdn.sanity.io/images/14nn8v5u/production/1b0e627b71c597b4c4834ca05d8e57a9e23b275f-3024x4032.jpg'
            )
            .url()}
          name="Mindre turer"
        />
        <SubRoute
          href="/afrika"
          imageUrl={builder
            .image(
              'https://cdn.sanity.io/images/14nn8v5u/production/106cc53733f83b98bc037f7621b42cb5951c6873-4272x2848.jpg'
            )
            .url()}
          name="Afrika"
        />
      </div>
    </div>
  )
}
