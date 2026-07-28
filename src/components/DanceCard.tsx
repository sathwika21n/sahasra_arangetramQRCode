import { Link } from 'react-router-dom'
import type { Dance } from '../types/dance'
import { getPublicAssetUrl } from '../utils/siteUrl'

interface DanceCardProps {
  dance: Dance
  index: number
}

export function DanceCard({ dance, index }: DanceCardProps) {
  const fallbackImage = getPublicAssetUrl('/images/dances/pushpanjali.svg')

  return (
    <Link to={`/dance/${dance.id}`} className="dance-card">
      <div className="dance-card__image-wrap">
        <img
          src={dance.image}
          alt={dance.name}
          className="dance-card__image"
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          onError={(event) => {
            event.currentTarget.src = fallbackImage
          }}
        />
        <span className="dance-card__number">{index + 1}</span>
      </div>
      <h3 className="dance-card__name">{dance.name}</h3>
    </Link>
  )
}
