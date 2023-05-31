import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Project from "../components/Project";

const Home = () => {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <About />
      <Project />
    </main>
  );
};

export default Home;
