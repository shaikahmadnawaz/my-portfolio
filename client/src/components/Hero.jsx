import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

const Hero = () => {
  return (
    <div id="#home" className="relative max-w-7xl mx-auto bg-white py-10">
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:px-6 lg:py-24 xl:col-span-6">
          <h1 className="mt-8 text-4xl tracking-tight text-black lg:text-6xl">
            Hey, I&apos;m{" "}
            <span className="inline-block text-black font-bold">Nawaz</span>
          </h1>
          <p className="mt-2 lg:mt-3 text-xl text-black lg:text-3xl tracking-tight">
            - a Creative Fullstack Developer
          </p>

          <p className="mt-8 text-md lg:text-lg text-black text-justify">
            Welcome to my digital world! I&apos;m on a mission to craft{" "}
            <span className="font-bold">captivating</span> and{" "}
            <span className="font-bold">intuitive</span> digital experiences. As
            a passionate <span className="font-bold">fullstack developer</span>,
            I blend cutting-edge technology with creativity to bring ideas to
            life.
          </p>

          <div className="mt-8 flex space-x-4">
            <a
              href="https://github.com/shaikahmadnawaz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="text-black" size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/shaikahmadnawaz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="text-black" size={30} />
            </a>

            <a
              href="https://twitter.com/shaikahmadnawaz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="text-black" size={30} />
            </a>
            <a
              href="https://www.instagram.com/shaikahmadnawaz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="text-black" size={30} />
            </a>
          </div>
        </div>
        <div className="relative flex justify-end items-center lg:col-span-5 lg:pr-8 xl:col-span-6">
          <img
            className="object-cover w-full h-72 lg:h-auto lg:w-auto"
            src="me.svg"
            alt="my-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
