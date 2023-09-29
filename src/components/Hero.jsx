import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";

const Hero = () => {
  return (
    <div id="#home" className="relative max-w-7xl mx-auto bg-white py-10">
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:px-6 lg:py-24 xl:col-span-6">
          <h1 className="mt-8 text-4xl tracking-tight text-black lg:text-6xl">
            Hi there, I am{" "}
            <span className="inline-block text-black font-bold">Nawaz</span>
          </h1>

          <p className="mt-8 text-lg text-gray-700">
            I am a passionate developer with expertise in front-end and back-end
            technologies. I love building engaging and user-friendly digital
            experiences.
          </p>

          <div className="mt-8 flex space-x-4">
            <a
              href="https://www.linkedin.com/in/shaikahmadnawaz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                className="text-black hover:text-gray-800"
                size={24}
              />
            </a>
            <a
              href="https://github.com/shaikahmadnawaz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-black hover:text-gray-800" size={24} />
            </a>
            <a
              href="https://twitter.com/shaikahmadnawaz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-black hover:text-gray-800" size={24} />
            </a>
            <a
              href="https://www.instagram.com/shaikahmadnawaz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                className="text-black hover:text-gray-800"
                size={24}
              />
            </a>
            <a
              href="https://discordapp.com/users/sanawaz#0270"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord className="text-black hover:text-gray-800" size={24} />
            </a>
          </div>
        </div>
        <div className="relative flex justify-end items-center lg:col-span-5 lg:pr-8 xl:col-span-6">
          <img
            className="object-cover w-full h-72 md:h-96 lg:h-auto lg:w-auto xl:h-auto xl:w-full"
            src="me.svg"
            alt="my-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
