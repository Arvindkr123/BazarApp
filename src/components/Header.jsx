import React from "react";
import { CartLogo, profileLogo } from "../assets";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { productData, userInfo } = useSelector((state) => state.bazaar);
  //console.log(productData);
  return (
    <div className="sticky top-0 z-50 font-titleFont w-full h-20 bg-white border-b-[1px] border-b-gray-800">
      {/* Logo goes here... */}
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to={"/"}>
          <div className="bazar text-3xl font-extrabold w-28 cursor-pointer">
            bazaar
          </div>
        </Link>
        {/* other items goes here... */}
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <Link to={"/"}>
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Home
              </li>
            </Link>
          </ul>
          <Link to={"/cart"}>
            <div className="relative cursor-pointer">
              <img className="w-6" src={CartLogo} alt="cart logo" />
              <span className="absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold">
                {productData.length}
              </span>
            </div>
          </Link>
          <Link to="/login">
            <img
              src={userInfo ? userInfo.image : profileLogo}
              alt="profile logo"
              className="w-8 h-8 rounded-full"
            />
          </Link>
          {userInfo && (
            <p className="capitalize text-base font-titleFont font-semibold underline underline-offset-2">
              {userInfo?.name}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
