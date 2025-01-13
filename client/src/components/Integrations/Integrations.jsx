import React from "react";
import CounterSection from "../Solutions/CounterSection";
import Secondpart from "./Secondpart";
import EmailMarketingSection from "../Solutions/EmailMarketingSection";
import i1 from "./i1.png"

const Integrations = () => {
  return (
    <div>
    <div className="bg-white  mt-24 mx-auto flex flex-col lg:flex-row items-center justify-between px-8 lg:px-20 py-12 lg:py-12">
      {/* Left Section */}
      <div className=" max-w-xl ml-16 mx-auto space-y-6">
        <p className="text-sm text-gray-500 uppercase font-semibold tracking-wider">
        Connect Alzyara & Zapier
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold leading-snug text-black">
        Connect all your favorite business tools to<br /> Alzyara with Zapier
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
        Unify customer journeys so you can be more efficient<br /> and effective
        </p>
        <button className="mt-8 bg-lgreen text-white px-5 py-2 rounded-md text-lg font-semibold shadow-md hover:bg-hgreen">
          Get it on the zapier MarketPlace
        </button>
      </div>

      {/* Right Section */}
      <div className="lg:w-2/3 mt-8 lg:-ml-[300px] lg:mt-0 flex justify-center">
  <div className="w-full h-auto rounded-lg flex items-center justify-center">
    {/* Placeholder for the right side */}
    <img src={i1} className="w-[500px] h-auto lg:w-[500px] lg:h-auto" alt="Right Side Image" />
  </div>
</div>
</div>
<CounterSection />
<Secondpart />
<EmailMarketingSection />
    </div>
  );
};

export default Integrations;
