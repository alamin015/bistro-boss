import React, { useState } from 'react';
import style from "./Sidebar.module.css";
import { FaBars,FaTimes } from "react-icons/fa";

const SideBar = () => {
    const [isOpen,setIsOpen] = useState(true);
    const handleLogo = () => {
        setIsOpen(!isOpen);
    }
  return (
    <div className={`${style.sidebar}  ${isOpen ? '': style.active}`}>
        <div  onClick={handleLogo}  className={`cursor-pointer absolute top-3 right-3`}>
            {
                isOpen ? <FaTimes className='text-white text-3xl' /> : <FaBars className='text-white text-3xl' />
            }
        </div>
        
        <h2 className='text-white mt-5'>hello</h2>
    </div>
  )
}

export default SideBar