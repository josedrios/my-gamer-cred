import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from '@/app/router';
import '@/styles/main.scss'
import '@/tailwind.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
)
