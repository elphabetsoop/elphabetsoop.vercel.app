import Hero from "@/components/home/Hero";
import Page from "@/components/utility/Page";
import Experiences from '@/components/home/Experiences';
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";
import Contact from '@/components/home/Contact';

// export default function Home() {
//   return (
//     <Page currentPage="Home" meta={{ desc: "I'm a passionate cybersecurity student with a keen interest in offensive security." }}>
//       <Hero />
//       <div className="mt-20 space-y-32">
//         <Experiences />
//         <Projects />
//         <Skills />
//         <Contact />
//       </div>
//     </Page>
//   );
// }

import { useEffect, useRef } from 'react';

export default function Home() {
  const heroRef = useRef(null);
  const experiencesRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const id = entry.target.getAttribute('id');
          if (entry.isIntersecting) {
            if (id) {
              window.history.pushState({}, '', `/#${id}`);
            } else {
              window.history.pushState({}, '', `/`);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(heroRef.current);
    observer.observe(experiencesRef.current);
    observer.observe(projectsRef.current);
    observer.observe(contactRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Page currentPage="Home" meta={{ desc: "I'm a passionate cybersecurity student with a keen interest in offensive security." }}>
      <div id=" " ref={heroRef}>
        <Hero />
      </div>
      <div className="mt-20 space-y-32">
        <div id="experiences" ref={experiencesRef}>
          <Experiences />
        </div>
        <div id="projects" ref={projectsRef}>
          <Projects />
          <Skills />
        </div>
        <div id="contact" ref={contactRef}>
          <Contact />
        </div>
      </div>
    </Page>
  );
}
