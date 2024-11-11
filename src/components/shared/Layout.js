import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

export default function Layout() {
  return (
    <div className='flex flex-row bg-neutral-50 h-screen w-screen overflow-hidden'>
        {/* <div className='bg-sky-200'> */}
            <Sidebar/>
        {/* </div> */}
        <div className='flex-1'>
            {/* <div className='bg-teal-200'>header</div> */}
            <Header/>
            <div className='p-4'>{<Outlet/>}</div>
        </div>
        
    </div>
  )
}
