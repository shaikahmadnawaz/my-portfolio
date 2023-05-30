import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
          <h1 className="mt-8 text-3xl tracking-tight text-black md:text-4xl lg:text-6xl">
            Hi there,
            <br />I am{" "}
            <span className="inline-block text-black font-bold">Nawaz</span>
          </h1>

          <p className="mt-8 text-lg text-gray-700">
            Empowering digital experiences from front-end to back-end
          </p>

          <div className="mt-8 flex space-x-4">
            <a href="https://www.linkedin.com/your-linkedin-profile">
              <FaLinkedin
                className="text-gray-500 hover:text-gray-700"
                size={24}
              />
            </a>
            <a href="https://github.com/your-github-profile">
              <FaGithub
                className="text-gray-500 hover:text-gray-700"
                size={24}
              />
            </a>
            <a href="https://twitter.com/your-twitter-profile">
              <FaTwitter
                className="text-gray-500 hover:text-gray-700"
                size={24}
              />
            </a>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
          <img
            className="aspect-[3/2] object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
            src="me.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
