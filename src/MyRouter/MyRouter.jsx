import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import HomeLayouts from '../Layouts/HomeLayouts/HomeLayouts';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import Dashboard from '../Layouts/userDashboard/Dashboard';
import MyCarts from '../Components/User/MyCarts/MyCarts';


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
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard",
        element: <MyCarts></MyCarts>
      }
    ]
  }
]);


export default router