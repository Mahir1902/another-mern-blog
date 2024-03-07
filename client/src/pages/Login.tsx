import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex items-center justify-center mt-16">
      <form
        action=""
        className="flex flex-col gap-14 items-center justify-center bg-white/10 h-[40rem] w-[30rem] px-16 rounded-lg relative"
      >
        <h1 className="text-3xl absolute top-[5rem] font-bold">Login</h1>
        <div className="w-full">
          <input
            type="text"
            placeholder="Username"
            className=" py-2 bg-inherit focus:outline-none border-b  w-full focus:scale-105  transition"
          />
        </div>
        <div className="w-full">
          
            <input type="text" placeholder="Password" className="py-2 bg-inherit border-b focus:outline-none w-full focus:scale-105 transition" />
        </div>
        <button className="bg-white/10 w-full py-2 text-center rounded-xl text-lg font-semibold hover:scale-105 transition-all">Log in</button>
        <Link to={'/register'} className="underline">Don't have an account?</Link>
      </form>
    </div>
  );
}
