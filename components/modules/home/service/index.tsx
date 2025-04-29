"use client";

import { cn } from "@/lib/utils";
import { AnimatedBeamMultipleOutputDemo } from "@/components/magicui/animated-beam-multiple-outputs";
import { AnimatedList } from "@/components/magicui/animated-list";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Marquee } from "@/components/magicui/marquee";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";

interface Item {
  name: string;
  description: string;
}

let notifications = [
  {
    name: "API Integration",
    description:
      "Integrate third-party services to extend your app's capabilities and enable seamless data exchange.",
  },
  {
    name: "Payment Gateway Integration",
    description:
      "Safely process online payments using services like Stripe, PayPal, or custom payment solutions.",
  },
  {
    name: "WebSockets & Real-Time Applications",
    description:
      "Implement real-time features such as chat, live notifications, and collaborative tools using two-way communication.",
  },
  {
    name: "Authentication & Authorization",
    description:
      "Secure your app with login systems using JWT, OAuth, or SSO for proper access control.",
  },
  {
    name: "Page Load Speed Optimization",
    description:
      "Boost loading times by compressing assets, minimizing CSS/JS, and using smart caching strategies for better SEO and UX.",
  },
  {
    name: "Responsive Design",
    description:
      "Design your site to work flawlessly across all devices, ensuring great usability and improved search rankings.",
  },
  {
    name: "Meta Tags Optimization",
    description:
      "Enhance visibility and click-through rates by refining title tags, meta descriptions, and headers with targeted keywords.",
  },
];

notifications = Array.from({ length: 25 }, () => notifications).flat();

const Notification = ({ name, description }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden p-2",
        className
      )}
    >
      <AnimatedList delay={2500}>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}

const bestPractices = [
  {
    name: "Use Descriptive Variable Names",
    body: "Choose names that clearly reflect the variable's purpose to improve code clarity.",
  },
  {
    name: "Keep Functions Concise",
    body: "Design functions to perform a single task effectively, which enhances readability and simplifies debugging.",
  },
  {
    name: "Avoid Using Global Variables",
    body: "Favor local variables or encapsulation to prevent conflicts and increase modularity.",
  },
  {
    name: "Maintain Consistent Code Style",
    body: "Stick to a uniform formatting standard—indentation, spacing, and naming—for better readability.",
  },
  {
    name: "Write Modular Code",
    body: "Organize code into small, reusable components or modules to improve scalability and ease of maintenance.",
  },
  {
    name: "Comment Purposefully",
    body: "Use comments to clarify complex logic and avoid obvious or redundant explanations.",
  },
  {
    name: "Implement Proper Error Handling",
    body: "Use try-catch blocks and meaningful error messages to manage exceptions gracefully.",
  },
  {
    name: "Optimize Loops and Conditions",
    body: "Avoid excessive iterations and use suitable data structures for better performance.",
  },
  {
    name: "Don’t Hardcode Values",
    body: "Use constants or configuration files instead of embedding values directly in your code.",
  },
  {
    name: "Use a Version Control System",
    body: "Track changes and collaborate more effectively using tools like Git.",
  },
];

const features = [
  {
    name: "Services",
    description:
      "Creating professional, responsive websites, landing pages, and web applications.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90" />
    ),
  },
  {
    name: "Converting",
    description:
      "Transforming design files Figma into pixel-perfect implementations.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    name: "Clean Code",
    description:
      "Writing clean, efficient, and scalable code by following best development practices.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {bestPractices.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
];

const Services = () => {
  return (
    <MaxWidthWrapper>
      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard Icon={"symbol"} key={idx} {...feature} />
        ))}
      </BentoGrid>
    </MaxWidthWrapper>
  );
};

export default Services;
