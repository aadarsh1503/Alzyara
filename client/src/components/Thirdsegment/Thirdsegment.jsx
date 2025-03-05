import React, { useEffect, useState } from "react";
import i1 from "./i1.webp"
import { useTranslation } from "react-i18next";

const Thirdsegment = () => {
  const { t, i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(i18n.language === 'ar');
  useEffect(() => {
    setIsRTL(i18n.language === 'ar');
  }, [i18n.language]);
  
  return (
    <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto justify-between px-6 py-10 md:px-16 md:py-20">
  {/* Left Side Content */}
  <div className={`md:w-1/2 mt-0 lg:mt-10 ${i18n.language === 'ar' ? 'text-right' : 'text-left'} text-left`}>
    <h1 className="font-semibold w-64 rounded-md mb-2 bg-bkg">{t('easy_workflow_builder')} 🤖</h1>
    <h1 className="text-40px font-semibold text-gray-900 leading-tight md:leading-snug">
      {t('save_time_money')} <br />
    </h1>
    <h1 className="text-4xl sm:text-40px font-semibold leading-tight relative whitespace-nowrap inline-block">
      {t('automated_email_workflows')}
      <span className="absolute -bottom-1 left-0 w-full h-4 bg-parrot -z-10"></span>
    </h1>

    <p className="mt-4 text-lg text-gray-700">
      {t('workflow_description')}
    </p>

    <ul className="mt-6 space-y-4">
      {[
        { key: 'customizable_workflows', description: 'customizable_workflows_desc' },
        { key: 'trigger_based_automation', description: 'trigger_based_automation_desc' },
        { key: 'efficiency_boost', description: 'efficiency_boost_desc' },
        { key: 'enhanced_engagement', description: 'enhanced_engagement_desc' },
      ].map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="text-black font-medium">
            <strong>{t(item.key)}:</strong> <span className="font-normal">{t(item.description)}</span>
          </span>
        </li>
      ))}
    </ul>

    <button className="mt-8 bg-lgreen text-white px-6 py-3 rounded-md text-lg font-semibold shadow-md hover:bg-hgreen">
      {t('create_free_account')}
    </button>

    <div className="mt-6 grid grid-cols-2 font-semibold text-black">
      <ul className="space-y-2">
        {['automate_marketing', 'custom_fields'].map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-lgreen mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            {t(item)}
          </li>
        ))}
      </ul>
      <ul className="space-y-2">
        {['performance_reports', 'track_engagement'].map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-lgreen mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            {t(item)}
          </li>
        ))}
      </ul>
    </div>
  </div>

  {/* Right Side Image */}
  <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
    <img src={i1} alt={t('email_preview')} className="max-w-full h-auto rounded-md" />
  </div>
</div>

  );
};

export default Thirdsegment;
