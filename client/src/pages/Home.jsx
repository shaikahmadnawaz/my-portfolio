import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import Blogs from "../components/Blogs";

const Home = () => {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Blogs />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
