import Hero from "@/components/home/Hero";
import Page from "@/components/utility/Page";
import Experiences from '@/components/home/Experiences';
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";
import Contact from '@/components/home/Contact';

export default function Home() {
  return (
    <Page currentPage="Home" meta={{ desc: "I'm a passionate cybersecurity student with a keen interest in offensive security." }}>
      <Hero />
      <div className="mt-20 space-y-32">
        <Experiences />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </Page>
  );
}

