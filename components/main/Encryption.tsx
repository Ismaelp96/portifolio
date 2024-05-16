"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <>
      <div className="relative flex h-full min-h-screen w-full flex-col items-center justify-between px-5 py-6">
        <motion.div
          variants={slideInFromTop}
          className="z-20 text-center text-[40px] font-medium text-gray-200"
        >
          Performance
          <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            {" "}
            &{" "}
          </span>
          Security
        </motion.div>

        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="left[50%] absolute h-auto w-full"
          src="/encryption.webm/"
        />
        <div className="group absolute left-[50%] top-[50%] flex h-auto w-auto cursor-pointer flex-col items-center">
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
          <div className="Welcome-box z-[20] my-[20px] border border-[#7042f88b] px-[15px] py-[4px] opacity-[0.9]">
            <h2 className="Welcome-text text-xs">Encryption</h2>
          </div>
        </div>

        <p className="cursive z-20 text-center text-[20px] font-medium text-gray-300">
          Secure your data with end-to-end encryption
        </p>
      </div>
    </>
  );
};

export default Encryption;
