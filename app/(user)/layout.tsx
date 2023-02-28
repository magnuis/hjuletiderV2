'use client'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import Footer from '../../components/footer'
import WideHeader from '../../components/Header'
import MobileHeader from '../../components/MobileHeader'
import '../../styles/globals.css'

export const useScrollToTop = () => {
  const pathname = usePathname()

  useEffect(() => window.scroll(0, 0), [pathname])

  return null
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useScrollToTop()
  return (
    <html>
      <body>
        <WideHeader />
        <MobileHeader />
        <div className="mt-16 sm:mt-24">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
