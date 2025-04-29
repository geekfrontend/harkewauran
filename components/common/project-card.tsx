import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "../ui/badge";

interface ProjectCardProps {
  href: string;
  image: string;
  title: string;
  description: string;
  tags: string[];
}

const ProjectCard = ({
  href,
  image,
  title,
  description,
  tags,
}: ProjectCardProps) => {
  return (
    <Card className="h-full group dark:bg-transparent">
      <div className="p-4">
        <Link href={href}>
          <div className="overflow-hidden rounded-lg">
            <Image
              alt="Image"
              className="group-hover:scale-105 transition-all"
              width={1280}
              height={832}
              quality={100}
              src={image}
            />
          </div>
        </Link>
      </div>
      <CardHeader className="pt-0 pb-3">
        <CardTitle>
          <div className="flex gap-2 items-center">
            <Link href={href}>{title}</Link>
          </div>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="*:mr-2 *:mb-2 flex flex-wrap">
        {tags.map((tag) => (
          <Badge variant="secondary" key={tag}>
            {tag}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
