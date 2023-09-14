import Navbar from "@/components/navbar";
import AboutHero from "./hero";
import Footer from "@/components/footer";
import { Metadata } from "next";
import Team from "./team";
import BackToTop from "@/components/backToTop";

export const metadata: Metadata = {
  title: "Why We Do What We Do - Learn More About Autinerary's Team",
  description: "Autinerary's About Us page: learn all about who we are, our story, our mission, our strategy, our impact and initiatives so far, our partners, and how you can spread the word!"
}

export default function About() {
  return (
    <main className="animate-bottom">
      <Navbar />
      <AboutHero />
      <Team />
      <Footer />
      <BackToTop />
    </main>
  )
}