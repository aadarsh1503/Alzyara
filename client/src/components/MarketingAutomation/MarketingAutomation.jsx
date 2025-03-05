import React, { useEffect, useState } from 'react';
import ToolsSection from '../ToolsSection/ToolsSection';
import Tool2 from './Tool2';
import i5 from "./i5.png"
import i1 from "./i1.png"
import { useTranslation } from 'react-i18next';
const MarketingAutomation = () => {
  const { t, i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(i18n.language === 'ar');
  useEffect(() => {
    setIsRTL(i18n.language === 'ar');
  }, [i18n.language]);
  return (
    <div>
<div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto justify-between px-6 py-10 md:px-16 md:py-20">
  {/* Left Side Content */}
  <div className={`md:w-1/2 mt-0 lg:mt-10 ${i18n.language === 'ar' ? 'text-right' : 'text-left'}`}>
    <h1 className='font-semibold mb-2'>{t('workflow_builder')} 🛠️</h1>
    <h1 className="text-4xl font-semibold text-gray-900 leading-tight md:leading-snug">
      {t('automate_marketing')}
    </h1>
    <p className="mt-4 text-lg text-gray-700">
      {t('streamline_marketing')}
    </p>

    <ul className="mt-6 space-y-4">
      {[
        {
          title: t('customizable_workflows'),
          description: t('customizable_workflows_desc')
        },
        {
          title: t('trigger_based_automation'),
          description: t('trigger_based_automation_desc')
        },
        {
          title: t('efficiency_boost'),
          description: t('efficiency_boost_desc')
        },
        {
          title: t('enhanced_engagement'),
          description: t('enhanced_engagement_desc')
        }
      ].map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="text-black  font-medium mr-2">
            <strong>{item.title}: </strong>
            <span className="font-normal">{item.description}</span>
          </span>
        </li>
      ))}
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
          {t('visual_workflow_editor')}
        </li>
        <li className="flex items-start">
          <span className="text-lgreen mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          {t('time_saving_automation')}
        </li>
      </ul>
      <ul className="space-y-2">
        <li className="flex items-start">
          <span className="text-lgreen mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          {t('automate_tasks')}
        </li>
        <li className="flex items-start">
          <span className="text-lgreen mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          {t('increase_engagement')}
        </li>
      </ul>
    </div>
  </div>

  {/* Right Side Image */}
  <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
    <img src={i1} alt={t('email_design_preview')} className="max-w-full h-auto rounded-md" />
  </div>
</div>
    

    {/*Second */}
    <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto justify-between px-6 py-10 md:px-16 md:py-20">
  
  <div className="md:w-1/2 mt-10 md:mt-0 flex -ml-20 justify-center">
    <img src={i5} alt="Email Design Preview" className="max-w-full h-auto rounded-md" />
  </div>

  
  <div className={`md:w-1/2 mt-0 lg:mt-10 ${i18n.language === 'ar' ? 'text-right relative right-20' : 'text-left'}`}>
    <h1 className='font-semibold mb-2'>{t('trigger_based_emails')} 📬</h1>
    <h1 className="text-4xl font-semibold text-gray-900 leading-tight md:leading-snug">
      {t('send_timely_emails')}
    </h1>
    <p className="mt-4 text-lg text-gray-700">
      {t('activate_automated_emails')}
    </p>

    <ul className="mt-6 space-y-4">
      <li className="flex items-start">
        <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="text-black  font-medium mr-2">
          <span className='font-bold'>{t('reactive_campaigns')}:</span>
          <span className='font-normal'>{t('reactive_campaigns_desc')}</span>
        </span>
      </li>

      <li className="flex items-start">
        <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="text-black  font-medium mr-2">
          <strong>{t('engagement_boost')}:</strong>
          <span className="font-normal">{t('engagement_boost_desc')}</span>
        </span>
      </li>

      <li className="flex items-start">
        <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="text-gray-800  font-medium mr-2">
          <strong>{t('customization')}:</strong>
          <span className="font-normal text-base">{t('customization_desc')}</span>
        </span>
      </li>

      <li className="flex items-start">
        <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="text-gray-800  font-medium mr-2">
          <strong>{t('seamless_automation')}:</strong>
          <span className="font-normal text-base">{t('seamless_automation_desc')}</span>
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
          {t('timely_engagement')}
        </li>
        <li className="flex items-start">
          <span className="text-lgreen mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          {t('automatic_trigger_setup')}
        </li>
      </ul>

      <ul className="space-y-2">
        <li className="flex items-start">
          <span className="text-lgreen mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          {t('boost_customer_interaction')}
        </li>
        <li className="flex items-start">
          <span className="text-lgreen mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          {t('relevant_messaging')}
        </li>
      </ul>
    </div>
  </div>
</div>



{/*third */}
<div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto justify-between px-6 py-10 md:px-16 md:py-20">
  {/* Left Side Content */}
  <div className={`md:w-1/2 mt-0 lg:mt-10 ${i18n.language === 'ar' ? 'text-right' : 'text-left'}`}>
    <h1 className='font-semibold mb-2'>{t('detailed_analytics')}</h1>
    <h1 className="text-4xl font-semibold text-gray-900 leading-tight md:leading-snug">
      {t('deliver_targeted')}<br />{t('and_personalized')}<br />{t('campaigns')}
    </h1>
    <p className="mt-4 text-lg text-gray-700">
      {t('segment_audience')}
    </p>

    <ul className="mt-6 space-y-4">
      <li className="flex items-start">
        <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="text-black  font-medium mr-2">
          <span className='font-bold'>{t('targeted_campaigns')}</span>
          <span className='font-normal'> {t('targeted_campaigns_desc')}</span>
        </span>
      </li>

      <li className="flex items-start">
        <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="text-black  font-medium mr-2">
          <strong>{t('dynamic_segments')}</strong>
          <span className="font-normal"> {t('dynamic_segments_desc')}</span>
        </span>
      </li>

      <li className="flex items-start">
        <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="text-gray-800  font-medium mr-2">
          <strong>{t('enhanced_personalization')}</strong>
          <span className="font-normal text-base"> {t('enhanced_personalization_desc')}</span>
        </span>
      </li>

      <li className="flex items-start">
        <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="text-gray-800  font-medium mr-2">
          <strong>{t('increased_conversions')}</strong>
          <span className="font-normal text-base"> {t('increased_conversions_desc')}</span>
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
          {t('precise_targeting')}
        </li>
        <li className="flex items-start">
        <span className="text-lgreen mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          {t('enhanced_email_personalization')}
        </li>
      </ul>
      <ul className="space-y-2">
        <li className="flex items-start">
        <span className="text-lgreen mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          {t('dynamic_updates')}
        </li>
        <li className="flex items-start">
        <span className="text-lgreen mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          {t('boost_conversions')}
        </li>
      </ul>
    </div>
  </div>

  {/* Right Side Image */}
  <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
    <img src="https://sendmails.io/wp-content/uploads/2024/09/Copy-of-Glide-Campaign-AI-Chatbot.png" alt={t('email_preview')} className="max-w-full h-auto rounded-md" />
  </div>
</div>

    <Tool2 />
    </div>
  );
};

export default MarketingAutomation;
