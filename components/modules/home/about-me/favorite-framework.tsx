import { SiNextdotjs } from "@icons-pack/react-simple-icons";
import { HeartIcon } from "lucide-react";

const FavoriteFramework = () => {
  return (
    <div className="h-full dark:shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_-1px_rgba(255,255,255,0.1)] shadow-[0_-1px_3px_0_rgba(0,0,0,0.05)] flex flex-col gap-6 rounded-xl p-4 lg:p-6">
      <div className="flex items-center gap-2">
        <HeartIcon className="size-[18px]" />
        <h2 className="text-sm">Favorit Framework</h2>
      </div>
      <div className="flex items-center justify-center flex-col">
        <SiNextdotjs size={80} className="text-zinc-800 dark:text-zinc-200" />
      </div>
    </div>
  );
};

export default FavoriteFramework;
