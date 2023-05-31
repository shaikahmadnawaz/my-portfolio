import React from "react";

const About = () => {
  return (
    <div id="#about" className="relative w-full bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:items-center lg:gap-x-8 lg:px-8">
        <div className="relative w-full lg:w-1/2">
          <img
            className="w-full h-auto object-cover lg:rounded-lg"
            src="about-me.svg"
            alt="my-image"
          />
        </div>
        <div className="mt-8 lg:mt-0 lg:w-1/2">
          <div className="px-4 py-12 md:py-16 lg:py-24">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg mb-4">
              Hi, I'm Nawaz, a Full Stack Web Developer with a focus on MERN
              stack (MongoDB, Express.js, React.js, and Node.js). I have a
              passion for creating web applications that provide seamless user
              experiences and solve real-world problems.
            </p>
            <p className="text-lg mb-4">
              I have built numerous web applications, ranging from e-commerce
              platforms to social networking sites. My expertise lies in
              designing and developing scalable and efficient solutions that
              adhere to industry best practices.
            </p>
            {/* <p className="text-lg mb-4">
              Currently, I am expanding my skill set and exploring the field of
              DevOps. I am enthusiastic about incorporating DevOps practices to
              streamline the software development lifecycle and improve
              deployment processes.
            </p> */}
            <p className="text-lg mb-4">
              In addition to my technical skills, I am a strong collaborator and
              enjoy working in agile teams. I value continuous learning and stay
              updated with the latest trends and technologies in the web
              development industry.
            </p>
            <p className="text-lg">
              I'm excited to take on new challenges and contribute to innovative
              projects. Feel free to connect with me through the social links
              below or reach out via email. Let's build something amazing
              together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
