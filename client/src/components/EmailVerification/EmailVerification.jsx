import React, { useEffect, useState } from 'react';
import Tool6 from './Tool6';
import { useTranslation } from 'react-i18next';


const EmailVerification = () => {
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
      <h1 className='font-semibold mb-2'>{t('real_time_verification')}</h1>
<h1 className="text-4xl font-semibold text-gray-900 leading-tight md:leading-snug">
  {t('ensure_email_accuracy')}<br />{t('instantly')}
</h1>
<p className="mt-4 text-lg text-gray-700">
  {t('validate_email_real_time')}<br />{t('ensure_accurate_deliverable')}
</p>
<ul className="mt-6 space-y-4">
  <li className="flex items-start">
    <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
    <span className="text-black  font-medium mr-2">
      <span className='font-bold'>{t('customizable_workflows')}</span>: <span className='font-normal'>{t('build_complex_workflows')}</span>
    </span>
  </li>
  <li className="flex items-start">
    <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
    <span className="text-black  font-medium mr-2">
      <strong>{t('trigger_based_automation')}</strong>: <span className="font-normal">{t('automate_emails_user_actions')}</span>
    </span>
  </li>
  <li className="flex items-start">
    <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
    <span className="text-gray-800  font-medium mr-2">
      <strong>{t('efficiency_boost')}</strong>: <span className="font-normal text-base">{t('save_time_automation')}</span>
    </span>
  </li>
  <li className="flex items-start">
    <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
    <span className="text-gray-800  font-medium mr-2">
      <strong>{t('seamless_integration')}</strong>: <span className="font-normal text-base">{t('integrate_real_time_forms')}</span>
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
      {t('immediate_validation')}
    </li>
    <li className="flex items-start">
      <span className="text-lgreen mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      {t('reduce_bounces')}
    </li>
  </ul>
  <ul className="space-y-2">
    <li className="flex items-start">
      <span className="text-lgreen mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      {t('improve_deliverability')}
    </li>
    <li className="flex items-start">
      <span className="text-lgreen mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      {t('seamless_integration')}
    </li>
  </ul>
</div>

      </div>

      {/* Right Side Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img src="https://sendmails.io/wp-content/uploads/2024/09/Email-Verification-2.png" alt="Email Design Preview" className="max-w-full h-auto rounded-md " />
      </div>
    </div>
    

    {/*Second */}
    <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto justify-between  px-6 py-10 md:px-16 md:py-20">
  {/* Right Side Image */}
  <div className="md:w-1/2 mt-10 md:mt-0 flex -ml-20 justify-center">
    <img src="https://sendmails.io/wp-content/uploads/2022/09/individual-profile-2048x1613.png" alt="Email Design Preview" className="max-w-full h-auto rounded-md " />
  </div>

  {/* Left Side Content */}
  <div className={`md:w-1/2 mt-0 lg:mt-10 ${i18n.language === 'ar' ? 'text-right relative right-20' : 'text-left'}`}>
  <h1 className="font-semibold mb-2">{t('bulk_verification')} 📋</h1>
<h1 className="text-4xl font-semibold text-gray-900 leading-tight md:leading-snug">
  {t('clean_email_list')}
</h1>
<p className="mt-4 text-lg text-gray-700">
  {t('verify_large_volumes')}
</p>

<ul className="mt-6 space-y-4">
  <li className="flex items-start">
    <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
    <span className="text-black  font-medium mr-2">
      <span className="font-bold">{t('batch_processing')}</span>
      <span className="font-normal"> {t('batch_processing_desc')}</span>
    </span>
  </li>

  <li className="flex items-start">
    <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
    <span className="text-black  font-medium mr-2">
      <strong>{t('high_accuracy')}</strong>
      <span className="font-normal"> {t('high_accuracy_desc')}</span>
    </span>
  </li>

  <li className="flex items-start">
    <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
    <span className="text-gray-800  font-medium mr-2">
      <strong>{t('cost_effective')}</strong>
      <span className="font-normal text-base"> {t('cost_effective_desc')}</span>
    </span>
  </li>

  <li className="flex items-start">
    <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
    <span className="text-gray-800  font-medium mr-2">
      <strong>{t('improved_performance')}</strong>
      <span className="font-normal text-base"> {t('improved_performance_desc')}</span>
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
      {t('batch_processing')}
    </li>
    <li className="flex items-start">
      <span className="text-lgreen mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      {t('cost_effective')}
    </li>
  </ul>

  <ul className="space-y-2">
    <li className="flex items-start">
      <span className="text-lgreen mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      {t('high_accuracy')}
    </li>
    <li className="flex items-start">
      <span className="text-lgreen mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      {t('improved_performance')}
    </li>
  </ul>
</div>

  </div>
</div>


{/*third */}
<div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto justify-between  px-6 py-10 md:px-16 md:py-20">
      {/* Left Side Content */}
      <div className={`md:w-1/2 mt-0 lg:mt-10 ${i18n.language === 'ar' ? 'text-right' : 'text-left'}`}>
      <h1 className="font-semibold mb-2">{t('bounce_management')} 📉</h1>

  <h1 className="text-4xl font-semibold text-gray-900 leading-tight md:leading-snug">
    {t('keep_email_list')}
  </h1>

  <p className="mt-4 text-lg text-gray-700">
    {t('bounce_description')}
  </p>


  <ul className="mt-6 space-y-4">
    {[
      {
        title: t('enhanced_deliverability_title'),
        description: t('enhanced_deliverability_desc'),
      },
      {
        title: t('automatic_handling_title'),
        description: t('automatic_handling_desc'),
      },
      {
        title: t('real_time_updates_title'),
        description: t('real_time_updates_desc'),
      },
      {
        title: t('maintain_list_quality_title'),
        description: t('maintain_list_quality_desc'),
      },
    ].map((item, index) => (
      <li key={index} className="flex items-start">
        <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="text-gray-800  font-medium mr-2 mr-2">
          <strong>{item.title}</strong>
          <span className="font-normal text-base"> {item.description}</span>
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
      {t('automatic_handling')}
    </li>
    <li className="flex items-start">
      <span className="text-lgreen mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      {t('maintain_list_quality')}
    </li>
  </ul>
  <ul className="space-y-2">
    <li className="flex items-start">
      <span className="text-lgreen mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      {t('enhanced_deliverability')}
    </li>
    <li className="flex items-start">
      <span className="text-lgreen mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      {t('real_time_updates')}
    </li>
  </ul>
</div>

      </div>

      {/* Right Side Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img src="https://sendmails.io/wp-content/uploads/2024/09/Copy-of-Glide-Campaign-AI-Chatbot.png" alt="Email Design Preview" className="max-w-full h-auto rounded-md " />
      </div>
    </div>
<Tool6 />
    </div>
  );
};

export default EmailVerification;
