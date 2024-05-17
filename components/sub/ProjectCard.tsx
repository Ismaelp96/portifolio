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
      className="group relative overflow-hidden rounded-lg border border-[#2A0E61] shadow-lg"
    >
      <Image
        className="w-full object-contain transition-all duration-300 group-hover:scale-105"
        src={src}
        alt={title}
        width={1000}
        height={1000}
      />
      <div className="relative p-4">
        <h3 className="text-2xl font-semibold text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent">
          {title}
        </h3>
        <p className="mt-2 text-gray-300">{descrition}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
