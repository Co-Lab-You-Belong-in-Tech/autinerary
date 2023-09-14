import Link from "next/link";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { FaCross } from "react-icons/fa";
import fast from '../../../../public/images/icons/fast.png';
import diag from '../../../../public/images/icons/diag.png';
import call from '../../../../public/images/icons/call.png';
import folder from '../../../../public/images/icons/folder.png';
import book from '../../../../public/images/icons/learning.png';
import family from '../../../../public/images/icons/fam.png';
import Image from "next/image";


const similarityLinks = [
  {title:'Lead Poisoning', link:'https://www.mayoclinic.org/diseases-conditions/lead-poisoning/symptoms-causes/syc-20354717'},
  {title:'Down Syndrome', link:'https://www.cdc.gov/ncbddd/birthdefects/downsyndrome.html'},
  {title:'Genetic Disorders', link:'https://my.clevelandclinic.org/health/diseases/21751-genetic-disorders#:~:text=Genetic%20disorders%20occur%20when%20a%20mutation%20(a%20harmful%20change%20to,characteristics%20that%20make%20you%20unique.'},
]

const whatIsAutismQuestions = [
  {
    question: 'General Definition',
    answer: (
      <p className="text-xl mx-10 text-justify [text-align-last:center] leading-10">
        Autism spectrum disorder (ASD) is a lifelong neurodevelopmental condition that significantly affects social interactions, communication with restrictive and repetitive behaviour patterns. In short,
        <span className="font-bold"> autism is a condition in the brain that can make communicating harder, and can lead to some of the unusual, repetitive movements your child (or you) might sometimes do. </span>
        It affects each person differently and individuals with ASD have wide ranging abilities, symptoms and challenges.                   
      </p>
    )
  },
  {
    question: 'How Often It Occurs',
    answer: (
      <p className="text-xl mx-10 text-justify [text-align-last:center] leading-10">
        Autism is actually more common than most people think, occuring once in every 66 Canadian Children and Youth. Trust us; 
        <span className="font-bold">you&apos;re not alone in this.</span>
      </p>
    )
  },
  {
    question: 'Difference In Cases',
    answer: (
      <p className="text-xl mx-10 text-justify [text-align-last:center] leading-10">
        What&apos;s important to remember is that <span className="font-bold"> every autism case is different. </span>
        Some who are on the spectrum might show every symptom related to autism, while others might show extremely mild cases, where both they and others around can&apos;t notice it. 
      </p>
    )
  },
  {
    question: 'Similarity to Other Disorders',
    answer: (
      <div>
        <p className="text-xl mx-10 text-justify [text-align-last:center] leading-10">
          Additionally, <span className="font-bold"> not all of these conditions associated with autism mean that the person in question is on the spectrum. </span>
          For example: developmental delays such as speech or hearing problems, extremely specific and restricted interests, high intelligence, high sensitivity to light, sound, touch, etc, difficulties processing
          certain emotions or feelings, and other psychological disorders such as (but not limited to) OCD, schizophrenia, depression, or anxiety. Many (not all) of these conditions are actually caused by
          <span className="font-bold">lead poisoning, Down syndrome, or other genetic disorders.</span>
          We&apos;ll leave resources to dealing with those conditions below: 
        </p>
        <div className="flex flex-col gap-y-4 md:flex-row md:justify-around">
          {
            similarityLinks.map((link) => (
              <Link key={link.title} className='text-[#360000] bg-white my-4 rounded-lg px-6 py-3 text-center border-2 border-[#360000] tracking-wide' target='_blank' href={link.link}>{link.title}</Link>
            ))
          }
        </div>
        <p className="text-xl mx-10 text-justify [text-align-last:center] leading-10">
          Once again, <span className="font-bold"> if at all curious, book an appointment with a professional.</span>
        </p>
      </div>
    
    )
  },
  {
    question: "What Autism Isn't",
    answer: (
      <div>
        <p className="text-xl mx-10 text-justify [text-align-last:center] leading-10">
          If you&apos;re interested to know about some incorrect rumours about Autism, read the &ldquo;10 Things Autism Isn&apos;t&rdquo; article by Research Autism below. We&apos;ll be adding this to our recommended blogs page soon!          
        </p>
        <div className="flex flex-col gap-y-4 md:flex-row md:justify-around">
          <Link className='text-[#360000] bg-white my-4 rounded-lg px-6 py-3 text-center border-2 border-[#360000] tracking-wide' target='_blank' href='https://researchautism.org/ten-things-autism-isnt/'>10 Things Autism Isn&apos;t</Link>
        </div>
      </div>
    
    )
  },
]

const howAutismDevelops = [
  {
    question: 'First Pattern',
    answer: (
      <p className="text-xl mx-10 text-justify [text-align-last:center] leading-10">
        The onset of autism generally follows two patterns. In the first or &ldquo;early&rdquo; onset, children show gradual abnormalities in social and communication development beginning in the first year and more persistent 
        differences by the second year of life (Palomo et al., 2006). This means <span className="font-bold">the difficulty your child will develop in communicating will begin 1 year, and get more noticeable the next year.</span>
      </p>
    )
  },
  {
    question: 'Second Pattern',
    answer: (
      <p className="text-xl mx-10 text-justify [text-align-last:center] leading-10">
        In the second onset known as regressive autism, children develop typically in their first year, and suddenly lose the skills they have acquired in their second year followed by the onset of autism symptoms (Ozonoff et al., 2008). 
        This means <span className="font-bold"> your child will lose many of the skills they develop the first year their autism shows, and the next year certain autism symptoms will start to show.</span>
      </p>
    )
  },
]

const thingsToDo = [
  {
    id: 1,
    icon: fast,
    title: "Act Fast and Don't Wait", 
    body: "Adopting a 'wait and see' approach will not help in your child.\nSchedule an appointment with your family doctor or primary care provider (PCP) to share your concerns about your child. "
  },
  {
    id: 2,
    icon: diag,
    title: "Get a Formal Diagnosis", 
    body: "Start monitoring and recording your child's concerning behaviours, incidences, and frequencies of such occurrences:\nPerform a screening test using the MCHAT or any other screening test. Take the results to meet with your family doctor if concerned.\nSchedule a meeting with your local school principal if your child is approaching school age and might need to access special education services in school", 
    linkTitle:'Diagnosis 101 & Online Screening Tools',
    link: ''
  },
  {
    id: 3, 
    icon: call,
    title: "Access Services & Funding",
    body: "Call the central intake to register your child in the Ontario Autism Program (OAP).\nThe services your child get will depend on his/her needs and will change as your child progresses and grows. It is important to remember that autism is individual-specific and there is no general template for ASD treatment.\nYour child might work with various professionals on his treatment journey and the team might include his family doctor, pediatricians, psychologists, behaviour consultants and other therapists. These professionals - with your family's input - will develop your child's treatment plan based on his/her needs.",
    linkTitle:'Services 101',
    link: ''
  },
  {
    id: 4, 
    icon: folder,
    title: "Stay Organized",
    body: "There are lots of ways you can stay organized. Keeping records of all the documents you'll be gathering, encouraging your team to use a system everyone can use and access, usin a calendar to schedule your child's appointments & activities, etc.\n When it comes to keeping records, make sure you keep records of all the healthcare professionals and organizations involved, the date, topic of discussion, results or follow-up details of meetings, and important reports such as medical records, assessments and diagnosis reports, service, behavioral and other therapy plans, education, school communication records & samples of schoolwork, and video logs of milestones.\nMost importantly, schedule a time to regularly update and maintain your records!",
  },
  {
    id: 5, 
    icon: book,
    title: "Self-Education",
    body: "Learn more about ASD (autism spectrum disorder). A great place to start is our roadmap guide and other resources on this site. However, you should also take a look at the websites listed below for more info on getting support and resources from the local autism groups.",
    linkTitle:'Other Great Sources',
    link: ''
  },
  {
    id: 6, 
    icon: family,
    title: "Connect With Family & Friends",
    body: "Take time for yourself and your family as having a child with autism can be stressful and time-consuming.\nTake time as a family to decompress and reconnect by doing something together. Reach out and connect with other parents of children with autism.",
  },
]

const resources = [
  { title:'Ontario Autism Program', link:'https://www.ontario.ca/page/ontario-autism-program' },
  { title:'Autism Ontario', link:'https://www.autismontario.com' },
  { title:'Autism Speaks', link:'https://www.autismspeaks.ca/' },
  { title:'Autism Canada', link:'https://autismcanada.org/' },
  { title:'Kerry Place', link:'https://www.kerrysplace.org/' },
  { title:'Holland Bloorview Kids Rehabilitation Center', link:'https://www.hollandbloorview.ca' },
  { title:'Kinark Child and Family Services', link:'https://www.kinark.on.ca/autism-services' },
]
export default function AutismIntroQuestions(){
  const importantQuestions = [
    {question:"What Autism Really Is (and isn't)", link:"#what"},
    {question:"How Autism Actually Develops", link:"#how"},
    {question:"What you need to do About Autism", link:"#do"}
  ]

  return (
    <section>
      <div className="px-2 mx-4 my-6 py-6">
        <h1 className="text-center mt-4 py-4 text-5xl">Let&apos;s start at the beginning.</h1>
        <p className="text-justify [text-align-last:center] text-2xl leading-10">First, we must answer three important questions</p>
        <div className="flex flex-col gap-y-4 md:flex-row md:justify-around my-6 md:my-9">
          {
            importantQuestions.map((question, index) => (
              <Link key={index} className='text-[#360000] rounded-lg px-6 py-3 text-center border-2 border-[#360000] tracking-wide' href={question.link}>{question.question}</Link>
            ))
          }
        </div>
      </div>

      <div id='what' className="bg-gradient-to-r from-[#d85d5d] to-[#e38484] py-6 my-6 text-white">
        <div className="py-8">
          <h2 className="text-center text-xl">Question 1:</h2>
          <h2 className="text-center text-5xl my-6 font-semibold">What really is Autism? (and what it isn&apos;t)</h2>

          <div>
            {
              whatIsAutismQuestions.map((question) => (
                <Collapsible key={question.question} className="w-full text-xl text-center mb-4">
                  <CollapsibleTrigger className="flex items-center w-full bg-[#e38484] hover:bg-[#d37c7c] p-4">
                    <div className="flex w-full justify-center">
                      {question.question}
                    </div>
                    <div className="ml-auto">
                      <FaCross size={15} color='white' />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="transition ease-in-out duration-500 pt-6">{question.answer}</CollapsibleContent>
                </Collapsible>
              ))
            }
          </div>

        </div>
      </div>

      <div id='how' className="py-6 my-6">
        <h2 className="text-center text-xl">Question 2:</h2>
        <h2 className="text-center text-5xl my-6 font-semibold">How does Autism develop?</h2>

        <div>
          {
            howAutismDevelops.map((question) => (
              <Collapsible key={question.question} className="mb-4 text-center text-xl">
                <CollapsibleTrigger className="flex items-center bg-[#ebebeb] hover:bg-[#e4e4e4] p-4 w-full">
                  <div className="flex w-full justify-center">
                    {question.question}
                  </div>
                  <div className="ml-auto">
                    <FaCross size={15} color='white' />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="transition ease-out duration-300 pt-6">{question.answer}</CollapsibleContent>
              </Collapsible>
            ))
          }
        </div>
      </div>

      <div id='do' className="py-8 my-8 bg-gradient-to-r from-[#d85d5d] to-[#e38484] text-white">
        <h2 className="text-center text-xl mt-9">Question 3:</h2>
        <h2 className="text-center text-5xl my-6 font-semibold">What do I do if I think my chid has autism?</h2>

        <div className='grid md:grid-cols-3 gap-8 px-6 py-9 mb-8 mx-6 mt-8 justify-center items-center'>
          {
            thingsToDo.map((item) => (
              <div key={item.id} className="hover:shadow-2xl shadow-lg flex flex-col h-full">
                <div className="flex justify-center">
                  <Image src={item.icon} alt={item.title} width={60} height={60} className="mt-6" />
                </div>
                <h2 className="font-bold my-6 text-center">{item.id}. {item.title}</h2>
                {
                  item.body.split('\n').map((paragraph, index) => (
                    <p key={index} className="my-4 px-5 mx-5 font-light leading-relaxed text-center">{paragraph}</p>
                  ))
                }

                {item.linkTitle && (
                  <Link href='#' className="text-[#360000] bg-white my-4 rounded-lg mx-6 px-6 p-3 text-center border-2 border-[#360000] hover:bg-[#360000] hover:text-white tracking-wide">{item.linkTitle}</Link>
                )}
              </div>
            ))
          }
        </div>
      </div>

      <div className="py-8 my-8">
        <h2 className="text-center text-xl my-4">Our Favorite Autism Resources</h2>
        <h1 className="text-5xl font-semibold text-center my-4">Study Up!</h1>

        <div className="flex flex-col">
          {
            resources.map((resource) => (
              <div key={resource.link} className="flex justify-center">
                <Link href={resource.link} target='_blank' className="text-[#360000] bg-white my-2 rounded-lg px-6 p-3 text-center border-2 border-[#360000] hover:bg-[#360000] hover:text-white tracking-wide">{resource.title}</Link>
              </div>
            ))
          }
        </div>
      </div>

    </section>
  )
}