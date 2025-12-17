import React from 'react'
import {MdFastfood} from 'react-icons/md';
import {IoSearch} from 'react-icons/io5';
import {LuShoppingBag} from 'react-icons/lu';
const Nav = () => {
  return (
    <div className='w-full h-15 md:h-25 bg-red-200 flex justify-between items-center px-2 md:px-8 '>
      <div className='w-10 md:h-15 md:w-15 rounded-md shadow-xl h-10 bg-white flex justify-center items-center'>
        <MdFastfood className='h-7.5 w-7.5 text-green-500'/>
      </div>
<form className='w-[70%] rounded-md shadow-md h-[60%] bg-white flex items-center px-5 gap-5'>
    <IoSearch className='text-green-500 w-5 h-5'/>
    <input className='w-full md:text-[20px] text-[15px] outline-none' type='text' placeholder='Search items...'/>
</form>
      <div className='w-10 md:w-15 relative h-10 md:h-15 rounded-md shadow-xl bg-white flex justify-center items-center'>
<span className='absolute top-0 right-1 md:top-2 text-green-500 font-bold md:text-[18px] text-[12px]'>0</span>
        <LuShoppingBag className='md:w-7.5 md:h-7.5 top-3 h-4 w-4 text-green-500'/>
      </div>
    </div>
  )
}

export default Nav
