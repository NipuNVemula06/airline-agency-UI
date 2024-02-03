import Image from "next/image";
import React from "react";

const BestTraveller = () => {
  return (
    <div className="container py-20 flex flex-col gap-10 ">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
        Best travellers of the month
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center place-items-center gap-6">
        <div className=" h-[350px] md:h-[400px] w-[280px] rounded-[160px] shadow-md">
          <div className="h-[65%] w-full rounded-t-[160px] relative">
            <Image
              src="/travel1.jpg"
              alt="travel1"
              fill
              className="object-cover rounded-t-[160px]"
            />
          </div>
          <div className="h-[35%] w-full bg-[#f1f5f5] rounded-b-[160px] flex flex-col justify-center items-center">
            <span className="font-semibold text-lg">William Liam</span>
            <p className="text-sm font-medium text-[#777e90]">@william.liam</p>
          </div>
        </div>
        {/* two */}
        <div className=" h-[350px] md:h-[400px] w-[280px] rounded-[160px] shadow-md">
          <div className="h-[65%] w-full rounded-t-[160px] relative">
            <Image
              src="/travel3.jpg"
              alt="travel2"
              fill
              className="object-cover rounded-t-[160px]"
            />
          </div>
          <div className="h-[35%] w-full bg-[#f1f5f5] rounded-b-[160px] flex flex-col justify-center items-center">
            <span className="font-semibold text-lg">James Noah</span>
            <p className="text-sm font-medium text-[#777e90]">@james.noah</p>
          </div>
        </div>

        <div className=" h-[350px] md:h-[400px] w-[280px] rounded-[160px] shadow-md">
          <div className="h-[65%] w-full rounded-t-[160px] relative">
            <Image
              src="/travel4.jpg"
              alt="travel4"
              fill
              className="object-cover rounded-t-[160px]"
            />
          </div>
          <div className="h-[35%] w-full bg-[#f1f5f5] rounded-b-[160px] flex flex-col justify-center items-center">
            <span className="font-semibold text-lg">Levis Turisha</span>
            <p className="text-sm font-medium text-[#777e90]">@levis.turisha</p>
          </div>
        </div>

        <div className=" h-[350px] md:h-[400px] w-[280px] rounded-[160px] shadow-md">
          <div className="h-[65%] w-full rounded-t-[160px] relative">
            <Image
              src="/travel2.jpg"
              alt="travel2"
              fill
              className="object-cover rounded-t-[160px] object-top"
            />
          </div>
          <div className="h-[35%] w-full bg-[#f1f5f5] rounded-b-[160px] flex flex-col justify-center items-center">
            <span className="font-semibold text-lg">Sebastian Jabhn</span>
            <p className="text-sm font-medium text-[#777e90]">
              @sebastian.jabhn
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestTraveller;
