import { Backend_skill, Frontend_skill } from "@/constants";
import SKillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SKillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative z-40 flex h-full flex-col items-center justify-center gap-3 overflow-hidden py-0 pb-16 lg:py-20"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />
      <div className="mt-2 flex flex-wrap items-center justify-around gap-2 lg:mt-4 lg:gap-5">
        {Frontend_skill.map((image, index) => (
          <SKillDataProvider
            key={index}
            src={image.Image}
            index={index}
            height={image.height}
            width={image.width}
          />
        ))}
      </div>
      <div className="mt-2 flex flex-wrap items-center justify-around gap-5 lg:mt-4">
        {Backend_skill.map((image, index) => (
          <SKillDataProvider
            key={index}
            src={image.Image}
            index={index}
            height={image.height}
            width={image.width}
          />
        ))}
      </div>
      <div className="absolute h-full w-full">
        <div className="absolute z-[-10] flex h-full w-full items-center justify-center bg-cover opacity-30">
          <video
            className="h-auto w-full"
            preload="false"
            autoPlay
            loop
            muted
            playsInline
            src="/cards-video.mp4"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
