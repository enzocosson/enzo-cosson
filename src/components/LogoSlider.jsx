import './LogoSlider.css'

const LOGOS = [
  { name: 'Capgemini', src: '/images/logo/Capgemini_Logo.svg', theme: 'capgemini', href: 'https://www.capgemini.com/' },
  { name: 'FDJ UNITED', src: '/images/logo/Logo-fdjunited-2025.svg', theme: 'fdj', href: 'https://www.fdj.fr/' },
  { name: 'DeepEdge', src: '/images/logo/logo-deepedge-svg.svg', theme: 'deepedge', href: 'https://deepedge.fr/' },
  { name: 'DrugOptimal', src: '/images/logo/logo-drugoptimal.png', theme: 'drugoptimal', href: 'https://www.drugoptimal.com/' },
]

export default function LogoSlider() {
  const items = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS]

  return (
    <section className="logo-slider" aria-label="Entreprises et projets">
      <p className="logo-slider__eyebrow">Ils m'ont fait confiance</p>
      <div className="logo-slider__track" aria-hidden="true">
        {items.map((logo, index) => (
          <a
            key={`${logo.name}-${index}`}
            href={logo.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`logo-slider__item ${logo.theme ? `logo-slider__item--${logo.theme}` : ''}`}
            aria-label={`Visiter le site de ${logo.name}`}
          >
            <img src={logo.src} alt={logo.name} loading="lazy" />
          </a>
        ))}
      </div>
    </section>
  )
}
