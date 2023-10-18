import React from "react";
import { CartLogo, profileLogo } from "../assets";

const Header = () => {
  return (
    <div className="font-titleFont w-full h-20 bg-white border-b-[1px] border-b-gray-800">
      {/* Logo goes here... */}
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <div className="bazar text-3xl font-extrabold w-28">bazaar</div>
        {/* other items goes here... */}
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Home
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Element
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Blog
            </li>
          </ul>
          <div className="relative">
            <img className="w-6" src={CartLogo} alt="cart logo" />
            <span className="absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold">
              0
            </span>
          </div>
          <img src={profileLogo} alt="profile logo"  className="w-8 h-8 rounded-full"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
