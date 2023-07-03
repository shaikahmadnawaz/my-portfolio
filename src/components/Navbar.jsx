import React from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import { BiCodeAlt } from "react-icons/bi";

const menuItems = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Blogs",
    href: "#blogs",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span className="bg-black rounded-full">
            <BiCodeAlt className="text-white p-1" size={30} />
          </span>
          <span className="font-bold">Nawaz</span>
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  smooth={true}
                  duration={500}
                  className="text-sm font-semibold text-gray-800 hover:text-white cursor-pointer hover:bg-black px-2 hover:rounded-full hover:py-[0.3rem]"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          <a
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            href="https://drive.google.com/drive/folders/1A6pzD7WIt99v-vbEtiJ7Iul3KuqSvTDv?usp=share_link"
            target="_blank"
            rel="noreferrer"
          >
            Hire Me
          </a>
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2  transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span className="bg-black rounded-full">
                      <BiCodeAlt className="text-white p-1" size={30} />
                    </span>
                    <span className="font-bold">Nawaz</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        smooth={true}
                        duration={500}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50 cursor-pointer"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>
                <a
                  className="mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  href="https://drive.google.com/drive/folders/1A6pzD7WIt99v-vbEtiJ7Iul3KuqSvTDv?usp=share_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
