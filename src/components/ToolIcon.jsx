import './ToolIcon.css'
import { useEffect, useState } from 'react'

// Devicon slug for most tools; voiceflow is not available there so we keep an inline fallback.
const deviconMap = {
  figma: 'figma',
  photoshop: 'photoshop',
  illustrator: 'illustrator',
  git: 'git',
  blender: 'blender',
  canva: 'canva',
  vscode: 'vscode',
  wordpress: 'wordpress',
  webflow: 'webflow',
  react: 'react',
  typescript: 'typescript',
  javascript: 'javascript',
  html: 'html5',
  css: 'css3',
  sass: 'sass',
  tailwind: 'tailwindcss',
  nodejs: 'nodejs',
  express: 'express',
  python: 'python',
  mongodb: 'mongodb',
  docker: 'docker',
  gitlab: 'gitlab',
  jira: 'jira',
  redux: 'redux',
  nextjs: 'nextjs',
  threejs: 'threejs',
  directus: 'directus',
  vercel: 'vercel',
  github: 'github',
}

const inlineSvg = {
  voiceflow: `<svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="8" fill="#7B61FF"/><path d="M8 12l8 12 8-12" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  claude: `<svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="8" fill="#1F1F1F"/><text x="16" y="22" text-anchor="middle" fill="#D4A574" font-size="16" font-weight="700" font-family="system-ui">C</text></svg>`,
  stripe: `<svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="8" fill="#635BFF"/><text x="16" y="21" text-anchor="middle" fill="#fff" font-size="13" font-weight="700" font-family="system-ui">S</text></svg>`,
  websocket: `<svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="8" fill="#000"/><path d="M8 16h6l2-4 4 8 2-4h6" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
}

const cache = new Map()

export default function ToolIcon({ name }) {
  const [svg, setSvg] = useState(() => cache.get(name) ?? inlineSvg[name] ?? null)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (cache.has(name) || inlineSvg[name]) {
      setSvg(cache.get(name) ?? inlineSvg[name])
      return
    }

    const slug = deviconMap[name]
    if (!slug) {
      setError(true)
      return
    }

    let cancelled = false

    fetch(`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-original.svg`)
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText)
        return res.text()
      })
      .then((text) => {
        if (cancelled) return
        cache.set(name, text)
        setSvg(text)
      })
      .catch(() => {
        if (!cancelled) setError(true)
      })

    return () => {
      cancelled = true
    }
  }, [name])

  if (error || (!deviconMap[name] && !inlineSvg[name])) {
    return (
      <span className="tool-icon tool-icon--fallback">
        {name.charAt(0).toUpperCase()}
      </span>
    )
  }

  return (
    <span
      className="tool-icon"
      aria-label={name}
      dangerouslySetInnerHTML={{ __html: svg ?? '' }}
    />
  )
}
