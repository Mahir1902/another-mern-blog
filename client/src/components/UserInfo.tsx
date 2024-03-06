import React from "react";

export default function UserInfo() {
  return (
    <div className="flex gap-3 items-center">
      <div className="h-12 w-12  relative">
        <img
          src="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="object-cover rounded-full w-full h-full"
        />
      </div>

      <div className="text-base flex flex-col">
        <span className="text-red-400 font-semibold">John Doe</span>
        <span className="font-medium">11.03.24</span>
      </div>
    </div>
  );
}
