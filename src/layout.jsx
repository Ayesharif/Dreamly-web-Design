import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router'
import Footer from './footer'

export default function Layout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
