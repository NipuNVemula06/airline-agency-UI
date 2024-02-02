import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-10">
      <div className="flex flex-col items-center justify-center text-4xl md:text-5xl lg:text-6xl capitalize font-semibold mt-5">
        <h1 className="text-center">
          Find and book
          <br />a great experience
        </h1>
      </div>
      <div className="h-[250px] md:h-[300px] lg:h-[350px] xl:h-[450px] relative">
        <div
          className="container h-[150px] md:h-[200px] lg:h-[250px] xl:h-[350px] absolute top-10 left-9
        md:top-12 md:left-14 lg:top-11 xl:left-36
        "
        >
          <img
            src="/bluesky.jpg"
            alt="bluesky"
            className="object-cover md:rounded-full h-full w-full rounded-full"
          />
        </div>
        <div
          className="absolute top-2 md:-top-7 
        lg:-top-20
        xl:-top-32
        z-10"
        >
          <img
            src="/main.png"
            alt="airplane"
            className="object-cover h-full drop-shadow-lg "
          />
        </div>
        {/* <div className="absolute -top-40 left-0 z-10">
          <img
            src="/main.png"
            alt="airplane"
            className="object-cover h-full drop-shadow-lg "
          />
        </div>
        <div className="absolute top-2 left-40 w-[1220px] h-[350px] mx-auto">
          <img
            src="/bluesky.jpg"
            alt="bluesky"
            className="object-cover md:rounded-full h-full w-full "
          />
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
