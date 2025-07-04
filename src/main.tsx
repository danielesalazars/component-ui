import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx';
import './index.css';

const isStandalone =
  window.location.pathname.startsWith('/preview') || window.parent === window;

const Root = () =>
  isStandalone ? (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ) : (
    <App />
  );

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
