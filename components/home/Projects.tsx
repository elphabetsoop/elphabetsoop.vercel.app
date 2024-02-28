import Link from "next/link";
import React from "react";
import SectionTitle from "../global/SectionTitle";
// import ProjectCard from "../projects/ProjectCard";


function Projects() {
  return (
    <div className="flex flex-col text-left justify-between pt-8 relative mb-10">
      <div id="projects">
        <SectionTitle title="projects " />
        <img
          className="sqD top-[-75px] right-[-100px] sm:top-[-45px] sm:right-[-300px] w-1/2 h-1/2"
          src="/static/doodles/projects/coding.svg"
        />
      </div>
      <div className="grid grid-cols-1 gap-12 md:gap-5 md:grid-cols-3 items-start">
        <figure>
          <a href="https://github.com/np-overflow/2024oh-grp1">
            <img src="https://readme-stats-elphabetsoops-projects.vercel.app/api/pin/?username=np-overflow&repo=2024oh-grp1&show_owner=true" alt="Pacman" />
          </a>
          <figcaption style={{ margin: '10px' }}>(Multiplayer) Pacman made with Python's Pygame library for ICT's Open House 2024 with my group</figcaption>
        </figure>
        <figure>
          <a href="https://github.com/elphabetsoop/elphabetsoop.vercel.app">
            <img src="https://readme-stats-elphabetsoops-projects.vercel.app/api/pin/?username=elphabetsoop&repo=elphabetsoop.github.io&show_owner=true" alt="Portfolio website" />
          </a>
          <figcaption style={{ margin: '10px' }}>Portfolio Website (this.)</figcaption>
        </figure>
      </div>
      {/* <div className="relative w-full mt-2">
        <Link href="/projects">
          <div className="mt-8 max-w-sm md:max-w-2xl border border-fun-pink mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full text-fun-pink bg-fun-pink-darkerer hover:bg-fun-pink hover:text-white transition-colors cursor-pointer">
            View All
          </div>
        </Link>
      </div> ##### BUTTON TO VIEW ALL PROJECTS: WIP ##### */}
    </div>
  );
}

export default Projects;
