'use client'

import Link from 'next/link'

import { usePathname } from 'next/navigation'
import { GiEarthAfricaEurope } from 'react-icons/gi'
import { inter } from '../lib/fonts'

export default function WideHeader() {
  const pathname = usePathname()
  return (
    <div
      id="top"
      className={`fixed z-10 w-screen -translate-y-24
        transition-all duration-500 p-6 bg-white bg-opacity-90 hidden sm:block`}
    >
      <header className="max-w-7xl mx-auto">
        <div className="flex flex-row justify-between text-xl">
          <Link href={'/'}>
            {' '}
            <GiEarthAfricaEurope className="text-gray-900 h-12 w-12" />
          </Link>
          <div className="flex items-center gap-4">
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
