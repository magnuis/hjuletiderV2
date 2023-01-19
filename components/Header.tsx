'use client'

import Link from 'next/link'
import { useScrollDirection } from '../hooks/UseScrollDirection'
import { FaBicycle } from 'react-icons/fa'
import { usePathname } from 'next/navigation'

export default function Header() {
  const scrollDir = useScrollDirection()
  const pathname = usePathname()
  return (
    <div
      className={`sticky z-10 ${
        scrollDir === 'down' ? '-top-20' : 'top-0'
      } h-20transition-all duration-500 p-6 bg-white bg-opacity-25 mb`}
    >
      <header>
        <div className="flex flex-row justify-between">
          <Link href={'/'}>
            {' '}
            <FaBicycle className="text-gray-900 h-12 w-12" />
          </Link>
          <div className="flex items-center gap-2">
            <Link className={`${pathname == '/' ? 'text-yellow-500' : 'text-black'}`} href={'/'}>
              Home
            </Link>
            <Link
              className={`${
                pathname?.includes('/norge-pa-langs') ? 'text-yellow-500' : 'text-black'
              }`}
              href={'/norge-pa-langs'}
            >
              Norge på langs
            </Link>
            <Link
              className={`${pathname?.includes('/afrika') ? 'text-yellow-500' : 'text-black'}`}
              href={'/afrika'}
            >
              Afrika
            </Link>
            <Link
              className={`${
                pathname?.includes('/mindre-turer') ? 'text-yellow-500' : 'text-black'
              }`}
              href={'/mindre-turer'}
            >
              Mindre turer
            </Link>
          </div>
        </div>
      </header>
    </div>
  )
}
