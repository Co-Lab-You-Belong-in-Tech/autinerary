import background from '../../../public/images/heros/aboutusbackground.jpg';
import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="relative w-screen overflow-x-hidden min-h-screen flex">
      <Image 
        src={background}
        alt='Hero Image'
        className="absolute"
        fill
        priority
        quality={100}
      />

      <div className='relative mx-auto flex flex-col justify-center text-white items-center p-2'>
        <h4 className="text-2xl md:text-4xl tracking-widest leading-loose font-semibold">Did you want to learn</h4>
        <h2 className="uppercase mt-2 tracking-widest font-bold text-center text-2xl md:text-6xl">about the autinerary team</h2>
        <h4 className="text-3xl md:text-4xl mt-8 tracking-widest leading-loose font-semibold">Well here we are</h4>

      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden transform rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  )
}