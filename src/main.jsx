import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import 'remixicon/fonts/remixicon.css'
import { ProductProvider } from './context/ProductContext.jsx'


createRoot(document.getElementById('root')).render(
  <ProductProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductProvider>,
)
