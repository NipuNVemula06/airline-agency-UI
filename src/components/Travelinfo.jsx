import React from "react";
import { IoCalendarOutline } from "react-icons/io5";
import { BsBookmarkCheck, BsShieldCheck } from "react-icons/bs";

const Travelinfo = () => {
  return (
    <div className="bg-[#f1f5f5] mt-6">
      <div className="container py-20 flex flex-col gap-16">
        <div className="lg:flex justify-between items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1em] font-bold">
            Travel to make memories
            <br></br>
            all around the world
          </h1>
          <div className="mt-6 md:px-10 md:py-3 px-4 py-2 rounded-full border-2 border-[#777e90] w-fit">
            View All
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-center">
          {/* 1 */}
          <div className="flex-1 h-[400px] w-[300px] xl:w-full lg:h-[450px] bg-white flex flex-col items-center justify-center gap-8 rounded-[160px]">
            <div className="bg-[#3e5cb8] p-6 rounded-full w-fit text-white">
              <IoCalendarOutline size={34} />
            </div>
            <h2 className="text-2xl font-bold">Book & relax</h2>
            <p className="text-center text-[#777e90] w-[250px]">
              we realize ideas from simple to complex, everything comes easy to
              use.
            </p>
          </div>
          {/* 2 */}
          <div className="flex-1 h-[400px] w-[300px] xl:w-full lg:h-[450px] bg-white flex flex-col items-center justify-center gap-8 px-6 rounded-[180px]">
            <div className="bg-[#e98b6d] p-6 rounded-full w-fit text-white">
              <BsShieldCheck size={34} />
            </div>
            <h2 className="text-2xl font-bold">Smart checklist</h2>
            <p className="text-center text-[#777e90] w-[250px]">
              Flight booking in your mind looking for cheap fares cleartrip is
              your one-stop.
            </p>
          </div>
          {/* 3 */}
          <div className="flex-1 h-[400px] w-[300px] xl:w-full lg:h-[450px] bg-white flex flex-col items-center justify-center gap-8 px-6 rounded-[180px]">
            <div className="bg-[#ffcea2] p-6 rounded-full w-fit text-white">
              <BsBookmarkCheck size={34} />
            </div>
            <h2 className="text-2xl font-bold">Save more</h2>
            <p className="text-center text-[#777e90] w-[250px]">
              Find cheap flights, UK travel green list deals, hotels & car hire
              from our travel providers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travelinfo;
