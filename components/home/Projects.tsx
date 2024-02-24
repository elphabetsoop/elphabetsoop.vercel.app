import Link from "next/link";
import React from "react";
import SectionTitle from "../global/SectionTitle";
import projects from "@/data/content/projects";
// import ProjectCard from "../projects/ProjectCard";


function Projects() {
  return (
    <div className="flex flex-col text-left justify-between pt-8 relative">
      <div id="projects">
        <SectionTitle title="projects " />
        <img
        className="sqD top-[-15px] right-[-15px]"
        src="/static/doodles/skills/fillStar.svg"
      />
      </div>
      <div className="grid grid-cols-1 gap-12 md:gap-5 md:grid-cols-3 items-start">
        <figure>
          <a href="https://github.com/np-overflow/2024oh-grp1">
            <img src="https://readme-stats-elphabetsoops-projects.vercel.app/api/pin/?username=np-overflow&repo=2024oh-grp1&show_owner=true" alt="Pacman" />
          </a>
          <figcaption style={{ margin: '10px' }}>(Multiplayer) Pacman made with Python's Pygame library for Open House with my group</figcaption>
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
