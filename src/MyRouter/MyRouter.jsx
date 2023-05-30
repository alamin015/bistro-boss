import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import HomeLayouts from '../Layouts/HomeLayouts/HomeLayouts';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts></HomeLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      }
    ]
  },
]);


export default router