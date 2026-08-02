import "@/App.css";
import { Toaster } from "@/components/ui/sonner";
import { SmoothScroll } from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Intro from "@/components/Intro";
import MenuSection from "@/components/MenuSection";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Reservation from "@/components/Reservation";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <SmoothScroll>
      <div className="bg-cream font-body text-charcoal">
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <Intro />
          <MenuSection />
          <About />
          <Gallery />
          <Reservation />
        </main>
        <Footer />
        <Toaster position="bottom-right" richColors closeButton />
      </div>
    </SmoothScroll>
  );
}
