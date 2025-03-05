import React, { useEffect, useState } from 'react';


import Market2 from './Market2';
import CounterSection from '../Solutions/CounterSection';
import EmailMarketingSection from '../Solutions/EmailMarketingSection';
import { useTranslation } from 'react-i18next';


const Education = () => {
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
      <h1 className="font-semibold mb-2">{t('student_engagement_title')} 📚</h1>

<h1 className="text-4xl font-semibold text-gray-900 leading-tight md:leading-snug">
  {t('boost_student_engagement')}
</h1>

<p className="mt-4 text-lg text-gray-700">
  {t('student_engagement_description')}
</p>

<ul className="mt-6 space-y-4">
  {[
    { key: 'personalized_emails', bold: 'personalized_emails_bold' },
    { key: 'automated_updates', bold: 'automated_updates_bold' },
    { key: 'interactive_content', bold: 'interactive_content_bold' },
    { key: 'performance_tracking', bold: 'performance_tracking_bold' },
  ].map((item, index) => (
    <li key={index} className="flex items-start">
      <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      <span className="text-gray-800 font-medium">
        <strong>{t(item.bold)}</strong>
        <span className="font-normal text-base"> {t(item.key)}</span>
      </span>
    </li>
  ))}
</ul>

<button className="mt-8 bg-lgreen text-white px-6 py-3 rounded-md text-lg font-semibold shadow-md hover:bg-hgreen">
  {t('create_account')}
</button>

<div className="mt-6 grid grid-cols-2 text-gray-800">
  {[
    { key: 'tailored_communication' },
    { key: 'timely_updates' },
    { key: 'interactive_elements' },
    { key: 'engagement_metrics' },
  ].map((item, index) => (
    <ul key={index} className="space-y-2">
      <li className="flex items-start">
        <span className="text-lgreen mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        {t(item.key)}
      </li>
    </ul>
  ))}
</div>

      </div>

      {/* Right Side Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img src="https://sendmails.io/wp-content/uploads/2024/09/Personalized-Email-Campaigns-2.png" alt="Email Design Preview" className="max-w-full h-auto rounded-md" />
      </div>
    </div>
    
<Market2 />
<CounterSection />
    {/*Second */}
    <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto justify-between  px-6 py-10 md:px-16 md:py-20">
  {/* Right Side Image */}
  <div className="md:w-1/2 mt-10 md:mt-0 flex -ml-20 justify-center">
    <img src="https://sendmails.io/wp-content/uploads/2024/10/Marketing-Agency-Graphic-1-3-1971x2048.png" alt="Email Design Preview" className="max-w-full h-auto rounded-md " />
  </div>

  {/* Left Side Content */}
  <div className={`md:w-1/2 mt-0 lg:mt-10 ${i18n.language === 'ar' ? 'text-right relative right-20' : 'text-left'}`}>
  <h1 className='font-semibold mb-2'>{t('streamline_recruitment')}</h1>
<h1 className="text-4xl font-semibold text-gray-900 leading-tight md:leading-snug">
  {t('smarter_lead_management')}
</h1>
<p className="mt-4 text-lg text-gray-700">
  {t('enhance_recruitment')}
</p>
<ul className="mt-6 space-y-4">
  <li className="flex items-start">
    <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
    <span className="text-black font-medium">
      <span className='font-bold'>{t('targeted_outreach')}:</span><span className='font-normal'>{t('reach_students')}</span>
    </span>
  </li>
  <li className="flex items-start">
    <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
    <span className="text-black font-medium">
      <strong>{t('automated_workflows')}:</strong> <span className="font-normal">{t('automate_followups')}</span>
    </span>
  </li>
  <li className="flex items-start">
    <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
    <span className="text-gray-800 font-medium">
      <strong>{t('data_driven_strategies')}:</strong><span className="font-normal text-base">{t('use_analytics')}</span>
    </span>
  </li>
  <li className="flex items-start">
    <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
    <span className="text-gray-800 font-medium">
      <strong>{t('multi_channel_marketing')}:</strong><span className="font-normal text-base">{t('integrate_email_sms')}</span>
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
      {t('personalized_campaigns')}
    </li>
    <li className="flex items-start">
      <span className="text-lgreen mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      {t('analytical_insights')}
    </li>
  </ul>
  <ul className="space-y-2">
    <li className="flex items-start">
      <span className="text-lgreen mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      {t('automated_followups')}
    </li>
    <li className="flex items-start">
      <span className="text-lgreen mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      {t('multi_channel_approach')}
    </li>
  </ul>
</div>

  </div>
</div>


{/*third */}
<div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto justify-between  px-6 py-10 md:px-16 md:py-20">
      {/* Left Side Content */}
      <div className={`md:w-1/2 mt-0 lg:mt-10 ${i18n.language === 'ar' ? 'text-right' : 'text-left'}`}>
      <h1 className='font-semibold mb-2'>{t('RAlumni Engagement and Fundraising')} 💼</h1>
<h1 className="text-4xl font-semibold text-gray-900 leading-tight md:leading-snug">
  {t('Strengthen Alumni Relations and Increase Fundraising')}
</h1>
<p className="mt-4 text-lg text-gray-700">
  {t('Keep alumni connected and foster a supportive community with tailored email outreach.')}
</p>
<ul className="mt-6 space-y-4">
  <li className="flex items-start">
    <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
    <span className="text-black font-medium">
      <span className='font-bold'>{t('Community Building: ')}</span><span className='font-normal'>{t('Send newsletters, event invites, and updates.')}</span>
    </span>
  </li>
  <li className="flex items-start">
    <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
    <span className="text-black font-medium">
      <strong>{t('Fundraising Campaigns:')}</strong> <span className="font-normal">{t('Create compelling appeals for donations.')}</span>
    </span>
  </li>
  <li className="flex items-start">
    <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
    <span className="text-gray-800 font-medium">
      <strong>{t('Donor Segmentation:')}</strong><span className="font-normal text-base">{t('Segment alumni for targeted fundraising efforts.')}</span>
    </span>
  </li>
  <li className="flex items-start">
    <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
    <span className="text-gray-800 font-medium">
      <strong>{t('Real-Time Analytics:')}</strong><span className="font-normal text-base">{t('Track campaign performance and donor engagement.')}</span>
    </span>
  </li>
</ul>
<button className="mt-8 bg-lgreen text-white px-6 py-3 rounded-md text-lg font-semibold shadow-md hover:bg-hgreen">
  {t('Create A FREE Account')}
</button>

<div className="mt-6 grid grid-cols-2 text-gray-800">
  <ul className="space-y-2">
    <li className="flex items-start">
      <span className="text-lgreen mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      {t('community_outreach')}
    </li>
    <li className="flex items-start">
      <span className="text-lgreen mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      {t('targeted_segmentation')}
    </li>
  </ul>
  <ul className="space-y-2">
    <li className="flex items-start">
      <span className="text-lgreen mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      {t('fundraising_appeals')}
    </li>
    <li className="flex items-start">
      <span className="text-lgreen mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      {t('performance_tracking')}
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

export default Education;
