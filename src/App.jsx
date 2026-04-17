import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Overview } from './pages/Overview'
import { ContactUs } from './pages/ContactUs'
import { RequestServices } from './pages/RequestServices'
import { MediaContacts } from './pages/MediaContacts'
import { DynamicPage } from './pages/DynamicPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services" element={<RequestServices />} />
        <Route path="/media-contacts" element={<MediaContacts />} />
        
        {/* Dynamic Pages */}
        <Route path="/ventures/:slug" element={<DynamicPage />} />
        <Route path="/about/:slug" element={<DynamicPage />} />
        <Route path="/manufacturing/:slug" element={<DynamicPage />} />
        <Route path="/it-solutions/:slug" element={<DynamicPage />} />
        <Route path="/partners/:slug" element={<DynamicPage />} />
        <Route path="/careers" element={<DynamicPage />} />
        <Route path="/careers/:slug" element={<DynamicPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
