import React, { useEffect, useState } from 'react';
import Tool5 from './Tool5';

import i5 from "./i5.png"
import { useTranslation } from 'react-i18next';
const LeadWebForm = () => {
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
  <h1 className='font-semibold mb-2'>{t('drag_and_drop_builder')} 🛠️</h1>
  <h1 className="text-4xl font-semibold text-gray-900 leading-tight md:leading-snug">
    {t('create_custom_forms')}
  </h1>
  <p className="mt-4 text-lg text-gray-700">
    {t('build_custom_forms')}
  </p>

  <ul className="mt-6 space-y-4">
    <li className="flex items-start">
      <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      <span className="text-black  font-medium mr-2">
        <span className='font-bold'>{t('user_friendly_interface')}</span>: <span className='font-normal'>{t('drag_drop_editor')}</span>
      </span>
    </li>

    <li className="flex items-start">
      <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      <span className="text-black  font-medium mr-2">
        <strong>{t('customizable_elements')}</strong>: <span className="font-normal">{t('customize_fields')}</span>
      </span>
    </li>

    <li className="flex items-start">
      <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      <span className="text-gray-800  font-medium mr-2">
        <strong>{t('quick_setup')}</strong>: <span className="font-normal text-base">{t('deploy_forms')}</span>
      </span>
    </li>

    <li className="flex items-start">
      <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      <span className="text-gray-800  font-medium mr-2">
        <strong>{t('no_coding_required')}</strong>: <span className="font-normal text-base">{t('build_without_code')}</span>
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
        {t('user_friendly_interface')}
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

    <ul className="space-y-2">
      <li className="flex items-start">
        <span className="text-lgreen mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        {t('no_coding_required')}
      </li>

      <li className="flex items-start">
        <span className="text-lgreen mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        {t('customizable_elements')}
      </li>
    </ul>
  </div>
</div>


      {/* Right Side Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img src="https://sendmails.io/wp-content/uploads/2024/09/Embedded-Forms-2.png" alt="Email Design Preview" className="max-w-full h-auto rounded-md " />
      </div>
    </div>
    

    {/*Second */}
    <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto justify-between  px-6 py-10 md:px-16 md:py-20">
  {/* Right Side Image */}
  <div className="md:w-1/2 mt-10 md:mt-0 flex -ml-20 justify-center">
    <img src={i5} alt="Email Design Preview" className="max-w-full h-auto rounded-md " />
  </div>

  {/* Left Side Content */}
  <div className={`md:w-1/2 mt-0 lg:mt-10 ${i18n.language === 'ar' ? 'text-right relative right-20' : 'text-left'}`}>
  <h1 className='font-semibold mb-2'>{t('embedded_forms')}</h1>
<h1 className="text-4xl font-semibold text-gray-900 leading-tight md:leading-snug">
  {t('seamlessly_capture_leads')}
</h1>
<p className="mt-4 text-lg text-gray-700">
  {t('integrate_lead_capture')}
</p>
<ul className="mt-6 space-y-4">
  <li className="flex items-start">
    <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
    <span className="text-black  font-medium mr-2">
      <span className='font-bold'>{t('easy_integration')}</span>
      <span className='font-normal'>{t('embed_forms_description')}</span>
    </span>
  </li>
  <li className="flex items-start">
    <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
    <span className="text-black  font-medium mr-2">
      <strong>{t('consistent_design')}</strong>
      <span className="font-normal">{t('consistent_design_description')}</span>
    </span>
  </li>
  <li className="flex items-start">
    <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
    <span className="text-gray-800  font-medium mr-2">
      <strong>{t('high_conversion_rates')}</strong>
      <span className="font-normal text-base">{t('high_conversion_description')}</span>
    </span>
  </li>
  <li className="flex items-start">
    <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
    <span className="text-gray-800  font-medium mr-2">
      <strong>{t('data_sync')}</strong>
      <span className="font-normal text-base">{t('data_sync_description')}</span>
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
      {t('easy_integration')}
    </li>
    <li className="flex items-start">
      <span className="text-lgreen mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      {t('high_conversion_rates')}
    </li>
  </ul>

  <ul className="space-y-2">
    <li className="flex items-start">
      <span className="text-lgreen mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      {t('consistent_design')}
    </li>
    <li className="flex items-start">
      <span className="text-lgreen mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      {t('data_sync')}
    </li>
  </ul>
</div>

  </div>
</div>


{/*third */}
<div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto justify-between  px-6 py-10 md:px-16 md:py-20">
      {/* Left Side Content */}
      <div className={`md:w-1/2 mt-0 lg:mt-10 ${i18n.language === 'ar' ? 'text-right' : 'text-left'}`}>
      <h1 className='font-semibold mb-2'>{t('instant_preview')} 👀</h1>
      <h1 className="text-4xl font-semibold text-gray-900 leading-tight md:leading-snug">
        {t('see_forms_in_real_time')}
      </h1>
      <p className="mt-4 text-lg text-gray-700">
        {t('preview_description')}
      </p>
      <ul className="mt-6 space-y-4">
        <li className="flex items-start">
          <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="text-black  font-medium mr-2">
            <span className='font-bold'>{t('real_time_updates')}:</span> <span className='font-normal'>{t('real_time_updates_desc')}</span> 
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="text-black  font-medium mr-2">
            <strong>{t('accurate_display')}:</strong> <span className="font-normal">{t('accurate_display_desc')}</span>
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="text-gray-800  font-medium mr-2">
            <strong>{t('interactive_elements')}:</strong> <span className="font-normal text-base">{t('interactive_elements_desc')}</span>
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="text-gray-800  font-medium mr-2">
            <strong>{t('optimize_design')}:</strong> <span className="font-normal text-base">{t('optimize_design_desc')}</span>
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
      {t('real_time_updates')}
    </li>
    <li className="flex items-start">
      <span className="text-lgreen mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      {t('functionality_testing')}
    </li>
  </ul>
  <ul className="space-y-2">
    <li className="flex items-start">
      <span className="text-lgreen mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      {t('accurate_display')}
    </li>
    <li className="flex items-start">
      <span className="text-lgreen mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      {t('instant_optimization')}
    </li>
  </ul>
</div>
      </div>

      {/* Right Side Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img src="https://sendmails.io/wp-content/uploads/2024/09/Instant-Preview.png" alt="Email Design Preview" className="max-w-full h-auto rounded-md " />
      </div>
    </div>
  <Tool5 />

    </div>
  );
};

export default LeadWebForm;
