import React from 'react'
import { FcBullish } from "react-icons/fc";
import { DASHBOARD_SIDBAR_BOTTON_LINK, DASHBOARD_SIDBAR_LINKS } from '../lib/consts/navigation';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { CiLogout } from "react-icons/ci";
const linkclasses="flex items-center gap-2 text-blue-400 bg-neutral-800 px-2 py-1 hover:bg-neutral-700 hover:text-white mt-1 rounded-sm"
export default function Sidebar() {
  return (
    <div className='bg-neutral-800 w-60 p-4 flex flex-col text-white'>
      <div className='flex items-center gap-2 px-1 py-3'>
        <FcBullish size={25}/>
        <span className='text-neutral-100 text-lg'>openShop</span>
        </div>
      <div className='flex-1 py-4 gap-1'>
        {DASHBOARD_SIDBAR_LINKS.map((item)=>{
            // return<div key={item.key}>
            //     {item.label}
            // </div>
            return<SidebarLink key={item.key} item={item}/>  
        })}
      </div>
      <div className='border-t border-neutral-400'>
        {DASHBOARD_SIDBAR_BOTTON_LINK.map((item)=>{
                return<SidebarLink key={item.key} item={item}/> 
        })}
        <div
            className={classNames(
            'text-red-500', linkclasses
            )}
        >
             <p className='text-xl'><CiLogout/></p>
             Logout hard
        </div>
      </div>
    </div>
  )
}
function SidebarLink({item}){
    const {pathname}  = useLocation()
    return(<>
     <Link to={item.path}
     className={classNames(linkclasses, pathname === item.path ? 'text-white bg-neutral-700':'text-neutral-400')}
    //  className='flex items-center gap-2 text-blue-400 bg-neutral-800 px-2 py-1 hover:bg-neutral-700 hover:text-white mt-1 rounded-sm active:bg-blue-400'
     >
        <p className='text-xl'>{item.icon}</p>
        {item.label}
     </Link>
    
    </>
       
    )
}
