import { Link, Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <div className="app">
      <header className="header">
        <Link to="/program" className="header__brand">
          <span className="header__ornament">✦</span>
          Sahasra Arangetram
          <span className="header__ornament">✦</span>
        </Link>
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
