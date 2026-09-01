import './InlineCompanyLogos.css'

const LOGOS = {
  Capgemini: { src: '/images/capgemini.png', alt: 'Capgemini' },
  'FDJ UNITED': { src: '/images/fdj-mini-logo.png', alt: 'FDJ UNITED' },
}

export default function InlineCompanyLogos({ text, className = '' }) {
  const parts = text.split(/(Capgemini|FDJ UNITED)/g)

  return (
    <span className={className}>
      {parts.map((part, index) => {
        const logo = LOGOS[part]
        if (logo) {
          return (
            <span key={index} className="inline-logo">
              {part}
              <img
                src={logo.src}
                alt={logo.alt}
                className="inline-logo__img"
                loading="lazy"
              />
            </span>
          )
        }
        return <span key={index}>{part}</span>
      })}
    </span>
  )
}
