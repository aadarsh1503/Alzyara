import React, { useEffect, useState } from "react";
import i1 from "./i1.png";
import { useTranslation } from "react-i18next";

const Automation = () => {
  const { t, i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(i18n.language === 'ar');
  useEffect(() => {
    setIsRTL(i18n.language === 'ar');
  }, [i18n.language]);
  
  return (
    <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto justify-between px-6 py-10 md:px-16 md:py-20">
    {/* Right Side Image */}
    <div className="md:w-1/2 mt-10 md:mt-0 flex -ml-2 justify-center">
      <img src={i1} alt={t('email_preview_alt')} className="max-w-full h-auto rounded-md " />
    </div>
  
    {/* Left Side Content */}
    <div className="md:w-1/2 mt-0 relative left-20 right-20 lg:mt-10 ">
      <h1 className='font-semibold w-[272px] rounded-md p-2 bg-bkg mb-2'>{t('email_tracker')}</h1>
      <h1 className={`text-4xl sm:text-40px ${i18n.language === 'ar' ? 'ml-36' : ''} font-semibold leading-tight relative inline-block`}>
        {t('collect_actionable_data')}
        <span className="absolute -bottom-1 left-0 w-full h-4 bg-parrot -z-10"></span>
      </h1>
      <h2 className={`text-4xl sm:text-40px font-semibold ${i18n.language === 'ar' ? 'ml-64' : ''} leading-tight relative inline-block`}>
        {t('from_your_emails')}
      </h2>
      <p className={`mt-4 text-lg text-gray-700 ${i18n.language === 'ar' ? 'ml-44' : ''}`}>
        {t('track_email_campaign')}
      </p>
      <ul className="mt-6 space-y-4">
        {[
          { key: 'real_time_data', desc: 'real_time_data_desc' },
          { key: 'comprehensive_insights', desc: 'comprehensive_insights_desc' },
          { key: 'visual_reports', desc: 'visual_reports_desc' }
        ].map(({ key, desc }) => (
          <li className="flex items-start" key={key}>
            <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-black font-medium mr-2">
              <span className='font-bold'>{t(key)}: </span>
              <span className='font-normal'>{t(desc)}</span>
            </span>
          </li>
        ))}
      </ul>
      <button className={`mt-8 bg-lgreen ${i18n.language === 'ar' ? 'relative left-0 ' : ''} text-white px-6 py-3 rounded-md text-lg font-semibold shadow-md hover:bg-hgreen`}>
        {t('create_free_account')}
      </button>
      <div className="mt-6 grid grid-cols-2 text-black font-semibold">
        {[
          ['real_time_tracking', 'campaign_insights'],
          ['advanced_analytics', 'performance_metrics']
        ].map((col, i) => (
          <ul className="space-y-2" key={i}>
            {col.map((key) => (
              <li className="flex items-start" key={key}>
                <span className="text-lgreen mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {t(key)}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  </div>
  
  );
};

export default Automation;
