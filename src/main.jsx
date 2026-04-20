import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Register Service Worker for offline support and caching
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  navigator.serviceWorker.register('/sw.js').catch(err => {
    console.log('Service Worker registration failed:', err)
  })
}

// Optimize Web Vitals monitoring
if ('web-vital' in window) {
  // Skip if already registered
} else if (window.location.hostname !== 'localhost') {
  // Performance monitoring in production only
  window.addEventListener('load', () => {
    // Defer non-critical tasks
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        // Analytics or monitoring can go here
      })
    }
  })
}

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
