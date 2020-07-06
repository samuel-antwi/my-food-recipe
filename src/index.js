import React from 'react';
import ReactDOM from 'react-dom';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import APIContextProvider from './context/APIContext';

ReactDOM.render(
  <React.StrictMode>
    <APIContextProvider>
      <App />
    </APIContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
