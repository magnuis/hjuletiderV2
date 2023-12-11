'use client'
import Link from 'next/link'

import { usePathname } from 'next/navigation'
import { raleway } from '../lib/fonts'
import logo from './logo.png'

export default function WideHeader() {
  const pathname = usePathname()
  return (
    <div
      id="top"
      className={`fixed z-20 w-screen top-0
        transition-all duration-500 p-6 bg-white bg-opacity-90 hidden sm:block`}
    >
      <header className={`max-w-5xl mx-auto ${raleway.className}`}>
        <div className="flex flex-row justify-between tracking-wide">
          <Link href={'/'}>
            {' '}
            <img className="h-12" src={logo.src} alt="logo" />
          </Link>
          <div className="flex items-center gap-4">
            <Link className={`${pathname == '/' ? 'text-blue-600' : 'text-black'}`} href={'/'}>
              HJEM
            </Link>
            <Link
              className={`${
                pathname?.includes('/norge-pa-langs') ? 'text-blue-600' : 'text-black '
              }`}
              href={'/norge-pa-langs'}
            >
              NORGE PÅ LANGS
            </Link>
            <Link
              className={`${
                pathname?.includes('/south-america') ? 'text-blue-600' : 'text-black '
              } `}
              href={'/south-america'}
            >
              SØR-AMERIKA
            </Link>
            <Link
              className={`${pathname?.includes('/afrika') ? 'text-blue-600' : 'text-black '} `}
              href={'/afrika'}
            >
              AFRIKA
            </Link>
            <Link
              className={`${pathname?.includes('/bilder') ? 'text-blue-600' : 'text-black '} `}
              href={'/bilder'}
            >
              BILDER
            </Link>
          </div>
        </div>
      </header>
    </div>
  )
}
