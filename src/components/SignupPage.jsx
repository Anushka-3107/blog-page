import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";

const SignupPage = () => {
  return (
    <div className="h-screen bg-[#F4F8D3] flex items-center justify-center text-center">
      <div className="bg-[#FFEDFA] rounded-3xl p-20 shadow-2xl">
        <h1 className="text-4xl font-bold text-pink-400">SIGN UP</h1>
        <p className="text-lg text-pink-300 tracking-widest mt-1 font-semibold">FOR YOUR ACCOUNT</p>

        <div className="flex flex-col items-center mt-8 w-full max-w-md space-y-8 ">
          <div className="w-full relative flex justify-between items-center bg-pink-300 rounded-2xl">
          <FaUser className="pointer-events-none absolute w-6 h-6 m-2 text-pink-600"/>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-12 py-3 border border-gray-300 rounded-2xl focus:outline-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-300 text-white text-lg"
            />
          </div>

          <div className="w-full relative flex justify-between items-center rounded-2xl bg-pink-300">
          <HiOutlineMail className="pointer-events-none absolute w-6 h-6 m-2 text-pink-600" />
            <input
              placeholder="Email id"
              type="email"
              className="w-full px-10 py-3 border border-gray-300 rounded-2xl focus:outline-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300 text-white text-lg"
            />
          </div>

          <div className="w-full relative flex justify-between items-center rounded-2xl bg-pink-300">
          <IoMdLock className="pointer-events-none absolute w-6 h-6 m-2 text-pink-600"/>
            <input
              placeholder="password"
              type="password"
              className="w-full px-10 py-3 border border-gray-300 rounded-2xl focus:outline-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300 text-white text-lg"
            />
          </div>

          <button className="px-6 py-3 w-full rounded-2xl bg-pink-500 text-white text-lg">SIGN UP</button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
