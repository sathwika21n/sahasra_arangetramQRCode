export function AboutDancerPage() {
  return (
    <article className="profile-page">
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

      <section className="profile-section">
        <h2>Her Gurus</h2>
        <div className="guru-card-grid">
          <article className="guru-card">
            <div className="guru-card__image" aria-label="Guru one placeholder">
              <span>Guru Photo</span>
            </div>
            <div>
              <h3>Guru Name</h3>
              <p>
                Add a short description of Sahasra&apos;s first guru here,
                including their role in her training and artistic foundation.
              </p>
            </div>
          </article>

          <article className="guru-card">
            <div className="guru-card__image" aria-label="Guru two placeholder">
              <span>Guru Photo</span>
            </div>
            <div>
              <h3>Current Guru Name</h3>
              <p>
                Add a short description of Sahasra&apos;s current guru here,
                including their guidance for this arangetram.
              </p>
            </div>
          </article>
        </div>
      </section>
    </article>
  )
}
