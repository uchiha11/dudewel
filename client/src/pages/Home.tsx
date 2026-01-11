import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Collections from "@/components/Collections";
import Craftsmanship from "@/components/Craftsmanship";
import Bespoke from "@/components/Bespoke";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Collections />
      <Craftsmanship />
      <Bespoke />
      <Contact />
      <Footer />
    </main>
  );
}
