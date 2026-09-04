import { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import Reveal from '../components/Reveal'
import Footer from '../components/Footer'
import HighlightText from '../components/HighlightText'
import { projects } from '../data'
import './Work.css'

const allThemes = ['Tous', ...new Set(projects.map((p) => p.theme).filter(Boolean))]

export default function Work() {
  const [activeTheme, setActiveTheme] = useState('Tous')

  const filteredProjects =
    activeTheme === 'Tous'
      ? projects
      : projects.filter((p) => p.theme === activeTheme)

  return (
    <Layout>
      <section className="work">
        <Reveal as="div" className="work__header">
          <div className="work__header-text">
            <span className="work__eyebrow">Portfolio</span>
            <Reveal as="h1" className="work__title">
              Work
            </Reveal>
            <p className="work__intro">
              Une sélection de projets personnels, académiques et
              professionnels qui illustrent mon approche du développement
              web.
            </p>
          </div>
        </Reveal>

        <div className="work__filters" role="group" aria-label="Filtrer par thématique">
          {allThemes.map((theme) => (
            <button
              key={theme}
              type="button"
              className={`work__filter ${activeTheme === theme ? 'work__filter--active' : ''}`}
              onClick={() => setActiveTheme(theme)}
              aria-pressed={activeTheme === theme}
            >
              {theme}
            </button>
          ))}
        </div>

        <div className="work__grid">
          {filteredProjects.map((project, index) => (
            <Reveal
              key={project.id}
              as="div"
              className="work-card__link"
              animation="scale"
              delay={index * 80}
            >
              <Link
                to={`/work/${project.id}`}
                className={`work-card ${project.featured ? 'work-card--featured' : ''}`}
                aria-label={`Voir le projet ${project.title}`}
                style={project.themeColor ? { '--project-theme': project.themeColor } : {}}
              >
                {project.featured && (
                  <span className="work-card__badge">Featured</span>
                )}
                {project.theme && (
                  <span
                    className="work-card__theme"
                    style={{ background: project.themeColor, color: '#fff' }}
                  >
                    {project.theme}
                  </span>
                )}
                <div className="work-card__image">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className="work-card__overlay">
                    {project.logo ? (
                      <img
                        src={project.logo}
                        alt={`Logo ${project.title}`}
                        className="work-card__logo"
                        loading="lazy"
                      />
                    ) : (
                      <span className="work-card__logo-text">{project.title}</span>
                    )}
                  </div>
                </div>
                <div className="work-card__meta">
                  <div className="work-card__head">
                    <h3 className="work-card__title">{project.title}</h3>
                    <p className="work-card__tags">
                      {project.tags} · {project.year}
                    </p>
                  </div>
                  <p className="work-card__desc">
                    <HighlightText text={project.description} />
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </Layout>
  )
}
