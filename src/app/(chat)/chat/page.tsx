'use client';

import Link from 'next/link'
import { CgComment } from 'react-icons/cg';
import { Post } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { newCategory } from '@/lib/schema';
import Pagination from '@/components/Pagination';
import { AiOutlineSearch } from 'react-icons/ai';
import { DebounceInput } from 'react-debounce-input'

type result = Post & {
  _count: {
    comments: number;
  };
}

type Posts = {
  count: number
  result: result[]
}

type Channel = newCategory &  { id: string; }

export default function Chat(){
  const [page, setPage] = useState(1)
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [selectedChannel, setSelectedChannel] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) router.push('/login')
  }, [session])
  
  const { data: posts, isLoading } = useQuery<Posts>({
    queryKey: ['posts', page, selectedTag, selectedChannel, searchQuery],
    queryFn: async () => {
      let url = `/api/post?page=${page}`;
      if (selectedTag) url += `&tag=${selectedTag}`;
      if (selectedChannel) url += `&channel=${selectedChannel}`;
      if (searchQuery) url += `&search=${searchQuery}`

      const response = await fetch(url)
      const data = await response.json()
      return data
    }
  })

  const { data: tags, isLoading: tagsLoading } = useQuery<Channel[]>({
    queryKey: ['tags'],
    queryFn: async () => {
      try {
        const response = await fetch('/api/tags');
        const data = await response.json();
        return data;
      } catch (error) {
        return []
      }
    }
  });

  const { data: channels, isLoading: channelsLoading } = useQuery<Channel[]>({
    queryKey: ['channel'],
    queryFn: async () => {
      try {
        const response = await fetch('/api/channel');
        const data = await response.json();
        return data;
      } catch (error) {
        return []
      }
    }
  });

  const handleselectedTags = (tagName: string) => {
    if (tagName === selectedTag) {
      setSelectedTag(null)
      return
    }
    setSelectedChannel(null)
    setSelectedTag(tagName)
  }

  const handleselectedChannel = (channelId: string) => {
    if (channelId === selectedChannel) {
      setSelectedChannel(null)
      return
    }
    setSelectedTag(null)
    setSelectedChannel(channelId);
  }

  const paginate = (pageNumber: number) => setPage(pageNumber)

  return (
    <section className='mt-8 pt-8'>
      <div className='m-12 p-12'>
        <h1 className='text-sky-400 text-center text-3xl md:text-5xl font-extrabold leading-loose tracking-wide'>Autinerary&apos;s Community</h1>
        <p className='text-xl text-center mt-6 leading-7'>Choose a topic or/and a group channel  filter  when starting a discussion. Read our frequently asked questions (FAQ). Please read through community rules before posting a discussion post and report any abuse by clicking report under relevant post. To learn more about Autinerary, visit our website.</p>
      </div>

      <div className='bg-sky-400 bg-opacity-25 grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='p-4 px-12 mx-8 w-full'>
          <div className='relative mb-6'>
            <DebounceInput 
              value={searchQuery}
              minLength={3}
              debounceTimeout={620}
              placeholder='Search ....'
              onChange={(e)=>setSearchQuery(e.target.value)}
              className='p-3 w-full rounded-xl'
            />

            <AiOutlineSearch size={20} className='absolute right-3 top-1/2 transform -translate-y-1/2' />
          </div>

          <h2 className='text-2xl leading-10 tracking-wide'>Forum Posts</h2>
          <hr className='border-2 border-sky-400 my-4' />
          {
            posts?.result?.map((post) => (
              <div key={post.id} className='bg-white p-4 rounded-xl mb-4'>
                <Link href={`/chat/${post.id}`} className='font-semibold text-sky-400 text-xl'>{post.title}</Link>
                <p className='flex items-center gap-x-2'>{post._count.comments} comment{post._count.comments > 1 && 's' } <CgComment /> </p>
              </div>
            ))
          }

          { posts && (
            <Pagination totalPosts={posts.count} postsPerPage={15} paginate={paginate} />
          )}

        </div>

        <div className='p-4 px-12 mx-9'>

          <Link href='/chat/new' className='bg-white block my-4 rounded-2xl p-3 text-center'>
            <button className='font-bold text-sky-400 text-2xl'>Start a Discussion</button>
          </Link>

          <div className='bg-sky-400 p-4 rounded-xl mb-6 px-8'>
            <h2 className='text-3xl text-white tracking-wide leading-10 mb-3'>Discussion Topics</h2>

            <div className='inline-flex flex-col'>
              { tags?.map((tag) => (
                <button key={tag.id} onClick={() => handleselectedTags(tag.name)} className={`px-6 py-3 rounded-xl mb-3 text-start ${selectedTag === tag.name ? 'bg-[#ff4bfd] text-white' : 'bg-sky-50'}`}>{tag.name}</button>
              ))}
            </div>
          </div>

          <div className='bg-sky-400 p-4 rounded-xl mb-6 px-8'>
            <h2 className='text-3xl text-white tracking-wide leading-10 mb-3'>Group Channels</h2>

            <div className='inline-flex flex-col'>
              { channels?.map((channel) => (
                <button key={channel.id} onClick={()=> handleselectedChannel(channel.id)} className={`px-6 py-3 rounded-xl mb-3 text-start ${selectedChannel === channel.id ? 'bg-[#ff4bfd] text-white' : 'bg-sky-50' }`}>{channel.name}</button>
              ))}
            </div>
          </div>
        </div>
    
      </div>
    </section>
  )
}