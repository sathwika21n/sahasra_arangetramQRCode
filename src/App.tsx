import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ProgramPage } from './pages/ProgramPage'
import { DanceDetailPage } from './pages/DanceDetailPage'
import { QRPrintPage } from './pages/QRPrintPage'
import { AboutDancerPage } from './pages/AboutDancerPage'
import { GuruPage } from './pages/GuruPage'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ProgramPage />} />
          <Route path="/program" element={<ProgramPage />} />
          <Route path="/about-dancer" element={<AboutDancerPage />} />
          <Route path="/guru" element={<GuruPage />} />
          <Route path="/dance/:danceId" element={<DanceDetailPage />} />
          <Route path="/program/:danceId" element={<DanceDetailPage />} />
          <Route path="/qr" element={<QRPrintPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
