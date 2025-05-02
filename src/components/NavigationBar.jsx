import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";

const NavigationBar = ({toggleDarkMode,isDarkMode}) => {
  return (
    <div className='sticky top-0 z-50 px-6 py-3 w-full shadow-lg backdrop-blur-md bg-white/30 border border-white/20 rounded-b-2xl dark:bg-gray-900'>
    <div className='flex justify-between items-center max-w-7xl mx-auto'>

    
    <div className='text-4xl font-extrabold text-pink-500 '>
        <Link to="/">Travel</Link>
    </div>

    <div className='flex gap-6 items-center'>
    
    <button
    onClick={toggleDarkMode}
    className='text-sm py-2 px-2 rounded-full hover:bg-pink-400 dark:bg-gray-700 dark:text-white transition'
    >{
      isDarkMode ? <MdOutlineWbSunny className='text-xl'/> : <FaRegMoon className='text-xl'/>
    }
    </button>
    
    <div className='flex items-center bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full shadow-inner border border-gray-300'>
        <FaSearch className='mr-2 text-gray-600'/>
        <input
         type='text' 
         name='search..'
         placeholder='search..' 
         className='outline-none bg-transparent text-sm placeholder-gray-500'/>
    </div>

        <Link to="/blog" 
        className='text-gray-800 font-medium hover:text-pink-500 transition'
        >Blog</Link>
        <Link to='/contact us'
        className='text-gray-800 font-medium hover:text-pink-500 transition'
        >Contact Us</Link>
    </div>
    </div>
    </div>
  )
}

export default NavigationBar