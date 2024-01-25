import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PhotoList from 'components/PhotoList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
