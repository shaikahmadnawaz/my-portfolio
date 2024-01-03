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
                Greetings! I&apos;m <span className="font-bold">Nawaz</span>, a
                results-driven{" "}
                <span className="font-bold">Full Stack Web Developer</span>{" "}
                specializing in the dynamic{" "}
                <span className="font-bold">Next.js</span> and{" "}
                <span className="font-bold">MERN stack</span>. My journey
                involves a deep passion for crafting web applications that not
                only deliver{" "}
                <span className="font-bold">seamless user experiences</span> but
                also address{" "}
                <span className="font-bold">real-world challenges</span>.
              </p>
              <p className="text-lg mb-4 text-justify">
                My portfolio boasts a diverse range of web applications,
                spanning from innovative{" "}
                <span className="font-bold">e-commerce platforms</span> to
                engaging{" "}
                <span className="font-bold">social networking sites</span>. I
                pride myself on creating{" "}
                <span className="font-bold">
                  scalable and efficient solutions
                </span>{" "}
                that adhere to{" "}
                <span className="font-bold">industry best practices</span>,
                ensuring optimal performance and user satisfaction.
              </p>
              <p className="text-lg text-justify">
                Eager to tackle{" "}
                <span className="font-bold">new challenges</span>, I am
                committed to contributing my skills to{" "}
                <span className="font-bold">innovative projects</span>. Whether
                it&apos;s enhancing{" "}
                <span className="font-bold">user interactions</span>, optimizing{" "}
                <span className="font-bold">performance</span>, or creating{" "}
                <span className="font-bold">intuitive designs</span>, I&apos;m
                up for the task. Let&apos;s connect through the social links
                below or drop me an email. Together, let&apos;s embark on the
                journey of building something{" "}
                <span className="font-bold">extraordinary</span>!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
