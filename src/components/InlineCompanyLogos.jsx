const HIGHLIGHTS = ['Capgemini', 'FDJ', 'DeepEdge']

export default function InlineCompanyLogos({ text, className = '' }) {
  if (HIGHLIGHTS.length === 0) {
    return <span className={className}>{text}</span>
  }

  const pattern = new RegExp(`(${HIGHLIGHTS.map(escapeRegExp).join('|')})`, 'g')
  const parts = text.split(pattern)

  return (
    <span className={className}>
      {parts.map((part, index) => {
        if (HIGHLIGHTS.includes(part)) {
          return <strong key={index}>{part}</strong>
        }
        return <span key={index}>{part}</span>
      })}
    </span>
  )
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
