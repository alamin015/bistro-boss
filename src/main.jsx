import React from 'react'
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import {
  RouterProvider
} from "react-router-dom";
import router from './MyRouter/MyRouter.jsx';

import './index.css';
import './App.css';
import MyProver from './MyAuthProvider/MyProver.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <MyProver>
    <div className='max-w-[1920px] mx-auto'>
      <RouterProvider router={router} />
    </div>
    </MyProver>
    </HelmetProvider>
  </React.StrictMode>,
)
