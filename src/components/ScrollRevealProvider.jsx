import { useEffect, useState } from 'react'
import { ScrollRevealContext } from '../hooks/ScrollRevealContext'

const defaultOptions = {
  root: null,
  rootMargin: '0px 0px -10% 0px',
  threshold: 0.1,
}

export default function ScrollRevealProvider({ children }) {
  const [observer] = useState(() =>
    new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          obs.unobserve(entry.target)
        }
      })
    }, defaultOptions)
  )

  useEffect(() => {
    return () => observer.disconnect()
  }, [observer])

  return (
    <ScrollRevealContext.Provider value={observer}>
      {children}
    </ScrollRevealContext.Provider>
  )
}
