import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './fonts/fonts.css';
import reportWebVitals from './reportWebVitals';

// Initialize provider check
if (typeof window.ethereum !== 'undefined') {
  // Provider already exists, don't try to modify it
  console.log('Web3 provider detected');
} else {
  console.log('No Web3 provider detected');
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
