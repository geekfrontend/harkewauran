"use client";

import { motion } from "motion/react";

import UnderlineToBackground from "@/components/fancy/underline-to-background";
import { useTheme } from "next-themes";

const Quotes = () => {
  const { theme } = useTheme(); // Mengambil tema aktif

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const words = "I Want To Be Hokage —".split(" ");

  return (
    <div className="dark:shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_-1px_rgba(255,255,255,0.1)] shadow-[0_-1px_3px_0_rgba(0,0,0,0.05)] flex flex-col justify-center gap-6 rounded-xl p-4 lg:p-6">
      <motion.h2
        className="text-xl"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={wordVariants}
            className="inline-block mr-1"
          >
            {word}
          </motion.span>
        ))}
        <motion.span variants={wordVariants} className="inline-block">
          <span>Naruto</span>
        </motion.span>
      </motion.h2>
    </div>
  );
};

export default Quotes;
