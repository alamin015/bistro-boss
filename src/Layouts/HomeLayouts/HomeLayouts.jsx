import React from 'react'
import Header from '../../Shared/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../Shared/Footer/Footer'

const HomeLayouts = () => {
  return (
    <>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </>
  )
}

export default HomeLayouts