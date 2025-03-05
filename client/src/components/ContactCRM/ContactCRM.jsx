import React, { useEffect, useState } from 'react';

import Tool3 from './Tool3';
import i1 from "./i1.png"
import i5 from "./i5.png"
import { useTranslation } from 'react-i18next';

const ContactCRM = () => {
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
    <h1 className="font-semibold mb-2">{t('lead_management')}</h1>
    <h1 className="text-4xl font-semibold text-gray-900 leading-tight md:leading-snug">
      {t('organize_optimize')}
    </h1>
    <p className="mt-4 text-lg text-gray-700">{t('store_manage_contacts')}</p>

    <ul className="mt-6 space-y-4">
      <li className="flex items-start">
        <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="text-black font-medium mr-2">
          <span className="font-bold">{t('centralized_storage')}</span>
          <span className="font-normal"> {t('centralized_storage_desc')}</span>
        </span>
      </li>

      <li className="flex items-start">
        <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="text-black font-medium mr-2">
          <strong>{t('detailed_segmentation')}</strong>
          <span className="font-normal">{t('detailed_segmentation_desc')}</span>
        </span>
      </li>

      <li className="flex items-start">
        <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="text-gray-800 font-medium mr-2">
          <strong>{t('effortless_management')}</strong>
          <span className="font-normal text-base">{t('effortless_management_desc')}</span>
        </span>
      </li>

      <li className="flex items-start">
        <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="text-gray-800 font-medium mr-2">
          <strong>{t('enhanced_communication')}</strong>
          <span className="font-normal text-base">{t('enhanced_communication_desc')}</span>
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
          {t('centralized_storage')}
        </li>
        <li className="flex items-start">
          <span className="text-lgreen mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          {t('efficient_management')}
        </li>
      </ul>

      <ul className="space-y-2">
        <li className="flex items-start">
          <span className="text-lgreen mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          {t('detailed_segmentation')}
        </li>
        <li className="flex items-start">
          <span className="text-lgreen mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          {t('enhanced_communication')}
        </li>
      </ul>
    </div>
  </div>

  {/* Right Side Image */}
  <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
    <img src="https://sendmails.io/wp-content/uploads/2024/09/Lead-Management-%F0%9F%93%8B.png" alt={t('lead_management_image')} className="max-w-full h-auto rounded-md" />
  </div>
</div>

    

    {/*Second */}
   <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto justify-between px-6 py-10 md:px-16 md:py-20">
  {/* Right Side Image */}
  <div className="md:w-1/2 mt-10 md:mt-0 flex -ml-20 justify-center">
    <img src={i5} alt="Email Design Preview" className="max-w-full h-auto rounded-md" />
  </div>

  {/* Left Side Content */}
  <div className={`md:w-1/2 mt-0 lg:mt-10 ${i18n.language === 'ar' ? 'text-right relative right-20' : 'text-left'}`}>
    <h1 className='font-semibold mb-2'>{t('custom_fields')}</h1>
    <h1 className="text-4xl font-semibold text-gray-900 leading-tight md:leading-snug">
      {t('capture_unique_info')}
    </h1>
    <p className="mt-4 text-lg text-gray-700">
      {t('custom_fields_desc')}
    </p>

    <ul className="mt-6 space-y-4">
      <li className="flex items-start">
        <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="text-black font-medium mr-2">
          <span className='font-bold'>{t('flexible_data')}</span>
          <span className='font-normal'> {t('flexible_data_desc')}</span>
        </span>
      </li>

      <li className="flex items-start">
        <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="text-black font-medium mr-2">
          <strong>{t('personalized_communication')} </strong>
          <span className="font-normal">{t('personalized_communication_desc')}</span>
        </span>
      </li>

      <li className="flex items-start">
        <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="text-gray-800 font-medium mr-2">
          <strong>{t('advanced_segmentation')}</strong>
          <span className="font-normal text-base"> {t('advanced_segmentation_desc')}</span>
        </span>
      </li>

      <li className="flex items-start">
        <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="text-gray-800 font-medium mr-2">
          <strong>{t('better_insights')}</strong>
          <span className="font-normal text-base"> {t('better_insights_desc')}</span>
        </span>
      </li>
    </ul>

    <button className="mt-8 bg-lgreen text-white px-6 py-3 rounded-md text-lg font-semibold shadow-md hover:bg-hgreen">
      {t('create_account')}
    </button>
    <div className="mt-6 grid grid-cols-2 text-gray-800">
      <ul className="space-y-2">
        <li className="flex items-start">
          <span className="text-lgreen mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
         
         {t('Flexible_Data_Collection')}
        </li>
        <li className="flex items-start">
          <span className="text-lgreen mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
         
          {t('Advanced_Segmentation')}
        </li>
      </ul>
      <ul className="space-y-2">
        <li className="flex items-start">
          <span className="text-lgreen mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
           {t('Personalized_Communication')}
        </li>
        <li className="flex items-start">
          <span className="text-lgreen mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          
{t('Gain_Better_Insights')}
        </li>
      </ul>
    </div>
  </div>
</div>



{/*third */}
<div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto justify-between px-6 py-10 md:px-16 md:py-20">
  {/* Left Side Content */}
  <div className={`md:w-1/2 mt-0 lg:mt-10 ${i18n.language === 'ar' ? 'text-right' : 'text-left'}`}>
    <h1 className='font-semibold mb-2'>{t('engagement_tracking')}</h1>
    <h1 className="text-4xl font-semibold text-gray-900 leading-tight md:leading-snug">
      {t('understand_optimize')}
    </h1>
    <p className="mt-4 text-lg text-gray-700">
      {t('track_interactions')}
    </p>
    <ul className="mt-6 space-y-4 ">
      {[
        {
          title: t('real_time_tracking_title'),
          description: t('real_time_tracking_desc')
        },
        {
          title: t('dynamic_segments_title'),
          description: t('dynamic_segments_desc')
        },
        {
          title: t('enhanced_personalization_title'),
          description: t('enhanced_personalization_desc')
        },
        {
          title: t('increased_conversions_title'),
          description: t('increased_conversions_desc')
        }
      ].map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="text-black font-medium mr-2">
            <span className='font-bold'>{item.title}: </span><span className='font-normal'>{item.description}</span>
          </span>
        </li>
      ))}
    </ul>

    <button className="mt-8 bg-lgreen text-white px-6 py-3 rounded-md text-lg font-semibold shadow-md hover:bg-hgreen">
      {t('create_free_account')}
    </button>

    <div className="mt-6 grid grid-cols-2 text-gray-800">
      {[
        t('real_time_tracking'),
        t('key_engagement_metrics'),
        t('behavioral_insights'),
        t('actionable_data')
      ].map((text, index) => (
        <ul key={index} className="space-y-2">
          <li className="flex items-start">
            <span className="text-lgreen mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            {text}
          </li>
        </ul>
      ))}
    </div>
  </div>

  {/* Right Side Image */}
  <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
    <img src={i1} alt={t('email_design_preview')} className="max-w-full h-auto rounded-md" />
  </div>
</div>

    <Tool3 />
    </div>
  );
};

export default ContactCRM;
