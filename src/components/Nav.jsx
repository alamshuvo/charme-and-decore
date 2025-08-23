import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  // Optional: prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="border-b border-[#e0e0e0] max-w-[1440px] lg:px-20 px-5 py-2 mx-auto mb-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to={"/"} className="cursor-pointer">
          <img
            className="w-[60px] md:w-[80px] rounded-md shadow-md shadow-[#FFC107] hover:shadow-xl hover:shadow-[#FFC107] transition-all duration-300"
            src="https://i.ibb.co/wFjPnMXs/aa.png"
            alt="logo"
          />
        </Link>
        {/* Title */}
        <div className="hidden md:block ">
          <p className="font-danching text-2xl md:text-3xl text-white">
            Fahima Chowdhuri Tripty
          </p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 font-fustat">
          {links.map(({ name, path }) => {
            const isActive = currentPath === path;

            return (
              <li key={name}>
                <Link
                  to={path}
                  className={`relative group transition duration-500 hover:scale-105 ${
                    isActive
                      ? "text-[#FFC107] scale-110 font-semibold"
                      : "text-white"
                  }`}
                >
                  <span
                    className={`relative z-10 transition ${
                      isActive
                        ? "bg-gradient-to-r from-[#FFC107] to-[#943cb4] bg-clip-text text-transparent"
                        : "group-hover:bg-gradient-to-r group-hover:from-[#FFC107] group-hover:to-[#943cb4] group-hover:bg-clip-text group-hover:text-transparent"
                    }`}
                  >
                    {name}
                  </span>
                  <span
                    className={`absolute bottom-0 left-0 h-[3px] rounded-full filter drop-shadow-[0_0_8px_rgba(255,193,7,0.9)] transition-all duration-500 ${
                      isActive
                        ? "w-full bg-[#FFC107]"
                        : "w-0 bg-[#FFC107] group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Toggle Button */}
        <div className="md:hidden z-50">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Smooth Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] mt-4" : "max-h-0"
        }`}
      >
        <div className="backdrop-blur-sm bg-white/5 rounded-md py-4 font-fustat text-white text-center space-y-4">
          {links.map(({ name, path }) => {
            const isActive = currentPath === path;
            return (
              <Link
                key={name}
                to={path}
                onClick={() => setIsOpen(false)}
                className={`block text-lg transition ${
                  isActive ? "text-[#FFC107] font-semibold" : "hover:text-[#FFC107]"
                }`}
              >
                {name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Nav;
