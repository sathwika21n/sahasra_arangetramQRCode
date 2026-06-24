import { Link, useParams } from 'react-router-dom'
import { getDanceById } from '../data/dances'
import { DanceDetail } from '../components/DanceDetail'

export function DanceDetailPage() {
  const { danceId } = useParams<{ danceId: string }>()
  const dance = danceId ? getDanceById(danceId) : undefined

  if (!dance) {
    return (
      <div className="not-found">
        <h1>Dance not found</h1>
        <Link to="/">Return to program</Link>
      </div>
    )
  }

  return <DanceDetail dance={dance} />
}
