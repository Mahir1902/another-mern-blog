import { Link } from "react-router-dom"
import UserInfo from "./UserInfo"


export default function Comments() {

    const status = 'authenticated'

  return (
    <div className="mt-[3rem]">
        <h1 className="text-4xl font-semibold mb-7">Comments</h1>
        {status === 'authenticated' ? (
                <div className="flex items-center justify-between gap-5 ">
                    <textarea name="" id="" placeholder="Write a comment..." className="p-5 w-full rounded-lg bg-white/10 backdrop-blur-md  focus:outline-none"/>
                    <button className="bg-zinc-600 py-4 px-5 rounded-lg font-medium active:scale-90  transition-all hover:scale-105">Send</button>
                </div>
        ):
        (
            <Link to={'/login'}>
                Login to write a comment
            </Link>
        )}

        <div className="my-5 flex flex-col gap-14 max-h-[70rem] overflow-y-scroll scrollbar scrollbar-w-3 scrollbar-thumb-black/30 scrollbar-thumb-rounded-full hover:scrollbar-thumb-black/50  ">
            <div className="">
                <UserInfo/>
                <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sint, iste facilis nostrum nam ad! </p>
            </div>
            <div className="">
                <UserInfo/>
                <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sint, iste facilis nostrum nam ad! </p>
            </div>
            <div className="">
                <UserInfo/>
                <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sint, iste facilis nostrum nam ad! </p>
            </div>
            <div className="">
                <UserInfo/>
                <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sint, iste facilis nostrum nam ad! </p>
            </div>
            <div className="">
                <UserInfo/>
                <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sint, iste facilis nostrum nam ad! </p>
            </div>
            <div className="">
                <UserInfo/>
                <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sint, iste facilis nostrum nam ad! </p>
            </div>
            <div className="">
                <UserInfo/>
                <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sint, iste facilis nostrum nam ad! </p>
            </div>
            <div className="">
                <UserInfo/>
                <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sint, iste facilis nostrum nam ad! </p>
            </div>
            <div className="">
                <UserInfo/>
                <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sint, iste facilis nostrum nam ad! </p>
            </div>
            <div className="">
                <UserInfo/>
                <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sint, iste facilis nostrum nam ad! </p>
            </div>
            <div className="">
                <UserInfo/>
                <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sint, iste facilis nostrum nam ad! </p>
            </div>
            <div className="">
                <UserInfo/>
                <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sint, iste facilis nostrum nam ad! </p>
            </div>
            <div className="">
                <UserInfo/>
                <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sint, iste facilis nostrum nam ad! </p>
            </div>
            <div className="">
                <UserInfo/>
                <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sint, iste facilis nostrum nam ad! </p>
            </div>
            
        </div>
    </div>
  )
}
