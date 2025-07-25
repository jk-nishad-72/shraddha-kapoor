
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Error: You are importing BrowserRouter from 'react-router', but it should be from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import { ProductProvider } from './context/ProductContext.jsx'
import { SlidesProvider } from './context/Slidescontext'

// Error: SlidesProvider is not exported from Slidescontext.jsx, you need to export it in that file
// Make sure in src/context/Slidescontext.jsx you have: export const SlidesProvider = ({ children }) => { ... }

createRoot(document.getElementById('root')).render(
  <ProductProvider>
    <SlidesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SlidesProvider>
  </ProductProvider>
)
