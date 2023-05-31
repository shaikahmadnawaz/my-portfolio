import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "About Macbook",
    imageUrl:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
    tags: ["#Macbook", "#Apple", "#Laptop"],
  },
  {
    title: "About Macbook",
    imageUrl:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
    tags: ["#Macbook", "#Apple", "#Laptop"],
  },
  {
    title: "About Macbook",
    imageUrl:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
    tags: ["#Macbook", "#Apple", "#Laptop"],
  },
  {
    title: "About Macbook",
    imageUrl:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
    tags: ["#Macbook", "#Apple", "#Laptop"],
  },
  // Add more projects here
];

function Project() {
  return (
    <div id="#projects" className="relative w-full bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:flex-col lg:items-center lg:gap-x-8 lg:px-8">
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
        <p className="text-lg text-gray-600 mb-8">
          Explore my featured projects below.
        </p>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="rounded-md border">
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
                      className="inline-block bg-gray-100 px-3 py-1 mr-2 mb-2 text-[10px] font-semibold text-gray-900 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  className="w-full rounded-sm bg-black text-sm font-semibold text-white px-2 py-1.5 shadow-sm hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-black"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
