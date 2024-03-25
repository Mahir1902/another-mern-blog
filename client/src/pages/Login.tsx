import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { ImSpinner10 } from "react-icons/im";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";

import { useUserStore } from "../store/userStore";

type FormValues = {
  usernameOrEmail: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const {isLoggedIn, setIsLoggedIn, setUsername} = useUserStore()


  const navigate = useNavigate()

  // useEffect(() => {

  //   const checkLoggedIn = async () => {
  //     const res = await axios.get('http://localhost:3000/api/profile/getProfile', {withCredentials: true})

  //     if(res.status === 200) {
  //       navigate('/')
  //     }
  //   }

  //   checkLoggedIn()

  // },[])

  if(isLoggedIn) navigate('/')

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const { usernameOrEmail, password } = data;
    
    try {
      const res = await axios.post('http://localhost:3000/api/auth/login', {usernameOrEmail, password}, {withCredentials: true})

    if(res.status === 200) {
      toast.success('Logged in successfully', {className: 'bg-gray-500 text-white font-medium'})
      setIsLoggedIn(true)
      setUsername(res.data.user.username)
      navigate('/')
    }
    } catch (error: any) {
      if(error instanceof AxiosError) {

        const errorMessage = error.response?.data.message
        toast.error(errorMessage, {className: 'bg-gray-500 text-white font-medium'})
      }
      else {
        toast.error('An error occured', {className: 'bg-gray-500 text-white font-medium'})
      }
    }
    
    
    
  };

  return (
    <div className="flex items-center justify-center mt-16">
      <form
        action=""
        className="flex flex-col gap-8 items-center justify-center bg-white/10 h-[40rem] w-[30rem] px-16 rounded-lg relative"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-3xl absolute top-[5rem] font-bold">Login</h1>
        <div className="w-full flex flex-col gap-3">
          <input
            type="text"
            placeholder="Username or Email"
            className={twMerge(
              " py-2 bg-inherit focus:outline-none border-b  w-full focus:scale-105  transition",
              errors.usernameOrEmail &&
                "placeholder-red-500 border-red-500 text-red-500"
            )}
            {...register("usernameOrEmail", {
              required: "This field is required",
            })}
          />
          {errors.usernameOrEmail && (
            <motion.p
              initial={{ y: 0 }}
              animate={{ y: 5 }}
              className="text-red-500 text-sm"
            >
              {errors.usernameOrEmail.message}
            </motion.p>
          )}
        </div>
        <div className="w-full flex flex-col gap-3">
          <input
            type="password"
            placeholder="Password"
            className={twMerge(
              "py-2 bg-inherit border-b focus:outline-none w-full focus:scale-105 transition",
              errors.password &&
                "placeholder-red-500 border-red-500 text-red-500"
            )}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
          />
          {errors.password && (
            <motion.p className="text-red-500 text-sm" initial={{y: 0}} animate={{y:5}}>{errors.password.message}</motion.p>
          )}
        </div>
        <button
          type="submit"
          className="bg-white/10 w-full py-2 text-center rounded-xl text-lg font-semibold hover:scale-105 flex justify-center items-center transition-all"
        >
          {isSubmitting ? <ImSpinner10 className="animate-spin w-6 h-6" /> : "Login"}
        </button>
        <Link to={"/register"} className="underline">
          Don't have an account?
        </Link>
      </form>
    </div>
  );
}
