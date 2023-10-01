'use client'

import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { signIn } from "next-auth/react";
import { LoginInput, loginSchema } from "@/lib/schema";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Loader from "@/lib/loader";

export default function Login(){
  const [showPassword, setShowPassword] = useState(false);
  const searchParams = useSearchParams();
  const authError = searchParams.get('error')

  const { register, handleSubmit, formState: { errors, isSubmitting }} = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' }
  })

  const onSubmit: SubmitHandler<LoginInput> = async(data) => {
    await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: true,
      callbackUrl: '/chat'
    }); 
  }
  return (
    <section className="flex justify-center items-center h-screen mx-4 px-4 animate-bottom">
      <div className="w-full max-w-md rounded-3xl p-6 shadow-2xl">
        <h2 className="text-center text-2xl">Welcome to <span className="text-sky-400 font-bold">AUTINERARY</span></h2>
        <p className="text-neutral-400 mt-4 text-xl text-center">Need an account? <Link href='/signup' className="text-sky-400 font-bold">Sign up</Link></p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
          {
            authError && (
              <p className="text-red-500 mb-4 text-center">Incorrect email or Password</p>
            )
          }
          <div className="mb-6">
            <label htmlFor="email" className="block font-normal my-2">Enter your email address</label>
            <input 
              type="text" 
              id="email" 
              className="p-4 w-full border border-sky-400 rounded-md" 
              placeholder="Email" 
              required
              disabled={isSubmitting}
              {...register('email')}
            />
            {errors.email?.message && (
              <div className='text-red-600'>{errors.email?.message}</div>
            )}
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block font-normal my-2">Enter your Password</label>
            <div className="relative">
              <input 
                type={showPassword ? 'text': 'password'}
                id="password" 
                className="p-4 w-full border border-sky-400 rounded-md" 
                placeholder="Password"
                {...register("password")}
                disabled={isSubmitting} 
                required
              />
              <button onClick={() => setShowPassword((prev) => !prev)} className="absolute right-0 p-5">
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
            </div>
            <p className="text-sky-400 text-right my-2">Forgot Password</p>
            { errors.password?.message && (
              <div className='text-red-600'>{errors.password?.message}</div>
            )}
          </div>
          
          <button type='submit' className="mt-4 p-4 bg-sky-400 w-full rounded-lg text-white">
            {
              isSubmitting ? <Loader /> : 'Sign In'
            }
          </button>
        </form>
      </div>
    </section>
  )
}