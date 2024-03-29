'use client'
import React from 'react'
import Hamburger from 'hamburger-react'

import Link from 'next/link'
import { raleway } from '../lib/fonts'
import { usePathname } from 'next/navigation'
import logo from './logo.png'

const MobileHeader = (): JSX.Element => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <div
      className={`fixed top-0 w-screen z-20 
       ${
         !isOpen ? 'h-16' : 'h-fit'
       } transition-all duration-500 p-6 bg-white bg-opacity-90 sm:hidden ${raleway.className}`}
    >
      <header className="relative">
        <div className="flex justify-between">
          <Link href={'/'}>
            {' '}
            <img className="h-8" src={logo.src} alt="logo" />
          </Link>

          {
            <div
              className="flex flex-row cursor-pointer"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <p>{isOpen ? 'Lukk' : 'Meny'}</p>
              <div className="-translate-y-2.5">
                <Hamburger toggled={isOpen} size={18} />
              </div>
            </div>
          }
        </div>

        {isOpen && <MobileMenu setIsOpen={setIsOpen} pathname={pathname} />}
      </header>
    </div>
  )
}

interface MobileMenuProps {
  setIsOpen: (isOpen: boolean) => void
  pathname: string | null
}
const MobileMenu = ({ setIsOpen, pathname }: MobileMenuProps): JSX.Element => {
  return (
    <div className={`${raleway.className}`}>
      <div className="flex flex-col gap-2">
        <Link
          onClick={() => setIsOpen(false)}
          className={`${pathname == '/' ? 'text-blue-600' : 'text-black'}  flex flex-row-reverse`}
          href={'/'}
        >
          Hjem
        </Link>
        <hr />
        <Link
          onClick={() => setIsOpen(false)}
          className={`${
            pathname == '/norge-pa-langs' ? 'text-blue-600' : 'text-black'
          }  flex flex-row-reverse`}
          href={'/norge-pa-langs'}
        >
          Norge på langs
        </Link>
        <hr />
        <Link
          onClick={() => setIsOpen(false)}
          className={`${
            pathname == '/south-america' ? 'text-blue-600' : 'text-black'
          }  flex flex-row-reverse`}
          href={'/south-america'}
        >
          Sør-Amerika
        </Link>
        <hr />
        <Link
          onClick={() => setIsOpen(false)}
          className={`${
            pathname == '/afrika' ? 'text-blue-600' : 'text-black'
          }  flex flex-row-reverse`}
          href={'/afrika'}
        >
          Afrika
        </Link>
        <Link
          onClick={() => setIsOpen(false)}
          className={`${
            pathname == '/bilder' ? 'text-blue-600' : 'text-black'
          }  flex flex-row-reverse`}
          href={'/bilder'}
        >
          Bilder
        </Link>
      </div>
    </div>
  )
}

export default MobileHeader
