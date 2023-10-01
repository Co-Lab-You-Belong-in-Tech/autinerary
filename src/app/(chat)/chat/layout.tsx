import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function ChatLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <main className="animate-bottom">
      <Navbar chat={true} />
      {children}
      <Footer />
    </main>
  )
}