import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Footer} from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
const root2 = ReactDOM.createRoot(document.getElementById('root2'));

function createSnowflakes() {
  const snowflakesContainer = document.querySelector('.snowflakes');
  
  for (let i = 0; i < 50; i++) {
const wdthandheight = Math.random();
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.style.left = `${Math.random() * 100}%`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
    snowflake.style.animationDelay = `${Math.random()}s`;
    snowflake.style.opacity = `${Math.random()}`;
    snowflake.style.width = `${wdthandheight * 15}px`;
    snowflake.style.height = `${wdthandheight * 15}px`;
    snowflakesContainer.appendChild(snowflake);
  }
}
createSnowflakes();
root.render(
  <React.StrictMode>
    <App />

    
  </React.StrictMode>
);
root2.render(

 
<Footer />

    
 
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
