import Image from "next/image";
import Link from "next/link"
import Facebook from '../../public/images/socials/facebook.png';
import Youtube from '../../public/images/socials/youtube.png';
import Reddit from '../../public/images/socials/reddit.png';
import Instagram from '../../public/images/socials/insta.png';
import LinkedIn from '../../public/images/socials/linkedin2.png';
import Email from '../../public/images/socials/email.png';
import Twitter from '../../public/images/socials/twitter.png';
import {TbBrandVscode}from 'react-icons/tb';
import {FaGithub}from 'react-icons/fa';

const socialLinks = [
  {name:'Instagram', img:Instagram, link:'#'},
  {name:'Facebook', img:Facebook, link:'#'},
  {name:'Twitter', img:Twitter, link:'#'},
  {name:'Reddit', img:Reddit, link:'#'},
  {name:'Youtube', img:Youtube, link:'#'},
  {name:'LinkedIn', img:LinkedIn, link:'#'},
  {name:'Email', img:Email, link:'mailto:info@autinerary.ca'},
]

export default function Footer(){
  return (
    <footer className="text-white bg-gradient-to-r from-[#2998ff] to-[#ff4bfd] text-center">
      <div className="flex gap-x-2 justify-center pt-8">
        {
          socialLinks.map((social) => (
            <Link href={social.link} key={social.name}>
              <Image src={social.img} alt={social.name} width={40} height={40} className="rounded-full"/>
              <span className=""></span>
            </Link>
          ))
        }
      </div>

      <div className='text-center mt-8 pb-8'>
        <Link href='/' className='px-4 py-2 mx-auto bg-white text-[#000b1f] rounded-lg tracking-wide shadow-lg inline-block border border-[#000b1f] hover:bg-[#000b1f] hover:text-white '>
          Subscribe to our newsletter!
        </Link>

        <p className="mt-8">© 2023 <span className="font-bold">AUTINERARY CO..</span> All Rights Reserved.</p>
        <p className="mt-8">Made by Autinerary&apos;s Web Dev Team on <FaGithub size={24} color='white' className='inline-block' /> using <TbBrandVscode size={24} color='white' className='inline-block' /></p>
      </div>
    </footer>
  )
}