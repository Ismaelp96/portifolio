import { RxGithubLogo, RxInstagramLogo, RxLinkedinLogo } from "react-icons/rx";
import { MdMarkEmailRead } from "react-icons/md";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative z-20 h-full w-full bg-transparent px-5 py-5 text-gray-200 before:absolute before:left-0 before:top-0 before:h-[1px] before:w-full before:bg-[#2A0E61]/40 ">
      <div className="m-auto flex w-full flex-col items-center">
        <div className="flex h-full w-full flex-col items-center lg:flex-row">
          <nav className="mb-0 flex h-auto w-full items-center justify-between lg:mb-4 lg:justify-around">
            <Link
              href="https://www.instagram.com/Ismael96"
              className="my-0 flex items-center transition-colors duration-300 hover:text-[#b49bff] lg:my-[15px]"
              target="_blank"
            >
              <RxInstagramLogo />
              <span className="ml-1.5 text-[15px]">Instagram</span>
            </Link>
            <Link
              href="https://github.com/Ismaelp96"
              className="my-0 flex items-center transition-colors duration-300 hover:text-[#b49bff] lg:my-[15px]"
              target="_blank"
            >
              <RxGithubLogo />
              <span className="ml-1.5 text-[15px]">Github</span>
            </Link>
          </nav>
          <Image
            src="/logo-dev.svg"
            alt="Logo Dev"
            title="Logo Dev"
            width={24}
            height={24}
            className="mb-0 lg:mb-4"
          />
          <nav className="mb-4 flex h-auto w-full items-center justify-between lg:justify-around">
            <Link
              href={"https://www.linkedin.com/in/ismael-oliveira-5b4a98135/"}
              className="my-0 flex items-center transition-colors duration-300 hover:text-[#b49bff] lg:my-[15px]"
            >
              <RxLinkedinLogo />
              <span className="ml-1.5 text-[15px]">LinkedIn</span>
            </Link>
            <Link
              href="mailto:ismael_frontend@outlook.com"
              className="my-0 flex items-center transition-colors duration-300 hover:text-[#b49bff] lg:my-[15px]"
            >
              <MdMarkEmailRead />
              <span className="ml-1.5 text-[15px]">Contato</span>
            </Link>
          </nav>
        </div>
        <span className="text-left text-sm lg:text-center lg:text-base">
          &copy; Ismael Dev 2024 Inc. todos direitos reservados
        </span>
      </div>
    </footer>
  );
};

export default Footer;
