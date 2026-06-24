import { Link } from 'react-router-dom'
import type { Dance } from '../types/dance'

interface DanceDetailProps {
  dance: Dance
}

export function DanceDetail({ dance }: DanceDetailProps) {
  return (
    <article className="dance-detail">
      <div className="dance-detail__hero">
        <img
          src={dance.image}
          alt={dance.name}
          className="dance-detail__image"
        />
        <div className="dance-detail__hero-overlay">
          <h1 className="dance-detail__title">{dance.name}</h1>
        </div>
      </div>

      <div className="dance-detail__content">
        <section className="detail-section">
          <h2>About</h2>
          <p>{dance.description}</p>
        </section>

        <section className="detail-grid">
          <div className="detail-item">
            <span className="detail-item__label">Duration</span>
            <span className="detail-item__value">{dance.duration}</span>
          </div>
          <div className="detail-item">
            <span className="detail-item__label">Artist</span>
            <span className="detail-item__value">{dance.artist}</span>
          </div>
          {dance.composer && (
            <div className="detail-item">
              <span className="detail-item__label">Composer</span>
              <span className="detail-item__value">{dance.composer}</span>
            </div>
          )}
          {dance.raga && (
            <div className="detail-item">
              <span className="detail-item__label">Raga</span>
              <span className="detail-item__value">{dance.raga}</span>
            </div>
          )}
          {dance.tala && (
            <div className="detail-item">
              <span className="detail-item__label">Tala</span>
              <span className="detail-item__value">{dance.tala}</span>
            </div>
          )}
        </section>

        <section className="detail-section">
          <h2>Orchestra</h2>
          <ul className="orchestra-list">
            {dance.orchestra.map((member) => (
              <li key={`${member.role}-${member.name}`} className="orchestra-list__item">
                <span className="orchestra-list__role">{member.role}</span>
                <span className="orchestra-list__name">{member.name}</span>
              </li>
            ))}
          </ul>
        </section>

        <Link to="/" className="back-link">
          ← Back to Program
        </Link>
      </div>
    </article>
  )
}
