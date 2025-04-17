import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FavouritesProvider from './context/FavouriteContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FavouritesProvider>
      <App />
    </FavouritesProvider>
  </React.StrictMode>
);
