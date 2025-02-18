import React from "react";
import PageTitle from "@/components/layout/page-title";

const AboutPage = () => {
  return (
    <section className="max-w-4xl pt-24 p-6 mx-auto animate-fadeIn">
      <PageTitle
        title="About Me"
        description="👋 Hi there! I am Harke, a Frontend Developer passionate about building beautiful and performant web applications."
      />
      <p className="mt-4 text-gray-600 dark:text-muted-foreground">
        I specialize in creating modern and user-friendly interfaces using the
        latest web technologies. With a keen eye for design and attention to
        detail, I strive to craft seamless experiences for users worldwide.
      </p>
    </section>
  );
};

export default AboutPage;
