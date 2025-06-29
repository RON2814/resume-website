import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi"; // Make sure to install react-icons: npm install react-icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const links = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Challenges", path: "/challenges" },
    { name: "Future Plans", path: "/future-plans" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] w-full">
      <nav className="flex justify-between items-center shadow-md px-4 md:px-[10%] min-h-12 bg-white">
        <NavLink
          to="/"
          className="font-poppins font-bold text-pink-500 text-xl py-4"
        >
          AARON
        </NavLink>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-4">
          {links.map((link) => (
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-pink-600"
                    : "hover:text-pink-300 text-gray-500"
                } uppercase font-weight-400 py-8 px-2 transition-colors duration-300`
              }
              key={link.path}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 hover:text-pink-500 transition-colors p-2"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-[9998] transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          ref={menuRef}
          className={`absolute right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col p-4">
            <div className="flex justify-end items-center mb-8">
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-pink-500 transition-colors p-2"
                aria-label="Close menu"
              >
                <HiX size={24} />
              </button>
            </div>

            {links.map((link) => (
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-pink-600 bg-pink-50"
                      : "text-gray-700 hover:bg-gray-100 hover:text-pink-500"
                  } uppercase py-3 px-4 mb-2 rounded transition-all duration-200`
                }
                key={link.path}
                onClick={() => setIsOpen(false)} // Close menu when a link is clicked
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
