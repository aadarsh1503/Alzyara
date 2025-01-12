import React from "react";
import CounterSection from "../Solutions/CounterSection";

import i5 from "./i5.png"
import SendMailsIntegration from "./SendMailsIntegration";
import Pabbly1 from "./Pabbly1";
import EmailMarketingSection from "../Solutions/EmailMarketingSection";



const Pabblyintegration = () => {
  return (
    <div>
    <div className="bg-white  mt-24 mx-auto flex flex-col lg:flex-row items-center justify-between px-8 lg:px-20 py-12 lg:py-12">
      {/* Left Section */}
      <div className=" max-w-lg ml-20 mx-auto space-y-6">
        <p className="text-sm text-gray-500 uppercase font-semibold tracking-wider">
        Enhance Your Campaigns with SendMails and Pabbly
        </p>
        <h2 className="text-3xl lg:text-3xl font-bold leading-snug text-black">
        Connect all your favorite<br />business tools to<br />SendMails with Pabbly
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
        Unify customer journeys so you can be more<br /> efficient and effective
        </p>
        <button className="mt-8 bg-lgreen text-white px-5 py-2 rounded-md text-lg font-semibold shadow-md hover:bg-green-700">
          Get it on the Pabbly MarketPlace
        </button>
      </div>

      {/* Right Section */}
      <div className="lg:w-2/3 mt-8 lg:-ml-[300px] lg:mt-0 flex justify-center">
  <div className="w-full h-auto rounded-lg flex items-center justify-center">
    {/* Placeholder for the right side */}
    <img src={i5} className="w-[500px] h-auto lg:w-[500px] lg:h-auto" alt="Right Side Image" />
  </div>
</div>
</div>
<CounterSection />
<Pabbly1 />
<SendMailsIntegration />
<EmailMarketingSection />
    </div>

  
  );
};

export default Pabblyintegration;
