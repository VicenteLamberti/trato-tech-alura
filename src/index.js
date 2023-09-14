import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import './index.css';
import Router from './routes';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <Provider>
      <Router/>
      </Provider>
    
    </>
  </React.StrictMode>
);
