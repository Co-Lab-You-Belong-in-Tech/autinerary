'use client';

import Loader from "@/lib/loader";
import { newCategory, CategorySchema } from "@/lib/schema";
import { notify } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

export default function Channel() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(()=> {
    if (!session) router.push('/login')
  }, [session])

  const { register, handleSubmit, reset, formState: { errors, isSubmitting }} = useForm<newCategory>({
    resolver: zodResolver(CategorySchema),
    defaultValues: { name: '', description: ''}  
  })

  const onSubmit: SubmitHandler<newCategory> = async(data) => {
    try {
      await fetch('/api/channel', {
        method: 'POST',
        body: JSON.stringify({ ...data, creatorId:session?.user?.email })
      })
      reset();
      notify({ type:'success', message:'Successfully added' })
    } catch (error) {
      notify({ type:'error', message:'An error occured' })
    }
  }

  return (
    <section className="h-screen flex items-center justify-center">

      <form onSubmit={handleSubmit(onSubmit)} className=" p-6 mx-8 w-full">

        <h2 className="font-bold text-3xl md:text-4xl mt-8 mb-4">New Channel</h2>

        <div className="w-full">
          <input type='text' placeholder="Channel Name" disabled={isSubmitting} className="p-4 w-full border-2 border-gray-200 rounded-xl mb-4" {...register('name')} required/>
          { errors?.name?.message && <div className='text-red-600'>{errors.name?.message}</div> }
        </div>

        <div>
          <input type='text' placeholder="Channel Description" disabled={isSubmitting} className="p-4 w-full border-2 border-gray-200 rounded-xl mb-4" {...register('description')} />
          { errors?.description?.message && <div className='text-red-600'>{errors.description?.message}</div> }
        </div>

        <button type='submit' className="px-8 py-3 bg-zinc-300 hover:bg-zinc-500 hover:text-white rounded-3xl">
          { isSubmitting ? <Loader /> : 'Add Channel' }
        </button>
      </form>
    </section>
  )
}