import Layout from '../components/Layout'
import Reveal from '../components/Reveal'
import SocialLinks from '../components/SocialLinks'
import ToolIcon from '../components/ToolIcon'
import InlineCompanyLogos from '../components/InlineCompanyLogos'
import { avatar, profile, services, tools, experiences, education } from '../data'
import './About.css'

function formatDateRange(startDate, endDate) {
  const formatter = new Intl.DateTimeFormat('fr-FR', {
    month: 'short',
    year: 'numeric',
  })
  const start = formatter.format(new Date(startDate))
  const end = endDate ? formatter.format(new Date(endDate)) : "aujourd'hui"
  return `${start} - ${end}`
}

const companyLogos = {
  'fdj-capgemini': { bg: '#0070AD', text: 'Capgemini × FDJ', initial: 'C' },
  capgemini: { bg: '#0070AD', text: 'Capgemini', initial: 'C' },
  drugoptimal: { bg: '#00B4D8', text: 'DrugOptimal', initial: 'D' },
}

function formatDuration(startDate, endDate) {
  const start = new Date(startDate)
  const end = endDate ? new Date(endDate) : new Date()
  const years = end.getFullYear() - start.getFullYear()
  const months = end.getMonth() - start.getMonth()
  const totalMonths = years * 12 + months
  const y = Math.floor(totalMonths / 12)
  const m = totalMonths % 12
  if (y > 0 && m > 0) return `${y} an${y > 1 ? 's' : ''} ${m} mois`
  if (y > 0) return `${y} an${y > 1 ? 's' : ''}`
  return `${m} mois`
}

export default function About() {
  return (
    <Layout>
      <section className="about">
        <Reveal as="h1" className="about__title">
          About me
        </Reveal>

        <div className="about__intro">
          <Reveal as="div" className="about__text">
            <p>
              <InlineCompanyLogos text={profile.about} />
            </p>
          </Reveal>

          <Reveal as="div" className="about__profile" animation="scale">
            <div className="about__photo">
              <img src={avatar} alt={profile.name} loading="lazy" />
            </div>
            <div className="about__contact">
              <div>
                <p className="about__label">Email</p>
                <p className="about__value">{profile.email}</p>
              </div>
              <div>
                <p className="about__label">Phone</p>
                <p className="about__value">{profile.phone}</p>
              </div>
            </div>
          </Reveal>
        </div>

        <section className="timeline">
          <Reveal as="h2" className="timeline__title">
            Expérience
          </Reveal>
          <ol className="timeline__list">
            {experiences.map((exp, index) => (
              <Reveal
                key={exp.id}
                as="li"
                className="timeline__item"
                delay={index * 80}
              >
                <div className="timeline__marker">
                  {exp.image ? (
                    <img
                      src={exp.image}
                      alt={exp.company}
                      className="timeline__logo"
                      loading="lazy"
                    />
                  ) : companyLogos[exp.id] ? (
                    <span
                      className="timeline__initial"
                      style={{
                        backgroundColor: companyLogos[exp.id].bg,
                        color: '#ffffff',
                      }}
                      aria-label={companyLogos[exp.id].text}
                    >
                      {companyLogos[exp.id].initial}
                    </span>
                  ) : (
                    <span className="timeline__dot" />
                  )}
                </div>
                <div className="timeline__content">
                  <h3 className="timeline__role">{exp.role}</h3>
                  <p className="timeline__company">
                    {exp.company}
                    {exp.contract && ` · ${exp.contract}`}
                  </p>
                  <p className="timeline__meta">
                    {formatDateRange(exp.startDate, exp.endDate)}
                    {' · '}
                    {formatDuration(exp.startDate, exp.endDate)}
                  </p>
                  {exp.location && (
                    <p className="timeline__location">
                      {exp.location}
                      {exp.type && ` · ${exp.type}`}
                    </p>
                  )}
                  <p className="timeline__desc">{exp.description}</p>
                  {exp.link && (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="timeline__link"
                    >
                      Website
                    </a>
                  )}
                  {exp.skills?.length > 0 && (
                    <div className="timeline__skills">
                      {exp.skills.map((skill) => (
                        <span key={skill} className="timeline__skill">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </ol>
        </section>

        <section className="timeline">
          <Reveal as="h2" className="timeline__title">
            Formation
          </Reveal>
          <ol className="timeline__list">
            {education.map((edu, index) => (
              <Reveal
                key={edu.id}
                as="li"
                className="timeline__item"
                delay={index * 80}
              >
                <div className="timeline__marker">
                  <span className="timeline__dot" />
                </div>
                <div className="timeline__content">
                  <h3 className="timeline__role">{edu.degree}</h3>
                  <p className="timeline__company">{edu.school}</p>
                  <p className="timeline__meta">
                    {formatDateRange(edu.startDate, edu.endDate)}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </section>

        <section className="services">
          <Reveal as="h2" className="services__title">
            Services
          </Reveal>
          <ul className="services__list">
            {services.map((service, index) => (
              <Reveal
                key={service}
                as="li"
                className="service"
                delay={index * 60}
              >
                {service}
              </Reveal>
            ))}
          </ul>
        </section>

        <section className="home-section">
          <Reveal as="h2" className="home-section__title">
            Tools
          </Reveal>
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
      </section>
    </Layout>
  )
}
