import { Github, Link } from "lucide-react";

const projects = [
  {
    title: "Vaaradhi Portal",
    imagecodeUrl: "vaaradhi.png",
    description:
      "Implemented MERN stack technology in the development of Vaaradhi Portal for an NGO, saving 20 hours weekly by efficiently managing data entry and paperwork. Additionally, enhanced user accessibility for donors, caretakers, and students.",
    tags: [
      "#React.js",
      "#Tailwind CSS",
      "#Node.js",
      "#Express.js",
      "#MongoDB",
      "#GCP",
    ],
    liveUrl: "https://wayvaaradhi.org",
    codeUrl: "https://wayvaaradhi.org",
  },
  {
    title: "Next Note",
    imagecodeUrl: "next-note.png",
    description:
      "Developed a Next.js web app with a robust text editor for note creation and management. Integrated NextAuth.js for user authentication, supporting GitHub and Google logins. Introduced subscription functionality using Stripe, enabling users to access premium features.",
    tags: [
      "#Next.js",
      "#TypeScript",
      "#Tailwind CSS",
      "#NextAuth.js",
      "#PostgreSQL",
      "#Prisma",
    ],
    liveUrl: "https://next-note-saas.vercel.app",
    codeUrl: "https://github.com/shaikahmadnawaz/next-note",
  },
  {
    title: "Book Talks",
    imagecodeUrl: "booktalks.png",
    description:
      "Developed a feature-rich book talks application using the MERN stack, allowing users to add reviews and ratings to books, enhancing community engagement and providing valuable insights. Implemented AWS S3 for efficient image storage.",
    tags: [
      "#React.js",
      "#Tailwind CSS",
      "#Node.js",
      "#Express.js",
      "#MongoDB",
      "#AWS S3",
    ],
    liveUrl: "https://booktalks.vercel.app",
    codeUrl: "https://github.com/shaikahmadnawaz/book-talks",
  },
  {
    title: "Real-time Code Editor",
    imagecodeUrl: "code-editor.png",
    description:
      "Developed a real-time code editor using React, Node.js, and Express.js. Implemented Web Sockets using socket.io for real-time collaboration, Added feature for creating rooms for multiple users to work on the same code simultaneously.",
    tags: [
      "#React.js",
      "#Node.js",
      "#Express.js",
      "#Socket.IO",
      "#GitHub",
      "#Render",
    ],
    liveUrl: "https://realtime-sync-code-editor.vercel.app",
    codeUrl: "https://github.com/shaikahmadnawaz/realtime-code-editor",
  },
  {
    title: "Workout Tracker",
    imagecodeUrl: "workout-tracker.png",
    description:
      "Developed a workout tracking application using React, Node.js, Express.js, and MongoDB. Implemented authentication and authorization using JWT. ensuring a secure and personalized fitness experience for users.",
    tags: [
      "#React.js",
      "#Node.js",
      "#Express.js",
      "#MongoDB",
      "#JWT",
      "#REST API",
      "#Cyclic",
    ],
    liveUrl: "https://workout-tracker.cyclic.app",
    codeUrl: "https://github.com/shaikahmadnawaz/workout-tracker",
  },
  {
    title: "VConnect Globe",
    imagecodeUrl: "vconnectglobe.png",
    description:
      "Developed a fully responsive landing page for Vconnectglobe, a startup specializing in 1‑2‑1 mentorship for students aspiring to study in foreign universities. Implemented a clean and intuitive design on the landing page.",
    tags: ["#React.js", "#Tailwind CSS", "#Node.js", "#GitHub", "#Hostinger"],
    liveUrl: "https://vconnectglobe.com",
    codeUrl: "https://vconnectglobe.com",
  },

  // {
  //   title: "My Portfolio",
  //   imagecodeUrl: "my-portfolio.png",
  //   description:
  //     "Developed my personal portfolio website using ReactJS and Tailwind CSS. Showcased my projects, skills, and experience, Implemented responsive design.",
  //   tags: [
  //     "#React",
  //     "#Tailwind CSS",
  //     "#Node.js",
  //     "#Express.js",
  //     "#MongoDB",
  //     "#Mongoose",
  //   ],
  //   codeUrl: "https://github.com/shaikahmadnawaz/my-portfolio",
  // },
];

function Projects() {
  return (
    <div id="#projects" className="relative w-full py-10 bg-white">
      <div className="mx-auto max-w-7xl px-8">
        <h1 className="text-3xl font-bold mb-4 md:text-center">Projects</h1>
        <p className="text-lg mb-8 md:text-center">
          Explore my featured projects below.
        </p>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-md overflow-hidden border shadow-sm"
            >
              <img
                src={project.imagecodeUrl}
                alt="Project"
                className="h-48 w-full object-cover rounded-t-md"
              />
              <div className="p-4">
                <h1 className="text-lg font-semibold mb-2">{project.title}</h1>
                <p className="text-sm text-black text-justify mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-zinc-200 px-3 py-1 mr-2 mb-2 text-xs font-semibold text-gray-900 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    className="w-[120px] rounded-sm text-center bg-black text-xs font-semibold text-white px-2 py-1.5 shadow-sm  focus:outline-none focus:ring-2 focus:ring-black"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Project{" "}
                    <Link className="inline-block ml-1" size={12} />
                  </a>
                  <a
                    className="w-[120px] rounded-sm text-center bg-black text-xs font-semibold text-white px-2 py-1.5 shadow-sm  focus:outline-none focus:ring-2 focus:ring-black"
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Code{" "}
                    <Github className="inline-block ml-1" size={12} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
