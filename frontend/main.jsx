import { HelmetProvider } from 'react-helmet-async'
import { createRoot } from 'react-dom/client'
import '../frontend/src/styles/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <App />y
  </HelmetProvider>,
)
