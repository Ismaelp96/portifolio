import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  descrition: string;
  href: string;
};

const ProjectCard = ({ href, src, title, descrition }: ProjectCardProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="group flex h-[364px] w-full flex-col items-start overflow-hidden rounded-lg border border-[#2A0E61] shadow-lg"
    >
      <div className="relative h-[243px] w-full overflow-hidden after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-gradient-to-r after:from-purple-500 after:to-cyan-500">
        <Image
          className="h-full w-full bg-cover object-cover transition-all duration-300 group-hover:scale-105"
          src={src}
          alt={title}
          width={1000}
          height={243}
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent lg:text-2xl">
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-300 lg:text-base">{descrition}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
