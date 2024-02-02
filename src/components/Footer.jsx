import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#f1f5f5] flex flex-col gap-20 pb-10">
      <div className="container flex flex-col gap-6 justify-center items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-10">
          Get latest news
        </h1>
        <div className="border-1 py-3 px-6 md:w-[600px] bg-white rounded-full flex items-center gap-2">
          <input
            type="text"
            className="flex-1 text-[#777e90]"
            placeholder="Enter your email address.."
          />
          <button className="bg-[#3e5cb8] text-white font-semibold text-sm px-3 py-1 md:px-6 md:py-3 text-center rounded-full">
            Subscribe Now
          </button>
        </div>
      </div>
      {/* footer link */}
      <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-xl">About Us</h2>
          <ul className="text-[#777e90] flex flex-col gap-2">
            <li>Careers</li>
            <li>Media Centre</li>
            <li>Our planet</li>
            <li>Our people</li>
            <li>Our communities</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-xl">Experience</h2>
          <ul className="text-[#777e90] flex flex-col gap-2">
            <li>Cabin features</li>
            <li>Shop emirates</li>
            <li>Dining</li>
            <li>Our lounges</li>
            <li>Open skies</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-xl">Where we fly</h2>
          <ul className="text-[#777e90] flex flex-col gap-2">
            <li>Route map</li>
            <li>Asia and pacific</li>
            <li>The americas</li>
            <li>Europe</li>
            <li>The Middle East</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-xl">Before you fly</h2>
          <ul className="text-[#777e90] flex flex-col gap-2">
            <li>Baggage</li>
            <li>Visa and passport</li>
            <li>Travel information</li>
            <li>Dubai international airport</li>
            <li>To and from the airport</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-xl">Loyality</h2>
          <ul className="text-[#777e90] flex flex-col gap-2">
            <li>Login to emirates skywards</li>
            <li>Join emirated skywards</li>
            <li>Business reward benefits</li>
            <li>Our partners</li>
            <li>Register your company</li>
          </ul>
        </div>
      </div>
      <p className="text-center font-semibold">
        2024 emirated, All rights reserved | Nipun Vemula
      </p>
    </div>
  );
};

export default Footer;
