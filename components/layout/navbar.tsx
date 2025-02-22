"use client";

import { cn } from "@/lib/utils";
import {
  HomeIcon,
  FlameIcon,
  MonitorIcon,
  PencilIcon,
  UserCircleIcon,
} from "lucide-react";
import { Link } from "@/i18n/routing";
import useLocalStorage from "@/hooks/useLocalStorage";

export const HEADER_LINKS = [
  { icon: <HomeIcon className="size-3.5" />, href: "/", key: "Home" },
  { icon: <PencilIcon className="size-3.5" />, href: "/blog", key: "Blog" },
  {
    icon: <FlameIcon className="size-3.5" />,
    href: "/projects",
    key: "Projects",
  },
  {
    icon: <UserCircleIcon className="size-3.5" />,
    href: "/about",
    key: "About",
  },
  { icon: <MonitorIcon className="size-3.5" />, href: "/uses", key: "Uses" },
] as const;

const Navbar = () => {
  const [activeKey, setActiveKey] = useLocalStorage<string>("activeMenu", "");

  const handleClick = (key: string) => {
    setActiveKey(key);
  };

  return (
    <nav>
      <ul className="hidden gap-2 md:flex">
        {HEADER_LINKS.map((link) => {
          const isActive = activeKey === link.key;

          return (
            <li
              key={link.key}
              className="relative flex h-[60px] items-center justify-center"
            >
              <Link
                className={cn(
                  "rounded px-3 py-2 text-sm font-medium transition-colors",
                  {
                    ["text-muted-foreground hover:text-foreground"]: !isActive,
                    ["text-neutral-600 dark:text-foreground font-medium"]:
                      isActive,
                  }
                )}
                href={link.href}
                onClick={() => handleClick(link.key)}
              >
                {link.key}
              </Link>
              {isActive && (
                <>
                  <div className="absolute bottom-0 w-12 h-px z-40 -translate-x-1/2 bg-nav-link-indicator dark:bg-nav-link-indicator-dark left-1/2" />
                  <div className="absolute bottom-0 left-1/2 z-40 size-2.5 -translate-x-1/2 rounded-[4px] bg-neutral-100  blur dark:bg-neutral-800 " />
                </>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
