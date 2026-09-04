import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import Reveal from '../components/Reveal'
import SocialLinks from '../components/SocialLinks'
import ToolIcon from '../components/ToolIcon'
import HighlightText from '../components/HighlightText'
import LogoSlider from '../components/LogoSlider'
import { profile, projects, tools, experiences } from '../data'
import './Home.css'

const featuredProjects = projects.filter((p) => p.featured)
const mainProject = featuredProjects.find((p) => p.size === 'large') || featuredProjects[0]
const sideProjects = featuredProjects.filter((p) => p.id !== mainProject.id).slice(0, 2)

export default function Home() {
  return (
    <Layout>
      <section className="home-hero">
        <Reveal as="div" delay={0}>
          <Link to="/contact" className="home-hero__availability">
            <span className="home-hero__pulse" aria-hidden="true" />
            En recherche de CDI fullstack / Front-End
          </Link>
        </Reveal>
        <Reveal as="h1" className="home-hero__title" delay={80}>
          Développeur Fullstack
          <br />
          & créateur de SaaS
        </Reveal>
        <Reveal as="p" className="home-hero__intro" delay={160}>
          <HighlightText text={profile.intro} />
        </Reveal>
        <Reveal as="div" delay={240}>
          <SocialLinks />
        </Reveal>

        <LogoSlider />
      </section>

      <section className="home-work">
        <Reveal as="div" className="home-work__header">
          <div className="home-work__header-text">
            <span className="home-work__eyebrow">Selected work</span>
            <h2 className="home-work__title">Projets marquants</h2>
          </div>
          <Link to="/work" className="home-work__link">
            Voir tous les projets
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>

        <div className="home-work__bento">
          <ProjectCard project={mainProject} size="large" delay={0} />
          {sideProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              size="medium"
              delay={(index + 1) * 100}
            />
          ))}
        </div>
      </section>

      <section className="home-section">
        <Reveal as="h2" className="home-section__title">Experience</Reveal>
        <div className="experiences">
          {experiences.map((exp, index) => (
            <Reveal
              key={exp.role}
              as="article"
              className="experience"
              delay={index * 80}
            >
              <p className="experience__role">{exp.role}</p>
              <p className="experience__desc">
                <HighlightText text={exp.description} />
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="home-section">
        <Reveal as="h2" className="home-section__title">Tools</Reveal>
        <ul className="tools">
          {tools.map((tool, index) => (
            <Reveal
              key={tool.name}
              as="li"
              className="tool"
              delay={index * 60}
            >
              <ToolIcon name={tool.icon} />
              <div className="tool__meta">
                <p className="tool__name">{tool.name}</p>
                <p className="tool__role">{tool.role}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      <footer className="home-footer">
        <Reveal as="div">
          <SocialLinks />
        </Reveal>
      </footer>
    </Layout>
  )
}

function ProjectCard({ project, size, delay }) {
  const isLarge = size === 'large'
  const techPreview = isLarge ? project.technologies.slice(0, 5) : []
  const themeStyle = project.themeColor
    ? { '--project-theme': project.themeColor }
    : {}

  return (
    <Reveal
      as="div"
      className={`home-work__card-link home-work__card-link--${size}`}
      animation="scale"
      delay={delay}
    >
      <Link
        to={`/work/${project.id}`}
        className={`home-work__card home-work__card--${size}`}
        aria-label={`Voir le projet ${project.title}`}
        style={themeStyle}
      >
        {project.featured && (
          <span className="home-work__badge">Projet phare</span>
        )}
        {project.theme && (
          <span
            className="home-work__theme"
            style={{ background: project.themeColor, color: '#fff' }}
          >
            {project.theme}
          </span>
        )}
        <div className="home-work__image">
          <img src={project.image} alt={project.title} loading="lazy" />
          <div className="home-work__overlay">
            {project.logo ? (
              <img
                src={project.logo}
                alt={`Logo ${project.title}`}
                className="home-work__logo"
                loading="lazy"
              />
            ) : (
              <span className="home-work__logo-text">{project.title}</span>
            )}
          </div>
        </div>
        <div className="home-work__caption">
          <div className="home-work__meta">
            <h3 className="home-work__name">{project.title}</h3>
            <p className="home-work__tags">{project.tags} — {project.year}</p>
          </div>
          {isLarge && (
            <>
              <p className="home-work__desc">{project.description}</p>
              {techPreview.length > 0 && (
                <div className="home-work__techs">
                  {techPreview.map((tech) => (
                    <span key={tech} className="home-work__tech">{tech}</span>
                  ))}
                </div>
              )}
            </>
          )}
          <span className="home-work__cta">
            Voir le projet
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </Reveal>
  )
}
