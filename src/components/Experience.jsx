import React from "react";

function Experience() {
  const experiences = [
    {
      title: "Web Developer",
      company: "Atoms Group",
      duration: "March 2023 - Present",
      description:
        "Vivamus dictum leo id turpis efficitur auctor. Sed vel ipsum lectus. Quisque convallis auctor mi, ac ultrices ipsum luctus ac. Nullam eget tellus eget lacus aliquam feugiat.",
    },
    {
      title: "Open Source Contributor",
      company: "GirlScript Summer of Code",
      duration: "May 2023 - Present",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet purus at mauris dictum, sit amet maximus dolor sollicitudin. Ut consequat, turpis vel lacinia pulvinar, massa mauris facilisis est, id efficitur quam lacus a dolor.",
    },

    // Add more experiences here
  ];

  return (
    <div id="#experience" className="relative w-full py-10 bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:flex-col lg:items-center lg:gap-x-8 lg:px-8">
        <h1 className="text-3xl font-bold mb-4">Experience</h1>
        <p className="text-lg text-gray-600 mb-8">
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
