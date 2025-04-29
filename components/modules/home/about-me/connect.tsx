import { LinkIcon } from "lucide-react";
import { Link } from "@/i18n/routing";
import {
  type IconType,
  SiGithub,
  SiInstagram,
  SiThreads,
  SiTiktok,
} from "@icons-pack/react-simple-icons";
import CenterUnderline from "@/components/fancy/underline-center";

type SocialLinks = Array<{
  href: string;
  title: string;
  icon: IconType;
}>;

const SOCIAL_LINKS: SocialLinks = [
  {
    href: "https://github.com/geekfrontend",
    title: "GitHub",
    icon: SiGithub,
  },
  {
    href: "https://www.instagram.com/harkewauran/",
    title: "Instagram",
    icon: SiInstagram,
  },
  {
    href: "harkewauran",
    title: "Threads",
    icon: SiThreads,
  },
  {
    href: "https://www.tiktok.com/@harkewauran",
    title: "TikTok",
    icon: SiTiktok,
  },
];

const Connect = () => {
  return (
    <div className="dark:shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_-1px_rgba(255,255,255,0.1)] shadow-[0_-1px_3px_0_rgba(0,0,0,0.05)] flex flex-col gap-6 rounded-xl p-4 lg:p-6">
      <div className="flex items-center gap-2">
        <LinkIcon className="size-[18px]" />
        <h2 className="text-sm">Connect</h2>
      </div>
      <div className="flex flex-col gap-4 px-2">
        {SOCIAL_LINKS.map((link) => {
          const { href, title, icon } = link;

          const Icon = icon;

          return (
            <Link
              key={href}
              href={href}
              className="text-muted-foreground hover:text-foreground flex w-fit items-center gap-3 transition-colors"
            >
              <CenterUnderline
                label={title}
                icon={<Icon className="size-[16px]" />}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Connect;
