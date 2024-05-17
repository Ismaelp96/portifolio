import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-50 h-[65px] w-full bg-[#03001417] px-10 shadow-lg shadow-[#2A0E61]/50 backdrop-blur-md">
      <div className="m-auto flex h-full w-full items-center justify-between px-2.5">
        <a href="#about-me" className="flex h-auto w-auto items-center">
          <span className="ml-2.5 hidden font-bold text-gray-300 transition-colors duration-300 hover:text-[#b49bff] md:block">
            Ismael Oliveira
          </span>
        </a>
        <div className="flex h-full w-[500px] items-center justify-between md:mr-20">
          <div className="mr-[15px] flex h-auto w-full items-center justify-between rounded-full border border-[#7042f861] bg-[#0300145e] px-5 py-2.5 text-gray-200">
            <a
              href="#about-me"
              className="cursor-pointer transition-colors duration-300 hover:text-[#b49bff]"
            >
              Sobre
            </a>
            <a
              href="#skills"
              className="cursor-pointer transition-colors duration-300 hover:text-[#b49bff]"
            >
              Habilidades
            </a>
            <a
              href="#projects"
              className="cursor-pointer transition-colors duration-300 hover:text-[#b49bff]"
            >
              Projetos
            </a>
          </div>
        </div>

        <div className="flex gap-5">
          {Socials.map((social) => (
            <Link href={social.href} key={social.name} target="_blank">
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
                className="cursor-pointer transition-all duration-300 hover:opacity-70"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
