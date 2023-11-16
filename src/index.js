import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import cors  from 'cors';

const root = ReactDOM.createRoot(document.getElementById('root'));
const corsOptions = {
  origin: ['http://localhost:3000', 'https://proyectobackend-production-6540.up.railway.app'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Habilita el intercambio de cookies a través de dominios
};

App.use(cors(corsOptions));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
