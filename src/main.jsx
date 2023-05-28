import React from 'react'
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import {
  RouterProvider
} from "react-router-dom";
import router from './MyRouter/MyRouter.jsx';

import './index.css';
import './App.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <div className='max-w-[1920px] mx-auto'>
      <RouterProvider router={router} />
    </div>
    </HelmetProvider>
  </React.StrictMode>,
)
