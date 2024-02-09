import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes/Routes'
import { HelmetProvider } from 'react-helmet-async';

const helmetContext = {};
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider context={helmetContext}>
    <RouterProvider router={Routes} />
    </HelmetProvider>
  </React.StrictMode>,
)
