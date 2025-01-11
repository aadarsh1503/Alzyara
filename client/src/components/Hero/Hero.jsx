import React from "react";
import MarketingSection from "../MarketingSection/MarketingSection";
import Slide from "../Slide/Slide";
import CustomerSupportSection from "../CustomerSupportSection/CustomerSupportSection";
import Automation from "../Automation/Automation";
import Thirdsegment from "../thirdsegment/thirdsegment";
import EcommercePlatformSection from "../EcommercePlatformSection/EcommercePlatformSection";
import WhySwitch from "../WhySwitch/WhySwitch";
import Join from "../Join/Join";

const Hero = () => {
  return (
    <div>
      <div className="bg-[#0f2027] mt-20">
    <div className=" text-white max-w-6xl mx-auto flex flex-col min-h-screen lg:flex-row items-center justify-between px-8 lg:px-24 py-12 lg:py-24">
      {/* Left Section */}
      <div className="lg:w-1/2 text-center lg:text-left mt- space-y-6">
        <h1 className="text-3xl lg:text-5xl font-bold leading-snug">
        Email Newsletters & Marketing Automation, 100x Better 
        </h1>
        <p className="text-base text-gray-300 leading-relaxed">
        All-in-one AI-powered platform to send emails, manage contacts, capture leads and automate your marketing.
          
        </p>
        {/* Buttons */}
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <button className="bg-parrot  hover:outline-parrot outline hover:bg-black hover:text-parrot text-black w-[200px] py-2 rounded-lg font-bold text-sm ">
            Start free
          </button>
          <button className="bg-transparent border-2 border-white w-[200px] py-2 rounded-lg font-bold text-sm hover:bg-white hover:text-black">
            See pricing
          </button>
        </div>
        {/* Integration Icons */}
        <div className=" items-center gap-4 mt-8  justify-center lg:justify-start">
  <div className="text-gray-400 mb-4 text-sm block">Connect Alzyara to your platform</div>

</div>

      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
  <div className="w-32 h-32 lg:w-[420px] lg:h-[420px] rounded-full bg-gray-700 overflow-hidden flex items-center justify-center">
    {/* Image */}
    <img
      src="https://assets.entrepreneur.com/content/3x2/2000/20180726155253-GettyImages-860221048.jpeg"
      alt="Circular Display"
      className="lg:w-full lg:h-full w-32 h-32 object-cover"
    />
  </div>
</div>
</div>

    </div>
    <MarketingSection />
    <Slide />
    <CustomerSupportSection />
    <Automation />
    <Thirdsegment />

    <WhySwitch />
    <Join />
    
    </div>
  );
};

export default Hero;
