import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || '',
  authDomain: "coder-commerce-ede9e.firebaseapp.com",
  projectId: "coder-commerce-ede9e",
  storageBucket: "coder-commerce-ede9e.appspot.com",
  messagingSenderId: "893836221804",
  appId: "1:893836221804:web:ce0dfe049b6e6eae3ca749",
  measurementId: process.env.REACT_APP_FIREBASE_MEASURE_ID || ''
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
