import { Link, Outlet, useLocation } from 'react-router-dom'

export function Layout() {
  const location = useLocation()
  const showProgramBack = location.pathname.startsWith('/dance/') || location.pathname.startsWith('/program/')

  return (
    <div className="app">
      <header className="header">
        <Link to="/" className="header__brand">
          <span className="header__ornament">✦</span>
          Sahasra Arangetram
          <span className="header__ornament">✦</span>
        </Link>

        <nav className="header__nav" aria-label="Primary navigation">
          {showProgramBack ? (
            <Link to="/program" className="header__back">← Back to Program</Link>
          ) : (
            <>
              <Link to="/">Home</Link>
              <Link to="/program">Program</Link>
            </>
          )}
        </nav>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <p>Bharatanatyam Debut Performance</p>
      </footer>
    </div>
  )
}
