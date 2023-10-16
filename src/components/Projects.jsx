import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Vaaradhi Portal",
    imageUrl: "vaaradhi.png",
    description:
      "Saved 20 hours weekly by developing Vaaradhi Portal (MERN) for an NGO. Streamlined data entry and paperwork for donors, caretakers, and students.",
    tags: [
      "#React",
      "#Tailwind CSS",
      "#Node.js",
      "#Express.js",
      "#MongoDB",
      "#GCP",
    ],
    url: "https://wayvaaradhi.org",
  },
  {
    title: "Book Talks",
    imageUrl: "booktalks.png",
    description:
      "Developed a feature-rich book talks application using the MERN stack, allowing users to add reviews and ratings to books, enhancing community engagement and providing valuable insights.",
    tags: [
      "#React",
      "#Tailwind CSS",
      "#Node.js",
      "#Express.js",
      "#MongoDB",
      "#AWS S3",
    ],
    url: "https://github.com/shaikahmadnawaz/book-talks",
  },
  {
    title: "Real-time Code Editor",
    imageUrl: "code-editor.png",
    description:
      "Developed a real-time code editor using React, Node.js, and Express.js. Implemented Web Sockets using socket.io for real-time collaboration, Added feature for creating rooms for multiple users to work on the same code simultaneously.",
    tags: [
      "#React",
      "#Node.js",
      "#Express.js",
      "#Socket.IO",
      "#GitHub",
      "#Heroku",
    ],
    url: "https://github.com/shaikahmadnawaz/realtime-code-editor",
  },
  {
    title: "Workout Tracker",
    imageUrl: "workout-tracker.png",
    description:
      "Developed a workout tracking application using React, Node.js, Express.js, and MongoDB. Implemented authentication and authorization using JWT.",
    tags: [
      "#React",
      "#Node.js",
      "#Express.js",
      "#MongoDB",
      "#JWT",
      "#REST API",
      "#Cyclic",
    ],
    url: "https://github.com/shaikahmadnawaz/workout-tracker",
  },
  {
    title: "VConnect Globe",
    imageUrl: "vconnectglobe.png",
    description:
      "Developed a fully responsive landing page for Vconnectglobe, a startup specializing in 1‑2‑1 mentorship for students aspiring to study in foreign universities.",
    tags: ["#React", "#Tailwind CSS", "#GitHub", "#Hostinger"],
    url: "https://github.com/shaikahmadnawaz/vconnectglobe",
  },

  {
    title: "My Portfolio",
    imageUrl: "my-portfolio.png",
    description:
      "Developed my personal portfolio website using ReactJS and Tailwind CSS. Showcased my projects, skills, and experience, Implemented responsive design.",
    tags: [
      "#React",
      "#Tailwind CSS",
      "#Node.js",
      "#Express.js",
      "#MongoDB",
      "#Mongoose",
    ],
    url: "https://github.com/shaikahmadnawaz/my-portfolio",
  },
];

function Projects() {
  return (
    <div id="#projects" className="relative w-full py-10 bg-white">
      <div className="mx-auto max-w-7xl px-8">
        <h1 className="text-3xl font-bold mb-4 md:text-center">Projects</h1>
        <p className="text-lg text-gray-600 mb-8 md:text-center">
          Explore my featured projects below.
        </p>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-md overflow-hidden border border-black"
            >
              <img
                src={project.imageUrl}
                alt="Project"
                className="h-48 w-full object-cover rounded-t-md"
              />
              <div className="p-4">
                <h1 className="text-lg font-semibold mb-2">{project.title}</h1>
                <p className="text-sm text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-100 px-3 py-1 mr-2 mb-2 text-xs font-semibold text-gray-900 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  className="w-full rounded-sm text-center bg-black text-xs font-semibold text-white px-2 py-1.5 shadow-sm hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-black"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project{" "}
                  <ArrowUpRight className="inline-block ml-1" size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
