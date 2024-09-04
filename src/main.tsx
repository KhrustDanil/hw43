import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app';
import './index.css'
import { Provider } from 'react-redux';
import { store } from './app';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)