'use client';

import { ChangeEvent, useEffect, useState } from "react";
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PostSchema, newPost, newCategory } from "@/lib/schema";
import getQueryClient, { notify } from "@/lib/utils";
import { useSession } from "next-auth/react";
import Loader from "@/lib/loader";
import { useRouter } from "next/navigation";
import TipTapMenuBar from "@/components/ui/TipTapMenuBar";
import { useMutation, useQuery } from "@tanstack/react-query";

type Channel = newCategory &  { id: string; }
export default function NewDiscussion(){
  const router = useRouter();
  const [editorState, setEditorState] = useState('')
  const [showTopics, setShowTopics] = useState(false)
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const { data: session } = useSession()
  const queryClient = getQueryClient();

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

  
  const editor = useEditor({
    extensions: [ StarterKit,],
    content: editorState,
    onUpdate: ({ editor }) => setEditorState(editor.getHTML())
  })

  const { register, handleSubmit, formState: { errors, isSubmitting }} = useForm<newPost>({
    resolver: zodResolver(PostSchema),
    defaultValues: {
      title: '', tags: [], channel: ''
    }
  })

  useEffect(()=> {
    if (!session) router.push('/login')
  })
  
  const { mutate } = useMutation({
    mutationFn: async (data: newPost) => {
      const authorId = session?.user?.email
      try {
        const response = await fetch('/api/post', {
          method: 'POST',
          body: JSON.stringify({ title:data.title, content:editorState, authorId, channelId:data.channel, categories: selectedTags})
        })
  
        if (response.ok) {
          notify({ type: 'success', message: 'Post created sucessfully' })
          return router.push('/chat')
        } else throw new Error('Something occured')
      } catch(error) {
        notify({ type: 'error', message: 'Something occured!' })
      }
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['posts'] })
  });

  const submitPost: SubmitHandler<newPost> = async(data) => {      
    if (!editorState || editorState === '<p></p>') return notify({ type: 'error', message: 'No editor text' })
    if (!selectedTags || selectedTags.length === 0) return notify({ type: 'error', message: 'Select a Tag' })
    if (!data.channel || data.channel === 'Select Channel') return notify({ type: 'error', message: 'Select a Valid Channel' })
    
    mutate(data)
  }

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (selectedTags.includes(value)) {
      setSelectedTags(selectedTags.filter(item => item !== value))
    } else setSelectedTags([ ...selectedTags, value ]);

  }

  return (
    <section className="mx-6 md:mx-12 mt-8 md:mt-12 p-3 md:p-6">
      <h1 className="font-bold text-3xl md:text-4xl mt-8 mb-4">Start a Discussion</h1>
      
      <form onSubmit={handleSubmit(submitPost)}>
        <div>
          <input 
            type='text' 
            placeholder="Title"
            disabled={isSubmitting}
            required
            {...register('title')} 
            className="p-4 my-8 w-full border-2 border-gray-200" 
          />
          {
            errors.title?.message && (
              <div className='text-red-600'>{errors.title?.message}</div>
            )
          }
        </div>
        
        <div>
          { editor && <TipTapMenuBar editor={editor}/> }
          <div className="prose max-w-full">
            <EditorContent 
              editor={editor} 
              className="border-2 p-4 border-gray-200"
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="flex my-4 gap-4 items-center">
          <div className="py-3 px-6 bg-zinc-300 rounded-xl">
            <button onClick={()=> setShowTopics(!showTopics)}>Discussion Topic</button>
            <div className="flex flex-col">
              { showTopics && 
                tags?.map((tag) => (
                  <label key={tag.id} htmlFor={tag.name}>
                    <input 
                      className='p-4 mx-4 mb-2' 
                      id={tag.name} 
                      type="checkbox" 
                      value={tag.id} 
                      key={tag.name}
                      onChange={handleCheckboxChange} 
                    />
                    {tag.name}
                  </label>
                ))
              }
            </div>
          </div>
          
          <div>
            <select className='py-3 px-6 rounded-xl' {...register('channel')} required>
              <option defaultValue='Select Channel'>---Select a Channel---</option>
              { channels?.map((channel) => (
                  <option key={channel.name} value={channel.id}>{channel.name}</option>
                ))
              }
            </select>
          </div>
        </div>

        <hr />


        <div className="flex mt-8 gap-6 justify-end">
          <button className="px-8 py-4 bg-zinc-300 hover:bg-zinc-500 rounded-3xl">Cancel</button>
          <button type='submit' className="px-8 py-3 bg-zinc-300 hover:bg-zinc-500 hover:text-white rounded-3xl">
            { isSubmitting ? <Loader /> : 'Post' }
          </button>
        </div>
      </form>
    

    </section>
  )
}