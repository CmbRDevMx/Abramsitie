import React from "react";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram, BsTelephoneFill } from "react-icons/bs";
import { Link } from "react-scroll";
import { IoLocationOutline } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";

function Footer() {
  const navLinks = [
    // {
    //   label: "Home",
    //   path: "home",
    // },
    // {
    //   label: "About",
    //   path: "about",
    // },
    {
      label: "Service",
      path: "service",
    },
    // {
    //   label: "Contact",
    //   path: "contact",
    // },
  ];

  return (
    <header className="bg-white border border-t 2xl:border-t-2">
      <div className="lg:px-12 2xl:px-16 px-4 py-3 flex flex-col md:flex-row justify-between gap-4 items-center">
        <Link
          to={"home"}
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="w-16 2xl:w-20 h-10 2xl:h-14 flex justify-center md:justify-start"
        >
          <img src="img/logo.png" alt="Logo" className="cursor-pointer" />
        </Link>
        <div className=" text-gray-700 flex justify-center md:justify-start">
          <p className="border-l-[3px] pl-[20px]">All Copyright Reserved.</p>
        </div>
        <div className="flex justify-center md:justify-start text-gray-700 text-xl 2xl:text-2xl space-x-4">
          <ul className="md:flex md:items-center ">
            {navLinks.map((link) => (
              <Link
                to={link.path}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <li className="cursor-pointer underline hover:text-gray-500 border-b border-transparent py-2 px-3">
                  {link?.label}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-6 2xl:gap-8">
          <p className="flex items-center text-gray-600 gap-1">
            <IoLocationOutline />
            Dallas, Texas
          </p>
          <p className="flex items-center text-gray-600 gap-1">
            <MdAlternateEmail />
            www.cstsocial marketing.com
          </p>
          <p className="flex items-center text-gray-600 gap-1">
            <BsTelephoneFill />
            718-514-3248
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <FaTwitter className="text-blue-500 text-2xl 2xl:text-[38px]" />
          <BsInstagram className="bg-red-500 text-2xl 2xl:text-[38px] text-white rounded-xl ml-4" />
        </div>
      </div>
    </header>
  );
}

export default Footer;
