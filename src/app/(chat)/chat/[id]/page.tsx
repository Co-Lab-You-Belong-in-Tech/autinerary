'use client';

import { PageProps } from "@/lib/props";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface Post {
  id: string
  authorId: string
  channelId: null | string
  content: string
  createdAt: Date
  title: string
  updatedAt: Date
  author: { firstName: string }
}

export default function SinglePost({ params: { id } }: PageProps) {
  const { data, isLoading } = useQuery<Post>({
    queryKey: ['post'],
    queryFn: async () => {
      const response = await fetch(`/api/post/${id}`)
      const post = await response.json()
      return post
    }
  })
  const { data: session } = useSession()
  const router = useRouter()
  if (!session) router.push('/login')

  console.log(data)
  if (!data) return 'No data'
  return (
    <section className='mt-8 py-8 bg-sky-400 bg-opacity-25'>
      <div className='my-6 py-6 bg-white rounded-xl px-12 mx-12'>
        <div className="flex justify-between p-8">
          <h1 className="text-sky-400 text-3xl md:text-4xl">{data.title}</h1>

          <p>{data.content}</p>
        </div>        
      </div>
    </section>
  )
}