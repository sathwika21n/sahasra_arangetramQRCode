import { dances } from '../data/dances'
import { DanceCard } from '../components/DanceCard'

export function ProgramPage() {
  return (
    <div className="program">
      <header className="program__header">
        <h1 className="program__title">Dance Program</h1>
        <p className="program__subtitle">
          Tap any piece to view its description, duration, and orchestra details.
        </p>
      </header>

      <div className="program__grid">
        {dances.map((dance, index) => (
          <DanceCard key={dance.id} dance={dance} index={index} />
        ))}
      </div>
    </div>
  )
}
