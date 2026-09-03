import './LogoSlider.css'

const LOGOS = [
  { name: 'Capgemini', src: '/images/logo/Capgemini_Logo.svg', theme: 'capgemini' },
  { name: 'FDJ UNITED', src: '/images/logo/Logo-fdjunited-2025.svg', theme: 'fdj' },
  { name: 'DeepEdge', src: '/images/logo/logo-deepedge-svg.svg', theme: 'deepedge' },
  { name: 'DrugOptimal', src: '/images/logo/logo-drugoptimal.png', theme: 'drugoptimal' },
]

export default function LogoSlider() {
  const items = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS]

  return (
    <section className="logo-slider" aria-label="Entreprises et projets">
      <p className="logo-slider__eyebrow">Ils m'ont fait confiance</p>
      <div className="logo-slider__track" aria-hidden="true">
        {items.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className={`logo-slider__item ${logo.theme ? `logo-slider__item--${logo.theme}` : ''}`}
          >
            <img src={logo.src} alt={logo.name} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  )
}
