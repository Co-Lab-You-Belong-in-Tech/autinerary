'use client';

import Image from "next/image";
import logo from '../../public/images/Logo.png';
import logoWhite from '../../public/images/logoWhite.png';
import { useEffect, useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import menubar from '../../public/images/icons/drop.jpg'
import menubarWhite from '../../public/images/icons/drop2.png'
import Link from "next/link";
import {PiCaretDownBold} from 'react-icons/pi';
import { signOut, useSession } from "next-auth/react";

interface SubDropdownItems {
  name: string;
  link: string;
}

interface DropdownItems {
  name: string;
  link?: string;
  subDropdown?: SubDropdownItems[];
}

interface NavbarLinks {
  name: string;
  link?: string;
  dropdown?: DropdownItems[]
}

const navbarLinks:NavbarLinks[] = [
  {name:"5Q's", link:'#'},
  {
    name:"Learning",
    dropdown: [
      { 
        name: 'About Autism',
        subDropdown: [
          { name: 'Intro to Autism', link: '/learning/intro-to-autism' },
          { name: 'Deep dive into Autism', link: '/learning/deep-dive-into-autism' },
        ]
      },
      {
        name: 'About Diagnosis',
        subDropdown: [
          { name: 'Signs & Symptoms', link: '#' },
          { name: 'Assessment & Diagnosis', link: '#' },
        ]
      },
    ]
  },
  {name:"Services Hub", link:'#'},
  {
    name:"Content",
    dropdown: [
      { name: 'News', link: '#' },
      { name: 'Blogs', link: '#' },
      { name: 'Videos', link: '#' },
    ]
  },
  {name:"Community", link:'#'},
  {name:"About Us & FAQ", link: '/about'},
  {name:"Contact Us", link:'#'},
]

export default function Navbar({ chat=false }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();

  useEffect(()=> {
    const handleScroll = () => {
      const scrolled = window.scrollY > 4;
      setIsScrolled(scrolled)
    };
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  const transparentChoice = chat ? 'bg-gray-400' : 'bg-transparent';

  return (
    <header className={`fixed top-0 w-full z-10 transition duration-300 ease-in-out ${isScrolled ? 'bg-white shadow-lg' : transparentChoice }`}>
      <nav className='flex h-16 items-center justify-between mb-1 px-6'>
        <Link href='/' className="flex items-center space-x-4 md:space-x-8 mx-3 px-3 md:mx-6 md:px-6">
          <Image alt='Logo' src={ isScrolled ? logo: logoWhite } height={50} width={50} />
        </Link>

        <div className="flex items-center gap-x-6">
          {
            session?.user ? (
              <button 
                onClick={()=> signOut({
                  redirect: true,
                  callbackUrl: '/login'
                })}
                className={`hidden md:flex ${isScrolled ? '' : 'text-white' }`}
              >
                Sign Out
              </button>
            ) : <Link href='/login' className={`hidden md:flex ${isScrolled ? '' : 'text-white' }`}>Login/Signup</Link>
          }
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Image alt='Menu bar' src={ isScrolled ? menubar: menubarWhite } width={30} height={30} />
          </button>
        </div>
      </nav>

      <div className={isMenuOpen ? 'bg-white' : 'hidden'}>
        {
          navbarLinks.map((link) => (
            <div>
              { link.link ? (
                <Link key={link.name} className="block text-center hover:bg-gradient-to-r from-[#2998ff] to-[#ff4bfd] py-3 px-4" href={link.link}>{link.name}</Link>
              ) : (
                <Collapsible key={link.name} className="w-full flex flex-col justify-center text-center hover:bg-gradient-to-r from-[#2998ff] to-[#ff4bfd] py-3 px-4 cursor-pointer">
                  <CollapsibleTrigger className='flex text-center justify-center items-center gap-x-2'>{link.name} <PiCaretDownBold /></CollapsibleTrigger>
                  <CollapsibleContent className="bg-white p-3 text-center mt-3">
                    {link.dropdown?.map((dropdown) => (
                      <>
                        {dropdown.link ? (
                          <Link key={dropdown.name} className="block text-center bg-white hover:bg-gradient-to-r from-[#2998ff] to-[#ff4bfd] py-3 px-4" href={dropdown.link}>{dropdown.name}</Link>            
                        ): (
                          <>
                            <Collapsible key={dropdown.name} className="w-full flex flex-col justify-center mx-auto text-center">
                              <CollapsibleTrigger className='flex justify-center text-center py-4 items-center gap-x-2'>{dropdown.name} <PiCaretDownBold /></CollapsibleTrigger>
                              <CollapsibleContent>
                                {dropdown.subDropdown?.map((item, idx) => (
                                  <Link key={idx} className="block text-center bg-white hover:bg-gradient-to-r from-[#2998ff] to-[#ff4bfd] py-3 px-4" href={item.link}>{item.name}</Link>            
                                ))}
                              </CollapsibleContent>
                            </Collapsible>
                          </>
                        )}
                      </>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              )}
            </div>
          ))
        }
        {
          session?.user ? (
            <button 
              onClick={()=> signOut({
                redirect: true,
                callbackUrl: '/login'
              })}
              className="md:hidden w-full text-center hover:bg-gradient-to-r from-[#2998ff] to-[#ff4bfd] py-3 px-4"
            >
              Sign Out
            </button>
          ) : <Link href='/login' className="md:hidden w-full text-center hover:bg-gradient-to-r from-[#2998ff] to-[#ff4bfd] py-3 px-4">Login/Signup</Link>
        }
        
      </div>
    </header>
  )
}