import React, { useEffect, useState } from 'react'
import i1 from "./i1.webp"
import { useTranslation } from 'react-i18next';
const FourthHome = () => {
  const { t, i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(i18n.language === 'ar');
  useEffect(() => {
    setIsRTL(i18n.language === 'ar');
  }, [i18n.language]);
  
  return (
    <div className="flex flex-col md:flex-row items-center max-w-7xl overflow-x-hidden mx-auto justify-between px-6 py-10 md:px-16 md:py-20">
    {/* Right Side Image */}
    <div className="md:w-1/2 mt-10 md:mt-0 flex -ml-2 justify-center">
      <img src={i1} alt={t('email_preview')} className="max-w-full h-auto rounded-md" />
    </div>
  
    {/* Left Side Content */}
    <div className={`md:w-1/2 mt-0 lg:mt-10 ${i18n.language === 'ar' ? 'text-right relative right-[120px]' : 'text-left'} relative left-20`}>
      <h1 className='font-semibold w-[160px] rounded-md p-2 bg-bkg mb-2'>{t('contact_crm')} 👥</h1>
      
      <h1 className='text-40px leading-tight font-semibold'>{t('manage_contact_list')}</h1>
      
      <h1 className="text-4xl sm:text-40px font-semibold leading-tight relative inline-block">
        {t('verify_emails')}
        <span className="absolute -bottom-1 left-0 w-full h-4 bg-parrot -z-10"></span>
      </h1>
  
      <p className="mt-4 text-lg text-gray-700">
        {t('description_text')}
      </p>
  
      <ul className="mt-6 space-y-4">
        {[
          { key: 'feature_1_title', desc: 'feature_1_desc' },
          { key: 'feature_2_title', desc: 'feature_2_desc' },
          { key: 'feature_3_title', desc: 'feature_3_desc' },
          { key: 'feature_4_title', desc: 'feature_4_desc' },
        ].map((item, index) => (
          <li className="flex items-start" key={index}>
            <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-black font-medium mr-2">
              <span className="font-bold">{t(item.key)}: </span>
              <span className="font-normal">{t(item.desc)}</span>
            </span>
          </li>
        ))}
      </ul>
  
      <button className="mt-8 bg-lgreen text-white px-6 py-3 rounded-md text-lg font-semibold shadow-md hover:bg-hgreen">
        {t('create_account')}
      </button>
  
      <div className="mt-6 grid grid-cols-2 text-black font-semibold">
        <ul className="space-y-2">
          {['customer_insights', 'optimized_marketing'].map((item, index) => (
            <li className="flex items-start" key={index}>
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
          {['unified_experience', 'streamlined_sales'].map((item, index) => (
            <li className="flex items-start" key={index}>
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
  </div>
  
  )
}

export default FourthHome