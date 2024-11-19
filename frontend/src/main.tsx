import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import CubeValueProvider from './context/cubeValueProvider.tsx'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
    <CubeValueProvider>
      <App />
    </CubeValueProvider>
    </BrowserRouter>
)
