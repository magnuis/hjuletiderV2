'use client'

import Link from 'next/link'
import { useScrollDirection } from '../hooks/UseScrollDirection'
import { FaBicycle } from 'react-icons/fa'

export default function Header() {
  const scrollDir = useScrollDirection()
  return (
    <div
      className={`sticky z-10 ${
        scrollDir === 'down' ? '-top-20' : 'top-0'
      } h-20transition-all duration-500 flex items-center p-6`}
    >
      <header>
        <div className="">
          <Link href={'/'}>
            {' '}
            <FaBicycle className="text-gray-900 h-12 w-12" />
          </Link>
        </div>
      </header>
    </div>
  )
}
