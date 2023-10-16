'use client';

import Link from 'next/link'
import { CgComment } from 'react-icons/cg';
import { Post } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

type Posts = Post & {
  _count: {
    comments: number;
  };
}

export default function Chat(){
  const [page, setPage] = useState(1)
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [selectedChannel, setSelectedChannel] = useState<string | null>(null)
  
  const { data: posts, isLoading } = useQuery<Posts[]>({
    queryKey: ['posts', page, selectedTag, selectedChannel],
    queryFn: async () => {
      let url = `/api/post?page=${page}`;
      if (selectedTag) url += `&tag=${selectedTag}`;
      if (selectedChannel) url += `&channel=${selectedChannel}`;

      const response = await fetch(url)
      const data = await response.json()
      return data
    }
  })

  return (
    <section className='mt-8 pt-8'>
      <div className='m-12 p-12'>
        <h1 className='text-sky-400 text-center text-3xl md:text-5xl font-extrabold leading-loose tracking-wide'>Autinerary&apos;s Community</h1>
        <p className='text-xl text-center mt-6 leading-7'>Choose a topic or/and a group channel  filter  when starting a discussion. Read our frequently asked questions (FAQ). Please read through community rules before posting a discussion post and report any abuse by clicking report under relevant post. To learn more about Autinerary, visit our website.</p>
      </div>
      <div className='bg-sky-400 bg-opacity-25 grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='p-4 px-12 mx-8 w-full'>
          <h2 className='text-2xl leading-10 tracking-wide'>Forum Posts</h2>
          <hr className='border-2 border-sky-400 my-4' />
          {
            posts?.map((post) => (
              <div key={post.id} className='bg-white p-6 rounded-xl mb-4'>
                <Link href={`/chat/${post.id}`} className='font-semibold text-sky-400 text-xl'>{post.title}</Link>
                <p className='flex items-center gap-x-2'>{post._count.comments} comment{post._count.comments > 1 && 's' } <CgComment /> </p>
              </div>
            ))
          }
        </div>

        <div className='p-4 px-12 mx-9'>

          <Link href='/chat/new' className='bg-white block my-4 rounded-2xl p-3 text-center'>
            <button className='font-bold text-sky-400 text-2xl'>Start a Discussion</button>
          </Link>

          <div className='bg-sky-400 p-4 rounded-xl mb-6 px-8'>
            <h2 className='text-3xl text-white tracking-wide leading-10 mb-3'>Discussion Topics</h2>

            <div className='inline-flex flex-col'>
              <button className='px-6 py-3 rounded-xl bg-sky-50 mb-3 text-start'>Introductions</button>
              <button className='px-6 py-3 rounded-xl bg-sky-50 mb-3 text-start'>Experiences</button>
              <button onClick={() => setSelectedTag('Vent')} className='px-6 py-3 rounded-xl bg-sky-50 mb-3 text-start'>Vent</button>
              <button className='px-6 py-3 rounded-xl bg-sky-50 mb-3 text-start'>Wins</button>
            </div>
          </div>

          <div className='bg-sky-400 p-4 rounded-xl mb-6 px-8'>
            <h2 className='text-3xl text-white tracking-wide leading-10 mb-3'>Group Channels</h2>

            <div className='inline-flex flex-col'>
              <button className='px-6 py-3 rounded-xl bg-sky-50 mb-3 text-start'>Siblings</button>
              <button className='px-6 py-3 rounded-xl bg-sky-50 mb-3 text-start'>Parents</button>
              <button className='px-6 py-3 rounded-xl bg-sky-50 mb-3 text-start'>Adult</button>
            </div>
          </div>
        </div>
    
      </div>
    </section>
  )
}