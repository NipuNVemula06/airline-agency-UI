import Image from "next/image";
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
      <div className="h-[280px] lg:h-[350px] xl:h-[420px] relative">
        <div className="relative h-full w-full z-10">
          <Image src="/main.png" alt="main" layout="fill" objectFit="cover" />
        </div>
        <div
          className="container h-[60%] xl:h-[90%] md:h-[75%] absolute rounded-full
        transform -translate-x-1/2 -translate-y-1/2  top-1/2 left-1/2"
        >
          <div className="relative h-full w-full">
            <Image
              src="/bluesky.jpg"
              alt="main"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
