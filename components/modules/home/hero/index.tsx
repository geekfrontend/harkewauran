import { Mail, GithubIcon, LinkedinIcon } from "lucide-react";
import MaxWidthWrapper from "../../../common/MaxWidthWrapper";
import { Spotlight } from "@/components/aceternityui/spotlight-new";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <MaxWidthWrapper className="container mx-auto p-8 py-24 md:py-40">
      <div className="flex flex-col space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Front-End Developer
          </h1>

          <p className="text-balance text-muted-foreground text-lg">
            Front-End Developer focused on building web applications using the
            React ecosystem, with expertise in creating efficient,
            user-friendly, and scalable solutions tailored to modern web
            development needs.
          </p>
        </div>

        <div className="flex gap-4">
          <Link href="mailto:harkewauran23@gmail.com" target="_blank">
            <Button aria-label="Hire me via email">
              <Mail />
              Hire me
            </Button>
          </Link>

          {/* Social Links */}
          <div className="space-x-2">
            {/* Github */}
            <Link href="https://github.com/geekfrontend" target="_blank">
              <Button variant="outline" size="icon" aria-label="GitHub Profile">
                <GithubIcon />
              </Button>
            </Link>

            {/* LinkedIn */}
            <Link href="https://linkedin.com/yohaneswauran/" target="_blank">
              <Button
                variant="outline"
                size="icon"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
