import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HashRouter } from 'react-router-dom'
import { GlobalContextProvider } from './context/globalContext.tsx'
import { PrimeReactProvider } from 'primereact/api';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalContextProvider>
      <HashRouter>
        <PrimeReactProvider>
          <App />
        </PrimeReactProvider>
      </HashRouter>
    </GlobalContextProvider>
  </StrictMode>,
)
