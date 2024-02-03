import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="container flex items-center justify-between pt-6">
      <div className="flex flex-col items-center leading-[0.8]">
        <h1 className="text-[40px] md:text-[50px] font-semibold">Flivain</h1>
        <p className="text-[12px] md:text-sm text-[#777e90]">
          Flight Backing Agency
        </p>
      </div>
      <nav className="hidden lg:flex gap-10 text-[#777e90] text-md">
        <Link
          href="/"
          className="hover:text-black cursor-pointer transition-all duration-125"
        >
          Home
        </Link>
        <Link
          href="/"
          className="hover:text-black cursor-pointer transition-all duration-125"
        >
          About
        </Link>
        <Link
          href="/"
          className="hover:text-black cursor-pointer transition-all duration-125"
        >
          Offers
        </Link>
        <Link
          href="/"
          className="hover:text-black cursor-pointer transition-all duration-125"
        >
          Seats
        </Link>
        <Link
          href="/"
          className="hover:text-black cursor-pointer transition-all duration-125"
        >
          Destinations
        </Link>
      </nav>
      <button className="bg-[#3e5cb8] text-white px-8 md:px-10 py-2 text-lg rounded-full cursor-pointer">
        Contact
      </button>
    </header>
  );
};

export default Header;
