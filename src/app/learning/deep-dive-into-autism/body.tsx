import QuickLinks from "@/components/quickLinks";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Image from "next/image";
import Link from "next/link";
import autismLevels from '../../../../public/images/learning/aut101threelevels.jpg';
import prevalence from '../../../../public/images/learning/aut1011in66.jpeg';
import xteristics from '../../../../public/images/learning/aut101piechart.png';
import government from '../../../../public/images/icons/gov.png';
import strategy from '../../../../public/images/icons/strat.png';
import federal from '../../../../public/images/icons/plan.png';
import { FaCross } from "react-icons/fa";

const quickLinks = [
  { title: 'Evolution', link:'#evolution' },
  { title: 'Prevalence', link:'#prevalence' },
  { title: 'Characteristics', link:'#xteristics' },
  { title: 'Cause', link:'#cause' },
  { title: 'Comorbidities', link:'#comorbidities' },
  { title: 'Diagnosis', link:'#diagnosis' },
  { title: 'Social & Economic Impacts', link:'#impacts' },
  { title: 'National Strategy (Canada)', link:'#national' },
]

const autismCharacteristics = [
  {
    id: 1,
    question: 'Social Communication',
    answer: (
      <p className="text-2xl mx-10 text-justify [text-align-last:center] leading-10">
        The first is <span className="font-bold">social communication</span>: including difficulties understanding or responding to social cues and non-verbal communication such as facial expressions, challenges in developing, and understanding normal communication with others.          
      </p>
    )
  },
  {
    id: 2,
    question: 'Social Interactions',
    answer: (
      <p className="text-2xl mx-10 text-justify [text-align-last:center] leading-10">
        The next is <span className="font-bold">social interaction</span>: ncluding difficulty relating to people and events such as challenges interacting with and making friends, making eye contact. 
      </p>
    )
  },
  {
    id: 3,
    question: 'Repetitive Behaviour',
    answer: (
      <p className="text-2xl mx-10 text-justify [text-align-last:center] leading-10 mb-6">
        Finally, <span className="font-bold">restricted or repetitive patterns of behaviors, interests or activities: </span>including speaking in unique way (echolalia and high pitches); toe-walking, hand-flapping, playing with toys in unusual way such as lining up cars; unusual or extreme sensory issues such as fascination with light, movements, indifference to pain, sensitive to loud noises; insistence and need of predictable routine or structure
      </p>
    )
  },
]

const socialImpacts = [
  {
    question: 'Impacts on Lifestyle',
    answer: (
      <p className="text-2xl mx-10 text-justify [text-align-last:center] leading-10 my-5">
        ASD can significantly limit some individual&apos;s ability to carry out daily activities, access education and employment, negatively influencing their ability to participate in the society while others with autism are 
        able to live fulfilling and independent lives. The lifelong care-giving of individuals on ASD can be demanding, extremely stressful and financially devastating for families and results in some parents having to quit or 
        downgrading their jobs to provide the necessary supports for their children on ASD. The lifetime costs of care for a high needs ASD diagnosis can range up to $5.5 million. However, for most families, the cost is more than 
        financial and include the emotional and mental well-being of parents, siblings and extended family. <span className="font-bold">The empowerment of caregivers is a critical component of care for children with the severe form of ASD to improve their quality of life.</span>
        It&apos;s also important to remember that <span className="font-bold">early intervention generally increases chances of avoiding autism&apos;s worst case scenarios mentioned above.</span>       
      </p>
    )
  },
  {
    question: 'Potential Impacts on Lifespan (if not acted on immediately)',
    answer: (
      <p className="text-2xl mx-10 text-justify [text-align-last:center] leading-10 my-5">
        The average lifespan for individuals with ASD is half of the general population as they appear to be at an increased risk of death from injury and have higher rates of suicide attempts, and suicide deaths. Individuals with ASD appear more likely to have more unfavourably police encounters or interactions that escalate unnecessarily with studies showing that police are largely unaware they are interacting with someone with ASD. 
        <span className="font-bold">As mentioned earlier, the earlier the diagnosis and intervention, the higher the chances of avoiding autism&apos;s worst case scenarios mentioned above.</span>       
      </p>
    )
  }
]

const nationalStrategy = [
  {
    icon: government,
    title: 'A Full-Governmental Approach',
    text: 'An all government level approach to ASD to ensure consistency and coordination that will improve lives and provide the needs of individuals on the spectrum and their families.'
  },
  {
    icon: strategy,
    title: 'A Proper National Strategy',
    text: "All government levels approach to ASD to ensure consistency and coordination that will improve lives and provide the needs of individuals on the spectrum and their families."
  },
  {
    icon: federal,
    title: 'A Federal-Led Plan',
    text: "Federal leadership that will enable the spread of best practices throughout Canada through a national knowledge exchange."
  }
]

export default function DeepDiveBody() {
  return (
    <section>
      <div className="my-8 py-10">
        <h2 className="text-xl text-center mt-10 text-[#323232]">By the way...</h2>
        <h1 className="text-5xl font-semibold my-5 text-center text-[#323232]">Did you miss the intro?</h1>
        <p className="text-xl text-center my-7 leading-10">Click the button below to catch-up first before diving deep into an Autism 101!</p>
        <div className="flex justify-center">
          <Link href='/learning/intro-to-autism' className="mx-auto text-[#360000] bg-white my-4 rounded-lg px-6 p-3 text-center border-2 border-[#360000] hover:bg-[#360000] hover:text-white tracking-wide">The Intro (if you need it)</Link>
        </div>
        
        <br /><br /><hr />
      </div>

      <QuickLinks links={quickLinks} color="#360000" />

      <div id='evolution' className="bg-gradient-to-r from-[#d85d5d] to-[#e38484] py-6 my-6 text-white">
        <div className="pt-8 pb-4 mt-10">
          <h2 className="text-center text-xl">Let&apos;s start with...</h2>
          <h2 className="text-center text-5xl my-6 font-semibold">The Evolution of Autism</h2>

          <p className="text-2xl mx-10 text-justify [text-align-last:center] leading-10">
            The definition of autism has evolved from Leo Kanner&apos;s description of a distinct syndrome of early infantile autism in 1940s to the current Diagnostic and Statistical Manual of the American Psychiatric Association (DSM-5) broader definition of a communication and behavioural disorder.
          </p>
          <div className="flex justify-center">
            <Image src={autismLevels} alt='Autism Levels' width={972} height={606} className="my-4 py-4"/>
          </div>
          <p className="text-2xl mx-10 text-justify [text-align-last:center] leading-10">
            Prior to 2013, the five ASD diagnostic subcategories were autistic disorder, Asperger disorder, Rett disorder, childhood disintegrative disorder, and pervasive developmental disorder (PDD) not otherwise specified. Currently, the DSM-5 autism diagnostic sub-categories are based on two criteria - 
            <span className="font-bold"> persisting deficits of social communication and interaction </span> and <span className="font-bold">restricted and repetitive behaviors, interests, activities. </span>
            Encompassing all of this are the three levels of severity used to describe to diagnose ASD (shown in the diagram above):  <span className="font-bold">level 1 - requiring support, level 2 - requiring substantial support, and level 3 - requiring very substantial support.</span>
          </p>
        </div>
      </div>

      <div id='prevalence' className="py-6 my-6">
        <div className="pt-8 pb-4 mt-10">
          <h2 className="text-center text-xl">You should know...</h2>
          <h2 className="text-center text-5xl my-6 font-semibold">The Prevalence of Autism</h2>
        </div>
        <div className="flex justify-center">
          <Image src={prevalence} alt='Autism Levels' width={694} height={576} className="my-4 py-4"/>
        </div>
        <p className="text-2xl mx-10 text-justify [text-align-last:center] leading-10">
          The prevalence rate of Autism in Canada is around 1 in 66 children and youth, aged 5 to 17 years, to be precise. Boys are four times more at risk of getting diagnosed with ASD than girls. No one can say for sure what causes autism; however, studies have shown that genetics, the age of parents and environmental factors increase the risk of autism in children.
        </p>
      </div>

      <div id='xteristics' className="bg-gradient-to-r from-[#d85d5d] to-[#e38484] py-6 my-6 text-white">
        <div className="pt-8 pb-4 mt-10">
          <h2 className="text-center text-xl">It&apos;s important to know</h2>
          <h2 className="text-center text-5xl my-6 font-semibold">The Characteristics of Autism</h2>
        </div>

        <p className="text-2xl mx-10 text-justify [text-align-last:center] leading-10">
          The symptoms and range of abilities of individuals with ASD differ. No two individuals with ASD appear or behave alike. However, the ASD characteristics can be groups into three categories, shown in the diagram below:
        </p>
        <div className="flex justify-center">
          <Image src={xteristics} alt='Autism Levels' width={694} height={475} className="my-4 py-4"/>
        </div>
        <div className="my-4">
          {
            autismCharacteristics.map((characteristic) => (
              <Collapsible key={characteristic.id} className="w-full text-xl text-center mb-4">
                <CollapsibleTrigger className="flex items-center w-full bg-[#e38484] hover:bg-[#d37c7c] p-4">
                  <div className="flex w-full justify-center">
                    {characteristic.id}. {characteristic.question}
                  </div>
                  <div className="ml-auto">
                    <FaCross size={15} color='white' />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="transition ease-in-out duration-500 pt-6">{characteristic.answer}</CollapsibleContent>
              </Collapsible>
            ))
          }
        </div>
        <p className="text-2xl mx-10 mt-6 text-justify [text-align-last:center] leading-10 pb-4 mb-4">
          The different levels of support for individuals with ASD vary based on: the number, type, and severity of symptoms, levels of functioning, age of first signs of autism, age of diagnosis, and challenges associated with social situations
        </p>
      </div>

      <div id='cause' className="py-6 my-6">
        <div className="pt-8 pb-4 mt-10">
          <h2 className="text-center text-xl">Does anyone know...</h2>
          <h2 className="text-center text-5xl my-6 font-semibold">What Causes Autism</h2>
        </div>
        <p className="text-2xl mx-10 text-justify mb-8 [text-align-last:center] leading-10">
          Unfortunately, the answer to this is no; <span className="font-bold">the cause of Autism Spectrum Disorder (ASD) is currently unknown. </span>Scientific evidence suggests that probable factors contributing to ASD in an individual include genetics, environmental factors and age of parents. There is relatively high risk of occurrence of ASD in a family if a member has autism. Autism is not caused by bad parenting, nor by vaccines. Future research may shed more light on how genes and environmental factors interact with each other to cause autism.
        </p>
      </div>

      <div id='comorbidities' className="bg-gradient-to-r from-[#d85d5d] to-[#e38484] py-6 my-6 text-white">
        <div className="pt-8 pb-4 mt-10">
          <h2 className="text-center text-xl">Are there any...</h2>
          <h2 className="text-center text-5xl my-6 font-semibold">Comorbidities (a.k.a Autism + other disorders)</h2>
        </div>
        <p className="text-2xl mx-10 text-justify mb-8 [text-align-last:center] leading-10">
          Individuals with ASD often present other co-occurring sensory, physical, and mental health conditions such as epilepsy, depression, anxiety and attention deficit hyperactivity disorder (ADHD). Associated condition includes Fragile X Syndrome, Tuberous Sclerosis, Metabolic disorders, Fetal rubella syndrome, structural brain anomalies. Children with ASD are four times more likely to suffer gastrointestinal problems and twice likely to have a psychiatric diagnosis than the general population The intellectual functioning ability of individuals with ASDs varies from profound impairment to superior levels.
        </p>
      </div>

      <div id='diagnosis' className="py-6 my-6">
        <div className="pt-8 pb-4 mt-10">
          <h2 className="text-center text-xl">What about...</h2>
          <h2 className="text-center text-5xl my-6 font-semibold">Diagnosis & Early Prevention</h2>
        </div>
        <p className="text-2xl mx-10 text-justify mb-8 [text-align-last:center] leading-10">
          There is <span className="font-bold">no medical test for autism such as blood tests or brain scans. </span> Autism is <span className="font-bold">diagnosed based on observation of a child&apos;s communication and behaviour in comparison to other children of the same age.</span>
          Autism diagnosis is done by trained health professionals such as a psychologist, developmental-behavioral pediatrician, child psychiatrist or other providers. Diagnosis typically involves an interview with the parents or caregivers, and play-based testing with the child (Copeland, 2018). Early diagnosis and treatment are important to reduce the symptoms of autism and improve the quality of life for people with autism.
        </p>
        <div className="flex justify-center">
          <Link href='#' className="mx-auto text-[#360000] bg-white my-4 rounded-lg px-6 p-3 text-center border-2 border-[#360000] hover:bg-[#360000] hover:text-white tracking-wide">Learn more about diagnosis</Link>
        </div>
      </div>

      <div id='impacts' className="bg-gradient-to-r from-[#d85d5d] to-[#e38484] py-6 my-6 text-white">
        <div className="pt-8 pb-4 mt-10">
          <h2 className="text-center text-xl">What are Autism&apos;s...</h2>
          <h2 className="text-center text-5xl my-6 font-semibold">Social and Economic Impacts</h2>
        </div>
        <div className="my-8">
          {
            socialImpacts.map((impact) => (
              <Collapsible key={impact.question} className="w-full text-xl text-center mb-4">
                <CollapsibleTrigger className="flex items-center w-full bg-[#e38484] hover:bg-[#d37c7c] p-4">
                  <div className="flex w-full justify-center">{impact.question}</div>
                  <div className="ml-auto"><FaCross size={15} color='white' /></div>
                </CollapsibleTrigger>
                <CollapsibleContent className="transition ease-in-out duration-500 pt-6">{impact.answer}</CollapsibleContent>
              </Collapsible>
            ))
          }
        </div>
      </div>

      <div id='national' className="py-6 my-6">
        <div className="pt-8 pb-4 mt-10">
          <h2 className="text-center text-xl">Is there any...</h2>
          <h2 className="text-center text-5xl my-6 font-semibold">Canadian National Strategy for Autism</h2>
        </div>
        <p className="text-2xl mx-10 text-justify mb-8 [text-align-last:center] leading-10">
          Rather disappointingly, there is <span className="font-bold">no national strategy  </span> 
          for autism spectrum disorders (ASD) in Canada as of March 2020, despite recommendations by the senate standing committee in 2007 for pan-Canadian coordination to establish a comprehensive National ASD Strategy in “Pay now or pay later: Autism families in crisis” report. According to the Canadian Autism Spectrum Disorder Alliance (CASDA, 2019), a national strategy will ensure that
          <span className="font-bold">&nbsp; Canadians with ASD and their families have full and equitable access to the resources they need across a lifespan where and when they need them, </span>
          and, of course, we strongly agree with them. We believe components of a national ASD strategy should include the following:
        </p>
        
        <div className='grid md:grid-cols-3 gap-8 px-6 py-9 mb-8 mx-6 my-8 justify-center items-center'>
          {
            nationalStrategy.map((strategy) => (
              <div key={strategy.title} className="hover:shadow-2xl shadow-lg flex flex-col h-full">
                <div className="flex justify-center">
                  <Image src={strategy.icon} alt={strategy.title} width={60} height={60} className="mt-6" />
                </div>
                <h2 className="font-bold my-6 text-center">{strategy.title}</h2>

                <p className="my-4 px-5 mx-5 font-light leading-relaxed text-center">{strategy.text}</p>
              </div>
            ))
          }
        </div>
      </div>

    </section>
  )
}