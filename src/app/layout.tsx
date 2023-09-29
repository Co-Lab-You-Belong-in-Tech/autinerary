import { NextAuthProvider } from '@/providers/nextAuth';
import './globals.css'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const rubik = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Autinerary - A Positive, All Purpose Hub for Autism (2023)',
  description: 'A positive, all-purpose centre for anyone connected to autism (updated for 2023) - vital information, links to services, a vibrant community, and a focus on positivity, creativity, and imagination!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <NextAuthProvider>
          {children}
          <ToastContainer />
        </NextAuthProvider>
      </body>
    </html>
  )
}
