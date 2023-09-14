import BackToTop from "@/components/backToTop";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function LearningLayout({ children, }: { children: React.ReactNode }) {
  return (
    <section className="animate-bottom">
      <Navbar />
      {children}
      <Footer />
      <BackToTop />
    </section>
  )
}