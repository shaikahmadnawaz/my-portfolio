import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </main>
  );
};

export default Home;
