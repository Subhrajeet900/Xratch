import Navbar from "@/components/Navbar";
import ResponsiveHeroBanner from "@/components/ui/responsive-hero-banner";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans flex flex-col">
      <Navbar />
      <ResponsiveHeroBanner />
      <Services />
      <ContactForm />
      <Footer />
    </main>
  );
}
