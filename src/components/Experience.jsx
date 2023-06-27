import React from "react";

function Experience() {
  const experiences = [
    {
      title: "Web Development Intern",
      company: "Atoms Digital Solutions",
      duration: "March 2023 - Present",
      description:
        "Experienced MERN stack web developer specializing in efficient and scalable web applications. Passionate about delivering high-quality code and creating seamless user experiences. Collaborating with a talented team at Atoms Group to bring innovative solutions to life. Let's turn your ideas into reality with cutting-edge technology.",
    },
    {
      title: "Open Source Contributor",
      company: "GirlScript Summer of Code",
      duration: "May 2023 - Present",
      description:
        "Passionate open source contributor actively participating in GirlScript Summer of Code. Contributing to meaningful projects and collaborating with a diverse community to solve real-world challenges. Dedicated to enhancing coding skills, fostering innovation, and making a positive impact in the tech industry.",
    },

    // Add more experiences here
  ];

  return (
    <div id="#experience" className="relative w-full py-10 bg-white">
      <div className="mx-auto max-w-7xl px-8">
        <h1 className="text-3xl font-bold mb-4 md:text-center">Experience</h1>
        <p className="text-lg text-gray-600 mb-8 md:text-center">
          Check out my professional experience below.
        </p>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">{experience.title}</h2>
              <h3 className="text-gray-600 mb-2">{experience.company}</h3>
              <p className="text-gray-600 mb-4">{experience.duration}</p>
              <p className="text-gray-800">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
