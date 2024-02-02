import React from "react";
import { CiLocationOn, CiUser, CiSearch } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";

const Booking = () => {
  return (
    <div className="container border-2 rounded-3xl flex flex-col gap-6 py-10 shadow-md">
      <div className="flex justify-center">
        <div
          className="flex flex-col md:flex-row items-center gap-5 bg-[#f1f5f5] px-12 py-2 w-fit 
         rounded-sm md:rounded-full text-md text-[#777e90]"
        >
          <p>Economy</p>
          <p className="bg-[#3e5cb8] text-white px-10 py-3 rounded-full">
            Business Class
          </p>
          <p>Fast Class</p>
        </div>
      </div>
      <div className="px-8 gap-14 mt-5 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="flex items-center gap-6 ">
          <div className=" bg-[#f1f5f5] w-12 h-12 flex justify-center  items-center rounded-3xl">
            <CiLocationOn size={24} />
          </div>
          <div>
            <span className="text-2xl font-bold">Location</span>
            <p className="text-[#777e90]">Where are you going?</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className=" bg-[#f1f5f5] w-12 h-12 flex justify-center  items-center rounded-3xl">
            <CiUser size={24} />
          </div>
          <div>
            <span className="text-2xl font-bold">Travelers</span>
            <p className="text-[#777e90]">Add guests</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className=" bg-[#f1f5f5] w-12 h-12 flex justify-center  items-center rounded-3xl">
            <IoCalendarOutline size={24} />
          </div>
          <div>
            <span className="text-2xl font-bold">Checkin</span>
            <p className="text-[#777e90]">Add date</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className=" bg-[#f1f5f5] w-12 h-12 flex justify-center  items-center rounded-3xl">
            <IoCalendarOutline size={24} />
          </div>
          <div>
            <span className="text-2xl font-bold">Checkout</span>
            <p className="text-[#777e90]">Add date</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
