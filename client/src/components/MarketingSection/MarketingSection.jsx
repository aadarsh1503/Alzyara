import React from "react";
import i1 from "./i1.png"

const MarketingSection = () => {
  return (
    <div className="bg-white  mx-auto flex flex-col lg:flex-row items-center justify-between px-8 lg:px-20 py-12 lg:py-12">
      {/* Left Section */}
      <div className=" max-w-sm ml-20 mx-auto space-y-6">
        <p className="text-sm text-gray-500 uppercase font-semibold tracking-wider">
          EMAIL MARKETING
        </p>
        <h2 className="text-3xl lg:text-5xl font-bold leading-snug text-black">
          Powerful alone, unbeatable together
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Engage your shoppers wherever they are with integrated email 
          campaigns. All templates are 100% customizable, so you can give your
          customers the on-brand, personalized experience they love. All
          powered by tools that are intuitive, not intimidating.
        </p>
        <hr className="border-t border-gray-300 mt-4" />
        <div className=" items-center gap-2 mt-6">
          <span className="text-lgreen text-3xl font-bold">↑ 47.7%</span>
          <span className="text-gray-500 text-sm">
            <br />Higher conversion rate with  combined with email
          </span>
        </div>
        <hr className="border-t border-gray-300 mt-4" />
      </div>

      {/* Right Section */}
      <div className="lg:w-2/3 mt-8 lg:-ml-[300px] lg:mt-0 flex justify-center">
  <div className="w-full h-auto rounded-lg flex items-center justify-center">
    {/* Placeholder for the right side */}
    <img src={i1} className="w-[500px] h-auto lg:w-[800px] lg:h-auto" alt="Right Side Image" />
  </div>
</div>

    </div>
  );
};

export default MarketingSection;
