import React, { useState } from "react";
import { AiOutlineCheck  } from 'react-icons/ai';
import PaymentSection from "./PaymentSection";
import FAQSection from "./FAQSection";

const PricingSection = () => {
  const [isMonthly, setIsMonthly] = useState(false);

  const handleToggle = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <>
    <div className=" font-poppins bg-white py-16 mt-20 px-4 text-center">
        <h1 className="font-bold">Plans & Pricing</h1>
<h2 className="text-2xl font-bold lg:text-4xl">Choose a pricing plan that works for you</h2>
<p className="text-xl mt-3 mb-8">Whether you're an individual, a small team, or a growing<br /> enterprise, we have a plan that aligns perfectly with your goals.</p>
<div className="flex justify-center  items-center mb-8">
  <div className="outline outline-1 outline-lgreen p-1 rounded-md ">
  <div className="relative   rounded-lg p-   w-44">
    {/* Sliding Background */}
    <div
      className={`absolute top-0 left-0 h-full w-1/2  rounded-md bg-lgreen  transition-all duration-300 ${
        isMonthly ? 'translate-x-full' : 'translate-x-0'
      }`}
    ></div>
    {/* Buttons */}
    <div className="relative flex flex-row  space-x-2">
      <button
        className={`flex-1 py-2 text-base p-1 font-semibold transition-all duration-300 rounded-md z-10 ${
          isMonthly ? 'text-black' : 'text-white'
        }`}
        onClick={() => setIsMonthly(false)}
      >
        Annually
      </button>
      <button
        className={`flex-1 py-2 text-base font-semibold transition-all duration-300 rounded-md z-10 ${
          isMonthly ? 'text-white' : 'text-black'
        }`}
        onClick={() => setIsMonthly(true)}
      >
        Monthly
      </button>
    </div>
    </div>
  </div>
</div>




      <p className="text-base mt-6 text-[#4b615f] mb-8">
        🔥 Get 20% off with annual subscription
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Basic Plan */}
        <div className="bg-white rounded-lg p-6 border outline outline-lgreen border-[#d6dedb]">
          <h3 className="text-base text-left ml-4 font-semibold text-[#3b4b48] ">
            Basic 💪
          </h3>
          <p className="text-base text-left p-4 text-[#4b615f] mb-4">
            Essential features for small<br /> businesses to get started with Email<br />
            Marketing
          </p>
          <h2 className="text-5xl ml-10 text-left font-bold text-[#3b4b48] mb-1">
            ${isMonthly ? 15 : 12}<span className="text-lg">/month</span>
          </h2>
          <p className="text-base text-[#4b615f] mb-4"></p>
          <button className="bg-lgreen text-white text-base py-3 px-6 rounded-lg mb-4">
            Give Me Instant Access →
          </button>
          <div className="text-left ml-10 space-y-6">
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2 " /> 50,000 Subscribers
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2" /> Drag & Drop Email Builder
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2" /> Unlimited Email Campaigns
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2" /> Unlimited SMTP Servers
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2" /> Unlimited Workflow Automations
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2" /> Unlimited Segmentation
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2" /> Unlimited Custom Fields
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2" /> Unlimited Lead Capture Popups
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2" /> Unlimited Lead Webforms
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2" /> Open & Click Tracking
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2" /> Import Bulk Contacts
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2" /> Simple & Powerful Analytics
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2" /> Email Validation Integration
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2" /> Custom Tracking Domains
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2" /> Advance Filters
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2" /> API Integrations
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2" /> Outgoing Webhooks
  </p>
</div>

        </div>

        {/* Pro Plan */}
        <div className="bg-white rounded-lg p-6 border outline outline-lgreen border-[#d6dedb]">
          <h3 className="text-base font-semibold text-left ml-4 text-[#3b4b48] ">
            Pro 🚀
          </h3>
          <p className="text-base text-left p-4 text-[#4b615f] mb-4">
            Advanced features and higher limits, ideal for growing businesses
            needing more capabilities
          </p>
          <h2 className="text-5xl text-left ml-10 font-bold text-[#3b4b48] mb-1">
            ${isMonthly ? 50 : 30}<span className="text-lg">/month</span>
          </h2>
          <p className="text-base text-[#4b615f] mb-4"></p>
          <button className="bg-lgreen text-white text-base py-3 px-6 rounded-lg mb-4">
            Give Me Instant Access →
          </button>
          <div className="space-y-6 ml-10">
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2" /> 250,000 Subscribers
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2" /> Drag & Drop Email Builder
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2" /> Unlimited Email Campaigns
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2" /> Unlimited SMTP Servers
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2" /> Unlimited Workflow Automations
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2" /> Unlimited Segmentation
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2" /> Unlimited Custom Fields
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2" /> Unlimited Lead Capture Popups
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2" /> Unlimited Lead Webforms
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2" /> Open & Click Tracking
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2" /> Import Bulk Contacts
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2" /> Simple & Powerful Analytics
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2" /> Email Validation Integration
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2" /> Custom Tracking Domains
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2" /> Advance Filters
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2" /> API Integrations
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2" /> Outgoing Webhooks
  </p>
</div>

        </div>

        {/* Enterprise Plan */}
        <div className="bg-white rounded-lg p-6 outline outline-lgreen border border-[#d6dedb]">
          <h3 className="text-base text-left ml-4 font-semibold text-[#3b4b48] mb-2">
            Enterprise 💎
          </h3>
          <p className="text-base text-left ml-4 text-[#4b615f] mb-4">Want more Subscribers?</p>
          <h2 className="text-2xl lg:text-5xl font-bold text-[#3b4b48] mb-4">Contact Us</h2>
          <button className="bg-lgreen text-white text-base py-3 px-16 rounded-lg mb-4">
            Talk to Sales
          </button>
          <div className="space-y-6 ml-10">
          <p className="flex items-center text-base text-[#4b615f]">
  <AiOutlineCheck className="mr-2" /> Unlimited Subscribers
</p>
<p className="flex items-center text-base text-[#4b615f]">
  <AiOutlineCheck className="mr-2" /> Drag & Drop Email Builder
</p>
<p className="flex items-center text-base text-[#4b615f]">
  <AiOutlineCheck className="mr-2" /> Unlimited Email Campaigns
</p>
<p className="flex items-center text-base text-[#4b615f]">
  <AiOutlineCheck className="mr-2" /> Unlimited SMTP Servers
</p>
<p className="flex items-center text-base text-[#4b615f]">
  <AiOutlineCheck className="mr-2" /> Unlimited Workflow Automations
</p>
<p className="flex items-center text-base text-[#4b615f]">
  <AiOutlineCheck className="mr-2" /> Unlimited Segmentation
</p>
<p className="flex items-center text-base text-[#4b615f]">
  <AiOutlineCheck className="mr-2" /> Unlimited Custom Fields
</p>
<p className="flex items-center text-base text-[#4b615f]">
  <AiOutlineCheck className="mr-2" /> Unlimited Lead Capture Popups
</p>
<p className="flex items-center text-base text-[#4b615f]">
  <AiOutlineCheck className="mr-2" /> Unlimited Lead Webforms
</p>
<p className="flex items-center text-base text-[#4b615f]">
  <AiOutlineCheck className="mr-2" /> Open & Click Tracking
</p>
<p className="flex items-center text-base text-[#4b615f]">
  <AiOutlineCheck className="mr-2" /> Import Bulk Contacts
</p>
<p className="flex items-center text-base text-[#4b615f]">
  <AiOutlineCheck className="mr-2" /> Simple & Powerful Analytics
</p>
<p className="flex items-center text-base text-[#4b615f]">
  <AiOutlineCheck className="mr-2" /> Email Validation Integration
</p>
<p className="flex items-center text-base text-[#4b615f]">
  <AiOutlineCheck className="mr-2" /> Custom Tracking Domains
</p>
<p className="flex items-center text-base text-[#4b615f]">
  <AiOutlineCheck className="mr-2" /> Advance Filters
</p>
<p className="flex items-center text-base text-[#4b615f]">
  <AiOutlineCheck className="mr-2" /> API Integrations
</p>
<p className="flex items-center text-base text-[#4b615f]">
  <AiOutlineCheck className="mr-2" /> Outgoing Webhooks
</p>
</div>
        </div>
      </div>
      
    </div>
    <PaymentSection />
    <FAQSection />
    </>
  );
};

export default PricingSection;