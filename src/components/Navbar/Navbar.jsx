import { Drawer } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
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

  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="bg-white">
      <div className="container mx-auto px-4 py-3 grid grid-cols-8 gap-4 items-center">
        <div className="col-span-2 md:col-span-1 w-12 md:w-16 2xl:w-20 h-7 md:h-10 2xl:h-14">
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

            <FiMenu
              onClick={() => setMobileMenu(true)}
              className="md:hidden text-xl"
            />
          </div>
        </div>
        <div className="col-span-3 md:col-span-2 flex justify-end">
          <button
            className="btn py-1.5 md:py-[10px] px-2 md:px-[30px] rounded-md col-span-2"
            onClick={handleToggle}
          >
            Book a Call
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
          <div className="space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link?.label}
                className={`flex items-center gap-1 nav-single-item`}
                to={link.path}
              >
                {link.path === "/" && <IoMdHome />}
                <span className={``}>{link.label}</span>
              </Link>
            ))}
          </div>
        </Drawer>
      </div>
    </header>
  );
}

export default Navbar;
