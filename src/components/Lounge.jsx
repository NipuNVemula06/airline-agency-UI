import React from "react";

const Lounge = () => {
  return (
    <div className="container flex gap-4">
      <div className="hidden xl:flex flex-1 relative h-[400px] mt-10">
        <img
          src="/airplanein.jpg"
          alt="airplanein"
          className="w-[50%] h-full absolute -top-6 rounded-[150px] object-cover"
        />
        <img
          src="/airplaneair.jpg"
          alt="airplaneair"
          className="h-[300px] w-[35%] absolute -bottom-10 right-[200px] rounded-[150px] z-10 object-cover"
        />
      </div>
      <div className="flex-1 mt-10">
        <h1 className="capitalize text-4xl md:text-5xl lg:text-6xl font-bold leading-[3rem]">
          Unaccompanied
          <br></br>
          minors lounge
        </h1>
        <div className="grid md:grid-cols-2 gap-4 mt-10">
          <div className="flex flex-col gap-6">
            <span className="text-xl font-semibold ">
              Help through the airport
            </span>
            <p className="text-[#777e90] line-clamp-3 w-[280px] leading-7">
              They'll with stay with you all the way through the airport to help
              them at security and immigration.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <span className="text-xl font-semibold ">Priority boarding</span>
            <p className="text-[#777e90] line-clamp-3 w-[280px] leading-7">
              Families and young flyers always board the plane first, That gives
              them more time to settle.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <span className="text-xl font-semibold ">Care on the flight</span>
            <p className="text-[#777e90] line-clamp-3 w-[280px] leading-7">
              Our cabin crew are on hand to make sure your young flyer has a
              fun,comfortable.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <span className="text-xl font-semibold ">
              Support when they land
            </span>
            <p className="text-[#777e90] line-clamp-3 w-[280px] leading-7">
              When your child arrives, a specialist member of our team will be
              at the aircraft door.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lounge;
