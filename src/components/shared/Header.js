import React from 'react'
import { HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch } from 'react-icons/hi'

export default function Header() {
  return (
    <div className='bg-white border-b px-4 h-14 flex justify-between items-center'>
       <div className='relative' >
           <HiOutlineSearch fontSize={20} 
           className='absolute  text-gray-400 top-1/2 -translate-y-1/2 left-3'/>
            <input type='text' placeholder='search...'
             className='text-sm focus:outline-none active:outline-none border border-gray-400 px-2 h-10  w-[20rem] rounded-md pl-11 pr-4'
            />
       </div>
       <div className='flex items-center gap-2 text-gray-400'>
            <HiOutlineChatAlt/>
            <HiOutlineBell/>
       </div>
    </div>
  )
}
