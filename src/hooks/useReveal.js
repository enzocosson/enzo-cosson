import { useContext, useEffect } from 'react'
import { ScrollRevealContext } from './ScrollRevealContext'

export function useReveal(ref) {
  const observer = useContext(ScrollRevealContext)

  useEffect(() => {
    const el = ref.current
    if (!observer || !el) return

    observer.observe(el)
    return () => observer.unobserve(el)
  }, [observer, ref])
}
