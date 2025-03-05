import React, { useEffect, useState } from "react";
import { AiOutlineCheck  } from 'react-icons/ai';
import PaymentSection from "./PaymentSection";
import FAQSection from "./FAQSection";
import { useTranslation } from "react-i18next";

const PricingSection = () => {
  const { t, i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(i18n.language === 'ar');
  useEffect(() => {
    setIsRTL(i18n.language === 'ar');
  }, [i18n.language]);
  const [isMonthly, setIsMonthly] = useState(false);

  const handleToggle = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <>
    <div className=" font-poppins bg-white py-16 mt-20 px-4 text-center">
    <h1 className="font-bold">{t('plans_and_pricing')}</h1>
<h2 className="text-2xl font-bold lg:text-4xl">{t('choose_pricing_plan')}</h2>
<p className="text-xl mt-3 mb-8">{t('pricing_plan_description')}</p>
<div dir="ltr" className="flex justify-center  items-center mb-8">
  <div className="outline outline-1 outline-lgreen p-1 rounded-md">
    <div className="relative   rounded-lg p-   w-44">
      {/* Sliding Background */}
      <div
        className={`absolute top-0 left-0
        ltr h-full w-1/2 rounded-md bg-lgreen  transition-all duration-300 ${
          isMonthly ? 'translate-x-full' : 'translate-x-0'
        }`}
      ></div>
      {/* Buttons */}
      <div className="relative flex ltr flex-row  space-x-2">
        <button
          className={`flex-1 py-2 text-base p-1 font-semibold transition-all duration-300 rounded-md z-10 ${
            isMonthly ? 'text-black' : 'text-white'
          }`}
          onClick={() => setIsMonthly(false)}
        >
          {t('annually')}
        </button>
        <button
          className={`flex-1 py-2 text-base font-semibold transition-all duration-300 rounded-md z-10 ${
            isMonthly ? 'text-white' : 'text-black'
          }`}
          onClick={() => setIsMonthly(true)}
        >
          {t('monthly')}
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
        <h3 className="text-base text-left ml-4 font-semibold text-[#3b4b48]">
  {t('basic')}
</h3>
<p className="text-base text-left p-4 text-[#4b615f] mb-4">
  {t('essential_features')}
</p>
<h2 className={`text-5xl ml-10 ${i18n.language === 'ar' ? 'text-center' : 'text-center'} text-left font-bold text-[#3b4b48] mb-1`}>
  ${isMonthly ? 15 : 12}<span className="text-lg">/{t('month')}</span>
</h2>
<p className="text-base text-[#4b615f] mb-4"></p>
<button className="bg-lgreen text-white text-base py-3 px-6 rounded-lg mb-4">
  {t('give_me_instant_access')}
</button>
<div className="text-left ml-10 space-y-6">
  <p className="flex items-center  text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2 ml-2 " /> {t('subscribers')}
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2 ml-2" /> {t('email_builder')}
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2 ml-2" /> {t('unlimited_campaigns')}
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2 ml-2" /> {t('unlimited_smtp')}
  </p>
  <p className="flex items-center text-left text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2 ml-2 shrink-0" /> {t('unlimited_automations')}
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2 ml-2" /> {t('unlimited_segmentation')}
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2 ml-2" /> {t('unlimited_custom_fields')}
  </p>
  <p className="flex items-center text-left text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2 ml-2" /> {t('unlimited_popups')}
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2 ml-2" /> {t('unlimited_webforms')}
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2 ml-2" /> {t('open_click_tracking')}
  </p>
  <p className={`flex items-center  text-base text-[#4b615f] ${i18n.language === 'ar' ? 'whitespace-nowrap' : ''}`}>
    <AiOutlineCheck className="mr-2 ml-2" /> {t('import_contacts')}
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2 ml-2" /> {t('analytics')}
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2 ml-2" /> {t('email_validation')}
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2 ml-2" /> {t('custom_domains')}
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2 ml-2" /> {t('advance_filters')}
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2 ml-2" /> {t('api_integrations')}
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2 ml-2" /> {t('outgoing_webhooks')}
  </p>
</div>

        </div>

        {/* Pro Plan */}
        <div className="bg-white rounded-lg p-6 border outline outline-lgreen border-[#d6dedb]">
        <h3 className="text-base font-semibold text-left ml-4 text-[#3b4b48] ">
  {t('pro_title')}
</h3>
<p className="text-base text-left p-4 text-[#4b615f] mb-4">
  {t('pro_description')}
</p>
<h2 className={`text-5xl ${i18n.language === 'ar' ? 'text-center' : 'text-center'} text-left ml-10 font-bold text-[#3b4b48] mb-1`}>
  ${isMonthly ? 50 : 30}
  <span className="text-lg">{t('monthly_price', { price: isMonthly ? "" : "" })}</span>
</h2>
<button className="bg-lgreen text-white text-base py-3 px-6 rounded-lg mb-4">
  {t('give_me_access')}
</button>
<div className="space-y-6 ml-10">
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2 ml-2" /> {t('feature_1')}
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2 ml-2" /> {t('feature_2')}
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2 ml-2" /> {t('feature_3')}
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2 ml-2" /> {t('feature_4')}
  </p>
  <p className="flex items-center text-left text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2 ml-2" /> {t('feature_5')}
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2 ml-2" /> {t('feature_6')}
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2 ml-2" /> {t('feature_7')}
  </p>
  <p className="flex items-center text-left text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2 ml-2" /> {t('feature_8')}
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2 ml-2" /> {t('feature_9')}
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2 ml-2" /> {t('feature_10')}
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2 ml-2" /> {t('feature_11')}
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2 ml-2" /> {t('feature_12')}
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2 ml-2" /> {t('feature_13')}
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2 ml-2" /> {t('feature_14')}
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2 ml-2" /> {t('feature_15')}
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2 ml-2" /> {t('feature_16')}
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2 ml-2" /> {t('feature_17')}
  </p>
</div>


        </div>

        {/* Enterprise Plan */}
        <div className="bg-white rounded-lg p-6 outline outline-lgreen border border-[#d6dedb]">
        <h3 className="text-base text-left ml-4 font-semibold text-[#3b4b48] mb-2">
  {t('enterprise_title')}
</h3>
<p className="text-base text-left ml-4 text-[#4b615f] mb-4">
  {t('want_more_subscribers')}
</p>
<h2 className="text-2xl lg:text-5xl font-bold text-[#3b4b48] mb-4">
  {t('contact_us')}
</h2>
<button className="bg-lgreen text-white text-base py-3 px-16 rounded-lg mb-4">
  {t('talk_to_sales')}
</button>
<div className="space-y-6 ml-10">
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2 ml-2" /> {t('unlimited_subscribers')}
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2 ml-2" /> {t('drag_drop_email_builder')}
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2 ml-2" /> {t('unlimited_email_campaigns')}
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2 ml-2" /> {t('unlimited_smtp_servers')}
  </p>
  <p className="flex items-center text-left text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2 ml-2" /> {t('unlimited_workflow_automations')}
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2 ml-2" /> {t('unlimited_segmentation')}
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2 ml-2" /> {t('unlimited_custom_fields')}
  </p>
  <p className={`flex items-center text-left text-base  text-[#4b615f] ${i18n.language === 'ar' ? 'whitespace-nowrap' : ''}`}>
    <AiOutlineCheck className="mr-2 ml-2 shrink-0" /> {t('unlimited_lead_capture_popups')}
  </p>
  <p className={`flex items-center text-base text-[#4b615f] ${i18n.language === 'ar' ? 'whitespace-nowrap' : ''}`}>
    <AiOutlineCheck className="mr-2 ml-2 shrink-0" /> {t('unlimited_lead_webforms')}
  </p>
  <p className={`flex items-center text-base text-[#4b615f] ${i18n.language === 'ar' ? 'whitespace-nowrap' : ''}`}>
    <AiOutlineCheck className="mr-2 ml-2" /> {t('open_click_tracking')}
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2 ml-2" /> {t('import_bulk_contacts')}
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2 ml-2" /> {t('simple_powerful_analytics')}
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2 ml-2" /> {t('email_validation_integration')}
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2 ml-2" /> {t('custom_tracking_domains')}
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2 ml-2" /> {t('advance_filters')}
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2 ml-2" /> {t('api_integrations')}
  </p>
  <p className="flex items-center text-base text-[#4b615f]">
    <AiOutlineCheck className="mr-2 ml-2" /> {t('outgoing_webhooks')}
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