import './CV.css'
import { profile, socialLinks } from '../data'

const iconProps = {
  width: 14,
  height: 14,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

const Icon = {
  location: (
    <svg {...iconProps}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  mail: (
    <svg {...iconProps}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  ),
  phone: (
    <svg {...iconProps}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  ),
  linkedin: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  ),
  github: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  ),
  instagram: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
}

const languages = [
  { name: 'Français', level: 100 },
  { name: 'Anglais', level: 80 },
]

const projects = [
  {
    name: 'DeepEdge',
    type: 'SaaS analytics trading',
    description:
      'Terminal SaaS pour options traders : visualisation avancée des GEX Levels, analyse Multi-Greek, Live Signals, 3D IV Smile Surface et extension Chrome TradingView. 900+ utilisateurs inscrits.',
  },
  {
    name: 'FDJ UNITED — Compte Joueur',
    type: 'Mission client React.js',
    description:
      'Développement fullstack de l\'interface « Compte Joueur » de la FDJ : nouvelles fonctionnalités, corrections, refactoring et évolutions back-end dans une équipe agile.',
  },
  {
    name: 'Tradify',
    type: 'Dashboard portefeuille trader',
    description:
      'Plateforme de suivi et d\'analyse de portefeuille pour traders : dashboard interactif, visualisation des performances et données de marché en temps réel.',
  },
  {
    name: 'DrugOptimal',
    type: 'Application e-santé IA / LLM',
    description:
      'Application React de prévention des incompatibilités médicamenteuses avec recommandations générées par IA / LLM et modèles Python.',
  },
]

const expertise = [
  { name: 'React / Next.js', level: 95 },
  { name: 'Node.js / Express', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Python', level: 80 },
  { name: 'MongoDB / SQL', level: 75 },
  { name: 'Docker / DevOps', level: 65 },
]

const experiences = [
  {
    role: 'Développeur fullstack React.js',
    company: 'FDJ UNITED — mission client via Capgemini',
    date: '2024 – 2026 · Paris',
    description:
      'Développement de l\'interface « Compte Joueur » FDJ : nouvelles fonctionnalités, corrections, refactoring et évolutions back-end. Collaboration agile avec PO, QA et développeurs.',
  },
  {
    role: 'Développeur fullstack en alternance',
    company: 'Capgemini — missions internes',
    date: '2024 – 2026 · Paris',
    description:
      'Contrat d\'apprentissage dans le cadre du Master. Missions internes en développement web et mobile, puis mission en régie de près de 2 ans chez FDJ UNITED.',
  },
  {
    role: 'Founder & CEO',
    company: 'DeepEdge · SaaS analytics trading',
    date: '2024 – aujourd\'hui · Remote',
    description:
      'Terminal SaaS pour options traders : GEX Levels, Multi-Greek analysis, Live Signals, Market Terminal, 3D IV Smile Surface et extension Chrome TradingView. 900+ utilisateurs inscrits.',
  },
  {
    role: 'Développeur front-end / fullstack',
    company: 'DrugOptimal · e-santé',
    date: '2022 – 2024 · Paris',
    description:
      'Application React de prévention des incompatibilités médicamenteuses avec recommandations IA / LLM. Focus UX, performance et intégration de modèles Python.',
  },
]


function ProgressBar({ label, level }) {
  return (
    <div className="cv__bar">
      <span className="cv__bar-label">{label}</span>
      <div className="cv__bar-track">
        <div className="cv__bar-fill" style={{ width: `${level}%` }} />
      </div>
    </div>
  )
}

export default function CV() {
  return (
    <div className="cv">
      <aside className="cv__sidebar">
        <div className="cv__photo">
          <img src="/images/photo-de-profile.PNG" alt={profile.name} />
        </div>

        <div className="cv__identity">
          <h1 className="cv__name">{profile.name}</h1>
          <p className="cv__role">Développeur Fullstack React / Node.js</p>
          <div className="cv__social">
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              {Icon.linkedin}
            </a>
            <a href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              {Icon.github}
            </a>
            <a href={socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              {Icon.instagram}
            </a>
          </div>
        </div>

        <section className="cv__block cv__block--divided">
          <h2 className="cv__block-title">Contact</h2>
          <ul className="cv__contact-list cv__contact-list--divided">
            <li>
              <span className="cv__contact-label">Email</span>
              <span className="cv__contact-value">{profile.email}</span>
            </li>
            <li>
              <span className="cv__contact-label">Phone</span>
              <span className="cv__contact-value">{profile.phone}</span>
            </li>
            <li>
              <span className="cv__contact-label">Address</span>
              <span className="cv__contact-value">{profile.location}</span>
            </li>
          </ul>
        </section>

        <section className="cv__block cv__block--divided">
          <h2 className="cv__block-title">Langues</h2>
          <div className="cv__bars">
            {languages.map((lang) => (
              <ProgressBar key={lang.name} label={lang.name} level={lang.level} />
            ))}
          </div>
        </section>
      </aside>

      <main className="cv__main">
        <section className="cv__section">
          <h2 className="cv__section-title">Profil</h2>
          <p className="cv__profile">
            Développeur fullstack diplômé d'un Master, avec 4 ans d'alternance dont 2 ans chez
            Capgemini en mission FDJ UNITED. Créateur de DeepEdge, SaaS analytics pour options
            traders comptant plus de 900 utilisateurs. Recherche un CDI sur des projets complexes
            React / Node.js.
          </p>
        </section>

        <section className="cv__section">
          <h2 className="cv__section-title">Expérience</h2>
          {experiences.map((exp) => (
            <article className="cv__entry" key={exp.role + exp.date}>
              <div className="cv__entry-col cv__entry-col--left">
                <h3 className="cv__entry-title">{exp.role}</h3>
                <p className="cv__entry-date">{exp.date}</p>
                <p className="cv__entry-company">{exp.company}</p>
              </div>
              <div className="cv__entry-col cv__entry-col--right">
                <p className="cv__entry-desc">{exp.description}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="cv__section">
          <h2 className="cv__section-title">Projets</h2>
          {projects.map((project) => (
            <article className="cv__entry cv__entry--project" key={project.name}>
              <div className="cv__entry-col cv__entry-col--left">
                <h3 className="cv__entry-title">{project.name}</h3>
                <p className="cv__entry-company">{project.type}</p>
              </div>
              <div className="cv__entry-col cv__entry-col--right">
                <p className="cv__entry-desc">{project.description}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="cv__section">
          <h2 className="cv__section-title">Expertise</h2>
          <div className="cv__expertise-grid">
            {expertise.map((skill) => (
              <ProgressBar key={skill.name} label={skill.name} level={skill.level} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
