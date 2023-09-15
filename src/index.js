import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global-styles.css';
import { App } from './templates/Home';
import { CounterContextProvider } from './contexts/CounterContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CounterContextProvider>
      <App />
    </CounterContextProvider>
  </React.StrictMode>,
);
