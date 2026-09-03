import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ScrollRevealProvider from './components/ScrollRevealProvider'
import ThemeProvider from './components/ThemeProvider'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import ProjectDetail from './pages/ProjectDetail'
import Contact from './pages/Contact'

export default function App() {
  return (
    <ThemeProvider>
      <ScrollRevealProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:projectId" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </ScrollRevealProvider>
    </ThemeProvider>
  )
}
