import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <section className="relative z-20 -mt-[180px] flex flex-col items-center justify-center py-20">
      <h2 className="mb-5 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-[40px] font-semibold text-transparent">
        Meus Projetos
      </h2>
      <div className="flex h-full w-full flex-col gap-10 px-10 md:flex-row">
        <ProjectCard
          src="/NextWebSite.png"
          title="Modern Next.js Portfolio"
          descrition="A"
          href="#"
        />
        <ProjectCard
          src="/CardImage.png"
          title="Modern Next.js Portfolio"
          descrition="A"
          href="#"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Modern Next.js Portfolio"
          descrition="A"
          href="#"
        />
      </div>
    </section>
  );
};

export default Projects;
