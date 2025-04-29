import Hero from "@/components/modules/home/hero";
import AboutMe from "@/components/modules/home/about-me";
import Projects from "@/components/modules/home/project";
import React, { useEffect, useState } from "react";
import Services from "@/components/modules/home/service";

import { Particles } from "@/components/magicui/particles";

const HomePage = () => {
  return (
    <>
      <Particles />
      <Hero />
      <section>
        <Services />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <AboutMe />
      </section>
    </>
  );
};

export default HomePage;
