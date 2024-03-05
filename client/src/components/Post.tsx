import { Link } from "react-router-dom";

export default function Post() {
  return (
    <div className="flex mb-12 items-center gap-12">
      {/* image container */}
      <div className="flex-1 h-[22rem] lg:block relative hidden">
        <img src="https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?q=80&w=1596&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="object-cover rounded-lg"/>
      </div>
      {/* Title, desc, category, date */}
      <div className="flex-1 flex flex-col gap-6">
        <div className='flex gap-4'>
          <span className="text-gray-400">11.02.2023</span>
          <span className="font-medium text-red-400">TECH</span>
        </div>
        <Link to={"/"}>
          <h1 className="text-2xl font-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
        </Link>
        <p className="font-light text-lg text-zinc-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, est ad
          esse ducimus voluptates dolor, explicabo similique autem itaque
          asperiores doloremque illo temporibus! Vero neque corrupti animi,
          laboriosam voluptatum beatae!
        </p>
        <Link to={"/"} className="border-b w-max border-red-400">Read More</Link>
      </div>
    </div>
  );
}
