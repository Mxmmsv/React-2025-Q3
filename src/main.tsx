import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router';

import '@/style/index.css';
import App from '@/app/App.tsx';
import { store } from '@/services/store/store';

const rootElement = document.getElementById('root');

if (!rootElement) throw new Error('Root element not found!');

createRoot(rootElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </Provider>
);
