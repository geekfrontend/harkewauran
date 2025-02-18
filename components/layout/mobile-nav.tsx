"use client";

import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  BarChartIcon,
  FlameIcon,
  MonitorIcon,
  PencilIcon,
  UserCircleIcon,
} from "lucide-react";

export const HEADER_LINKS = [
  {
    icon: <HomeIcon className="size-3.5" />,
    href: "/",
    key: "Home",
  },
  {
    icon: <PencilIcon className="size-3.5" />,
    href: "/blog",
    key: "blog",
  },
  {
    icon: <FlameIcon className="size-3.5" />,
    href: "/projects",
    key: "projects",
  },
  {
    icon: <UserCircleIcon className="size-3.5" />,
    href: "/about",
    key: "about",
  },
  {
    icon: <MonitorIcon className="size-3.5" />,
    href: "/uses",
    key: "uses",
  },
] as const;

const MobileNav = () => {
  const locale = useLocale();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="flex items-center justify-center p-0 size-9 md:hidden"
          aria-label={`Toggle-Menu`}
          variant="ghost"
        >
          <MenuIcon className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-40 mt-3">
        {HEADER_LINKS.map((link) => {
          const localizedHref = `/${locale}${link.href}`;
          return (
            <DropdownMenuItem key={link.key} asChild>
              <Link href={localizedHref} className="flex items-center gap-4">
                {link.icon}
                <div>{link.key}</div>
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileNav;
