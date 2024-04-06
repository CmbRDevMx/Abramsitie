import React from 'react';
import { FaTwitter } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';

function Footer() {
  return (
    <header className="bg-white">
      <div className="container mx-auto px-4 py-3 grid grid-cols-1 md:grid-cols-8 gap-4 items-center">
        <div className="col-span-1 md:col-span-1 flex justify-center md:justify-start">
          <img src="img/logo.png" alt="Logo" className="" />
        </div>
        <div className="col-span-1 md:col-span-2 text-gray-700 flex justify-center md:justify-start">
          <p className="border-l-[3px] pl-[20px]">All Copyright Reserved.</p>
        </div>
        <div className="col-span-1 md:col-span-4 flex justify-center md:justify-start text-gray-700 text-[24px] space-x-4">
          <ul className="md:flex md:items-center space-x-4">
            <li className="cursor-pointer hover:text-gray-500 border-b border-transparent py-2 px-3">Home</li>
            <li className="dropdown cursor-pointer hover:text-gray-500 border-b border-transparent py-2 px-3 relative">About</li>
            <li className="cursor-pointer hover:text-gray-500 border-b border-transparent py-2 px-3">Service</li>
            <li className="cursor-pointer hover:text-gray-500 border-b border-transparent py-2 px-3">Contact</li>
          </ul>
        </div>
        <div className="col-span-1 md:col-span-1 flex justify-center md:justify-end">
          <FaTwitter className="text-blue-500 text-[38px]" />
          <BsInstagram className="bg-red-500 text-[38px] text-white rounded-xl ml-4" />
        </div>
      </div>
    </header>
  );
};

export default Footer;

