import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ClientsPage from './pages/ClientsPage'
import CandidatesPage from './pages/CandidatesPage'
import JobsPage from './pages/JobsPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-background font-sora">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/clients" element={<ClientsPage />} />
              <Route path="/candidates" element={<CandidatesPage />} />
              <Route path="/jobs" element={<JobsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
