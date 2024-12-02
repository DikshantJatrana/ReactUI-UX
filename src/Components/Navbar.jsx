import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="w-full mx-auto p-3 sm:p-4 smd:p-5 md:p-6 lg:p-7">
        <div className="flex items-center justify-between">
          <div className="text-[#00ed5f] uppercase font-bold text-2xl sm:text-3xl smd:text-4xl md:text-5xl lg:text-5xl hover:cursor-pointer">
            React.
          </div>
          <div
            className="text-green-400 ease-in-out duration-300 rounded-[50%] hover:cursor-pointer p-2 hover:bg-slate-600 text-xl sm:text-2xl smd:text-3xl md:hidden"
            onClick={handleNav}
          >
            {!nav ? <GiHamburgerMenu /> : <IoCloseSharp />}
          </div>
          <div className="hidden md:block">
            <ul className=" text-white flex">
              <li className="pr-8 font-medium text-l lg:text-xl hover:cursor-pointer">
                Home
              </li>
              <li className="pr-8 font-medium text-l lg:text-xl hover:cursor-pointer">
                About
              </li>
              <li className="pr-8 font-medium text-l lg:text-xl hover:cursor-pointer">
                Contact
              </li>
              <li className="pr-10 font-medium text-l lg:text-xl hover:cursor-pointer">
                Company
              </li>
            </ul>
          </div>
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[55%] h-full border-r-2 border-gray-900 bg-black p-3 ease-in-out duration-500 sm:p-4 smd:p-5 md:p-6 lg:p-7 md:hidden"
                : "fixed left-[-100%]"
            }
          >
            <div className="text-[#00ed5f] uppercase font-bold pt-[2px] text-2xl sm:text-3xl smd:text-4xl md:text-5xl lg:text-5xl hover:cursor-pointer">
              React.
            </div>
            <ul className=" text-white uppercase">
              <li className="pt-8 border-b-2 border-gray-500 font-medium text-xl hover:cursor-pointer">
                Home
              </li>
              <li className="pt-8 border-b-2 border-gray-500 font-medium text-xl hover:cursor-pointer">
                About
              </li>
              <li className="pt-8 border-b-2 border-gray-500 font-medium text-xl hover:cursor-pointer">
                Contact
              </li>
              <li className="pt-8 border-b-2 border-gray-500 font-medium text-xl hover:cursor-pointer">
                Company
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
