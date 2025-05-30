import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import App from './App'
import { ProductProvider } from './contexts/contextData'
import { CartProvider } from './contexts/cartContext';
import { SearchBarProvider } from './contexts/searchContext';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <CartProvider>
          <SearchBarProvider>
            <App />
          </SearchBarProvider>
        </CartProvider>
      </ProductProvider>
    </BrowserRouter>
  </StrictMode>
)
