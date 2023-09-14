import positivity from '../../public/images/icons/positivitycloud.png';
import innovation from '../../public/images/icons/innovation.png';
import service from '../../public/images/icons/immediateservices.jpg';
import vibrant from '../../public/images/icons/vibrantcomm.png';
import vital from '../../public/images/icons/vitalinfo.png';
import home from '../../public/images/home.jpg'
import Image from 'next/image';
import Link from 'next/link';


const goals = [
  {img: vital, title: 'Vital Information', body: 'We provide everything you need to know: a surface level and in-depth intro to Autism, signs & symptoms info, diagnosis info and steps, info about services, positive, interesting news about Autism in the world, and more, both through our website and our YouTube shorts for kids & adults.' },
  {img: service, title: 'Links to Immediate Services', body: 'We provide links to immediate online screening, a Google map system of the nearest professionals & service centres, a caregiving planner (coming soon!), and other helpful websites, apps, and self-soothing toys and items.' },
  {img: vibrant, title: 'A Vibrant Community', body: 'We are aiming to create a vibrant community through a blog system, social media (both external and our own), volunteer opportunities, opportunities to join our team, and ways to support us (donations, merchandise, and suggestions). ' },
  {img: innovation, title: 'Innovation in the Autism Space', body: 'In the very near future, we want to use the technology of the future to solve autism-related problems. Using machine learning to improve the autism diagnosis process and virtual reality to provide autism services are just some of the things on our agenda! ' },
  {img: positivity, title: 'A Focus on Positivity and Creativity', body: 'One of our primary goals is to do everything we do while focusing on creating a positive, hope-inspiring atmosphere, highlighting the joy, imagination, and creativity that come from Autism (hence our cloud logo!) ' }
]
export default function Goal() {
  return (
    <>
      <section>
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-xl font-light uppercase mt-32 leading-loose">this is ...</h4>
          <h2 className="text-5xl font-semibold mb-12 text-center">An all-purpose centre for anyone connected to autism.</h2>
        </div>
        
        <div className='flex justify-center mb-8 pb-8'>
          <Image src={home} alt='Autism Child' />
        </div>

        <p className="text-justify [text-align-last:center] leading-relaxed m-6 px-6 mt-4 font-light text-2xl">
          Our autism &apos;journey roadmap&apos;, or itinerary (hence the name &lsquo;Autinerary&rsquo;), is here to support parents, children, adults, educators, and anyone else
          connected to autism on their ASD journey by providing everything they need in one place.
        </p>

        <p className="text-justify [text-align-last:center] leading-relaxed m-6 px-6 mt-6 pt-4 font-light text-2xl">
          Whether you&apos;re looking for <span className='font-semibold'>information </span> on symptoms, diagnosis, treatments and interventions, accessing services, and other important resources, 
          looking for <span className='font-semibold'>direct locations </span> to professionals who can help you, a <span className='font-semibold'>platform to connect with others </span>
          at similar stages in their journeys, or are interested in <span className='font-semibold'>future tech solutions </span>to autism-related issues, we aim to provide and link everything autism-related in one easy-to-access, easy-to-understand, location. 
        </p>

        <p className="text-justify [text-align-last:center] leading-relaxed m-6 px-6 mt-6 pt-6 pb-12 font-light text-2xl">
          Wherever you are on your autism journey, <span className='font-semibold'>we&apos;re here for you.</span>
        </p>
      </section>

      <section className="bg-gradient-to-r from-blue-500 to-blue-200 p-2 mb-3">     
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-xl font-light uppercase mt-32 leading-loose">Exactly what is ...</h4>
          <h2 className="text-5xl uppercase font-semibold mb-12">Our Goal</h2>
        </div>

        <p className="text-justify [text-align-last:center] leading-relaxed m-6 px-6 mt-4 font-light text-2xl">
          Autinerary was originally developed for families to fill the void of missing info during the ASD journey, but transformed into a 
          central connecting and information hub for anything autism-related. Instead of trying to replace other sources of Autism information, we&apos;re instead 
          trying to bring everything together, so that no matter what you need, you can find it here. Our fundamental goal is centered around the questions 
          most families find themselves asking at the beginning of - and anywhere during - their autism journey: 
        </p>

        <h3 className="font-bold my-6 leading-loose text-center text-2xl">“What should we expect as we step into the world of Autism?”</h3>

        <p className="text-justify [text-align-last:center] leading-relaxed mb-8 m-6 px-6 mt-4 font-light text-2xl">
          However, that&apos;s not our only goal. We&apos;ve noticed that so many Autism-focused websites have a 
          negative, deflating feel about them, correlating Autism with fear, sadness, and hopelessness. After going through the
          journey ourselves, we strongly feel that the joy, positivity, creativity, and imagination that comes from Autism
          should be known to everyone curious about it. So, this is what we do:        
        </p>

        <div className='grid md:grid-cols-3 gap-8 px-6 py-9 mb-8 mx-6 mt-8 justify-center items-center'>
          {goals.map((goal) => (
            <div key={goal.title} className='flex flex-col shadow-lg rounded-xl hover:shadow-2xl justify-center items-center px-4 py-4 h-full'>
              <Image src={goal.img} alt={goal.title} width={60} height={60} />
              <h3 className='text-center mt-4 font-bold'>{goal.title}</h3>
              <p className='mt-8 font-light text-center leading-loose'>{goal.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='py-8 mb-8'>
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-xl font-light uppercase mt-32 leading-loose">so then ...</h4>
          <h2 className="text-5xl uppercase font-semibold mb-12">Who are we</h2>
        </div>

        <p className="text-justify [text-align-last:center] leading-relaxed mb-8 m-6 px-6 mt-4 font-light text-2xl">
          Autinerary&apos;s team originated from a family that had to deal with autism directly, with almost no help at all, and the only
          information available being from doctors who believed autism to an &apos;incurable disease&apos;, and something to give up on. After years of pushing through, 
          they were able to find their way: focusing on positivity, and that is now Autinerary&apos;s moto.    
        </p>

        <p className="text-justify [text-align-last:center] leading-relaxed mb-8 m-6 px-6 mt-4 font-light text-2xl">
          After a long, difficult journey, we want to share the happiness we found, and give you the resources we believe would have
          made our journey a lot easier, so you can experience the joy we found through autism and avoid any unnecessary stress while doing so. We have a dream:
          one day, everyone, no matter where they are, or what stage of their journey they are at, will know exactly where and how to start their journey.    
        </p>

        <p className="text-justify [text-align-last:center] leading-relaxed mb-8 m-6 px-6 mt-4 font-light text-2xl">
          If you want to learn more about us - who we are, our story, our mission, our strategy, our impact & initiatives so far - then don&apos;t hesitate
          to click the button below:     
        </p>

        <div className='text-center'>
          <Link href='/' className='px-4 py-2 mx-auto rounded-lg tracking-wide shadow-lg inline-block border border-[#000b1f] hover:bg-[#000b1f] hover:text-white '>Find out more about us!</Link>
        </div>
      </section>
    </>
  )
}