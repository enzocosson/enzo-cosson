import { useState } from 'react'
import Layout from '../components/Layout'
import Reveal from '../components/Reveal'
import Footer from '../components/Footer'
import { profile } from '../data'
import './Contact.css'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Message envoyé — je reviendrai vers vous rapidement.')
  }

  return (
    <Layout>
      <section className="contact">
        <Reveal as="h1" className="contact__title">
          Contact
        </Reveal>
        <Reveal as="p" className="contact__intro">
          Vous avez un projet en tête ou une opportunité à me proposer ?
          Écrivez-moi, je réponds généralement sous 24 heures.
        </Reveal>

        <div className="contact__direct">
          <Reveal as="div" delay={80}>
            <p className="contact__label">Email</p>
            <a href={`mailto:${profile.email}`} className="contact__value">
              {profile.email}
            </a>
          </Reveal>
          <Reveal as="div" delay={160}>
            <p className="contact__label">Téléphone</p>
            <a
              href={`tel:${profile.phone.replace(/\s/g, '')}`}
              className="contact__value"
            >
              {profile.phone}
            </a>
          </Reveal>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__row">
            <Reveal as="label" className="contact__field">
              <span className="contact__label">Nom</span>
              <input type="text" name="name" placeholder="Votre nom" required />
            </Reveal>
            <Reveal as="label" className="contact__field" delay={80}>
              <span className="contact__label">Email</span>
              <input
                type="email"
                name="email"
                placeholder="vous@mail.com"
                required
              />
            </Reveal>
          </div>

          <Reveal as="label" className="contact__field">
            <span className="contact__label">Message</span>
            <textarea
              name="message"
              rows="6"
              placeholder="Parlez-moi de votre projet..."
              required
            ></textarea>
          </Reveal>

          <Reveal as="div">
            <button type="submit" className="contact__submit">
              Envoyer le message
            </button>
          </Reveal>

          {status && (
            <Reveal as="p" className="contact__status">
              {status}
            </Reveal>
          )}
        </form>
      </section>

      <Footer />
    </Layout>
  )
}
