import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import {FaUserCircle} from "react-icons/fa";
import { themeConText } from '../../MyAuthProvider/MyProver';

const Header = () => {
  const [cls,setCls] = useState(false);
  const {user} = useContext(themeConText)
  window.addEventListener("scroll",() => {
    if(scrollY > 100) {
      setCls(true);
    }else {
      setCls(false);
    }
  })

  const navOptions = <>
          <li><NavLink className={`text-base font-inter ${({isActive}) => isActive ? "text-[#EEFF25]" : "text-white"} font-medium`} to="/">HOME</NavLink></li>
          <li><NavLink className='text-base font-inter font-medium' to="/contact">CONTACT US</NavLink></li>
          <li><NavLink className='text-base font-inter font-medium' to="/dashboard">DASHBOARD</NavLink></li>
          <li><NavLink className='text-base font-inter font-medium' to="/menu">OUR MENU</NavLink></li>
          <li><NavLink className='text-base font-inter font-medium' to="/shop">OUR SHOP</NavLink></li>
          <li><NavLink className='text-base font-inter font-medium' to="/login">Login</NavLink></li>
          <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </label>
      <div>
        {
          user.photoURL ? <img className='h-12 w-12 rounded-full object-cover' src={user.photoURL} alt="" /> : <FaUserCircle className='text-3xl' />
        }
      
      </div>
          
  </>
  return (
    <>
      <header className={`bg-white fixed ${cls && 'headerShadow'} top-0 left-0 z-50  w-full py-4`}>
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className='flex items-start flex-col'>
              <h2 className='text-3xl font-bold -tracking-wider'>BISTRO BOSS</h2>
              <p className='text-2xl font- semibold tracking-widest'>RESTAURANT</p>
            </div>
            <ul className='flex items-center gap-4'>
              {
                navOptions
              }
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header