'use client'

import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { SignupInput, signupSchema } from "@/lib/schema";
import { useRouter } from "next/navigation";
import { notify } from "@/lib/utils";
import Loader from "@/lib/loader";


export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  
  const { register, handleSubmit, formState: { errors, isSubmitting }} = useForm<SignupInput>({
    resolver: zodResolver(signupSchema),
    defaultValues: { email: '', password: '', firstName: '', lastName: '', confirmPassword: '', relationship: null }
  })

  const router = useRouter();

  const relationshipType = ['Sibling', 'Adult', 'Parent']

  const onSubmit: SubmitHandler<SignupInput> = async(data) => {
    try {
      const { confirmPassword, ...dataToSend } = data
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify(dataToSend),
        headers: {
          'Content-Type': 'application/json',
        }
      })
      if (!response.ok) {
        const errorMessage = await response.json()
        throw new Error(errorMessage.message);
      }

      notify({ type: 'success', message: 'Successfully Registered' });
      router.push('/login')
    } catch(error: any) {
      console.log(error)
      notify({ type: 'error', message: error })
    }
  }

  return (
    <section className="flex justify-center items-center h-screen mx-4 px-4 animate-bottom">
      <div className="w-full max-w-md rounded-3xl p-6 shadow-2xl">
        <h2 className="text-center text-2xl">Welcome to <span className="text-sky-400 font-bold">AUTINERARY</span></h2>
        <p className="text-neutral-400 mt-4 text-xl text-center">Have an account? <Link href='/login' className="text-sky-400 font-bold">Login instead</Link></p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
          <div className="mb-4">
            <label htmlFor="first_name" className="block font-normal my-2">First Name</label>
            <input 
              type="text" 
              id="firstName" 
              className="p-3 w-full border border-sky-400 rounded-md" 
              placeholder="First Name" 
              required
              disabled={isSubmitting}
              {...register('firstName')}
            />
            {errors.firstName?.message && (
              <div className='text-red-600'>{errors.firstName?.message}</div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="last_name" className="block font-normal my-2">Last Name</label>
            <input 
              type="text" 
              id="lastName" 
              className="p-3 w-full border border-sky-400 rounded-md" 
              placeholder="Last Name" 
              required
              disabled={isSubmitting}
              {...register('lastName')}
            />
            {errors.lastName?.message && (
              <div className='text-red-600'>{errors.lastName?.message}</div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block font-normal my-2">Email</label>
            <input 
              type="email" 
              id="email" 
              className="p-3 w-full border border-sky-400 rounded-md" 
              placeholder="Email" 
              required
              disabled={isSubmitting}
              {...register('email')}
            />
            {errors.email?.message && (
              <div className='text-red-600'>{errors.email?.message}</div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="relationship" className="block font-normal my-2">Relationship</label>
            <select id='relationship' disabled={isSubmitting} {...register('relationship')} className="p-3 w-full border border-sky-400 rounded-md" required>
              <option disabled>Select Relationship</option>
              {
                relationshipType.map((type) => (
                  <option key={type}>{type}</option>
                ))
              }
            </select>
            {errors.relationship?.message && (
              <div className='text-red-600'>{errors.relationship?.message}</div>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block font-normal my-2">Password</label>
            <div className="relative">
              <input 
                type={showPassword ? 'text': 'password'}
                id="password" 
                className="p-3 w-full border border-sky-400 rounded-md" 
                placeholder="Password"
                {...register("password")}
                disabled={isSubmitting} 
                required
              />
              <button onClick={() => setShowPassword((prev) => !prev)} className="absolute right-0 p-4">
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
            </div>
            { errors.password?.message && (
              <div className='text-red-600'>{errors.password?.message}</div>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block font-normal my-2">Confirm Password</label>
            <div className="relative">
              <input 
                type={showPassword ? 'text': 'password'}
                id="confirmPassword" 
                className="p-3 w-full border border-sky-400 rounded-md" 
                placeholder="Confirm Password"
                {...register("confirmPassword")}
                disabled={isSubmitting} 
                required
              />
              <button onClick={() => setShowPassword((prev) => !prev)} className="absolute right-0 p-4">
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
            </div>
            { errors.confirmPassword?.message && (
              <div className='text-red-600'>{errors.confirmPassword?.message}</div>
            )}
          </div>

          <button type='submit' className="mt-4 p-4 bg-sky-400 w-full rounded-lg text-white">
            { isSubmitting ? <Loader /> : 'SignUp' }
          </button>
        </form>
      </div>
    </section>
  )
}