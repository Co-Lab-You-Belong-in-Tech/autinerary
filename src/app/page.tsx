import Navbar from "@/components/navbar";
import HomeHero from "./hero";
import Goal from "./goal";
import Footer from "@/components/footer";
import BackToTop from "@/components/backToTop";

export default function Home() {
  return (
    <main className="animate-bottom">
      <Navbar />
      <HomeHero />
      <Goal />
      <Footer />
      <BackToTop />
    </main>
  )
}
