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
    <div className="bg-[#0f2027] text-white flex flex-col min-h-screen lg:flex-row items-center justify-between px-8 lg:px-24 py-12 lg:py-24">
      {/* Left Section */}
      <div className="lg:w-1/2 text-center lg:text-left space-y-6">
        <h1 className="text-3xl lg:text-5xl font-bold leading-snug">
          Email & SMS marketing so good, it’s boring
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          You’ve got enough exciting stuff to worry about. Let us be the
          reliable platform you can depend on.{" "}
          <span className="text-white font-semibold">
            Make an average $73* for every $1 you spend. So boring.
          </span>
        </p>
        {/* Buttons */}
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <button className="bg-[#a3ff12] text-black px-6 py-3 rounded-lg font-bold text-lg hover:bg-[#91e50f]">
            Start free
          </button>
          <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-white hover:text-black">
            See pricing
          </button>
        </div>
        {/* Integration Icons */}
        <div className=" items-center gap-4 mt-8 justify-center lg:justify-start">
  <div className="text-gray-400 mb-4 text-sm block">Connect Alzyara to your platform</div>
  <div className="flex gap-4">
    <img
      src="https://www.omnisend.com/wp-content/themes/omnisend-v2/assets/img/boooring/bf-h-1.png"
      alt="Shopify"
      className="w-[86px] h-[25px]"
    />
    <img
      src="https://www.omnisend.com/wp-content/themes/omnisend-v2/assets/img/boooring/bf-h-2.png"
      alt="WordPress"
      className="w-[86px] h-[25px]"
    />
    <img
      src="https://www.omnisend.com/wp-content/themes/omnisend-v2/assets/img/boooring/bf-h-3.png"
      alt="WooCommerce"
      className="w-[86px] h-[25px]"
    />
    <img
      src="https://www.omnisend.com/wp-content/themes/omnisend-v2/assets/img/boooring/bf-h-4.png"
      alt="Wix"
      className="w-[86px] h-[25px]"
    />
  </div>
</div>

      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
  <div className="w-80 h-80 lg:w-[420px] lg:h-[420px] rounded-full bg-gray-700 overflow-hidden flex items-center justify-center">
    {/* Image */}
    <img
      src="https://assets.entrepreneur.com/content/3x2/2000/20180726155253-GettyImages-860221048.jpeg"
      alt="Circular Display"
      className="w-full h-full object-cover"
    />
  </div>
</div>

    </div>
    <MarketingSection />
    <Slide />
    <CustomerSupportSection />
    <Automation />
    <Thirdsegment />
    <EcommercePlatformSection />
    <WhySwitch />
    <Join />
    
    </div>
  );
};

export default Hero;
