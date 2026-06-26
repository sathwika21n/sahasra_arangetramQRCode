import { useState } from 'react'
import { dances } from '../data/dances'
import { DanceCard } from '../components/DanceCard'

export function HomePage() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 2

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className="pamphlet">
      {/* Page 1: About Dancer & Gurus */}
      {currentPage === 1 && (
        <div className="pamphlet__page">
          {/* About Dancer Section */}
          <article className="profile-page dancer-page">
            <div className="dancer-page__content">
              <div className="dancer-page__text">
                <header className="profile-hero">
                  <p className="profile-hero__eyebrow">About the Dancer</p>
                  <h1>Sahasra</h1>
                  <p>
                    Sahasra has been studying Bharatanatyam with dedication, discipline,
                    and joy. Her arangetram marks an important milestone in her artistic
                    journey: a celebration of years of training, perseverance, and love
                    for this classical dance tradition.
                  </p>
                </header>

                <section className="profile-section">
                  <h2>About the Dances</h2>
                  <p>
                    The program presents a traditional Bharatanatyam margam, moving from
                    invocatory pieces and rhythmic compositions to expressive storytelling
                    and a vibrant finale. Each dance highlights a different aspect of the
                    art form, including nritta, abhinaya, devotion, musicality, and grace.
                  </p>
                </section>
              </div>
              
              <div className="dancer-page__image">
                <div className="dancer-page__image-placeholder">
                  <span>Sahasra's Photo</span>
                </div>
              </div>
            </div>
          </article>

          {/* Gurus Section */}
          <article className="profile-page gurus-section">
            <header className="profile-hero">
              <p className="profile-hero__eyebrow">Her Gurus</p>
              <h1>Guidance & Mentorship</h1>
            </header>

            <section className="profile-section">
              <div className="guru-card-grid">
                <article className="guru-card">
                  <img src="images/madhusreeAunty-photo.jpg" alt="Guru Name" className="guru-card__image"/>
                  <div>
                    <h3>Smt. Madhusri Sethuraman</h3>
                    <p>
                      Sahasra has been training under Smt. Madhusri Sethuraman for the past 5 years. She has been a source of inspiration and guidance, helping Sahasra develop her skills and artistic expression.
                    </p>
                  </div>
                </article>

                <article className="guru-card">
                  <img src="/path/to/guru-two-photo.jpg" alt="Current Guru Name" className="guru-card__image"/>
                  <div>
                    <h3>Smt. Sivagami Vanka </h3>
                    <p>
                      Smt. Sivagami Vanka was Sahasra's first guru and laid the foundation for her journey in Bharatanatyam.
                    </p>
                  </div>
                </article>
              </div>
            </section>

            <section className="profile-section profile-section--featured">
              <h2>Training & Preparation</h2>
              <p>
                Under her guru&apos;s direction, Sahasra has developed technique,
                expression, stamina, musical understanding, and stage presence. Replace
                this placeholder with specific details about the guru&apos;s mentorship
                and the preparation for this performance.
              </p>
            </section>

            {/* Teaser for next page */}
            <div className="pamphlet__teaser">
              <p className="pamphlet__teaser-text">
                <strong>Next:</strong> Explore the 7 magnificent dances in the program →
              </p>
            </div>
          </article>
        </div>
      )}

      {/* Page 2: Dance Program */}
      {currentPage === 2 && (
        <div className="pamphlet__page program">
          <header className="program__header">
            <h2 className="program__title">Dance Program</h2>
            <p className="program__subtitle">
              Traditional Bharatanatyam Margam
            </p>
          </header>

          <div className="program__grid">
            {dances.map((dance, index) => (
              <DanceCard key={dance.id} dance={dance} index={index} />
            ))}
          </div>
        </div>
      )}

      {/* Navigation Controls */}
      <div className="pamphlet__navigation">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="pamphlet__nav-button pamphlet__nav-button--prev"
          aria-label="Previous page"
        >
          <span className="pamphlet__nav-icon">←</span>
          <span className="pamphlet__nav-text">Back</span>
        </button>

        <div className="pamphlet__page-indicator">
          <div className="pamphlet__page-dots">
            {Array.from({ length: totalPages }).map((_, i) => (
              <div
                key={i + 1}
                className={`pamphlet__dot ${i + 1 === currentPage ? 'active' : ''}`}
              />
            ))}
          </div>
          <span className="pamphlet__page-count">{currentPage}/{totalPages}</span>
        </div>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="pamphlet__nav-button pamphlet__nav-button--next"
          aria-label="Next page"
        >
          <span className="pamphlet__nav-text">Next</span>
          <span className="pamphlet__nav-icon">→</span>
        </button>
      </div>
    </div>
  )
}
