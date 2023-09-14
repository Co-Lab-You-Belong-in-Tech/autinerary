import { Metadata } from "next";
import AutismIntroHero from "./hero";
import AutismIntroQuestions from "./questions";

export const metadata: Metadata = {
  title: 'The Autism Intro You Need (2023) - Autinerary',
  description: "Autinerary's intro to autism (updated for 2023): everything on what Autism is (and isn't), how Autism develops, and what you should do if you think you or your child has Autism."
}

export default function AutismIntro(){
  return (
    <section>
      <AutismIntroHero />
      <AutismIntroQuestions />
    </section>
  )
}