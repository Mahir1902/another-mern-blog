import { useEffect, useState } from 'react'
import { IoMdMoon } from "react-icons/io";
import { IoIosSunny } from "react-icons/io";

export default function ThemeToggle() {

  // Initialize darkMode state based on the localStorage value
  const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark');

  // This useEffect runs once on component mount to apply the initial theme
  // useEffect(() => {
  //   const theme = localStorage.getItem('theme');
  //   if (theme === 'dark') {
  //     document.documentElement.classList.add('dark');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //   }
  // }, []);

  

  useEffect(() => {
    if(darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
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
