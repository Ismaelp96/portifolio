"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative z-[20] mt-24 flex w-full flex-row items-start justify-start px-5 lg:mt-40 lg:items-center lg:justify-center lg:px-20"
    >
      <div className="m-auto flex h-full w-full flex-col justify-center gap-5 text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box border border-[#7042f88b] px-[10px] py-[8px] opacity-[0.9]"
        >
          <SparklesIcon className="mr-[10px] h-5 w-5 text-[#b49bff]" />
          <h1 className="Welcome-text text-sm">Desenvolvedor Front-End</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="mt-6 flex h-auto w-auto max-w-full flex-col gap-3 text-3xl font-bold text-white lg:max-w-[600px] lg:gap-6 lg:text-6xl"
        >
          <span>
            Consiga
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              {" "}
              a melhor{" "}
            </span>
            experiência
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="bg-primary my-5 max-w-full rounded-lg p-2 text-base text-white lg:max-w-[600px] lg:bg-transparent lg:text-lg lg:text-gray-400"
        >
          Sou desenvolvedor front-end, voltado a sites, mobile. Confira meus
          projetos e habilidades!
        </motion.p>
        <Link
          href="https://github.com/Ismaelp96/"
          title="Link para o github"
          target="_blank"
        >
          <motion.span
            variants={slideInFromLeft(0.8)}
            className="button-primary mt-10 flex max-w-full items-center justify-center rounded-lg py-2 text-white lg:max-w-[200px]"
          >
            Saiba mais
          </motion.span>
        </Link>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="absolute left-0 top-[130px] z-0 flex h-full w-full items-center justify-center lg:relative lg:top-0"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
          className="rotate-img "
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
