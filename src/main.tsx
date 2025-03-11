import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import WelcomePage from './components/WelcomePage.tsx'

// Get the base URL from Vite
const baseUrl = import.meta.env.BASE_URL

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={baseUrl}>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/play" element={<App />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
