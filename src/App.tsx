import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ProgramPage } from './pages/ProgramPage'
import { DanceDetailPage } from './pages/DanceDetailPage'
import { QRPrintPage } from './pages/QRPrintPage'

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/program" replace />} />
          <Route path="/program" element={<ProgramPage />} />
          <Route path="/program/:danceId" element={<DanceDetailPage />} />
          <Route path="/qr" element={<QRPrintPage />} />
          <Route path="*" element={<Navigate to="/program" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
