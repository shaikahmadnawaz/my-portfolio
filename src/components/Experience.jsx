function Experience() {
  const experiences = [
    {
      title: "Full Stack Development Intern",
      company: "Atoms Digital Solutions",
      logo: "./atoms.jpg",
      duration: "Mar 2023 - Sep 2023",
      description: `Played a key role in developing three comprehensive websites for the Atoms Group and its affiliated wings.
      Utilized MERN stack and AWS technologies. Successfully established a digital presence, contributing to a 20% growth in online visibility.
      Implemented features that facilitated the acquisition of new clients, resulting in a 15% increase in client engagement.`,
    },

    {
      title: "Open Source Contributor",
      company: "Time Chain Labs, Node.js, Dart, BioDrop, and more",
      logo: "./open-source.webp",
      duration: "Apr 2023 - Present",
      description: `Contributed to Bitcoin Token Standards project as part of Timechain Labs.
      Contributed to Dart docs.
      Contributed to Node.js website, BioDrop, and SeamlessUI projects.`,
    },
  ];

  return (
    <div id="#experience" className="relative w-full py-10 bg-white">
      <div className="mx-auto max-w-7xl px-8">
        <h1 className="text-3xl font-bold mb-4 md:text-center">Experience</h1>
        <p className="text-lg text-black mb-8 md:text-center">
          Check out my professional experience below.
        </p>
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="flex max-w-2xl flex-col items-center rounded-md border md:flex-row shadow-sm"
            >
              <div className="h-full w-full md:h-[200px] md:w-[400px] p-2">
                <img
                  src={experience.logo}
                  alt="company logo"
                  className="h-full w-full rounded-md object-cover"
                />
              </div>
              <div>
                <div className="p-4">
                  <h2 className="inline-flex items-center text-lg font-semibold">
                    {experience.title}
                  </h2>
                  <div className="mt-3 flex items-center space-x-2">
                    <span className="flex flex-col">
                      <span className="text-[10px] font-medium text-black">
                        {experience.company}
                      </span>
                      <span className="text-[8px] font-medium text-black">
                        {experience.duration}
                      </span>
                    </span>
                  </div>
                  <div className="mt-3 text-sm text-black text-justify">
                    <ul className="list-disc pl-5">
                      {experience.description
                        .split("\n")
                        .map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
