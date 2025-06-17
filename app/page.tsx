import React from "react";
import Hero from "./_components/Hero/Hero";
import Services from "./_components/Services/Services";
import Projects from "./_components/Projects/Projects";
import Skills from "./_components/Skills/Skills";
import Contact from "./_components/Contact/Contact";
import Journey from "./_components/Journey/Journey";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Skills />
      <Journey />
      <Projects />
      <Contact />
    </>
  );
};

export default HomePage;