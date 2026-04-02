import { Hero } from "@/components/ui/Hero";
import { Features } from "@/components/ui/Features";
import { CTA } from "@/components/ui/CTA";
import { Footer } from "@/components/ui/Footer";
import { Navbar } from "@/components/ui/Navbar";
import { LoadingScreen } from "@/components/ui/LoadingScreen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
