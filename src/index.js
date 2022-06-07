import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
// import New from './components/Contents/New';
// import Login from './components/Login'
// import Reset  from './components/Reset/index'

import './scss/login.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
      <Navbar/>
      {/* <Login/> */}
      {/* <Reset/> */}
      {/* <New/> */}
      <Footer/>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
