import { useEffect, useState } from 'react'

export function useScrollDirection() {
  const [scrollDir, setScrollDir] = useState('up')

  useEffect(() => {
    let lastScrollY = window.pageYOffset
    const updateScrollDir = () => {
      const scrollY = window.pageYOffset
      const dir = scrollY > lastScrollY ? 'down' : 'up'
      if (dir !== scrollDir && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDir(dir)
      }
      lastScrollY = scrollY > 0 ? scrollY : 0
    }
    window.addEventListener('scroll', updateScrollDir)
    return () => {
      window.removeEventListener('scroll', updateScrollDir)
    }
  }, [scrollDir])
  return scrollDir
}
