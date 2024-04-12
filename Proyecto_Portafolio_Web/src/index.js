import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import './css/fonts.css';
import App from './jsx/App';
import './jsx/i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
