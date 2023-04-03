import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import StoreProvider from './context/StoreContext';
import UserContextProvider from './context/UserContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <StoreProvider>
      <App />
    </StoreProvider>
  </UserContextProvider>
);
