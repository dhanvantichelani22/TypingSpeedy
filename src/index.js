import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { TestModeContextProvider} from './Context/TestModeContext';
import { ThemeContextProvider } from './Context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //strict mode is on so every useEffect run twice
  <React.StrictMode>
    <ThemeContextProvider>
    <TestModeContextProvider>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </TestModeContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);


