import React, { useEffect, useState } from 'react';
import CounterSection from '../Solutions/CounterSection';
import EmailMarketingSection from '../Solutions/EmailMarketingSection';
import Ecommerce2 from './Ecommerce2';
import i5 from "./i5.png"
import { useTranslation } from 'react-i18next';


const Ecommerce = () => {
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
      <h1 className='font-semibold mb-2'>{t('abandoned_cart_recovery')} 🛒</h1>
<h1 className="text-4xl font-semibold text-gray-900 leading-tight md:leading-snug">
  {t('recover_lost_sales')}
</h1>
<p className="mt-4 text-lg text-gray-700">
  {t('alzyara_helps')}
</p>
<ul className="mt-6 space-y-4">
  <li className="flex items-start">
    <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
    <span className="text-black font-medium mr-2">
      <span className='font-bold'>{t('automated_reminders')}:</span><span className='font-normal'> {t('send_timely_reminders')}</span>
    </span>
  </li>
  <li className="flex items-start">
    <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
    <span className="text-black font-medium mr-2">
      <strong>{t('personalized_content')}:</strong> <span className="font-normal">{t('tailor_recovery_emails')}</span>
    </span>
  </li>
  <li className="flex items-start">
    <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
    <span className="text-gray-800 font-medium mr-2">
      <strong>{t('discount_offers')}:</strong><span className="font-normal text-base"> {t('include_special_discounts')}</span>
    </span>
  </li>
  <li className="flex items-start">
    <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
    <span className="text-gray-800 font-medium mr-2">
      <strong>{t('track_recovery_rates')}:</strong><span className="font-normal text-base"> {t('monitor_effectiveness')}</span>
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
      {t('timely_reminders')}
    </li>
    <li className="flex items-start">
      <span className="text-lgreen mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      {t('incentive_offers')}
    </li>
  </ul>
  <ul className="space-y-2">
    <li className="flex items-start">
      <span className="text-lgreen mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      {t('personalized_recommendations')}
    </li>
    <li className="flex items-start">
      <span className="text-lgreen mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      {t('recovery_analytics')}
    </li>
  </ul>
</div>

      </div>

      {/* Right Side Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img src="https://sendmails.io/wp-content/uploads/2024/10/E-commerce-solution-new.png" alt="Email Design Preview" className="max-w-full h-auto rounded-md" />
      </div>
    </div>
    
<Ecommerce2 />
<CounterSection />
    {/*Second */}
    <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto justify-between  px-6 py-10 md:px-16 md:py-20">
  {/* Right Side Image */}
  <div className="md:w-1/2 mt-10 md:mt-0 flex -ml-20 justify-center">
    <img src={i5} alt="Email Design Preview" className="max-w-full h-auto rounded-md " />
  </div>

  {/* Left Side Content */}
  <div className={`md:w-1/2 mt-0 lg:mt-10 ${i18n.language === 'ar' ? 'text-right relative right-20' : 'text-left'}`}>
  <h1 className="font-semibold mb-2">{t('product_launch_announcements')}</h1>
      <h1 className="text-4xl font-semibold text-gray-900 leading-tight md:leading-snug">
        {t('boost_sales_title')}
      </h1>
      <p className="mt-4 text-lg text-gray-700">
        {t('boost_sales_desc')}
      </p>
      <ul className="mt-6 space-y-4">
        <li className="flex items-start">
          <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="text-black font-medium mr-2">
            <span className="font-bold">{t('targeted_announcement.title')}:</span>
            <span className="font-normal">{t('targeted_announcement.desc')}</span>
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="text-black font-medium mr-2">
            <strong>{t('engaging_content.title')}</strong>
            <span className="font-normal">{t('engaging_content.desc')}</span>
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="text-gray-800 font-medium mr-2">
            <strong>{t('pre_order_campaigns.title')}</strong>
            <span className="font-normal text-base">{t('pre_order_campaigns.desc')}</span>
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="text-gray-800 font-medium mr-2">
            <strong>{t('launch_analytics.title')}</strong>
            <span className="font-normal text-base">{t('launch_analytics.desc')}</span>
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
      {t('targeted_emails')}
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
  <ul className="space-y-2">
    <li className="flex items-start">
      <span className="text-lgreen mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      {t('pre_order_campaigns')}
    </li>
    <li className="flex items-start">
      <span className="text-lgreen mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      {t('engaging_media')}
    </li>
  </ul>
</div>

  </div>
</div>


{/*third */}
<div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto justify-between  px-6 py-10 md:px-16 md:py-20">
      {/* Left Side Content */}
      <div className={`md:w-1/2 mt-0 lg:mt-10 ${i18n.language === 'ar' ? 'text-right' : 'text-left'}`}>
      <h1 className='font-semibold mb-2'>{t('customer_retention_programs')}</h1> 
<h1 className="text-4xl font-semibold text-gray-900 leading-tight md:leading-snug">
  {t('enhance_customer_loyalty')}
</h1>
<p className="mt-4 text-lg text-gray-700">
  {t('keep_customers_coming_back')}
</p>
<ul className="mt-6 space-y-4">
  <li className="flex items-start">
    <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
    <span className="text-black font-medium mr-2">
      <span className='font-bold'>{t('loyalty_programs')}:</span><span className='font-normal'>{t('personalized_emails')}</span>
    </span>
  </li>
  <li className="flex items-start">
    <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
    <span className="text-black font-medium mr-2">
      <strong>{t('win_back_campaigns')}:</strong> <span className="font-normal">{t('special_offers')}</span>
    </span>
  </li>
  <li className="flex items-start">
    <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
    <span className="text-gray-800 font-medium mr-2">
      <strong>{t('anniversary_emails')}:</strong><span className="font-normal text-base">{t('celebrate_milestones')}</span>
    </span>
  </li>
  <li className="flex items-start">
    <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
    <span className="text-gray-800 font-medium mr-2">
      <strong>{t('customer_feedback')}:</strong><span className="font-normal text-base">{t('collect_feedback')}</span>
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
      {t('loyalty_rewards')}
    </li>
    <li className="flex items-start">
      <span className="text-lgreen mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      {t('milestone_celebrations')}
    </li>
  </ul>
  <ul className="space-y-2">
    <li className="flex items-start">
      <span className="text-lgreen mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      {t('re_engagement_offers')}
    </li>
    <li className="flex items-start">
      <span className="text-lgreen mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      {t('feedback_collection')}
    </li>
  </ul>
</div>

      </div>

      {/* Right Side Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img src="https://sendmails.io/wp-content/uploads/2024/09/E-commerce-Solution-loyalty-program.png" alt="Email Design Preview" className="max-w-full h-auto rounded-md " />
      </div>
    </div>
    <EmailMarketingSection />
    </div>
  );
};

export default Ecommerce;
