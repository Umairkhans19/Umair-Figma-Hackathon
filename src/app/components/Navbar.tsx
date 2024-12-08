import React from 'react';
import Link from 'next/link';
import { FaRegUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-[#FBEBB5] w-full h-[40px] pt-[20px] md:pt-[60px] px-4">
      {/* Center section with links */}
      <ul className="flex space-x-10 text-center">
        <Link href="#">
          <a className="text-[16px] font-semibold">Home</a>
        </Link>
        <Link href="#">
          <a className="text-[16px] font-semibold">Shop</a>
        </Link>
        <Link href="#">
          <a className="text-[16px] font-semibold">About</a>
        </Link>
        <Link href="#">
          <a className="text-[16px] font-semibold">Contact</a>
        </Link>
      </ul>

      {/* Right section with icons */}
      <div className="flex space-x-6 text-[16px] font-bold">
        <FaRegUser className="text-lg" />
        <CiSearch className="text-lg" />
        <CiHeart className="text-lg" />
        <IoCartOutline className="text-lg" />
      </div>
    </div>
  );
}

export default Navbar;
