import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <section className="relative flex h-full w-full flex-col" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="absolute left-0 top-[-340px]  z-[1] h-full w-full rotate-180 object-cover "
      >
        <source src="/blackhole.mp4" type="video/mp4" />
      </video>
      <HeroContent />
    </section>
  );
};

export default Hero;
