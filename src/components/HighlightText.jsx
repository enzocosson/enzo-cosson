const HIGHLIGHTS = [
  'Les Cottages du Belvédère',
  'FDJ UNITED',
  'Capgemini',
  'DrugOptimal',
  'DeepEdge',
  'The Hidden Society',
  'Typster',
  'Ferrari',
  'Flexbank',
  'Netflix',
  'FDJ',
]

const pattern = new RegExp(`(${HIGHLIGHTS.map(escapeRegex).join('|')})`, 'g')

function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export default function HighlightText({ text, className = '' }) {
  if (!text) return null

  const parts = text.split(pattern)

  return (
    <span className={className}>
      {parts.map((part, index) =>
        HIGHLIGHTS.includes(part) ? (
          <strong key={index}>{part}</strong>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </span>
  )
}
