import React from "react";
import { skills } from "@/data/content/home";
import SectionTitle from "../global/SectionTitle";

function Skills() {
  return (
    <div id="skills" className="flex flex-col md:flex-col justify-between relative">
      <SectionTitle title="skills " />
      <img
        className="sqD bottom-[-80px] left-[-50px] lg:bottom-[-50px] lg:left-[-35px] z-[-10]"
        src="/static/doodles/skills/laptop.svg"
      />
      <img
        className="sqD hidden md:block top-[140px] right-0 lg:top-[105px]"
        src="/static/doodles/skills/coding.svg"
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
