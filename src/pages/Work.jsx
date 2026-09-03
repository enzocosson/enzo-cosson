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
            <Link
              key={project.id}
              to={`/work/${project.id}`}
              className="work-card__link"
              aria-label={`Voir le projet ${project.title}`}
              style={project.themeColor ? { '--project-theme': project.themeColor } : {}}
            >
              <Reveal
                as="article"
                className={`work-card ${project.featured ? 'work-card--featured' : ''}`}
                animation="scale"
                delay={index * 80}
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
              </Reveal>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </Layout>
  )
}
