import React from "react";
import { Link as ScrollLink } from "react-scroll";

function Hero() {
  return (
    <>
      <div
        className="relative heroElem w-full pt-20 pb-40 m-auto flex justify-center text-center flex-col items-center z-1"
        style={{ maxWidth: "1200px" }}
      >
        <p className="text-xl mb-5">Hi! I'm Syn Kit!</p>
        <h1 className="heroTitle inline-block max-w-2xl lg:max-w-4xl  w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold heroShinyBg">
          I am a <span className="heroShiny1 text-fun-pink-light">cybersecurity student</span> with interests in{" "}
          <span className="heroShiny2 text-fun-pink-light">offensive security and technology</span> 
          <img
            className="sqD w-1/3 sm:block top-[-20px] sm:left-[-20%] opacity-90"
            style={{ animationDelay: "0.1s" }}
            src="/static/doodles/hero/pink_pac.svg"
          />
          <img
            className="sqD bottom-[-200px] left-[-10%] sm:left-[30%] lg:bottom-[-200px] lg:left-[-10%] w-[350px] opacity-80"
            style={{ animationDelay: "0.6s" }}
            src="/static/doodles/hero/red_pac.svg"
          />
          <img
            className="sqD bottom-[-250px] left-[50%] opacity-90"
            style={{ animationDelay: "0.6s" }}
            src="/static/doodles/hero/blue_pac.svg"
          />
          <img
            className="sqD w-1/3 top-[-130px] left-[75%]"
            style={{ animationDelay: "0.6s" }}
            src="/static/doodles/hero/yellow_pac.svg"
          />
        </h1>
        <ScrollLink
          activeClass="active"
          to="experience"
          spy={true}
          offset={-30}
          smooth={true}
          duration={500}
        >
          <div className="cursor-pointer font-bold whitespace-nowrap px-5 py-3.5 text-fun-white border-2 text-xl rounded-full border-fun-white bg-bg hover:bg-fun-pink hover:text-white hover:border-fun-pink transition-colors">
            ⌄
          </div>
        </ScrollLink>
      </div>
    </>
  );
}

export default Hero;
