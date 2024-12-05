import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HashRouter } from 'react-router-dom'
import { GlobalContextProvider } from './context/globalContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalContextProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </GlobalContextProvider>
  </StrictMode>,
)
