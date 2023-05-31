import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Footer />
    </main>
  );
};

export default Home;
