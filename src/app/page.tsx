import Hero from "@/components/Hero";
import Image from "next/image";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import About from "@/components/About";

export default function Home() {
  return (
  <main>
    <Hero />
    <Skills />
    <Contact />
    <About />
  </main>
  );
}
