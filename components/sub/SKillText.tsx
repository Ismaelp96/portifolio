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
    <div className="flex h-auto w-full flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box border border-[#7042f88b] px-[10px] py-[8px] opacity-[0.9]"
      >
        <SparklesIcon className="mr-[10px] h-5 w-5 text-[#b49bff]" />
        <h1 className="Welcome-text text-[13px]">
          Think bettter with Next js 13
        </h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-white mb-[15px] mt-2.5 text-center text-3xl font-medium"
      >
        Making apps with modern technologies
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-gray-200 mb-10 mt-2.5 text-center text-xl"
      >
        Never miss a task deadline or idea
      </motion.div>
    </div>
  );
};

export default SkillText;
