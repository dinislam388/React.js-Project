import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>    

//       <App />

//   </React.StrictMode>,
// )

import { BrowserRouter as Router } from 'react-router-dom';
import { RouterProvider } from 'react-router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>    
    <RouterProvider Router={Router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
);