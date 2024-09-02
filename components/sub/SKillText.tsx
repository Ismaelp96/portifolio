"use client";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const SkillText = () => {
  return (
    <div className="relative z-20 flex h-auto w-full flex-col items-start justify-start lg:items-center lg:justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box relative border border-[#7042f88b] px-[10px] py-[8px] opacity-[0.9]"
      >
        <SparklesIcon className="mr-[10px] h-5 w-5 text-[#b49bff]" />
        <h1 className="Welcome-text mt-2 text-sm">
          Pense melhor, use essas ferramentas
        </h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="mb-[15px] mt-4 text-left text-xl font-medium text-white lg:mt-2.5 lg:text-center lg:text-3xl"
      >
        Criando aplicações com tecnologias consolidadas!
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive mb-5 mt-0 text-left text-xl text-gray-200 lg:mb-10 lg:mt-2.5 lg:text-center"
      >
        Nunca perca o prazo de uma tarefa ou ideia
      </motion.div>
    </div>
  );
};

export default SkillText;
