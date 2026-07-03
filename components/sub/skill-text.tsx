"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-3xl text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Transforming data into intelligent solutions with AI/ML.
      </motion.div>

    </div>
  );
};
