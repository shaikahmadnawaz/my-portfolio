import { useEffect, useState } from "react";
import axios from "axios";
import { ArrowUpRight } from "lucide-react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.post("https://api.hashnode.com/", {
          query: `
            {
              user(username: "shaikahmadnawaz") {
                publication {
                  posts(page: 0) {
                    slug
                    title
                    brief
                    coverImage
                  }
                }
              }
            }
          `,
        });
        const { data } = response.data;
        if (data && data.user && data.user.publication) {
          const { posts } = data.user.publication;
          setBlogs(posts);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div id="#blogs" className="relative w-full py-10 bg-white">
      <div className="mx-auto max-w-7xl px-8">
        <h1 className="text-3xl font-bold mb-4 md:text-center">Blogs</h1>
        <p className="text-lg text-black mb-8 md:text-center">
          Explore the world of technology through my insightful and informative
          articles.
        </p>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div key={blog.slug} className="rounded-md border shadow-sm">
              <img
                src={blog.coverImage}
                alt={blog.title}
                className="h-48 w-full object-cover rounded-t-md"
              />
              <div className="p-4">
                <a
                  href={`https://shaikahmadnawaz.hashnode.dev/${blog.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2 className="text-xl hover:underline font-semibold mb-2 text-justify">
                    {blog.title}
                  </h2>
                </a>
                <p className="text-black text-justify">{blog.brief}</p>
                <div className="mt-4">
                  <a
                    href={`https://shaikahmadnawaz.hashnode.dev/${blog.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full rounded-sm bg-black text-sm font-semibold text-white px-2 py-1.5 shadow-sm  focus:outline-none focus-visible:ring-2 focus-visible:ring-black hover:underline"
                  >
                    Read Article{" "}
                    <ArrowUpRight className="inline-block ml-1" size={12} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
