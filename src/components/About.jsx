import React from "react";

const About = () => {
  return (
    <div id="#about" className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="lg:flex lg:items-center lg:gap-x-8">
          <div className="w-full lg:w-1/2">
            <img
              className="w-full h-auto object-cover rounded-lg"
              src="about-me.svg"
              alt="my-image"
            />
          </div>
          <div className="mt-8 lg:mt-0 lg:w-1/2">
            <div className="px-4 py-8 md:py-10 lg:py-12">
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
              <p className="text-lg">
                I'm excited to take on new challenges and contribute to
                innovative projects. Feel free to connect with me through the
                social links below or reach out via email. Let's build something
                amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
