import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'

export default function Reveal({
  children,
  as: Component = 'div',
  className = '',
  animation = 'up',
  delay = 0,
  ...props
}) {
  const ref = useRef(null)
  useReveal(ref)

  const style = delay ? { transitionDelay: `${delay}ms` } : undefined

  return (
    <Component
      ref={ref}
      className={`${className} reveal-${animation}`.trim()}
      style={style}
      data-reveal
      {...props}
    >
      {children}
    </Component>
  )
}
