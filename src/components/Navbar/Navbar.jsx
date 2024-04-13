import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  const navLinks = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About",
      path: "#about",
    },
    {
      label: "Service",
      path: "#service",
    },
    {
      label: "Contact",
      path: "#contact",
    },
  ];

  return (
    <header className="bg-white">
      <div className="container mx-auto px-4 py-3 grid grid-cols-8 gap-4 items-center">
        <div className="col-span-2 md:col-span-1 w-16 2xl:w-20 h-10 2xl:h-14">
          <img src="img/logo.png" alt="Logo" className="" />
        </div>
        <div className="col-span-3 md:col-span-5  flex justify-center md:justify-start">
          <input
            type="checkbox"
            id="menu-toggle"
            className="hidden"
            checked={toggleMenu}
            onChange={handleToggle}
          />
          <div className="md:flex items-center text-gray-700 text-xl 2xl:text-2xl justify-start space-x-4">
            <ul className="md:flex hidden md:items-center space-x-4 col-span-6">
              {navLinks.map((link) => (
                <Link to={link.path}>
                  <li className="cursor-pointer hover:text-gray-500 border-b border-transparent py-2 px-3">
                    {link?.label}
                  </li>
                </Link>
              ))}
            </ul>
            <label
              htmlFor="menu-toggle"
              className="menu-icon cursor-pointer md:hidden"
            >
              <span
                className={`navicon bg-gray-700 block w-6 h-0.5 ${
                  toggleMenu ? "rotate-45" : ""
                }`}
              ></span>
              <span
                className={`navicon bg-gray-700 block w-6 h-0.5 mt-1 ${
                  toggleMenu ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`navicon bg-gray-700 block w-6 h-0.5 mt-1 ${
                  toggleMenu ? "rotate--45" : ""
                }`}
              ></span>
            </label>
          </div>
        </div>
        <div className="col-span-3 md:col-span-2 flex justify-end">
          <button
            className="btn py-[10px] px-[30px] rounded-md col-span-2"
            onClick={handleToggle}
          >
            Book a Call
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
