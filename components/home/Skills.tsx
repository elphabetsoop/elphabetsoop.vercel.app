import React from "react";
import { skills } from "@/data/content/home";
import SectionTitle from "../global/SectionTitle";

function Skills() {
  return (
    <div id="skills" className="flex flex-col md:flex-col justify-between relative">
      <SectionTitle title="skills " />
      <img
        className="sqD bottom-[-80px] left-[-50px] lg:bottom-[-50px] lg:left-[-200px] z-[-10] w-1/2 h-1/2"
        src="/static/doodles/skills/laptop.svg"
      />
      <img
        className="sqD bottom-[-80px] right-[-50px] lg:bottom-[150px] lg:right-[-200px] z-[-10] w-1/2 h-1/2"
        src="/static/doodles/skills/hash.svg"
      />
      <div className="mt-10 relative max-w-lg w-full mx-auto md:mx-none grid gap-x-8 gap-y-12 sm:gap-8 md:gap-12 grid-cols-3 sm:grid-cols-6 items-center place-content-center">
        {skills.map((item, index) => {
          return (
            <div
              title={item.title}
              key={index}
              className="w-10 mx-auto flex items-center flex-col justify-center"
            >
              <img src={item.icon} style={item.style} />
              <p className="text-xs text-fun-gray font-bold mt-3 opacity-80">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
