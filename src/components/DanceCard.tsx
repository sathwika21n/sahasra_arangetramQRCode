import { Link } from 'react-router-dom'
import type { Dance } from '../types/dance'

interface DanceCardProps {
  dance: Dance
  index: number
}

export function DanceCard({ dance, index }: DanceCardProps) {
  return (
    <Link to={`/dance/${dance.id}`} className="dance-card">
      <div className="dance-card__image-wrap">
        <img
          src={dance.image}
          alt={dance.name}
          className="dance-card__image"
          loading="lazy"
        />
        <span className="dance-card__number">{index + 1}</span>
      </div>
      <h3 className="dance-card__name">{dance.name}</h3>
    </Link>
  )
}
