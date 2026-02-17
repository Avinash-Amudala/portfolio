import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="noise">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <FeaturedProjects />
      <Projects />
      <Skills />
      <Publications />
      <Contact />
      <Footer />
    </main>
  );
}
