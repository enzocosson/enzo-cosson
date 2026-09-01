import { Link, Navigate, useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import Reveal from '../components/Reveal'
import { projects, profile } from '../data'
import './ProjectDetail.css'

export default function ProjectDetail() {
  const { projectId } = useParams()
  const project = projects.find((p) => p.id === projectId)

  if (!project) {
    return <Navigate to="/work" replace />
  }

  return (
    <Layout>
      <article className="project-detail">
        <Reveal as="div" delay={0}>
          <Link to="/work" className="project-detail__back">
            ← Back to work
          </Link>
        </Reveal>

        <Reveal as="header" className="project-detail__header" delay={80}>
          <p className="project-detail__meta">
            {project.tags}
            {' · '}
            {project.year}
          </p>
          <h1 className="project-detail__title">{project.title}</h1>
        </Reveal>

        <Reveal as="div" className="project-detail__media" animation="scale" delay={160}>
          <img src={project.image} alt={project.title} loading="lazy" />
        </Reveal>

        <div className="project-detail__body">
          <Reveal as="div" className="project-detail__description">
            <h2 className="project-detail__section-title">Overview</h2>
            <p>{project.description}</p>
          </Reveal>

          <Reveal as="div" className="project-detail__technologies" delay={80}>
            <h2 className="project-detail__section-title">Technologies</h2>
            <ul className="project-detail__tech-list">
              {project.technologies.map((tech) => (
                <li key={tech} className="project-detail__tech">
                  {tech}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal as="div" className="project-detail__actions" delay={160}>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-detail__link project-detail__link--primary"
            >
              Voir le projet en ligne
            </a>
          )}
          <a href={`mailto:${profile.email}`} className="project-detail__link">
            Me contacter
          </a>
        </Reveal>
      </article>
    </Layout>
  )
}
