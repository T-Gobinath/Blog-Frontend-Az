import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'

// Lazy load pages for code splitting
const Overview = lazy(() => import('./pages/Overview').then(m => ({ default: m.Overview })))
const ContactUs = lazy(() => import('./pages/ContactUs').then(m => ({ default: m.ContactUs })))
const RequestServices = lazy(() => import('./pages/RequestServices').then(m => ({ default: m.RequestServices })))
const MediaContacts = lazy(() => import('./pages/MediaContacts').then(m => ({ default: m.MediaContacts })))
const Careers = lazy(() => import('./pages/Careers').then(m => ({ default: m.Careers })))
const DynamicPage = lazy(() => import('./pages/DynamicPage').then(m => ({ default: m.DynamicPage })))
const BoardOfDirectors = lazy(() => import('./pages/BoardOfDirectors').then(m => ({ default: m.BoardOfDirectors })))

// Loading fallback
const PageLoader = () => <div className="w-full h-screen flex items-center justify-center bg-black"><div className="text-white">Loading...</div></div>

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/about/board-of-directors" element={<BoardOfDirectors />} />
          <Route path="/" element={<Home />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/services" element={<RequestServices />} />
          <Route path="/media-contacts" element={<MediaContacts />} />
          <Route path="/careers" element={<Careers />} />
          
          {/* Dynamic Pages */}
          <Route path="/ventures/:slug" element={<DynamicPage />} />
          <Route path="/about/:slug" element={<DynamicPage />} />
          <Route path="/manufacturing/:slug" element={<DynamicPage />} />
          <Route path="/it-solutions/:slug" element={<DynamicPage />} />
          <Route path="/partners/:slug" element={<DynamicPage />} />
          <Route path="/careers/:slug" element={<DynamicPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
