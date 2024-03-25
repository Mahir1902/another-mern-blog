import axios, { AxiosError } from "axios";

import { SubmitHandler, useForm } from "react-hook-form";

import { Link, useNavigate } from "react-router-dom";
import { DevTool } from "@hookform/devtools";
import { twMerge } from "tailwind-merge";

import { ImSpinner10 } from "react-icons/im";
import toast from "react-hot-toast";
import { useUserStore } from "../store/userStore";

type FromValues = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
};



export default function Register() {
  const form = useForm<FromValues>();
  const { register, control, handleSubmit, formState: {errors, isSubmitting } } = form;

  const {setIsLoggedIn} = useUserStore()

  const navigate = useNavigate()

  const onSubmit: SubmitHandler<FromValues> = async (data) => {
    const { email, username, password, confirmPassword } = data;

    console.log(data)

    if (password !== confirmPassword) {
      console.log("Passwords do not match");
    }

    try {
      const res = await axios.post(
        "http://localhost:3001/api/auth/register",
        { email, username, password },
        { withCredentials: true }
      );
        if(res.status === 201) {
          toast.success('Account created successfully', {
            className: 'bg-gray-500 text-white font-medium'
          })
          setIsLoggedIn(true)
          navigate('/')
          
        }
      console.log(res.data);
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data.message
        toast.error(errorMessage, {className: 'bg-gray-500 text-white font-medium'})
        console.log(error);
      }
    }
  };

  return (
    <div className="flex items-center justify-center mt-16">
      <form
        action=""
        className="flex flex-col gap-10 items-center justify-center bg-white/10 h-[48rem] w-[30rem] px-16 rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <h1 className="text-3xl font-bold mt-8">Register</h1>
        <div className="w-full flex flex-col gap-3 ">
          <input
            type="email"
            id="email"
            placeholder='Email'
            className={twMerge(' py-2 bg-inherit focus:outline-none border-b w-full   transition focus:scale-105', errors.email && 'placeholder-red-600 border-red-600 text-red-600')}
            {...(register("email", {required: 'Email is required', validate: (value) => {
              if (!value.includes('@')) {
                return 'Email must contain @'
              }
              return true
            } 
          } ))}
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>
        <div className="w-full flex flex-col gap-3">
          <input
            type="text"
            id="username"
            placeholder="Username"
            className={twMerge('py-2 bg-inherit focus:outline-none border-b  w-full focus:scale-105  transition', errors.username && 'placeholder-red-500 border-red-500 text-red-500')}
            required
            {...register("username", {required: 'Username is required'})}
          />
          {errors.username && <p className="text-red-500">{errors.username.message}</p>}
        </div>
        <div className="w-full flex flex-col gap-3">
          <input
            type="password"
            id="passowrd"
            placeholder="Password"
            className={twMerge('py-2 bg-inherit border-b focus:outline-none w-full focus:scale-105 transition', errors.password && 'placeholder-red-500 border-red-500 text-red-500')}
            {...register("password", {required: 'Password is required', minLength: {value: 6, message: 'Password must be at least 6 characters long'}})}
            
          />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        </div>
        <div className="w-full flex flex-col gap-3">
          <input
            type="password"
            id="confrimPassword"
            placeholder="Confirm Password"
            className={twMerge('py-2 bg-inherit border-b focus:outline-none w-full focus:scale-105 transition', errors.confirmPassword && 'placeholder-red-500 border-red-500 text-red-500')}
            {...register("confirmPassword", {required: 'Password confirmation is required', validate: (value) => value === form.getValues('password') || 'Passwords do not match' })}
            required
          />
          {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
        </div>
        
        <button
          type="submit"
          className="bg-white/10 w-full py-2 text-center rounded-xl text-lg font-semibold hover:scale-105 transition-all flex justify-center"
        >
          {isSubmitting ? <ImSpinner10 className="animate-spin w-6 h-6"/> : 'Register'}
        </button>
        <Link
          to={"/login"}
          className="underline hover:scale-105 transition mb-5"
        >
          Already have an account?
        </Link>
      </form>
      <DevTool control={control} />
    </div>
  );
}
