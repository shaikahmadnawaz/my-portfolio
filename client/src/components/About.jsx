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
                Hello, I&apos;m <span className="font-semibold">Nawaz</span>, a{" "}
                <span className="font-semibold">Full Stack Web Developer</span>{" "}
                focused on <span className="font-semibold">MERN</span> and{" "}
                <span className="font-semibold">Next.js</span>. I love building
                web apps that provide{" "}
                <span className="font-semibold">great user experiences</span>{" "}
                and solve{" "}
                <span className="font-semibold">real world problems</span>.
              </p>
              <p className="text-lg mb-4 text-justify">
                My work includes{" "}
                <span className="font-semibold">e-commerce platforms</span>,{" "}
                <span className="font-semibold">social networking sites</span>,
                and more. I create{" "}
                <span className="font-semibold">scalable solutions</span> that
                follow{" "}
                <span className="font-semibold">industry best practices</span>{" "}
                for the best performance and user satisfaction.
              </p>
              <p className="text-lg text-justify">
                Currently, I&apos;m working as an{" "}
                <span className="font-semibold">
                  Associate Software Engineer
                </span>{" "}
                at{" "}
                <span className="font-semibold">
                  Drag and Drop India Private Limited
                </span>
                . I&apos;m always excited to take on{" "}
                <span className="font-semibold">new challenges</span> and
                contribute to{" "}
                <span className="font-semibold">innovative projects</span>. Feel
                free to connect with me through social media or email.
                Let&apos;s build something{" "}
                <span className="font-semibold">amazing</span> together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
