"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 mt-32 md:mt-40 w-full z-[20] max-w-[1800px] mx-auto"
    >
      <div className="h-full w-full max-w-7xl flex flex-col gap-5 justify-center m-auto text-start px-2">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-xs">
            Data Scientist & Engineer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.1)}
          className="flex flex-col gap-6 mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-white w-full max-w-[600px] h-auto"
          initial="hidden"
          animate="visible"
        >
          <span>
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Smeet Nalawade
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg text-gray-400 my-5 max-w-[600px]"
          initial="hidden"
          animate="visible"
        >
          I&apos;m a Data Scientist and Data Engineer with extensive experience in data infrastructure, 
          analytics, and AI/ML systems. I specialize in building scalable data pipelines and 
          deriving actionable insights from complex datasets. Check out my projects and skills.
        </motion.p>

        <motion.a
          href="#ai-assistant"
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[250px] flex items-center justify-center gap-2"
          initial="hidden"
          animate="visible"
        >
          <span className="text-xl">🤖</span> Ask AI About Me
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full max-w-[500px] h-auto flex justify-center items-center mt-10 md:mt-0 mx-auto"
        initial="hidden"
        animate="visible"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          width={500}
          height={500}
          priority
          draggable={false}
          className="w-full h-auto select-none"
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </motion.div>
    </motion.div>
  );
};
