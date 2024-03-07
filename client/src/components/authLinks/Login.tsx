import React from "react";
import { useLocation } from "react-router-dom";

type Props = {
  className?: string;
};

export default function Login({ className }: Props) {
  const isLoggedIn = false;

  const location = useLocation();


  if(location.pathname === "/write" && isLoggedIn){
    return (
      <div className="flex items-center gap-4">
          <button className="font-semibold bg-emerald-600 px-4 py-2 rounded-xl hover:scale-105 transition">
           Publish
         </button>
         <button className={className}>{isLoggedIn ? "Logout" : "Log in"}</button>
      </div>
    )
  }
  else if(location.pathname != "/write" && isLoggedIn) {
    return (
      <div className="flex items-center gap-4">
          <button className="font-semibold bg-indigo-600 px-4 py-2 rounded-xl hover:scale-105 transition">
           Write
         </button>
         <button className={className}>{isLoggedIn ? "Logout" : "Log in"}</button>
      </div>
    )
  }
  else {
    return (
      <div className="flex items-center gap-4">
          <button className={className}>{isLoggedIn ? "Logout" : "Log in"}</button>
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
