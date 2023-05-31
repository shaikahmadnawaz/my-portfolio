import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";

const Home = () => {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience/>
    </main>
  );
};

export default Home;
