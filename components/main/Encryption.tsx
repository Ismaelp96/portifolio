"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <section className="relative -mt-[360px] h-full min-h-screen w-full overflow-hidden lg:-mt-[240px]">
      <div className="absolute left-[50%] top-[16rem] z-20 w-full -translate-x-[50%] space-y-4 lg:space-y-2">
        <motion.div
          variants={slideInFromTop}
          className="text-center text-3xl font-medium text-gray-200 lg:text-[40px]"
        >
          Performance
          <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            {" "}
            &{" "}
          </span>
          Segurança
        </motion.div>
        <p className="cursive text-center text-sm font-medium text-gray-300 lg:text-[20px]">
          Projeta seus dados com criptografia de ponta a ponta!
        </p>
      </div>
      <video
        loop
        muted
        autoPlay
        playsInline
        preload="false"
        className="absolute left-0 top-[360px] z-0 w-full lg:top-0"
        src="/encryption.mp4"
      />
      <div className="group absolute left-[50%] top-[60%] z-20 flex h-auto w-auto -translate-x-[50%] cursor-pointer flex-col items-center lg:top-[50%]">
        <Image
          src="/LockTop.png"
          alt="Lock top"
          width={50}
          height={50}
          className="w-[36px] translate-y-5 transition-all duration-200 group-hover:translate-y-11 lg:w-[50px]"
        />
        <Image
          src="/LockMain.png"
          alt="Lock Main"
          width={70}
          height={70}
          className="z-10 w-[46px] lg:w-[70px]"
        />
        <div className="Welcome-box  my-5 border border-[#7042f88b] px-[15px] py-1 opacity-[0.9]">
          <h2 className="Welcome-text text-xs">🔐 Criptografia</h2>
        </div>
      </div>
    </section>
  );
};

export default Encryption;
