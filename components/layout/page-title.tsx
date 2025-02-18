"use client";

import { Separator } from "@/components/ui/separator";
import { motion } from "motion/react";
import { GridPattern } from "../magicui/grid-pattern";
import { cn } from "@/lib/utils";

type PageTitleProps = {
  title: string;
  description: string;
  animate?: boolean;
};

const animation = {
  hide: {
    x: -30,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
};

const PageTitle = (props: PageTitleProps) => {
  const { title, description, animate = true } = props;

  return (
    <>
      <div className="mt-6 sm:mt-12 ">
        <motion.h1
          className="my-4 text-4xl font-bold md:text-5xl"
          {...(animate && {
            initial: animation.hide,
            animate: animation.show,
          })}
        >
          {title}
        </motion.h1>
        <motion.h2
          className="mb-8 text-muted-foreground"
          {...(animate && {
            initial: animation.hide,
            animate: animation.show,
            transition: {
              delay: 0.1,
            },
          })}
        >
          {description}
        </motion.h2>
        <Separator className=" dark:bg-white bg-neutral-400 opacity-50" />
      </div>
    </>
  );
};

export default PageTitle;
