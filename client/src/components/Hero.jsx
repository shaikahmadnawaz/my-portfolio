import { FaXTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

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
            a creative <span className="font-[500]">Fullstack Developer</span>.
          </p>

          <p className="mt-8 text-md lg:text-lg text-black text-justify">
            Welcome to my digital world! I&apos;m here to create{" "}
            <span className="font-bold">engaging</span> and{" "}
            <span className="font-bold">easy-to-use</span> digital experiences.
            As a <span className="font-bold">fullstack developer</span> who
            loves both technology and creativity, I turn ideas into reality.
          </p>

          <div className="mt-8 flex space-x-4">
            <a
              href="https://github.com/shaikahmadnawaz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-black" size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/shaikahmadnawaz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-black" size={30} />
            </a>

            <a
              href="https://x.com/shaikahmadnawaz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className="text-black" size={30} />
            </a>
            <a
              href="https://www.instagram.com/shaikahmadnawaz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-black" size={30} />
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
