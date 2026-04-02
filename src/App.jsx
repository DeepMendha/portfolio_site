import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Skills from './pages/Skills.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  // GitHub Pages may host your repo under a sub-path (e.g. /portfolio_site/).
  // Compute the base dynamically from the current location so deep links
  // and refreshes still work.
  const { pathname } = window.location
  const basename = pathname.endsWith('/')
    ? pathname
    : pathname.replace(/\/[^/]*$/, '/')

  return (
    <BrowserRouter basename={basename}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
