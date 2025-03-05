import React, { useEffect, useState } from 'react';
import ToolsSection from '../ToolsSection/ToolsSection';
import i1 from "./i1.png"
import { useTranslation } from 'react-i18next';
const EmailSection = () => {
  const { t, i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(i18n.language === 'ar');
  useEffect(() => {
    setIsRTL(i18n.language === 'ar');
  }, [i18n.language]);
  
  return (
    <div className={`${i18n.language === 'ar' ? 'text-right' : 'text-left'}`}>
<div className={`flex flex-col md:flex-row items-center max-w-7xl mx-auto justify-between px-6 py-10 md:px-16 md:py-20`}>
  {/* Left Side Content */}
  <div className={`md:w-1/2 mt-0 lg:mt-10 ${i18n.language === 'ar' ? 'text-right' : 'text-left'} `}>
    <h1 className="font-semibold mb-2">{t('drag_and_drop_title')}</h1>
    <h1 className="text-4xl font-semibold text-gray-900 leading-tight md:leading-snug">
      {t('create_stunning')}
    </h1>
    <p className="mt-4 text-lg text-gray-700">
      {t('email_description')}
    </p>
    <ul className="mt-6 space-y-4">
      <li className="flex items-start">
        <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="text-black font-medium mr-2">
          <span className='font-bold'>{t('user_friendly_title')}</span><span className='font-normal'> {t('user_friendly_description')}</span>
        </span>
      </li>
      <li className="flex items-start">
        <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="text-black font-medium mr-2">
          <strong>{t('customizable_templates_title')}</strong> <span className="font-normal">{t('customizable_templates_description')}</span>
        </span>
      </li>
      <li className="flex items-start">
        <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="text-gray-800 font-medium mr-2">
          <strong>{t('responsive_designs_title')}</strong><span className="font-normal text-base"> {t('responsive_designs_description')}</span>
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
          {t('no_coding_required')}
        </li>
        <li className="flex items-start">
          <span className="text-lgreen mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          {t('professional_designs')}
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
          {t('unlimited_flexibility')}
        </li>
      </ul>
    </div>
  </div>

  {/* Right Side Image */}
  <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
    <img src={i1} alt={t('email_preview_alt')} className="max-w-full h-auto rounded-md shadow-lg" />
  </div>
</div>


    {/*Second */}
    <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto justify-between px-6 py-10 md:px-16 md:py-20">
  {/* Right Side Image */}
  <div className="md:w-1/2 mt-10 md:mt-0 flex -ml-20 justify-center">
    <img src="https://sendmails.io/wp-content/uploads/2024/09/AI-Powered-Content-Writer.png" alt={t('email_design_preview')} className="max-w-full h-auto rounded-md" />
  </div>

  {/* Left Side Content */}
  <div className={`md:w-1/2 mt-0 lg:mt-10 ${i18n.language === 'ar' ? 'text-right relative right-20' : 'text-left'} `}>
    <h1 className='font-semibold mb-2'>{t('ai_powered_content_generator')} 🤖</h1>
    <h1 className="text-4xl font-semibold text-gray-900 leading-tight md:leading-snug">
      {t('generate_engaging_content')} <br /> {t('with_ease')}
    </h1>
    <p className="mt-4 text-lg text-gray-700">
      {t('leverage_ai_description')}
    </p>

    <ul className="mt-6 space-y-4">
      <li className="flex items-start">
        <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="text-black font-medium mr-2">
          <span className='font-bold'>{t('effortless_content_creation')}</span>
          <span className='font-normal'> {t('effortless_content_description')}</span>
        </span>
      </li>

      <li className="flex items-start">
        <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="text-black font-medium mr-2">
          <strong>{t('optimized_subject_lines')}</strong>
          <span className="font-normal"> {t('optimized_subject_description')}</span>
        </span>
      </li>

      <li className="flex items-start">
        <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="text-gray-800 font-medium mr-2">
          <strong>{t('time_saving_tool')}</strong>
          <span className="font-normal text-base"> {t('time_saving_description')}</span>
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
          {t('no_coding_required')}
        </li>
        <li className="flex items-start">
          <span className="text-lgreen mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          {t('professional_designs')}
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
          {t('unlimited_flexibility')}
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
          {t('track_optimize_campaigns')}
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          {t('craft_responsive_emails')}
        </p>

        <ul className="mt-6 space-y-4">
          {[
            { title: t('user_friendly_interface'), desc: t('drag_drop_editor') },
            { title: t('customizable_templates'), desc: t('choose_templates') },
            { title: t('mobile_responsive_designs'), desc: t('perfect_on_any_device') },
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-black font-medium mr-2">
                <strong>{item.title}</strong> <span className="font-normal">{item.desc}</span>
              </span>
            </li>
          ))}
        </ul>

        <button className="mt-8 bg-lgreen text-white px-6 py-3 rounded-md text-lg font-semibold shadow-md hover:bg-hgreen">
          {t('create_free_account')}
        </button>

        <div className="mt-6 grid grid-cols-2 text-gray-800">
          {[
            t('no_coding_required'),
            t('professional_designs'),
            t('responsive_devices'),
            t('unlimited_flexibility')
          ].map((text, index) => (
            <div key={index} className="flex items-start">
              <span className="text-lgreen mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              {text}
            </div>
          ))}
        </div>
      </div>

      {/* Right Side Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img src="https://sendmails.io/wp-content/uploads/2024/09/Copy-of-Glide-Campaign-AI-Chatbot.png" alt={t('email_design_preview')} className="max-w-full h-auto rounded-md" />
      </div>
    </div>
    <ToolsSection />
    </div>
  );
};

export default EmailSection;
