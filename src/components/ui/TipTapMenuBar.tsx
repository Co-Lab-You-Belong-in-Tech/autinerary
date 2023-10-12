import { Editor } from "@tiptap/react"
import { 
  AiOutlineBold, 
  AiOutlineItalic, 
  AiOutlineStrikethrough,
  AiOutlineOrderedList,
  AiOutlineUndo,
  AiOutlineRedo 
} from "react-icons/ai"
import { FaHeading, FaList } from "react-icons/fa"
import { GrBlockQuote } from 'react-icons/gr'

type MenuProps = {
  editor: Editor
}

export default function TipTapMenuBar({ editor }: MenuProps) {
  return (
    <div className="flex flex-wrap border-2 border-gray-300">
      <button
        onClick={()=> editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`p-3 ${editor.isActive('bold') ? 'border-2 border-gray-300 bg-gray-300' : ''}`}
      >
        <AiOutlineBold size={20} />
      </button>

      <button
        onClick={()=> editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`p-3 ${editor.isActive('italic') ? 'border-2 border-gray-300 bg-gray-300' : ''}`}
      >
        <AiOutlineItalic size={20} />
      </button>

      <button
        onClick={()=> editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={`p-3 ${editor.isActive('strike') ? 'border-2 border-gray-300 bg-gray-300' : ''}`}
      >
        <AiOutlineStrikethrough size={20} />
      </button>

      <button
        onClick={()=> editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`p-3 ${editor.isActive('heading', { level: 2 }) ? 'border-2 border-gray-300 bg-gray-300' : ''}`}
      >
        <FaHeading size={20} />
      </button>

      <button
        onClick={()=> editor.chain().focus().toggleBulletList().run()}
        className={`p-3 ${editor.isActive('bulletList') ? 'border-2 border-gray-300 bg-gray-300' : ''}`}
      >
        <FaList size={20} />
      </button>

      <button
        onClick={()=> editor.chain().focus().toggleOrderedList().run()}
        className={`p-3 ${editor.isActive('orderedList') ? 'border-2 border-gray-300 bg-gray-300' : ''}`}
      >
        <AiOutlineOrderedList size={20} />
      </button>

      <button
        onClick={()=> editor.chain().focus().toggleBlockquote().run()}
        className={`p-3 ${editor.isActive('blockquote') ? 'border-2 border-gray-300 bg-gray-300' : ''}`}
      >
        <GrBlockQuote size={20} />
      </button>

      <button
        onClick={()=> editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        className='p-3'
      >
        <AiOutlineUndo size={20} />
      </button>

      <button
        onClick={()=> editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        className='p-3'
      >
        <AiOutlineRedo size={20} />
      </button>
    </div>
  )
}