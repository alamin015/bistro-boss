import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import HomeLayouts from '../Layouts/HomeLayouts/HomeLayouts';
import Home from '../Pages/Home/Home/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts></HomeLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      }
    ]
  },
]);


export default router