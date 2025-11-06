import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <div>
      <Header />

      <section id="home">
        <HeroSection />
      </section>

      <section id="projects" className="scroll-mt-24">
        <ProjectsSection />
      </section>

      <section id="tape" className="scroll-mt-24">
        <TapeSection />
      </section>

      <section id="about" className="scroll-mt-24">
        <AboutSection />
      </section>

      <section id="contact" className="scroll-mt-24">
        <ContactSection />
      </section>

      <Footer />
    </div>
  );
}
