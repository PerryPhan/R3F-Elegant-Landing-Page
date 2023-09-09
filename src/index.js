import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import logo from './logo-2.png';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Canvas } from '@react-three/fiber';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <header className='App-header'>
      <img className='App-logo' src={logo} alt='alt here'/>
    </header>
    <Canvas shadows frameloop={"always"}>
      <App />
    </Canvas>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
