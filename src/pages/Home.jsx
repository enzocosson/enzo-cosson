import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import Reveal from '../components/Reveal'
import SocialLinks from '../components/SocialLinks'
import ToolIcon from '../components/ToolIcon'
import { profile, projects, tools, experiences } from '../data'
import './Home.css'

export default function Home() {
  return (
    <Layout>
      <section className="home-hero">
        <Reveal as="div" delay={0}>
          <Link to="/contact" className="home-hero__availability">
            <span className="home-hero__pulse" aria-hidden="true" />
            En recherche de CDI fullstack
          </Link>
        </Reveal>
        <Reveal as="h1" className="home-hero__title" delay={80}>
          Développeur Fullstack
          <br />
          & créateur de SaaS
        </Reveal>
        <Reveal as="p" className="home-hero__intro" delay={160}>
          {profile.intro}
        </Reveal>
        <Reveal as="div" delay={240}>
          <SocialLinks />
        </Reveal>
      </section>

      <section className="home-work">
        <Reveal as="div" className="home-work__header">
          <h2 className="home-work__title">Selected work</h2>
          <Link to="/work" className="home-work__link">See All Work</Link>
        </Reveal>

        <div className="home-work__grid">
          {projects.slice(0, 2).map((project, index) => (
            <Link
              key={project.id}
              to={`/work/${project.id}`}
              className="home-work__card-link"
              aria-label={`Voir le projet ${project.title}`}
            >
              <Reveal
                as="article"
                className="home-work__card"
                delay={index * 100}
              >
                <div className="home-work__image">
                  <img src={project.image} alt={project.title} loading="lazy" />
                </div>
                <div className="home-work__caption">
                  <h3 className="home-work__name">{project.title}</h3>
                  <p className="home-work__tags">{project.tags}</p>
                </div>
              </Reveal>
            </Link>
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
              <p className="experience__desc">{exp.description}</p>
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
