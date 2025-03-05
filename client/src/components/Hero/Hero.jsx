import React, { useEffect, useState } from "react";
import MarketingSection from "../MarketingSection/MarketingSection";
import Slide from "../Slide/Slide";
import CustomerSupportSection from "../CustomerSupportSection/CustomerSupportSection";
import Automation from "../Automation/Automation";
import Thirdsegment from "../thirdsegment/thirdsegment";
import EcommercePlatformSection from "../EcommercePlatformSection/EcommercePlatformSection";
import WhySwitch from "../WhySwitch/WhySwitch";
import Join from "../Join/Join";
import EmailMarketingSection from "../Solutions/EmailMarketingSection";
import FourthHome from "../Fouthhome/FourthHome";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(i18n.language === 'ar');

  useEffect(() => {
    setIsRTL(i18n.language === 'ar');
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [i18n.language, isRTL]);

  return (
    <div>
      <div className="bg-[#0f2027] mt-0 lg:mt-20">
        <div className={`text-white max-w-6xl mx-auto flex flex-col min-h-screen lg:flex-row items-center justify-between px-8 lg:px-24 py-12 lg:py-24 ${isRTL ? 'rtl' : 'ltr'}`}>
          {/* Left Section */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-6">
            <h1 className="text-3xl lg:text-5xl font-bold leading-snug">
              {t('hero.title')}
            </h1>
            <p className="text-base text-gray-300 leading-relaxed">
              {t('hero.description')}
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col mr-16 lg:flex-row items-center gap-4">
              <button className="bg-parrot hover:outline-parrot outline hover:bg-black hover:text-parrot text-black w-[200px] py-2 rounded-lg font-bold text-sm">
                {t('hero.createAccount')}
              </button>
              <a href="/pricing">
                <button className="bg-transparent border-2 border-white w-[200px] py-2 rounded-lg font-bold text-sm hover:bg-white hover:text-black">
                  {t('hero.seePricing')}
                </button>
              </a>
            </div>

            {/* Integration Icons */}
            <div className="items-center gap-4 mt-8 justify-center lg:justify-start">
              <div className="text-gray-400 mb-4 font-semibold text-sm block">
                {t('hero.noCreditCard')}
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 lg:mt-0 flex justify-center">
            <div className="w-72 h-72 lg:w-[420px] lg:h-[420px] rounded-full bg-gray-700 overflow-hidden flex items-center justify-center">
              <img
                src="https://assets.entrepreneur.com/content/3x2/2000/20180726155253-GettyImages-860221048.jpeg"
                alt="Circular Display"
                className="lg:w-full lg:h-full w-73 h-72 object-cover"
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
      <FourthHome />
      <EmailMarketingSection />
    </div>
  );
};

export default Hero;