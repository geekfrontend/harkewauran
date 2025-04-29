"use client";

import {
  SiCss3,
  SiFigma,
  SiFirebase,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMarkdown,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiRadixui,
  SiReact,
  SiReactquery,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVitest,
} from "@icons-pack/react-simple-icons";
import { Marquee } from "../../../magicui/marquee";
import { ZapIcon } from "lucide-react";

const StacksCard = () => {
  return (
    <div className="dark:shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_-1px_rgba(255,255,255,0.1)] shadow-[0_-1px_3px_0_rgba(0,0,0,0.05)] flex h-60 flex-col gap-2 overflow-hidden rounded-xl p-4 lg:p-6">
      <div className="flex items-center gap-2">
        <ZapIcon className="size-[18px]" />
        <h2 className="text-sm">My Stacks</h2>
      </div>
      <Marquee pauseOnHover className="[--duration:20s]">
        <SiHtml5 className="size-10" />
        <SiCss3 className="size-10" />
        <SiJavascript className="size-10" />
        <SiTypescript className="size-10" />
        <SiFigma className="size-10" />
        <SiTailwindcss className="size-10" />
        <SiNextdotjs className="size-10" />
        <SiReact className="size-10" />
        <SiPython className="size-10" />
        <SiPostgresql className="size-10" />
        <SiRadixui className="size-10" />
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        <SiPrisma className="size-10" />
        <SiMysql className="size-10" />
        <SiFirebase className="size-10" />
        <SiGit className="size-10" />
        <SiVite className="size-10" />
        <SiMarkdown className="size-10" />
        <SiVitest className="size-10" />
        <SiNodedotjs className="size-10" />
        <SiReactquery className="size-10" />
      </Marquee>
    </div>
  );
};

export default StacksCard;
