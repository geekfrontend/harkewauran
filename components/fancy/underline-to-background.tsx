"use client";

import { useEffect, useRef, useState } from "react";
import { motion, ValueAnimationTransition } from "motion/react";

interface UnderlineProps {
  label: string;
  className?: string;
  transition?: ValueAnimationTransition;
  onClick?: () => void;
  targetTextColor: string;
  underlineHeightRatio?: number;
  underlinePaddingRatio?: number;
  isDarkMode?: boolean;
}

const UnderlineToBackground = ({
  label,
  className,
  onClick,
  transition = { type: "spring", damping: 30, stiffness: 300 },
  underlineHeightRatio = 0.1,
  underlinePaddingRatio = 0.01,
  targetTextColor = "#000",
  isDarkMode = false,
  ...props
}: UnderlineProps) => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const updateUnderlineStyles = () => {
      if (textRef.current) {
        const fontSize = parseFloat(getComputedStyle(textRef.current).fontSize);
        const underlineHeight = fontSize * underlineHeightRatio;
        const underlinePadding = fontSize * underlinePaddingRatio;
        textRef.current.style.setProperty(
          "--underline-height",
          `${underlineHeight}px`
        );
        textRef.current.style.setProperty(
          "--underline-padding",
          `${underlinePadding}px`
        );
      }
    };

    updateUnderlineStyles();
    window.addEventListener("resize", updateUnderlineStyles);

    return () => window.removeEventListener("resize", updateUnderlineStyles);
  }, [underlineHeightRatio, underlinePaddingRatio]);

  const underlineVariants = {
    initial: {
      height: "var(--underline-height)",
    },
    target: {
      height: "100%",
      transition: transition,
    },
  };

  const textVariants = {
    initial: {
      color: "currentColor",
    },
    target: {
      color: targetTextColor,
      transition: transition,
    },
  };

  return (
    <motion.span
      className={`relative inline-block cursor-pointer dark:text-white text-black
       ${className}`}
      whileHover="target"
      onClick={onClick}
      ref={textRef}
      {...props}
    >
      <motion.div
        className={`absolute w-full ${isDarkMode ? "bg-white" : "bg-black"}`}
        style={{
          height: "var(--underline-height)",
          bottom: "calc(-1 * var(--underline-padding))",
        }}
        variants={underlineVariants}
        aria-hidden="true"
      />
      <motion.span variants={textVariants} className="text-current relative">
        {label}
      </motion.span>
    </motion.span>
  );
};

export default UnderlineToBackground;
