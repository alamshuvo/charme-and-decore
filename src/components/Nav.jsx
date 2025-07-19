import React from "react";
import logoa from "../../public/vite.svg";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="border-b border-[#e0e0e0] max-w-[1440px] lg:px-20 px-5 py-2 mx-auto mb-4">
      <div className="flex justify-between items-center">
        <Link to={"/"} className="cursor-pointer">
          <img
            className="w-[80px] rounded-md cursor-pointer shadow-md shadow-[#FFC107] hover:shadow-xl hover:shadow-[#FFC107] transition-all duration-300 ease-in-out"
            src={logoa}
            alt="logo"
          />
        </Link>
        <div>
          <p className="font-danching text-3xl text-white">Fahima Chowdhuri Tripty</p>
        </div>
        <div>
          <ul className="flex items-center gap-10 font-fustat">
            {links.map(({ name, path }) => {
              const isActive = currentPath === path;

              return (
                <li key={name}>
                  <Link
                    to={path}
                    className={`relative group transition duration-500 ease-in-out hover:scale-105 ${
                      isActive
                        ? "text-[#FFC107] scale-110 font-semibold"
                        : "text-white"
                    }`}
                  >
                    <span
                      className={`relative z-10 transition duration-500 ease-in-out ${
                        isActive
                          ? "bg-gradient-to-r from-[#FFC107] to-[#943cb4] bg-clip-text text-transparent"
                          : "group-hover:bg-gradient-to-r group-hover:from-[#FFC107] group-hover:to-[#943cb4] group-hover:bg-clip-text group-hover:text-transparent"
                      }`}
                    >
                      {name}
                    </span>

                    <span
                      className={`absolute bottom-0 left-0 h-[3px] rounded-full filter drop-shadow-[0_0_8px_rgba(255,193,7,0.9)] transition-all duration-500 ease-in-out ${
                        isActive ? "w-full bg-[#FFC107]" : "w-0 bg-[#FFC107] group-hover:w-full"
                      }`}
                    ></span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
