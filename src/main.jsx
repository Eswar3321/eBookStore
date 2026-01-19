import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { FilterProvider, CartProvider } from './context';
import './index.css';
import App from './App.jsx';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <CartProvider>
        <FilterProvider>
          <App />
          <ToastContainer closeButton={false} autoClose={3000} />
        </FilterProvider>
      </CartProvider>
    </Router>
  </StrictMode>
);
