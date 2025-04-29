"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export default function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="border rounded-full z-30 w-max">
      <Button
        variant="ghost"
        size="icon"
        className="hover:bg-transparent"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <Sun />

        <span className="sr-only">Toggle theme</span>
      </Button>

      <Button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        variant="ghost"
        size="icon"
        className="hover:bg-transparent dark:bg-zinc-800 rounded-full w-8 h-7 mr-1"
      >
        <Moon />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
