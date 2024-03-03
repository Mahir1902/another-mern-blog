import React, { useEffect, useState } from 'react'
import { IoMdMoon } from "react-icons/io";
import { IoIosSunny } from "react-icons/io";

export default function ThemeToggle() {


  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if(darkMode) {
      document.documentElement.classList.add('dark');
    }
    else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }
  

  console.log(darkMode)

  return (
    <div className='flex hover:cursor-pointer h-6 w-11 border rounded-xl bg-black text-white dark:text-black dark:bg-white items-center justify-between relative dark:border-white' onClick={toggleDarkMode} >
        <IoMdMoon className='h-4 w-4' />
        <div className={`h-4 w-4 bg-white dark:bg-black rounded-full absolute transition-transform duration-300 ease-in-out ${darkMode ? 'translate-x-6' : 'translate-x-0.5'}`}></div>
        <IoIosSunny className='h-4 w-4'/>
    </div>
  )
}
