import React from "react";
import logoa from "../../public/vite.svg";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="border-b border-[#e0e0e0] max-w-[1440px] lg:px-20 px-5 py-2 mx-auto mb-4">
      <div className="flex justify-between items-center">
        <Link to={"/"} className="cursor-pointer">
          <img
            className="w-[80px] rounded-md cursor-pointer shadow-md shadow-pink-500 hover:shadow-xl hover:shadow-pink-950 transition-all duration-300 ease-in-out"
            src={logoa}
            alt="logo"
          />
        </Link>
        <div>
          <p className="font-danching text-3xl">Fahima Chowdhuri Tripty</p>
        </div>
        <div>
          <ul className="flex items-center gap-8">
            <li>
              <Link
                to={"/"}
                className="text-[#333] hover:text-[#8d7acb] transition-all duration-300 ease-in-out"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className="text-[#333] hover:text-[#8d7acb] transition-all duration-300 ease-in-out"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                className="text-[#333] hover:text-[#8d7acb] transition-all duration-300 ease-in-out"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
