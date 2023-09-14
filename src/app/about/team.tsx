'use client';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import Odosa from '../../../public/images/team/odosa.jpg';
import Azuka from '../../../public/images/team/Azuka.jpg';
import Eli from '../../../public/images/team/Eliyana.jpg';
import Liam from '../../../public/images/team/Liam.jpg';
import Laura from '../../../public/images/team/Laura.jpg';
import Genevieve from '../../../public/images/team/Genevieve.jpeg';
import Cleoniki from '../../../public/images/team/Cleoniki.jpg';
import positivity from '../../../public/images/icons/positivitycloud.png';
import innovation from '../../../public/images/icons/innovation.png';
import service from '../../../public/images/icons/immediateservices.jpg';
import vibrant from '../../../public/images/icons/vibrantcomm.png';
import vital from '../../../public/images/icons/vitalinfo.png';
import slide1 from '../../../public/images/aboutSlide/aboutslidepic1.jpg'
import slide2 from '../../../public/images/aboutSlide/aboutslidepic2.jpg'
import slide3 from '../../../public/images/aboutSlide/aboutslidepic3.jpg'
import slide4 from '../../../public/images/aboutSlide/aboutslidepic4.jpg'
import slide5 from '../../../public/images/aboutSlide/aboutslidepic5.jpg'
import bfn from '../../../public/images/bfn.jpg';
import BlaFN from '../../../public/images/partners/BFN.png';
import YAIJ from '../../../public/images/partners/YAIJ.jpg';
import Image from "next/image";
import { useEffect, useState } from "react";


const partners = [BlaFN, YAIJ]

const teamMembers = [
  {role:'Founder & CEO', members:[
    {name:'Odosa Obasuyi', img:Odosa, about:"Hi! I'm Odosa, the Founder & CEO of Autinerary, and it's great to meet you! \nTo keep it brief, I started Autinerary inspired by a drive that each of our team members share: a need to improve the current systems in place for autism families. As someone with a sibling on the autism spectrum, I wanted to mitigate the problems to autism community faces - negative stigma, scarce funding, lack of innovation, resources scattered all over the place - with a central, positive, innovative platform. And just like that, Autinerary was born! \nAside from Autinerary, I'm a sophomore at the University of Toronto, St. George, currently studying Computer Science, Computational Cognitive Science, and Math. I'm passionate about software development, exponential technology, entrepreneurship, and solving real-world problems, with this probably being my biggest combination of those yet.I'm super excited to see how far Autinerary can go! "}
  ]},
  {role: 'Board Members', members:[
    {name: 'Azuka Obasuyi', img:Azuka, about: "Azuka Obasuyi is the loving mother of two sons, one of whom has autism. She joined our Board of Directors in order to aid parents - especially immigrant parents - in finding their feet in their search for resources. \nShe is a Health Informatics analyst with a background in chemical engineering and a certificate in data analytics and visualization. A life-long learner who loves acquiring new skills and tackling new challenges, she finds great satisfaction in deriving insights from data to inform decision-making, drive growth and positively impact social change.\nShe is also the founder of the Little Bird Foundation, a charity dedicated to helping immigrant students with the difficulties they face when they enter a new country, as well as others in need, through a monthly, randomly selected raffle to provide money to people in need." },
    {name: 'Liam Schindler-Currie', img:Liam, about:"Hello, my name is Liam Schindler-Currie. I am a Board Member of Autinerary Inc. I go to the University of Toronto alongside my colleague and friend Odosa. I am a part of the autism community as I have Autism Spectrum Disorder. When Odosa offered me a chance to join, I was ecstatic, as I see this is my chance to give back to the community that gave so much to me."},
    {name: 'Laura Connor', img:Laura, about:"Laura Connor is also a loving mother of two 6 foot plus teenage sons, one of whom has autism. She has embarked on a transformative journey to ensure her son's success in school and life, learning how to navigate complex systems, access crucial services and provide her son with the opportunities he deserved. He is now about to enter high school as a talented drummer and is on a journey to learn how to play four other instruments.\nAs the owner of Connor Speaks Marketing, Laura has dedicated her career to helping individuals develop self confidence and step into the visibility spotlight. Motivated by her personal journey and the challenges her family faced, Laura joined our Board of Directors to make a profound difference by empowering parents to find their own voice so that they can become advocates for their children who may not have a voice of their own. She is committed to letting parents know that a diagnosis of autism does not equate to a life of despair and hopelessness for their child or their family.\nLaura firmly believes that her experiences as a special needs mother has made her more patient, more appreciative and more thankful for life than she ever would have imagined possible. "},
    {name: 'Genevieve Aguigwo', img:Genevieve, about:" With a keen interest in the field of mechanical engineering, I am particularly drawn to the realms of manufacturing and project management. As an ambitious and motivated student, I eagerly seek opportunities to contribute to dynamic teams and take on challenging projects.\nBeyond my academic pursuits, I embrace the power of networking and collaboration. Engaging with professionals and industry leaders allows me to gain insights into the latest trends and advancements, while also fostering meaningful connections.\nOutside of the engineering realm, you can find me exploring my creative side through graphic design and immersive myself in the vibrant world of reading. I believe in embracing a well-rounded approach to life, where diverse interests fuel personal growth.\nI connected with Odosa through our journeys being siblings of family members on the autism spectrum, and that connection inspired me to join the Board of Directors. "},
  ]},
  {role: 'Social Media and Marketing', members: [
    {name: 'Cleoniki Kesidis', img:Cleoniki, about:"Cleoniki is a copywriter, marketing strategist, and neurodivergent adult who has worked with businesses in a wide range of industries. She loves helping people connect with tools and services that improve their lives. "}
  ]},
  {role: 'Design', members:[
    {name: 'Eliyana Faric', img:Eli, about: " Hi! My name is Eliyana Faric.\nI grew up with my sister who is on the spectrum. It was always hard for her to get a proper diagnosis because she has high functioning autism. I know growing up was hard for her and the process was long and difficult, so when I heard about this project I knew we could create something great. I joined this project to hopefully help kids who struggled as she did. It's important for all parents, siblings and directly impacted individuals to get their answers earlier on, this helps them figure out healthier methods to deal with autism, creating a more positive experience when growing up.\nMy passion is for The Arts and I wanted to incorporate my love for media design in this project. I am currently in high school working towards a career in art/design and I'm in the Integrated Regional Arts Program at my school.\nI connected with Odosa through our journeys being siblings of family members on the autism spectrum, and that connection inspired me to join the Board of Directors.\nI was very thrilled to be chosen for this project and am very grateful to be apart of the team. "}
  ]}
]

const goals = [
  {img: vital, title: 'Vital Information', body: 'We provide everything you need to know: a surface level and in-depth intro to Autism, signs & symptoms info, diagnosis info and steps, info about services, positive, interesting news about Autism in the world, and more, both through our website and our YouTube shorts for kids & adults.' },
  {img: service, title: 'Links to Immediate Services', body: 'We provide links to immediate online screening, a Google map system of the nearest professionals & service centres, a caregiving planner (coming soon!), and other helpful websites, apps, and self-soothing toys and items.' },
  {img: vibrant, title: 'A Vibrant Community', body: 'We are aiming to create a vibrant community through a blog system, social media (both external and our own), volunteer opportunities, opportunities to join our team, and ways to support us (donations, merchandise, and suggestions). ' },
  {img: innovation, title: 'Innovation in the Autism Space', body: 'In the very near future, we want to use the technology of the future to solve autism-related problems. Using machine learning to improve the autism diagnosis process and virtual reality to provide autism services are just some of the things on our agenda! ' },
  {img: positivity, title: 'A Focus on Positivity and Creativity', body: 'One of our primary goals is to do everything we do while focusing on creating a positive, hope-inspiring atmosphere, highlighting the joy, imagination, and creativity that come from Autism (hence our cloud logo!) ' }
]

const questionsData = [
  {
    question: 'Who We Are',
    answer: (
      <div>
        {
          teamMembers.map((team) => (
            <div key={team.role}>
              <h4 className="text-center text-[#838383] text-3xl my-6 font-semibold">{team.role}</h4>
              <div className="md:flex justify-center gap-x-6 px-8 ">
                {
                  team.members.map((member) => (
                    <div key={member.name} className="shadow-xl w-96 h-full">
                      <Image alt={member.name} src={member.img} height={300} className="w-full"/>
                      <h4 className="font-semibold text-xl my-6 text-center">{member.name}</h4>
                      {
                        member.about.split('\n').map((line, index) => (
                          <p key={index} className="mb-5 px-5 mx-5 font-light leading-relaxed text-[#323232] text-center">{line}</p>
                        ))
                      }
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    )
  },

  {
    question: 'Our Story',
    answer: (
      <div>
        <p className="text-justify [text-align-last:center] leading-relaxed mb-8 m-6 px-6 mt-4 font-light text-xl">
          Autinerary&apos;s team originated from a family that had to deal with autism directly, with almost no help at all, and the only
          information available being from doctors who believed autism to an &apos;incurable disease&apos;, and something to give up on. After years of pushing through, 
          they were able to find their way: focusing on positivity, and that is now Autinerary&apos;s moto.    
        </p>

        <p className="text-justify [text-align-last:center] leading-relaxed mb-8 m-6 px-6 mt-4 font-light text-xl">
          After a long, difficult journey, we want to share the happiness we found, and give you the resources we believe would have
          made our journey a lot easier, so you can experience the joy we found through autism and avoid any unnecessary stress while doing so. We have a dream:
          one day, everyone, no matter where they are, or what stage of their journey they are at, will know exactly where and how to start their journey.    
        </p>

        <p className="text-justify [text-align-last:center] leading-relaxed mb-8 m-6 px-6 mt-4 font-light text-xl">
          The nitty-gritty of our story is something that would take quite a while to write, and something we want to talk about in full, so we&apos;ll share this in the future! 
        </p>
      </div>
    )
  },

  {
    question: 'Our Mission',
    answer: (
      <div>
        <p className="text-justify [text-align-last:center] leading-relaxed mb-8 m-6 px-6 mt-4 font-light text-xl">
          Autinerary was originally developed for families to fill the void of missing info during the ASD journey, but transformed into a 
          central connecting and information hub for anything autism-related. Instead of trying to replace other sources of Autism information, we&apos;re instead 
          trying to bring everything together, so that no matter what you need, you can find it here. Our fundamental goal is centered around the questions 
          most families find themselves asking at the beginning of - and anywhere during - their autism journey: 
        </p>
        <p className="text-center font-bold my-8 text-2xl"> “What should we expect as we step into the world of Autism?” </p>
        <p className="text-justify [text-align-last:center] leading-relaxed mb-8 m-6 px-6 mt-4 font-light text-xl">
          However, that&apos;s not our only goal. We&apos;ve noticed that so many Autism-focused websites have a 
          negative, deflating feel about them, correlating Autism with fear, sadness, and hopelessness. After going through the
          journey ourselves, we strongly feel that the joy, positivity, creativity, and imagination that comes from Autism should be known to everyone curious about it. So, this is what we do:            
        </p>
      </div>
    )
  },

  {
    question: 'Our Strategy',
    answer: (
      <div className='grid md:grid-cols-3 gap-8 px-6 py-9 mb-8 mx-6 mt-8 justify-center items-center'>
        {goals.map((goal) => (
          <div key={goal.title} className='flex flex-col shadow-lg rounded-xl hover:shadow-2xl justify-center items-center px-4 py-4 h-full'>
            <Image src={goal.img} alt={goal.title} width={60} height={60} />
            <h3 className='text-center mt-4 font-bold'>{goal.title}</h3>
            <p className='mt-8 font-light text-center leading-loose'>{goal.body}</p>
          </div>
        ))}
      </div>
    )
  },

  {
    question: 'Our Impact & Initiative So Far',
    answer: (
      <div>
        <p className="text-justify [text-align-last:center] leading-relaxed mb-8 m-6 px-6 mt-4 font-light text-xl">Right now, we&apos;re just getting started! In the future, we hope to add to this section bit-by-bit, so you can watch our journey unfold!</p>
      </div>
    )
  },

  {
    question: 'Our Successes',
    answer: (
      <div className='text-[#838383] text-center'>
        <h4 className="text-3xl my-6 font-bold">Black Founder Network&apos;s Smart Stat Award</h4>
        <p className="text-xl mb-6">$4000 funding from BFN and KPMG</p>
        <Image src={bfn} alt='bfn' />
      </div>
    )
  },

  {
    question: 'Our Partners',
    answer: (
      <div className='flex justify-center space-x-10'>
        {
          partners.map((partner, index) => (
            <Image key={index} src={partner} height={653} width={367} className='hover:scale-125 ' alt={`Autinerary Partner ${index}`} />
          ))
        }
      </div>
    )
  },

  {
    question: 'Other FAQ',
    answer: (
      <div>
        <p className="text-justify [text-align-last:center] leading-relaxed mb-8 m-6 px-6 mt-4 font-light text-xl"> Let us know what you&apos;d like to know about us! Our email and social media is provided at the bottom of this page.</p>
      </div>
    )
  },
]

export default function Team(){
  const [currentImage, setCurrentImage] = useState(0);
  const images = [slide1, slide2, slide3, slide4, slide5]
  const goToNextImage = () => setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1 ))

  useEffect(() => {
    const interval = setInterval(goToNextImage, 4321);
    return () => clearInterval(interval)
  }, [])

  return(
    <section>
      <div>
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-xl font-light uppercase mt-32 leading-loose">We are</h4>
          <h2 className="text-5xl font-semibold mb-12">A group on a mission</h2>
        </div>
        <div className="flex justify-center mb-8">
          <Image src={images[currentImage]} alt='About Slide' className="w-[60%] h-[58%]" />
        </div>
        <p className="text-justify [text-align-last:center] leading-relaxed pb-8 px-6 mt-4 font-light mx-6 text-2xl">
          Autinerary&apos;s &quot;Autism Journey Roadmap&quot; was developed <span className="font-bold">by families who&apos;ve gone through it all, for families just starting their journey. </span> 
          It compiles web sources of information to make it easier to navigate the labyrinth of ASD resources and services available for families of children with autism. 
          The project was inspired by our experiences and the experiences of families we knew struggling to navigate various services in Ontario, and aims to provide an easy, step-by-step guide on navigating and accessing resources, no matter where you are on your ASD journey. 
        </p>
      </div>

      <div>
        {questionsData.map((question) => (
          <Collapsible key={question.question} className="bg-[#ebebeb] mb-2 transition duration-500 ease-in-out">
            <CollapsibleTrigger className="w-full p-4 text-xl">{question.question}</CollapsibleTrigger>
            <CollapsibleContent className="bg-white pt-4">{question.answer}</CollapsibleContent>
          </Collapsible>
        ))}
      </div>

      <div className="bg-gradient-to-r from-[#838383] to-[#1c1c1c] text-[#e3e3e3]">
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-xl font-light uppercase mt-32 leading-loose">Exactly what is ...</h4>
          <h2 className="text-5xl uppercase font-semibold mb-12">Our Mission Statement</h2>
        </div>

        <p className="text-justify [text-align-last:center] leading-relaxed pb-8 px-6 mt-4 font-semibold text-2xl">
          “We will create a community that believes in sharing experiences, supporting each other, and never 
          leaving someone new to autism behind.”     
        </p>
      </div>
    </section>
  )
}