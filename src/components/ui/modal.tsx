'use client';

import { useRouter } from "next/navigation";
import { ReactNode, useEffect} from "react";

export default function Modal({ children }: { children: ReactNode }){
  const router = useRouter()

  function onDismiss() {
    router.back()
  }

  function onKeyDown(e: KeyboardEvent) {
    if (e.key === 'Escape') onDismiss()
  } 
  
  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onKeyDown])

  return (
    <div className="fixed inset-0 z-10 mx-auto backdrop-blur-2xl">
      <div className="absolute rounded-3xl top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 w-full m:w-10/12 md:w-8/12 lg:w-1/2 p-6">
        {children}
      </div>
    </div>
  )
}