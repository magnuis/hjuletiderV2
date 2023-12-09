import SubRoute from './SubRoute'

import imageUrlBuilder from '@sanity/image-url'
import { client } from '../../lib/sanity.client'
import { raleway } from '../../lib/fonts'

const builder = imageUrlBuilder(client)

export default function SubRoutes() {
  return (
    <div className={`mx-10 ${raleway.className}`}>
      <span className="my-10 text-xl flex flex-col">
        <p className="font-bold mx-auto text-3xl sm:text-5xl">Livet er en reise</p>
        <br />
        <p>
          Hver og en av oss reiser på hver vår måte. Vi oppdager og opplever nye ting, med både
          gamle og nye bekjentskaper. På denne siden kan du følge med på min reise.
        </p>
        <br />
        <p>Bli med da vel!</p>
      </span>
      <hr className="border-black mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-8">
        <SubRoute
          href="/norge-pa-langs"
          imageUrl={builder
            .image(
              'https://cdn.sanity.io/images/14nn8v5u/production/c722327102b506b0852c8e37daa55bd4ffde6374-3024x2516.jpg'
            )
            .url()}
          name="Norge på langs"
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
        <SubRoute
          href="/south-america"
          imageUrl={builder
            .image(
              'https://cdn.sanity.io/images/14nn8v5u/production/bd787eb45b4bb21b7a5c8b31eed03f33d593014c-7837x3963.jpg'
            )
            .url()}
          name="Sør-Amerika"
        />
        <SubRoute
          href="/bilder"
          imageUrl={builder
            .image(
              'https://cdn.sanity.io/images/14nn8v5u/production/1b0e627b71c597b4c4834ca05d8e57a9e23b275f-3024x4032.jpg'
            )
            .url()}
          name="Bilder"
        />
      </div>
    </div>
  )
}
