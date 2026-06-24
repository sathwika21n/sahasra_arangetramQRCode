import { Link, Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <div className="app">
      <header className="header">
        <Link to="/" className="header__brand">
          <span className="header__ornament">✦</span>
          Sahasra Arangetram
          <span className="header__ornament">✦</span>
        </Link>
        <nav className="header__nav" aria-label="Main navigation">
          <Link to="/">Program</Link>
          <Link to="/about-dancer">Dancer</Link>
          <Link to="/guru">Guru</Link>
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
