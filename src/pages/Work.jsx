import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import Reveal from '../components/Reveal'
import Footer from '../components/Footer'
import { projects } from '../data'
import './Work.css'

export default function Work() {
  return (
    <Layout>
      <section className="work">
        <Reveal as="h1" className="work__title">
          Work
        </Reveal>

        <div className="work__grid">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/work/${project.id}`}
              className="work-card__link"
              aria-label={`Voir le projet ${project.title}`}
            >
              <Reveal
                as="article"
                className={`work-card work-card--${project.id}`}
                animation="scale"
                delay={index * 100}
              >
                <div className="work-card__image">
                  <img src={project.image} alt={project.title} loading="lazy" />
                </div>
                <div className="work-card__meta">
                  <h3 className="work-card__title">{project.title}</h3>
                  <p className="work-card__tags">
                    {project.tags} — {project.year}
                  </p>
                  <p className="work-card__desc">{project.description}</p>
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
