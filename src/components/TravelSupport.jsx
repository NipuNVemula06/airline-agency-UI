import Image from "next/image";
import React from "react";

const TravelSupport = () => {
  return (
    <div className="container flex flex-col gap-20">
      <div className="flex flex-col gap-2 justify-center items-center mt-4">
        <p className="text-md uppercase font-semibold tracking-[0.4rem]">
          Travel support
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Plan your travel with cofidence
        </h1>
        <p className="text-[#777e90]">
          Find help with your bookings and travel plans, and see what to expect
          along your journey
        </p>
      </div>
      <div className="flex">
        <div className="flex flex-1 flex-col gap-2">
          {/* 1 */}
          <div className="flex flex-col gap-2 ">
            <p className="text-white bg-[#3e5cb8] w-fit px-6 py-1 rounded-full">
              01
            </p>
            <span className="text-3xl font-bold">
              Travel requirements for Dubai
            </span>
            <p className="max-w-[360px] text-[#777e90]">
              Momodo is by far one of the best travel websites for
              sourcingtravel deals
            </p>
          </div>
          {/* 2 */}
          <div className="flex flex-col gap-2 ">
            <p className="text-white bg-[#e98b6d] w-fit px-6 py-1 rounded-full">
              02
            </p>
            <span className="text-3xl font-bold">
              Multi-risk travel insurance
            </span>
            <p className="max-w-[360px] text-[#777e90]">
              Momodo is by far one of the best travel websites for
              sourcingtravel deals
            </p>
          </div>
          {/* 3 */}
          <div className="flex flex-col gap-2 ">
            <p className="text-white bg-[#ffcea2] w-fit px-6 py-1 rounded-full">
              03
            </p>
            <span className="text-3xl font-bold">
              Travel requirements by destination
            </span>
            <p className="max-w-[360px] text-[#777e90]">
              Momodo is by far one of the best travel websites for
              sourcingtravel deals
            </p>
          </div>
        </div>
        <div className="hidden lg:flex relative flex-1">
          <img
            src="/engine.jpg"
            alt="engine"
            className="h-[350px] w-[240px] absolute lg:-bottom-10 xl:left-24 rounded-[150px] object-cover  object-[70%] z-20"
          />
          <img
            src="/wing.jpg"
            alt="wing"
            className="h-[350px] w-[240px] absolute lg:-top-10 lg:left-36 xl:left-56 z-10 rounded-full"
          />
          <img
            src="/rightwing.jpg"
            alt="rightwing"
            className=" h-[280px] w-[200px] rounded-full absolute lg:bottom-0 lg:right-1 xl:right-12"
          />
        </div>
      </div>
    </div>
  );
};

export default TravelSupport;
