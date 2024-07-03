import { Drawer } from "antd";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { IoMdHome } from "react-icons/io";
import { FiMenu } from "react-icons/fi";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

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

  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="bg-white">
      <div className="container mx-auto px-4 py-3 flex justify-between gap-4 items-center">
        <div className="w-full md:w-fit flex items-center justify-between md:justify-normal gap-16 2xl:gap-20">
        <div className="w-28 md:w-32 lg:w-34 2xl:w-40 h-24 md:h-28 lg:h-30 2xl:h-36">
          <img src="img/l-smma.png" alt="Logo" className="w-full h-full object-contain" />
        </div>

          <div className="md:flex items-center text-gray-700 text-xl 2xl:text-2xl justify-start space-x-4">
            <ul className="md:flex hidden md:items-center space-x-4 col-span-6">
              {navLinks.map((link) => (
                <Link
                  to={link.path}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  <li className="cursor-pointer hover:text-gray-500 border-b border-transparent py-2 px-3">
                    {link?.label}
                  </li>
                </Link>
              ))}
            </ul>

            <FiMenu
              onClick={() => setMobileMenu(true)}
              className="md:hidden text-xl"
            />
          </div>
        </div>

        <div className="hidden md:flex col-span-3 md:col-span-2 justify-end">
          <button
            className="btn py-1.5 md:py-[10px] px-2 md:px-[30px] rounded-md col-span-2"
            onClick={handleToggle}
          >
            <a href="https://calendly.com/d/ck73-fkt-sz7/cst-marketing-call">SCHEDULE A CALL </a> 
          </button>
        </div>
      </div>

      <div className="block md:hidden">
        <Drawer
          width={300}
          placement={"left"}
          closable={false}
          onClose={() => setMobileMenu(false)}
          open={mobileMenu}
        >
          <div className="space-y-2 px-3 py-5">
            {navLinks.map((link) => (
              <Link
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                key={link?.label}
                className={`flex items-center gap-1 nav-single-item`}
                to={link.path}
              >
                {link.path === "/" && <IoMdHome />}
                <span className={``}>{link.label}</span>
              </Link>
            ))}
            <button className="btn py-1 px-2 rounded-md text-sm">
              <a href="https://calendly.com/d/ck73-fkt-sz7/cst-marketing-call">Schedule a Call</a>
            </button>
          </div>
        </Drawer>
      </div>
    </header>
  );
}

export default Navbar;
