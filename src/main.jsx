import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HomeComponent from "./home.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Imitating</h1>
    <HomeComponent />
    <App />
  </StrictMode>,
)


