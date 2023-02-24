'use client'

import Link from 'next/link'
import { useScrollDirection } from '../hooks/UseScrollDirection'
import { FaBicycle } from 'react-icons/fa'
import { usePathname } from 'next/navigation'
import { inter } from '../lib/fonts'

export default function Header() {
  const scrollDir = useScrollDirection()
  const pathname = usePathname()
  return (
    <div
      className={`sticky z-10 ${
        scrollDir === 'down' ? '-top-30' : 'top-0'
      } h-30 transition-all duration-500 p-6 bg-white bg-opacity-50 `}
    >
      <header>
        <div className="flex flex-row justify-between text-xl">
          <Link href={'/'}>
            {' '}
            <FaBicycle className="text-gray-900 h-12 w-12" />
          </Link>
          <div className="flex items-center gap-2">
            <Link
              className={`${pathname == '/' ? 'text-blue-600' : 'text-black'} ${inter.className}`}
              href={'/'}
            >
              HJEM
            </Link>
            <Link
              className={`${
                pathname?.includes('/norge-pa-langs') ? 'text-blue-600' : 'text-black'
              }`}
              href={'/norge-pa-langs'}
            >
              NORGE PÅ LANGS
            </Link>
            <Link
              className={`${pathname?.includes('/afrika') ? 'text-blue-600' : 'text-black'}`}
              href={'/afrika'}
            >
              AFRIKA
            </Link>
            <Link
              className={`${pathname?.includes('/brasil') ? 'text-blue-600' : 'text-black'}`}
              href={'/brasil'}
            >
              BRASIL
            </Link>
          </div>
        </div>
      </header>
    </div>
  )
}
