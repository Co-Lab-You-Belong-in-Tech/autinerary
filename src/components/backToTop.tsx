'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import upBtn from '../../public/images/icons/up.png'
import { FaHeart } from "react-icons/fa";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    window.scrollY > 200 ? setIsVisible(true) : setIsVisible(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`fixed bottom-8 w-full flex justify-between items-center px-4 gap-x-4 md:px-9 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <button className="bg-gradient-to-r from-[#2998ff] to-[#ff4bfd] px-5 py-3 text-white flex items-center text-xl rounded-xl transform -translate-y-1 transition-transform duration-600 ease-in-out">
        <FaHeart size={24} color='white' className='mr-4' />
        Join our 5Q's Campaign
      </button>

      <button className='bg-transparent p-3 rounded-lg shadow-xl' onClick={scrollToTop}>
        <Image alt='Back to top' src={upBtn} height={50} width={50}/>
      </button>
    </div>
  );
}