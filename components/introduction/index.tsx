"use client";

import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Introduction() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = window.innerHeight;
      const newScale = 1 + (scrollPosition / maxScroll) * 0.2;
      setScale(newScale > 1.2 ? 1.2 : newScale);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative top-0 flex h-screen  items-center justify-center overflow-hidden p-4 max-w-7xl flex-colmx-auto z-10 w-full pt-20 md:pt-0">
      <div
        className="relative flex flex-col items-center text-center transition-transform duration-300 ease-out"
        style={{ transform: `scale(${scale})` }}
      >
        <h1 className="text-4xl md:text-7xl font-bold text-center dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 dark:bg-opacity-50">
          I'm Harke <br />
        </h1>
        <p className="mt-4 font-normal text-base dark:text-neutral-300 max-w-lg text-center mx-auto">
          Frontend Developer specializing in web applications within the React
          ecosystem.
        </p>
      </div>

      <div className="absolute bottom-8 flex flex-col items-center">
        <ChevronDown
          strokeWidth={1.75}
          className="duration-2000 animate-bounce text-4xl dark:text-[#f0f0f0]"
        />
      </div>
    </div>
  );
}
