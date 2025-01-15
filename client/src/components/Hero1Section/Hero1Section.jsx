import React from 'react';
import { AiFillStar, AiOutlineTrophy } from 'react-icons/ai';
import MarketingSection from "../MarketingSection/MarketingSection";
import Slide from "../Slide/Slide";
import CustomerSupportSection from "../CustomerSupportSection/CustomerSupportSection";
import Automation from "../Automation/Automation";
import Thirdsegment from "../thirdsegment/thirdsegment";
import EcommercePlatformSection from "../EcommercePlatformSection/EcommercePlatformSection";
import WhySwitch from "../WhySwitch/WhySwitch";
import Join from "../Join/Join";
import FourthHome from '../Fouthhome/FourthHome';
import EmailMarketingSection from '../Solutions/EmailMarketingSection';
const Hero1Section = () => {
  return (
    <div>
    <section className=" py-20 mt-20 sm:py-16 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex justify-center space-x-16 mb-6">
          <div>
            <div className="flex justify-center text-yellow-500 space-x-1">
              {Array(5).fill(<AiFillStar className="w-5 h-5 " />)}
            </div>
            <p className="text-base italic mt-2">"built for pro email<br /> marketers"</p>
          </div>
          <div>
            <div className="flex justify-center text-yellow-500 space-x-1">
              {Array(5).fill(<AiFillStar className="w-5 h-5" />)}
            </div>
            <p className="text-base italic mt-2">"powerful marketing<br /> automation"</p>
          </div>
          <div>
            <div className="flex justify-center text-yellow-500 space-x-1">
              {Array(5).fill(<AiFillStar className="w-5 h-5" />)}
            </div>
            <p className="text-base italic mt-2">"affordable email <br />marketing platform"</p>
          </div>
        </div>

        <button className="bg-bkg text-[#094c4b] px-4 py-1 rounded-full font-medium mb-6">
          Bring your own SMTP
        </button>

        <h1 className="text-3xl sm:text-6xl font-semibold leading-snug mb-2">
          Email Newsletters &<br /> Marketing Automation,
        </h1>
        <h1 className="text-4xl sm:text-6xl font-semibold text- relative inline-block">
          100x Better
          <span className="absolute -bottom-2 left-0 w-full h-6 bg-parrot -z-10"></span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-gray-600">
          All-in-one AI-powered platform to send emails, manage<br /> contacts, capture leads and automate your marketing.
        </p>

        <div className="mt-6">
          <button className="bg-[#094c4b] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#073b3a]">
            Create A FREE Account
          </button>
          <p className="mt-2 text-sm font-semibold text-black">No Credit Card Required | Forever FREE Account</p>
        </div>
      </div>
    </section>
        <MarketingSection />
        <Slide />
        <CustomerSupportSection />
        <Automation />
        <Thirdsegment />
    <FourthHome />
   
        <EmailMarketingSection />
        <Join />
        </div>
  );
};

export default Hero1Section;