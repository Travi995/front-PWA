import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { HashRouter } from 'react-router-dom'
import { GlobalContextProvider } from './context/globalContext.tsx'
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
/* import 'primereact/resources/themes/saga-blue/theme.css'; */ // Cambia "saga-blue" por el tema que prefieras
import 'primereact/resources/primereact.min.css'; // Estilos básicos de PrimeReact
import 'primeicons/primeicons.css'; // Estilos de los iconos de PrimeIcons
import './index.css'


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
