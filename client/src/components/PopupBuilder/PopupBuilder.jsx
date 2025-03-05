import React, { useEffect, useState } from 'react';
import Tool4 from './Tool4';

import i5 from "./i5.png"
import { useTranslation } from 'react-i18next';
const PopupBuilder  = () => {
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
    <h1 className='font-semibold mb-2'>{t('customizable_templates')} 🎨</h1>
    <h1 className="text-4xl font-semibold text-gray-900 leading-tight md:leading-snug">
      {t('design_popups')}
    </h1>
    <p className="mt-4 text-lg text-gray-700">
      {t('create_eye_catching')}
    </p>
    <ul className="mt-6 space-y-4">
      {[
        { key: 'variety_of_templates', bold: t('variety_of_templates_bold'), text: t('variety_of_templates_text') },
        { key: 'easy_customization', bold: t('easy_customization_bold'), text: t('easy_customization_text') },
        { key: 'professional_designs', bold: t('professional_designs_bold'), text: t('professional_designs_text') },
        { key: 'quick_setup', bold: t('quick_setup_bold'), text: t('quick_setup_text') }
      ].map((item) => (
        <li key={item.key} className="flex items-start">
          <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="text-black  font-medium mr-2">
            <strong>{item.bold}: </strong>
            <span className="font-normal">{item.text}</span>
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
          {t('wide_range_templates')}
        </li>
        <li className="flex items-start">
          <span className="text-lgreen mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          {t('easy_customization')}
        </li>
      </ul>
      <ul className="space-y-2">
        <li className="flex items-start">
          <span className="text-lgreen mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          {t('professional_designs')}
        </li>
        <li className="flex items-start">
          <span className="text-lgreen mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          {t('quick_setup')}
        </li>
      </ul>
    </div>
  </div>

  {/* Right Side Image */}
  <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
    <img src={i5} alt={t('email_design_preview')} className="max-w-full h-auto rounded-md" />
  </div>
</div>

    

    {/*Second */}
    <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto justify-between px-6 py-10 md:px-16 md:py-20">
  {/* Right Side Image */}
  <div className="md:w-1/2 mt-10 md:mt-0 flex -ml-20 justify-center">
    <img src="https://sendmails.io/wp-content/uploads/2024/09/Exit-Intent-Technology-%F0%9F%9A%AA-1.png" alt={t('email_design_preview')} className="max-w-full h-auto rounded-md" />
  </div>

  {/* Left Side Content */}
  <div className={`md:w-1/2 mt-0 lg:mt-10 ${i18n.language === 'ar' ? 'text-right relative right-20' : 'text-left'}`}>
    <h1 className='font-semibold mb-2'>{t('exit_intent_technology')}</h1>
    <h1 className="text-4xl font-semibold text-gray-900 leading-tight md:leading-snug">
      {t('capture_leads_before_they_leave')}
    </h1>
    <p className="mt-4 text-lg text-gray-700">
      {t('popup_description')}
    </p>
    <ul className="mt-6 space-y-4">
      {[{
        title: 'behavior_based_triggers',
        description: 'detect_exit_display_popup'
      }, {
        title: 'increase_conversions',
        description: 'prevent_leads_leaving'
      }, {
        title: 'customizable_triggers',
        description: 'setup_exit_popup'
      }, {
        title: 'seamless_integration',
        description: 'integrate_with_website'
      }].map((item, index) => (
        <li className="flex items-start" key={index}>
          <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="text-black  font-medium mr-2">
            <span className='font-bold'>{t(item.title)}: </span>
            <span className='font-normal'>{t(item.description)}</span>
          </span>
        </li>
      ))}
    </ul>

    <button className="mt-8 bg-lgreen text-white px-6 py-3 rounded-md text-lg font-semibold shadow-md hover:bg-hgreen">
      {t('create_free_account')}
    </button>

    <div className="mt-6 grid grid-cols-2 text-gray-800">
      {[['behavior_based_triggers', 'customizable_triggers'], ['increase_conversions', 'seamless_integration']].map((group, idx) => (
        <ul className="space-y-2" key={idx}>
          {group.map((item, subIdx) => (
            <li className="flex items-start" key={subIdx}>
              <span className="text-lgreen mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              {t(item)}
            </li>
          ))}
        </ul>
      ))}
    </div>
  </div>
</div>


   <Tool4 />
    </div>
  );
};

export default PopupBuilder;
