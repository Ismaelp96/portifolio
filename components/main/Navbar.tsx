import { Socials } from "@/constants";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-50 h-[65px] w-full bg-[#03001417] px-10 shadow-lg shadow-[#2A0E61]/50 backdrop-blur-md">
      <div className="m-auto flex h-full w-full items-center justify-between px-2.5">
        <a href="#about-me" className="flex h-auto w-auto items-center">
          <Image
            src={"/NavLogo.png"}
            alt="logo"
            width={70}
            height={70}
            className="hover:animate-slowspin cursor-pointer"
          />
          <span className="text-gray-300 ml-2.5 hidden font-bold transition-colors duration-300 hover:text-[#b49bff] md:block">
            WebChain Dev
          </span>
        </a>
        <div className="flex h-full w-[500px] items-center justify-between md:mr-20">
          <div className="text-gray-200 mr-[15px] flex h-auto w-full items-center justify-between rounded-full border border-[#7042f861] bg-[#0300145e] px-5 py-2.5">
            <a
              href="#about-me"
              className="cursor-pointer transition-colors duration-300 hover:text-[#b49bff]"
            >
              About me
            </a>
            <a
              href="#skills"
              className="cursor-pointer transition-colors duration-300 hover:text-[#b49bff]"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="cursor-pointer transition-colors duration-300 hover:text-[#b49bff]"
            >
              Projects
            </a>
          </div>
        </div>

        <div className="flex gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
              className="cursor-pointer transition-all duration-300 hover:opacity-70"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
