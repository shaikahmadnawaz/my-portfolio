import React from "react";

const About = () => {
  return (
    <div id="#about" className="bg-white py-2 md:py-10">
      <div className="max-w-7xl mx-auto">
        <div className="lg:flex lg:items-center lg:gap-x-8">
          <div className="w-full lg:w-1/2 hidden md:block">
            <img
              className="w-full h-auto object-cover rounded-lg"
              src="about-me.svg"
              alt="my-image"
            />
          </div>
          <div className="mt-8 lg:mt-0 lg:w-1/2">
            <div className="px-4 py-8 md:py-10 lg:py-12">
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <p className="text-lg mb-4 text-justify">
                Greetings! I&apos;m Nawaz, a results-driven Full Stack Web
                Developer specializing in the dynamic MERN stack (MongoDB,
                Express.js, React.js, and Node.js). My journey involves a deep
                passion for crafting web applications that not only deliver
                seamless user experiences but also address real-world
                challenges.
              </p>
              <p className="text-lg mb-4 text-justify">
                My portfolio boasts a diverse range of web applications,
                spanning from innovative e-commerce platforms to engaging social
                networking sites. I pride myself on creating scalable and
                efficient solutions that adhere to industry best practices,
                ensuring optimal performance and user satisfaction.
              </p>
              <p className="text-lg text-justify">
                Eager to tackle new challenges, I am committed to contributing
                my skills to innovative projects. Whether it&apos;s enhancing
                user interactions, optimizing performance, or creating intuitive
                designs, I&apos;m up for the task. Let&apos;s connect through
                the social links below or drop me an email. Together, let&apos;s
                embark on the journey of building something extraordinary!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
