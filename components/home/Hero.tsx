import React from "react";
import { Link as ScrollLink } from "react-scroll";

function Hero() {
  return (
    <>
      <div
        className="relative heroElem w-full pt-20 pb-40 m-auto flex justify-center text-center flex-col items-center z-1"
        style={{ maxWidth: "1200px" }}
      >
        <p className="text-xl mb-5">Hi! I'm Syn Kit.</p>
        <h1 className="heroTitle inline-block max-w-2xl lg:max-w-4xl  w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold heroShinyBg">
          I am a <span className="heroShiny1 text-fun-pink">cybersecurity student</span> and{" "}
          <span className="heroShiny2 text-fun-pink">aspiring (something)</span> 
          <img
            className="sqD w-1/3 sm:block sm:top-[-20px] sm:left-[-10%] lg:top-[-100px] lg:left-[-10%] opacity-90"
            style={{ animationDelay: "0.1s" }}
            src="/static/doodles/hero/pink_pac.svg"
          />
          <img
            className="sqD bottom-[-300px] left-[25%] sm:left-[30%] lg:bottom-[-280px] lg:left-[20%] w-[350px] opacity-80"
            style={{ animationDelay: "0.6s" }}
            src="/static/doodles/hero/red_pac.svg"
          />
          <img
            className="sqD bottom-[-270px] left-[50%] sm:left-[55%] opacity-90"
            style={{ animationDelay: "0.6s" }}
            src="/static/doodles/hero/blue_pac.svg"
          />
          <img
            className="sqD w-1/3 sm:block sm:top-[-130px] sm:left-[75%] lg:top-[-130px] lg:left-[80%]"
            style={{ animationDelay: "0.6s" }}
            src="/static/doodles/hero/yellow_pac.svg"
          />
        </h1>
        <ScrollLink
          activeClass="active"
          to="experiences"
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
