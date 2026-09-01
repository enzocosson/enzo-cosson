import Reveal from './Reveal'
import './Footer.css'
import SocialLinks from './SocialLinks'
import { profile } from '../data'

export default function Footer() {
  const now = new Date()
  const time = now.toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  })

  return (
    <Reveal as="footer" className="footer">
      <SocialLinks />
      <p className="footer__credit">{profile.status}</p>
      <p className="footer__time">{time}</p>
    </Reveal>
  )
}
