// Layout.jsx
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import MobileNav from './components/MobileNav'

const Layout = () => {
  return (
    <div className='px-4'>
      <Navbar />
      <div className='sm:hidden py-4 flex gap-4'>
      <MobileNav /> 
      <h1 className='font-bold text-xl'>Website Name</h1>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
