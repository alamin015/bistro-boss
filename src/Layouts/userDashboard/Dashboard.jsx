import React from 'react'
import useCart from '../../hooks/useCart'
import SideBar from '../../Components/User/UserSideBar/SideBar';
import { Outlet } from 'react-router-dom';
import style from './Dashboard.module.css'

const Dashboard = () => {
    const [cart] = useCart();
    console.log(cart)
  return (
    <div className='flex align-center'>
        <SideBar></SideBar>
        <div>
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Dashboard