import React from "react";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-scroll";

function Footer() {
  const navLinks = [
    {
      label: "Home",
      path: "home",
    },
    {
      label: "About",
      path: "about",
    },
    {
      label: "Service",
      path: "service",
    },
    {
      label: "Contact",
      path: "contact",
    },
  ];

  return (
    <header className="bg-white border border-t 2xl:border-t-2">
      <div className="container mx-auto px-4 py-3 grid grid-cols-1 md:grid-cols-8 gap-4 items-center">
        <Link
          to={"home"}
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="col-span-1 md:col-span-1  w-16 2xl:w-20 h-10 2xl:h-14 flex justify-center md:justify-start"
        >
          <img src="img/logo.png" alt="Logo" className="cursor-pointer" />
        </Link>
        <div className="col-span-1 md:col-span-2 text-gray-700 flex justify-center md:justify-start">
          <p className="border-l-[3px] pl-[20px]">All Copyright Reserved.</p>
        </div>
        <div className="col-span-1 md:col-span-4 flex justify-center md:justify-start text-gray-700 text-xl 2xl:text-2xl space-x-4">
          <ul className="md:flex md:items-center ">
            {navLinks.map((link) => (
              <Link
                to={link.path}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <li className="cursor-pointer hover:text-gray-500 border-b border-transparent py-2 px-3">
                  {link?.label}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="col-span-1 md:col-span-1 flex justify-center md:justify-end">
          <FaTwitter className="text-blue-500 text-2xl 2xl:text-[38px]" />
          <BsInstagram className="bg-red-500 text-2xl 2xl:text-[38px] text-white rounded-xl ml-4" />
        </div>
      </div>
    </header>
  );
}

export default Footer;
