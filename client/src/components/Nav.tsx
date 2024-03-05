import React, { useState } from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { TiSocialInstagram } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

import ThemeToggle from "./ThemeToggle";
import Login from "./authLinks/Login";
import { Links } from "../constants";


export default function Nav() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between  h-[6.25rem]">
      <div className="flex gap-2 flex-1 max-lg:hidden">
        <FaSquareFacebook className="h-6 w-6" />
        <TiSocialInstagram className="h-6 w-6" />
        <FaYoutube className="h-6 w-6" />
        <FaXTwitter className="h-6 w-6" />
      </div>
      <div className=" flex-1 lg:text-center text-left font-bold xl:text-4xl">
        MyBlog
      </div>
      <div className="flex md:gap-3 lg:gap-4 xl:gap-5 flex-1 text-base items-center justify-center max-md:justify-end max-md:gap-5">
        <ThemeToggle />

        {Links.map((link) => (
          <a
            href={link.href}
            key={link.name}
            className="xl:text-[20px] lg:text-[18px] hidden md:inline-block"
          >
            {link.name}
          </a>
        ))}
        <div className="hidden md:block">
          <Login className="bg-zinc-700 text-white font-semibold px-4 py-2 rounded-xl hover:bg-opacity-90 hover:scale-105 transition-all"/>
        </div>
        <button className="md:hidden text-black dark:text-white" type="button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <RxHamburgerMenu className="h-6 w-6" />
        </button>
        {isMenuOpen && (
          <div className="menu sm:hidden dark:bg-slate-900">
            {Links.map(link => (
              <a href={link.href} key={link.name} className="block">
                {link.name}
              </a>
            
            ))}
            <Login className=" bg-zinc-700 text-white font-semibold  px-6 py-3 flex justify-center items-center text-2xl rounded-xl active:scale-90 active:bg-opacity-90 transition-all"/>
          </div>
        )}
      </div>
    </div>
  );
}
