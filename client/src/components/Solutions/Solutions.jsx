import React, { useEffect, useState } from 'react';
import MarketingAgencies from '../MarketingAgencies/MarketingAgencies';
import CounterSection from './CounterSection';
import EmailMarketingSection from './EmailMarketingSection';
import i1 from "./i1.png"
import { useTranslation } from 'react-i18next';

const Solutions = () => {
  const { t, i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(i18n.language === 'ar');
  useEffect(() => {
    setIsRTL(i18n.language === 'ar');
  }, [i18n.language]);
  return (
    <div>
    <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto justify-between  px-6 py-10 md:px-16 md:py-20">
      {/* Left Side Content */}
      <div className={`md:w-1/2 mt-0 lg:mt-10 ${i18n.language === 'ar' ? 'text-right' : 'text-left'}`}>
      <h1 className='font-semibold mb-2'>{t('advanced_segmentation')} 📈</h1>
      <h1 className="text-4xl font-semibold text-gray-900 leading-tight md:leading-snug">
        {t('deliver_targeted_campaigns')}
      </h1>
      <p className="mt-4 text-lg text-gray-700">
        {t('personalized_email_campaigns')}
      </p>
      <ul className="mt-6 space-y-4">
        <li className="flex items-start">
          <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="text-black font-medium mr-2">
            <span className='font-bold'>{t('detailed_segmentation_title')}:</span>
            <span className='font-normal'>{t('detailed_segmentation_description')}</span> 
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="text-black font-medium mr-2">
            <strong>{t('custom_filters_title')}:</strong>
            <span className="font-normal">{t('custom_filters_description')}</span>
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="text-gray-800 font-medium mr-2">
            <strong>{t('higher_engagement_title')}:</strong>
            <span className="font-normal text-base">{t('higher_engagement_description')}</span>
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="text-gray-800 font-medium mr-2">
            <strong>{t('improved_results_title')}:</strong>
            <span className="font-normal text-base">{t('improved_results_description')}</span>
          </span>
        </li>
      </ul>
      <button className="mt-8 bg-lgreen text-white px-6 py-3 rounded-md text-lg font-semibold shadow-md hover:bg-hgreen">
        {t('create_free_account')}
      </button>

      <div className="mt-6 grid grid-cols-2 text-gray-800">
  <ul className="space-y-2">
    <li className="flex items-start">
      <span className="text-lgreen mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      {t('detailed_segments')}
    </li>
    <li className="flex items-start">
      <span className="text-lgreen mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      {t('higher_engagement')}
    </li>
  </ul>

  <ul className="space-y-2">
    <li className="flex items-start">
      <span className="text-lgreen mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      {t('custom_filters')}
    </li>
    <li className="flex items-start">
      <span className="text-lgreen mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      {t('better_performance')}
    </li>
  </ul>
</div>

      </div>

      {/* Right Side Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img src={i1} alt="Email Design Preview" className="max-w-full h-auto rounded-md" />
      </div>
    </div>
    
<MarketingAgencies />
<CounterSection />
    {/*Second */}
    <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto justify-between  px-6 py-10 md:px-16 md:py-20">
  {/* Right Side Image */}
  <div className="md:w-1/2 mt-10 md:mt-0 flex -ml-20 justify-center">
    <img src="https://sendmails.io/wp-content/uploads/2024/10/Marketing-Agency-Graphic-1-3-1971x2048.png" alt="Email Design Preview" className="max-w-full h-auto rounded-md " />
  </div>

  {/* Left Side Content */}
  <div className={`md:w-1/2 mt-0 lg:mt-10 ${i18n.language === 'ar' ? 'text-right relative right-20' : 'text-left'}`}>
  <h1 className="font-semibold mb-2">
        {t("email_marketing_heading")} 💰
      </h1>

      <h1 className="text-4xl font-semibold text-gray-900 leading-tight md:leading-snug">
        {t("email_marketing_subheading")}
      </h1>

      <p className="mt-4 text-lg text-gray-700">
        {t("email_marketing_description")}
      </p>

      <ul className="mt-6 space-y-4">
        {[
          {
            key: "low_email_costs",
            title: t("low_email_costs_title"),
            description: t("low_email_costs_description"),
          },
          {
            key: "budget_friendly_tools",
            title: t("budget_friendly_title"),
            description: t("budget_friendly_description"),
          },
          {
            key: "time_saving_tool",
            title: t("time_saving_title"),
            description: t("time_saving_description"),
          },
        ].map((item) => (
          <li key={item.key} className="flex items-start">
            <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
            <span className="text-black font-medium">
              <strong>{item.title}</strong>{" "}
              <span className="font-normal">{item.description}</span>
            </span>
          </li>
        ))}
      </ul>

      <button className="mt-8 bg-lgreen text-white px-6 py-3 rounded-md text-lg font-semibold shadow-md hover:bg-hgreen">
        {t("create_free_account")}
      </button>
      <div className="mt-6 grid grid-cols-2 text-gray-800">
  <ul className="space-y-2">
    <li className="flex items-start">
      <span className="text-lgreen mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      {t('single_payment')}
    </li>
    <li className="flex items-start">
      <span className="text-lgreen mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      {t('premium_features')}
    </li>
  </ul>

  <ul className="space-y-2">
    <li className="flex items-start">
      <span className="text-lgreen mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      {t('responsive_devices')}
    </li>
    <li className="flex items-start">
      <span className="text-lgreen mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      {t('low_cost')}
    </li>
  </ul>
</div>
  </div>
</div>


{/*third */}
<div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto justify-between  px-6 py-10 md:px-16 md:py-20">
      {/* Left Side Content */}
      <div className={`md:w-1/2 mt-0 lg:mt-10 ${i18n.language === 'ar' ? 'text-right' : 'text-left'}`}>
      <h1 className='font-semibold mb-2'>{t('robust_automation')}</h1>
<h1 className="text-4xl font-semibold text-gray-900 leading-tight md:leading-snug">
  {t('automate_marketing')}
</h1>
<p className="mt-4 text-lg text-gray-700">
  {t('save_time_resources')}
</p>
<ul className="mt-6 space-y-4">
  <li className="flex items-start">
    <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
    <span className="text-black font-medium mr-2">
      <span className='font-bold'>{t('ai_powered')}</span>
      <span className='font-normal'> {t('ai_powered_desc')}</span> 
    </span>
  </li>
  <li className="flex items-start">
    <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
    <span className="text-black font-medium mr-2">
      <strong>{t('custom_automation')}</strong> 
      <span className="font-normal">{t('custom_automation_desc')}</span>
    </span>
  </li>
  <li className="flex items-start">
    <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
    <span className="text-gray-800 font-medium mr-2">
      <strong>{t('behavior_triggers')}</strong>
      <span className="font-normal text-base">{t('behavior_triggers_desc')}</span>
    </span>
  </li>
  <li className="flex items-start">
    <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
    <span className="text-gray-800 font-medium mr-2">
      <strong>{t('engagement')}</strong>
      <span className="font-normal text-base">{t('engagement_desc')}</span>
    </span>
  </li>
</ul>
<button className="mt-8 bg-lgreen text-white px-6 py-3 rounded-md text-lg font-semibold shadow-md hover:bg-hgreen">
  {t('create_free_account')}
</button>

<div className="mt-6 grid grid-cols-2 text-gray-800">
  <ul className="space-y-2">
    <li className="flex items-start">
      <span className="text-lgreen mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      {t('ai_automation')}
    </li>
    <li className="flex items-start">
      <span className="text-lgreen mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      {t('behavior_triggers')}
    </li>
  </ul>

  <ul className="space-y-2">
    <li className="flex items-start">
      <span className="text-lgreen mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      {t('custom_workflows')}
    </li>
    <li className="flex items-start">
      <span className="text-lgreen mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      {t('continuous_engagement')}
    </li>
  </ul>
</div>

      </div>

      {/* Right Side Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img src="https://sendmails.io/wp-content/uploads/2022/09/automation-workflow-2048x1456.png" alt="Email Design Preview" className="max-w-full h-auto rounded-md " />
      </div>
    </div>
    <EmailMarketingSection />
    </div>
  );
};

export default Solutions;
