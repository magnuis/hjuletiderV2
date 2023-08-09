import Image from 'next/image'
import Link from 'next/link'

interface SubRouteProps {
  name: string
  href: string
  imageUrl: string
}
export default function SubRoute(props: SubRouteProps) {
  return (
    <Link href={props.href}>
      <div className="relative w-full h-80 hover:scale-105 transition-transform duration-200 ease-out first-letter first-letter">
        <Image
          src={props.imageUrl}
          alt={props.name}
          className="object-cover object-center lg:object-center w-full h-full"
          fill
          sizes="60vw"
        />
        <div className="absolute bottom-0 w-full text-white p-5">
          <p>{props.name}</p>
        </div>
      </div>
    </Link>
  )
}
