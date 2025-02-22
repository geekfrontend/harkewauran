import { SquareTerminal, Target } from "lucide-react";

export const data = {
  user: {
    name: "Harke Wauran",
    email: "harkewauran23@gmail.com",
    avatar: "https://avatars.githubusercontent.com/u/124599?v=4",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/admin",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Projects",
      url: "/admin/projects",
      icon: Target,
      items: [
        {
          title: "Project List",
          url: "/admin/projects",
        },
        {
          title: "Project Categories",
          url: "/admin/projects/categories",
        },
      ],
    },
  ],
};
