import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <section
      className="relative z-20 -mt-[180px] flex flex-col items-center justify-center py-10 lg:py-20"
      id="projects"
    >
      <h2 className="mb-5 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text  text-2xl font-semibold text-transparent lg:text-[40px]">
        Meus Projetos
      </h2>
      <div className="grid h-full w-full grid-cols-1 flex-col gap-5 px-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 lg:px-10">
        <ProjectCard
          src="/card-01.png"
          title="Dk Trainers"
          descrition=""
          href="https://projectdktrainers.netlify.app/"
        />
        <ProjectCard
          src="/card-02.png"
          title="Blizzard"
          descrition="Baseado no site da blizzard"
          href="https://project-blizzard-codeboost.netlify.app/"
        />
        <ProjectCard
          src="/card-03.png"
          title="Marvel's WHAT IF"
          descrition="Universo alternativo marvel"
          href="https://devjamas-whatif.vercel.app/"
        />
        <ProjectCard
          src="/card-04.png"
          title="NFTBoost"
          descrition="Site fictício de venda de NFT"
          href="https://nft-boost-ruddy.vercel.app/"
        />
        <ProjectCard
          src="/card-05.png"
          title="IMDb"
          descrition="Clone do site IMDb"
          href="https://imdb-next-mu.vercel.app/"
        />
        <ProjectCard
          src="/card-06.png"
          title="Quem é esse Pokemon?"
          descrition="Pokedex, pesquise seu pokemon favorito!"
          href="https://pokemon-by-ismael.netlify.app/"
        />
        <ProjectCard
          src="/card-07.png"
          title="Dunia"
          descrition=""
          href="https://stunning-griffin-515115.netlify.app/"
        />
        <ProjectCard
          src="/card-08.png"
          title="3D"
          descrition="Exemplo de portifólio em 3D"
          href="https://ismael-ps5e7e8rz-ismaelp96s-projects.vercel.app/"
        />
        <ProjectCard
          src="/card-09.png"
          title="Belmicro Energy"
          descrition="Proprostas de energia solar"
          href="https://belmicroenergy.com.br"
        />
        <ProjectCard
          src="/card-10.png"
          title="Education"
          descrition="Tecnologia na educação"
          href="https://belmicroeducation.com.br"
        />
      </div>
    </section>
  );
};

export default Projects;
