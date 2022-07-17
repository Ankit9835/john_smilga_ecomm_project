import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Sidebar } from '../components'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Home
