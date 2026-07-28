import { useState } from 'react'
import { dances } from '../data/dances'
import { DanceCard } from '../components/DanceCard'
import { getPublicAssetUrl } from '../utils/siteUrl'
//import sahasraPhoto from '../assets/hero.png'

export function HomePage() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 2
  const imageBaseUrl = getPublicAssetUrl('/images')

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
      <div className="pamphlet__bells" aria-hidden="true">
        <span className="pamphlet__bell pamphlet__bell--left">🔔</span>
        <span className="pamphlet__bell pamphlet__bell--center">🔔</span>
        <span className="pamphlet__bell pamphlet__bell--right">🔔</span>
      </div>

      {/* Page 1: About Dancer & Gurus */}
      {currentPage === 1 && (
        <div className="pamphlet__page">
          {/* About Dancer Section */}
          <article className="profile-page dancer-page">
            <div className="dancer-page__content">
              <div className="dancer-page__text">
                <header className="profile-hero">
                  <p className="profile-hero__eyebrow">About the Dancer</p>
                  <h1>Sahasra Thatiparthi</h1>
                  <p>
                    Sahasra has been learning Bharatanatyam from the last 10 years with discipline,
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
                <img
                  src={`${imageBaseUrl}/Sahasra-40.jpg`}
                  alt="Sahasra"
                  className="dancer-page__image-placeholder"
                />
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
                  <img src={`${imageBaseUrl}/madhusreeAunty-photo.jpg`} alt="Guru Name" className="guru-card__image"/>
                  <div>
                    <h3>Smt. Madhusri Sethuraman</h3>
                    <p>
                      Smt. Madhusri Sethuraman has been in the dance field for over 50 years and is recognized as an outstanding Bharatanatyam artist. 

                      Madhusri started dance at the age of four and had her arangetram at the age of eight. Till now, Madhusri has given over 500 performances in India, U.S.A, Europe, Australia, Singapore, China and Hong Kong. She started as a volunteer dance teacher in 1988 and founded the Srutilaya school of dance in 1992, through which she has taught over 1,000 students and conducted over 150 arangetrams.
                    </p>
                  </div>
                </article>

                <article className="guru-card">
                  <img src={`${imageBaseUrl}/sivagamiAunty-photo.jpg`} alt="Current Guru Name" className="guru-card__image"/>
                  <div>
                    <h3>Smt. Sivagami Vanka </h3>
                    <p>
                      Smt. Sivagami Vanka was Sahasra's first Bharatanatyam guru and the one who ignited her passion for this beautiful classical art form. With patience, and encouragement, she guided Sahasra through her foundational years of dance, instilling in her the discipline and confidence that Bharatanatyam demands. Under her nurturing mentorship, Sahasra built a strong foundation in technique, rhythm, expression, and tradition. The values and skills imparted by Guru Sivagami continue to inspire Sahasra as she reaches this significant milestone in her Bharatanatyam journey.
                    </p>
                  </div>
                </article>
              </div>
            </section>

            <section className="profile-section profile-section--featured">
              <h2>Training & Preparation</h2>
              <p>
                An Arangetram marks the culmination of years of dedicated learning, perseverance, and unwavering commitment. Under the guidance of Guru Smt. Madhusri Sethuraman, Sahasra has spent countless hours perfecting every aspect of her performance—from intricate footwork and expressive abhinaya to rhythm, endurance, and artistry. Each rehearsal has challenged her to grow not only as a dancer but also as an individual, instilling discipline, confidence, resilience, and a deep respect for the rich traditions of Bharatanatyam.

                This performance is the result of years of learning, months of intensive preparation, and the constant encouragement of her guru, family, and well-wishers. As Sahasra steps onto the stage for her Arangetram, she does so with gratitude for everyone who has been a part of her journey and with the hope of honoring the timeless legacy of Bharatanatyam through her performance.
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
