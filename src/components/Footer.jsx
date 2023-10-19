import React from "react";
import { PaymentLogo } from "../assets";
import { ImGithub } from "react-icons/im";
import { MdLocationOn } from "react-icons/md";
import { BsPaypal, BsPersonFill } from "react-icons/bs";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4 gap-5">
        {/* logo icons start here ............. */}
        <div className="flex flex-col gap-7">
          <h1 className="text-3xl text-white font-extrabold">bazaar</h1>
          <p className="text-white text-sm tracking-wide">
            @ thakurarvindk10@gmail.com
          </p>
          <img className="w-56" src={PaymentLogo} alt="payment logo" />
          <div className="flex gap-5 text-lg text-gray-700">
            <ImGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebook className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaHome className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        {/* logo icons end here ............. */}

        {/*======================== Locate us start here =============================== */}
        <div>
          <h1 className="text-2xl font-semibold text-white mb-4">locate us</h1>
          <div className="flex  flex-col gap-2 text-base">
            <p>Arvind Kumar</p>
            <p>📱 +91 9315207665</p>
            <p>📧 thakurarvindk10@gmail.com</p>
          </div>
        </div>
        {/*======================== Locate us end here =============================== */}
        {/* ======================= Profile start here =============================== */}
        <div>
          <h1 className="text-2xl font-semibold text-white mb-4">profile</h1>
          <div className="flex  flex-col gap-2 text-base">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPersonFill />
              </span>
              my account
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPaypal />
              </span>
              checkout
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <FaHome />
              </span>
              order tracking
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <MdLocationOn />
              </span>
              help & support
            </p>
          </div>
        </div>
        {/* ======================= Profile end here =============================== */}

        {/* ======================= subscribe start here =========================== */}
        <div className="flex flex-col justify-center">
          <input
            type="text"
            placeholder="e-mail"
            className="bg-transparent border px-4 py-2 text-sm"
          />
          <button className="text-sm border text-white border-t-0 hover:bg-gray-900 py-2">
            subscribe
          </button>
        </div>
        {/* ======================= subscribe end here =========================== */}
      </div>
    </div>
  );
};

export default Footer;
