'use client';

import Loader from "@/lib/loader";
import { notify } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react"

interface ReplyProps {
  postId: string
  parentId?: string
  parent?: boolean
}

export default function Reply({ postId, parent=false, parentId }: ReplyProps) {
  const [showReply, setShowReply] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [replyText, setReplyText] = useState('');
  const router = useRouter();
  
  const handleReply = async () => {
    setIsLoading(true)
    try {
      await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({ content:replyText, postId, parentId })
      })
      setReplyText('')
      setIsLoading(false)
      notify({ type: 'success', message: 'Comment added' })
      router.refresh()
    } catch(error) {
      console.log(error)
      notify({ type: 'error', message: 'Something went wrong' })
      setIsLoading(false)
    }
  }

  return (
    <section className={`${parent ? '' : 'px-8'}`}>
      <button onClick={()=> setShowReply(!showReply)} className={`rounded-lg px-6 ${parent ? 'py-1 mb-2 border border-black bg-white ' : 'py-3 mb-4 bg-sky-50 shadow'}`}>Reply</button>
      { showReply && (
        <div>
          <textarea onChange={(e) => setReplyText(e.target.value)} placeholder="Comment" value={replyText} className='p-3 w-full rounded-lg border'/>
          <div className="flex justify-end">
            { isLoading ? <Loader /> : (
              <button onClick={handleReply} className="mt-2 shadow-lg px-8 py-3 rounded-xl bg-gradient-to-r from-blue-400 to-fuchsia-500 text-white ">Post</button>
            )}
          </div>
        </div>
      )}
    </section>
  )
}