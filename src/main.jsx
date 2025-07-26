import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './context/ThemeContext';
import App from './App';
import './index.css';
import Maintenance from "./services/Maintenance.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      {/*<App />*/}
        <Maintenance />
    </ThemeProvider>
  </StrictMode>
);