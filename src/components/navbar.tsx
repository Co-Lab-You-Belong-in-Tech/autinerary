'use client';

import Image from "next/image";
import logo from '../../public/images/Logo.png';
import logoWhite from '../../public/images/logoWhite.png';
import { useEffect, useState } from "react";
import menubar from '../../public/images/icons/drop.jpg'
import menubarWhite from '../../public/images/icons/drop2.png'
import Link from "next/link";


const navbarLinks = [
  {name:"5Q's", link:'#'},
  {name:"Learning", link:'#'},
  {name:"Services Hub", link:'#'},
  {name:"Content", link:'#'},
  {name:"Community", link:'#'},
  {name:"About Us & FAQ", link: '/about'},
  {name:"Contact Us", link:'#'},
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(()=> {
    const handleScroll = () => {
      const scrolled = window.scrollY > 4;
      setIsScrolled(scrolled)
    };
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  
  return (
    <header className={`fixed top-0 w-full z-10 transition duration-300 ease-in-out ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <nav className='flex h-16 items-center justify-between mb-1 px-6'>
        <Link href='/' className="flex items-center space-x-4 md:space-x-8 mx-3 px-3 md:mx-6 md:px-6">
          <Image alt='Logo' src={ isScrolled ? logo: logoWhite } height={50} width={50} />
        </Link>

        <div className="flex items-center gap-x-6">
          <button className={`hidden md:flex ${isScrolled ? '' : 'text-white' }`}>Login/Signup</button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Image alt='Menu bar' src={ isScrolled ? menubar: menubarWhite } width={30} height={30} />
          </button>
        </div>
      </nav>

      <div className={isMenuOpen ? 'bg-white' : 'hidden'}>
        {
          navbarLinks.map((link) => (
            <Link key={link.name} className="block text-center hover:bg-gradient-to-r from-[#2998ff] to-[#ff4bfd] py-3 px-4" href={link.link}>{link.name}</Link>
          ))
        }
        <button className="md:hidden w-full text-center hover:bg-gradient-to-r from-[#2998ff] to-[#ff4bfd]  py-3 px-4">Login/Signup</button>
      </div>
    </header>
  )
}