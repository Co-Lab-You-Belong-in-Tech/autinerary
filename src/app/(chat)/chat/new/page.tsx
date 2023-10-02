'use client';

import { useCallback, useEffect, useState } from "react"
import { createEditor, Editor, BaseEditor, Descendant, Node } from 'slate';
import { Slate, Editable, withReact, ReactEditor, RenderLeafProps } from 'slate-react'
import { FaBold } from 'react-icons/fa';
import { AiOutlineItalic } from "react-icons/ai";
import { notify } from "@/lib/utils";
import { useSession } from "next-auth/react";
import Loader from "@/lib/loader";
import { useRouter } from "next/navigation";

type CustomElement = { type: 'paragraph'; children: CustomText[] }
type CustomText = { text: string; bold?: boolean; italic?: boolean }

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}

const serialize = (value: Node[]) => {
  return (
    value.map(n => Node.string(n)).join('\n')
  )
}

const Leaf: React.FC<RenderLeafProps> = ({ attributes, children, leaf }) => {
  return (
    <span 
      {...attributes} 
      style = {{
        fontWeight: leaf.bold ? 'bold' : 'normal',
        fontStyle: leaf.italic ? 'italic' : 'normal'
      }}
    >
      {children}
    </span>
  )
}

const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [{ text: 'Text' }],
  },
]


export default function NewDiscussion(){
  const router = useRouter();
  const [editor] = useState(() => withReact(createEditor()))
  const [isBoldActive, setIsBoldActive] = useState(false);
  const [isItalicActive, setIsItalicActive] = useState(false);
  const [title, setTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const { data: session } = useSession()

  const renderLeaf = useCallback((props: RenderLeafProps) => {
    return <Leaf {...props} />
  }, [])

  useEffect(() => {
    if (!session) router.push('/login')
  }, [session])
  
  const submitPost = async() => {
    setIsLoading(true)
    const content = localStorage.getItem('content')
    const authorId = session?.user?.email

    if (title === '' || title === null) {
      notify({ type:'error', message:"Title is empty!" })
      return
    }
    if (content === '' || content === null) {
      notify({ type:'error', message:"Content is empty!" })
      return
    }
    try {
      const response = await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({ title, content, authorId })
      })
      if (response.ok) {
        notify({ type: 'success', message: 'Post created sucessfully' })
        setTitle('')
        setIsLoading(false)
        localStorage.setItem('content', '')
        router.push('/chat')
      }
    } catch(error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  const CustomEditor = {
    isBoldMarkActive(editor: Editor) {
      const marks = Editor.marks(editor)
      return marks ? marks.bold === true : false
    },
  
    isItalicMarkActive(editor: Editor) {
      const marks = Editor.marks(editor)
      return marks? marks.italic === true: false
    },
  
    toggleBoldMark(editor: Editor) {
      const isActive = CustomEditor.isBoldMarkActive(editor)
      if (isActive) {
        Editor.removeMark(editor, 'bold')
        setIsBoldActive(false)
      } else {
        Editor.addMark(editor, 'bold', true)
        setIsBoldActive(true)
      }
    },
  
    toggleItalicMark(editor: Editor) {
      const isActive = CustomEditor.isItalicMarkActive(editor)
      if (isActive) {
        Editor.removeMark(editor, 'italic')
        setIsItalicActive(false)
      } else {
        Editor.addMark(editor, 'italic', true)
        setIsItalicActive(true)
      }
    }
  }

  

  return (
    <section className="mx-6 md:mx-12 mt-8 md:mt-12 p-3 md:p-6">
      <h1 className="font-bold text-3xl md:text-4xl mt-8 mb-4">Start a Discussion</h1>

      <input type='text' onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Title" className="p-4 my-8 w-full border-2 border-gray-200" />
      <div className=" border-2 border-gray-200 flex gap-4">
        <button
          className={`p-4 ${isBoldActive ? 'bg-[#2998ff]' : ''}`}
          onMouseDown={event => {
            event.preventDefault()
            CustomEditor.toggleBoldMark(editor)
          }}
        >
          <FaBold size={24} />
        </button>
        <button
          className={`p-4 ${isItalicActive ? 'bg-[#2998ff]' : ''}`}
          onMouseDown={event => {
            event.preventDefault()
            CustomEditor.toggleItalicMark(editor)
          }}
        >
          <AiOutlineItalic size={24} />
        </button>
      </div>

      <Slate 
        editor={editor} 
        initialValue={initialValue}
        onChange={value => {
          const isAstChange = editor.operations.some(
            op => 'set_selection' !== op.type
          )
          if (isAstChange) {
            localStorage.setItem('content', serialize(value))
          }
        }}
      >
        <Editable
          className="p-4 md:p-6 border-2 border-gray-200 h-[50vh]"
          renderLeaf={renderLeaf} 
          onKeyDown={event => {
            if (!event.ctrlKey) return
            switch(event.key){
              case 'b': {
                event.preventDefault()
                CustomEditor.toggleBoldMark(editor)
                break
              };
              case 'i': {
                event.preventDefault()
                CustomEditor.toggleItalicMark(editor)
                break
              }
            }
          }}  
        />
      </Slate>
      <hr />

      <div className="flex mt-8 gap-6 justify-end">
        <button className="px-8 py-4 bg-zinc-300 hover:bg-zinc-500 rounded-3xl">Cancel</button>
        <button onClick={submitPost} className="px-8 py-4 bg-zinc-300 hover:bg-zinc-500 hover:text-white rounded-3xl">
          {
            isLoading ? <Loader /> : 'Post'
          }
        </button>
      </div>
    </section>
  )
}