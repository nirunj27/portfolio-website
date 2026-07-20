import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import CoursesAchievements from "@/components/sections/CoursesAchievements";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import HashScroll from "@/components/ui/HashScroll";

export default function Home() {
  return (
    <>
      <HashScroll />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <CoursesAchievements />
      <Contact />
      <Footer />
    </>
  );
}
