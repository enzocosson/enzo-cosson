import './CV.css'
import { profile } from '../data'

export default function CV() {
  return (
    <div className="cv">
      <aside className="cv__sidebar">
        <div className="cv__photo">
          <img src="/images/photo-de-profile.PNG" alt={profile.name} />
        </div>
        <h1 className="cv__name">{profile.name}</h1>
        <p className="cv__role">Développeur Fullstack React / Node.js</p>

        <section className="cv__block">
          <h2 className="cv__block-title">Contact</h2>
          <ul className="cv__contact-list">
            <li><span>📍</span> {profile.location}</li>
            <li><span>📧</span> {profile.email}</li>
            <li><span>📱</span> {profile.phone}</li>
            <li><span>🔗</span> linkedin.com/in/enzo-cosson</li>
            <li><span>💻</span> github.com/enzocosson</li>
          </ul>
        </section>

        <section className="cv__block">
          <h2 className="cv__block-title">Compétences</h2>
          <div className="cv__skills">
            <span>React.js</span>
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>WebSocket</span>
            <span>Python</span>
            <span>Tailwind</span>
            <span>Sass</span>
            <span>Three.js</span>
            <span>Stripe</span>
            <span>Docker</span>
            <span>Git</span>
            <span>Figma</span>
          </div>
        </section>

        <section className="cv__block">
          <h2 className="cv__block-title">Langues</h2>
          <ul className="cv__list">
            <li>Français — langue maternelle</li>
            <li>Anglais — professionnel</li>
          </ul>
        </section>

        <section className="cv__block">
          <h2 className="cv__block-title">Intérêts</h2>
          <ul className="cv__list">
            <li>Trading & finance quantitative</li>
            <li>Data visualization / WebGL</li>
            <li>Entrepreneuriat SaaS</li>
          </ul>
        </section>
      </aside>

      <main className="cv__main">
        <section className="cv__section">
          <h2 className="cv__section-title">Profil</h2>
          <p className="cv__profile">Développeur fullstack diplômé d'un Master, avec 4 ans d'alternance dont 2 ans chez Capgemini en mission FDJ UNITED. Créateur de DeepEdge, SaaS analytics pour options traders (900+ utilisateurs). Recherche un CDI sur des projets complexes React / Node.js.</p>
        </section>

        <div className="cv__two-col">
          <section className="cv__section">
            <h2 className="cv__section-title">Expérience</h2>

            <article className="cv__entry">
              <div className="cv__entry-header">
                <div className="cv__entry-logo"><img src="/images/experience/capgemini.png" alt="Capgemini" /></div>
                <div>
                  <h3 className="cv__entry-title">Développeur fullstack React.js</h3>
                  <p className="cv__entry-meta">Capgemini · mission FDJ UNITED · 2024 – 2026 · Paris</p>
                </div>
              </div>
              <p className="cv__entry-desc">Développement de l'interface « Compte Joueur » FDJ : fonctionnalités, corrections, refactoring, évolutions back-end. Collaboration agile avec PO, QA et développeurs.</p>
              <p className="cv__entry-stack">React.js · Redux · Node.js · Figma · Directus · GitLab · Jira</p>
            </article>

            <article className="cv__entry">
              <div className="cv__entry-header">
                <div className="cv__entry-logo"><img src="/images/experience/deepedge.png" alt="DeepEdge" /></div>
                <div>
                  <h3 className="cv__entry-title">Founder & CEO</h3>
                  <p className="cv__entry-meta">DeepEdge · SaaS analytics trading · depuis 2024 · Remote</p>
                </div>
              </div>
              <p className="cv__entry-desc">Terminal SaaS pour options traders : GEX Levels, Multi-Greek analysis, Live Signals, Market Terminal, 3D IV Smile Surface, extension Chrome TradingView.</p>
              <p className="cv__entry-stack">React · Node.js · Express · MongoDB · WebSocket · Python · Stripe · Tailwind</p>
            </article>

            <article className="cv__entry">
              <div className="cv__entry-header">
                <div className="cv__entry-logo"><img src="/images/experience/drugoptimal.png" alt="DrugOptimal" /></div>
                <div>
                  <h3 className="cv__entry-title">Développeur front-end / fullstack</h3>
                  <p className="cv__entry-meta">DrugOptimal · e-santé · 2022 – 2024 · Paris</p>
                </div>
              </div>
              <p className="cv__entry-desc">Application React de prévention des incompatibilités médicamenteuses avec recommandations IA / LLM.</p>
              <p className="cv__entry-stack">React · TypeScript · SCSS · IA / LLM / Python</p>
            </article>
          </section>

          <div className="cv__col-right">
            <section className="cv__section">
              <h2 className="cv__section-title">Formation</h2>
              <div className="cv__formations">
                <div className="cv__formation">
                  <img src="/images/ecole/iim.png" alt="IIM" />
                  <div>
                    <h3 className="cv__entry-title">Master — Développeur Full Stack</h3>
                    <p className="cv__entry-meta">IIM Digital School · 2024 – 2026</p>
                  </div>
                </div>
                <div className="cv__formation">
                  <img src="/images/ecole/iut%20troyes.png" alt="IUT Troyes" />
                  <div>
                    <h3 className="cv__entry-title">BUT, MMI spé. développement web</h3>
                    <p className="cv__entry-meta">IUT Troyes · 2021 – 2024</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="cv__section">
              <h2 className="cv__section-title">Projets</h2>
              <ul className="cv__projects">
                <li><strong>DeepEdge</strong> — SaaS analytics trading</li>
                <li><strong>Tradify</strong> — Dashboard portefeuille trader</li>
                <li><strong>FDJ UNITED — Compte Joueur</strong> — Interface React mission client</li>
                <li><strong>DrugOptimal</strong> — Application e-santé IA / LLM</li>
                <li><strong>Ferrari Daytona SP3</strong> — Vitrine 3D interactive</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
