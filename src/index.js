import React from 'react';
import ReactDOM from 'react-dom';
//import 'modern-normalize/modern-normalize.css';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
   <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
