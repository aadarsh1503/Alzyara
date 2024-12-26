import React from "react";
import i1 from "./i1.webp";

const Automation = () => {
  return (
    <div className="bg-white mx-auto flex flex-col lg:flex-row items-center justify-between px-8 lg:px-20 py-12 lg:py-12">
      {/* Left Section (Image) */}
      <div className="lg:w-2/3 mt-8 lg:-ml-[100px] lg:mt-0 flex justify-center">
        <div className="w-full h-auto rounded-lg flex items-center justify-center">
          {/* Image moved to the left side */}
          <img src={i1} className="w-[500px] h-auto lg:w-[800px] lg:h-auto" alt="Left Side Image" />
        </div>
      </div>

      {/* Right Section (Text) */}
      <div className="max-w-sm ml-0 lg:-ml-20 mx-auto space-y-6">
        <p className="text-sm text-gray-500 uppercase font-semibold tracking-wider">
        Automation
        </p>
        <h2 className="text-3xl lg:text-5xl font-bold leading-snug text-black">
        Money doesn’t sleep (but you can)
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
        Save time with pre-built automations that engage & sell. From welcome series to abandoned cart recovery, and post-purchase campaigns, Omnisend does the heavy lifting, so you don’t have to.
        </p>

        <div className="items-center gap-2 mt-6">
         
          <span className="text-gray-500 font-semibold cursor-pointer text-sm">
            <br />Learn more about automation 
          </span>
        </div>
        <hr className="border-t border-gray-300 mt-4" />
      </div>
    </div>
  );
};

export default Automation;
