import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { PlayProvider } from './context/Play'; // Ensure PlayProvider is imported from the correct location

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PlayProvider> {/* Make sure PlayProvider wraps App */}
      <App />
    </PlayProvider>
  </StrictMode>
);
