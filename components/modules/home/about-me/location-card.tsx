import { MapPinIcon } from "lucide-react";
import { Globe } from "../../../magicui/globe";

export default function LocationCard() {
  return (
    <div className="dark:shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_-1px_rgba(255,255,255,0.1)] shadow-[0_-1px_3px_0_rgba(0,0,0,0.05)] relative flex size-full items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60">
      <div className="flex items-center gap-2">
        <MapPinIcon className="size-[18px]" />
        <h2 className="text-sm">Manado, Indonesia</h2>
      </div>
      <Globe className="top-10" />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
  );
}
