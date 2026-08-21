import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingPage2 } from './landing-page'
import { LoginPage, RegisterPage } from './authentication'
import { NotFoundPage } from './components/NotFoundPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Landing Page at root "/" */}
        <Route path="/" element={<LandingPage2 />} />

        {/* Authentication Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Catch-all 404 Page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
