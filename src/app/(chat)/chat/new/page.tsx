'use client';

import { useState } from "react"
import { createEditor, BaseEditor, Descendant } from 'slate';
import { Slate, Editable, withReact, ReactEditor } from 'slate-react'

type CustomElement = { type: 'paragraph'; children: CustomText[] }
type CustomText = { text: string }

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}

const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
]


export default function NewDiscussion(){
  const [editor] = useState(() => withReact(createEditor()))
  
  return (
    <section className="flex justify-center items-center">
      <Slate editor={editor} initialValue={initialValue}>
        <Editable />
      </Slate>
    </section>
  )
}