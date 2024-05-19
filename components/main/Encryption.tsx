"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <section className="relative -mt-[240px] h-full min-h-screen w-full overflow-hidden">
      <div className="absolute left-[50%] top-[16rem] z-20 w-full -translate-x-[50%] space-y-2">
        <motion.div
          variants={slideInFromTop}
          className="text-center text-[40px] font-medium text-gray-200"
        >
          Performance
          <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            {" "}
            &{" "}
          </span>
          Segurança
        </motion.div>
        <p className="cursive text-center text-[20px] font-medium text-gray-300">
          Projeta seus dados com criptografia de ponta a ponta!
        </p>
      </div>
      <video
        loop
        muted
        autoPlay
        playsInline
        preload="false"
        className="absolute left-0 top-0 z-0 w-full"
        src="/encryption.webm"
      />
      <div className="group absolute left-[50%] top-[50%] z-20 flex h-auto w-auto -translate-x-[50%] cursor-pointer flex-col items-center">
        <Image
          src="/LockTop.png"
          alt="Lock top"
          width={50}
          height={50}
          className="w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11"
        />
        <Image
          src="/LockMain.png"
          alt="Lock Main"
          width={70}
          height={70}
          className="z-10"
        />
        <div className="Welcome-box  my-5 border border-[#7042f88b] px-[15px] py-1 opacity-[0.9]">
          <h2 className="Welcome-text text-xs">🔐 Criptografia</h2>
        </div>
      </div>
    </section>
  );
};

export default Encryption;
