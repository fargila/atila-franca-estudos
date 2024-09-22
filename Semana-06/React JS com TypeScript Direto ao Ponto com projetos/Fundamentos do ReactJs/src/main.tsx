import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
// import Exercicios from './Exercicios.tsx'
import './css/output.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* <Exercicios/> */}
  </StrictMode>,
)
