import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Global  from '../GlobalStyles'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
      <Global/>
  </StrictMode>,
)
