import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LogoutButton from "../LogoutButton";
import { useUserStore } from "../../store/userStore";

type Props = {
  className?: string;
};

export default function Login({ className }: Props) {
  const {isLoggedIn, setIsLoggedIn} = useUserStore()

  const navigate = useNavigate()

  // useEffect(() => {
  //   const checkLoggedIn = async () => {
      
  //       const res = await axios.get('http://localhost:3000/api/profile/getProfile', {withCredentials: true})

  //       if(res.status === 200) {
  //         setIsLoggedIn(true)
  //       }
  //       else {
  //         setIsLoggedIn(false)
  //       }
      
  //   }

  //   checkLoggedIn()
  // },[])


  const location = useLocation();


  if(location.pathname === "/write" && isLoggedIn){
    return (
      <div className="flex items-center gap-4">
          <button className="font-semibold bg-emerald-600 px-4 py-2 rounded-xl hover:scale-105 transition">
           Publish
         </button>
         <LogoutButton className={className!}/>
      </div>
    )
  }
  else if(location.pathname != "/write" && isLoggedIn) {
    return (
      <div className="flex items-center gap-4">
          <button className="font-semibold bg-indigo-600 px-4 py-2 rounded-xl hover:scale-105 transition" onClick={() => navigate('/write')}>
           Write
         </button>
         <LogoutButton className={className!}/>
      </div>
    )
  }
  else {
    return (
      <div className="flex items-center gap-4">
          <button className={className} onClick={() => navigate('/login')}>Login</button>
      </div>
    )
  }

  // return (
  //   <div className="flex items-center gap-4">
  //     {isLoggedIn && location.pathname === "/write" ? (
  //       <button className="font-semibold bg-emerald-600 px-4 py-2 rounded-xl hover:scale-105 transition">
  //         Publish
  //       </button>
  //     ) : (
  //       <button className="font-semibold bg-indigo-600 px-4 py-2 rounded-xl hover:scale-105 transition">
  //         Write
  //       </button>
  //     )}
  //     <button className={className}>{isLoggedIn ? "Logout" : "Log in"}</button>
  //   </div>
  // );
}
