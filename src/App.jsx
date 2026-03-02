import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Overview } from './pages/Overview'
import { ContactUs } from './pages/ContactUs'
import { RequestServices } from './pages/RequestServices'
import { MediaContacts } from './pages/MediaContacts'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services" element={<RequestServices />} />
        <Route path="/media-contacts" element={<MediaContacts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
