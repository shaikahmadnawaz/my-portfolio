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
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Blogs",
    href: "#blogs",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [hoveredNavItem, setHoveredNavItem] = React.useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mx-auto fixed top-0 left-0 right-0 z-50 max-w-7xl w-full bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200">
      <div className="flex items-center justify-between px-4 py-4">
        <Link
          activeClass="active"
          to="#home"
          spy={true}
          smooth={true}
          offset={-20}
          duration={500}
          className="inline-flex items-center space-x-2 cursor-pointer"
        >
          <span className="bg-black rounded-full">
            <BiCodeAlt className="text-white p-1" size={30} />
          </span>
          <span className="font-bold">Nawaz</span>
        </Link>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-5">
            {menuItems.map((item) => (
              <li
                key={item.name}
                onMouseEnter={() => setHoveredNavItem(item.name)}
                onMouseLeave={() => setHoveredNavItem(null)}
                className="relative cursor-pointer font-[500] text-[18px] text-black"
              >
                <Link
                  activeClass="active"
                  to={item.href}
                  spy={true}
                  smooth={true}
                  offset={-20}
                  duration={500}
                  className="text-sm font-semibold text-black cursor-pointer px-2"
                >
                  {item.name}
                </Link>
                {hoveredNavItem === item.name && (
                  <div className="absolute bottom-[-3px] left-0 w-full h-1 bg-black rounded-t-lg" />
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          <a
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
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
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-white rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
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
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold cursor-pointer"
                      >
                        <span className="ml-3 text-base font-medium text-black">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>
                <a
                  className="mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
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
