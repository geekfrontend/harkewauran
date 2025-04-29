"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import Connect from "./connect";
import FavoriteFramework from "./favorite-framework";
import LocationCard from "./location-card";
import StacksCard from "./stacks-card";
import Quotes from "./quotes";

const variants = {
  initial: {
    y: 40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const AboutMe = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardsRef, { once: true, margin: "-100px" });

  return (
    <MaxWidthWrapper className="container mx-auto p-8 pt-10">
      <motion.div
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        variants={variants}
        ref={cardsRef}
        transition={{
          duration: 0.5,
        }}
        className="relative my-24"
      >
        <motion.h2
          className="text-center text-3xl font-semibold"
          initial={{
            y: 30,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="mt-12 grid gap-4 md:grid-cols-2"
          initial={{
            y: 40,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          <div className="grid gap-4">
            <LocationCard />
            <StacksCard />
          </div>
          <div className="grid gap-4">
            <Connect />
            <div className="grid gap-4 [@media(min-width:450px)]:grid-cols-2">
              <FavoriteFramework />
              <Quotes />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </MaxWidthWrapper>
  );
};

export default AboutMe;
