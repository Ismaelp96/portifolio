import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="absolute left-0 top-0 z-50 h-[65px] w-full bg-[#03001417] px-5 shadow-lg shadow-[#2A0E61]/50 backdrop-blur-md lg:px-10">
      <div className="m-auto flex h-full w-full items-center justify-between px-2.5">
        <a href="#about-me" className="group flex h-auto w-auto items-center">
          <Image
            src="/logo-dev.svg"
            alt="Desenvolvedor"
            title="Desenvolvedor"
            width={24}
            height={24}
            className="h-6 w-6 lg:h-[24px] lg:w-[24px]"
          />
          <span className="ml-2.5 text-sm font-bold text-gray-300 transition-colors duration-300 group-hover:text-[#b49bff] lg:text-base">
            Ismael Oliveira
          </span>
        </a>
        <div className="hidden h-full w-[500px] items-center justify-between md:mr-20 lg:flex">
          <div className="mr-[15px] hidden h-auto w-full items-center justify-between rounded-full border border-[#7042f861] bg-[#0300145e] px-5 py-2.5 text-gray-200 lg:flex">
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

        <div className="flex gap-4 lg:gap-6">
          {Socials.map((social) => (
            <Link href={social.href} key={social.name} target="_blank">
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
                className="h-6 w-6 cursor-pointer transition-all duration-300 hover:opacity-70 lg:h-[24px] lg:w-[24px]"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
