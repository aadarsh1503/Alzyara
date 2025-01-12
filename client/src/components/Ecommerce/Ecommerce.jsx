import React from 'react';
import CounterSection from '../Solutions/CounterSection';
import EmailMarketingSection from '../Solutions/EmailMarketingSection';
import Ecommerce2 from './Ecommerce2';
import i5 from "./i5.png"


const Ecommerce = () => {
  return (
    <div>
    <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto justify-between  px-6 py-10 md:px-16 md:py-20">
      {/* Left Side Content */}
      <div className="md:w-1/2 mt-0 lg:mt-10 text-left">
      <h1 className='font-semibold mb-2'>Abandoned Cart Recovery 🛒</h1>
        <h1 className="text-3xl font-semibold text-gray-900 leading-tight md:leading-snug">
        Recover Lost Sales with <br />Automated Cart Recovery <br />Emails
        </h1>
        <p className="mt-4 text-lg text-gray-700">
        SendMails helps e-commerce businesses recover <br />lost sales by automating follow-up emails to <br />customers who abandon their carts.


        </p>
        <ul className="mt-6 space-y-4">
          <li className="flex items-start">
            <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-black font-medium">
              <span className='font-bold'>Automated Reminders:</span><span className='font-normal'> Send timely reminders to customers about<br /> their abandoned carts.</span> 
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-black font-medium">
              <strong>
              Personalized Content:</strong> <span className="font-normal">Tailor recovery emails with personalized <br />product recommendations.</span>
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-gray-800 font-medium">
              <strong>Discount Offers:</strong><span className="font-normal text-base"> Include special discounts to incentivize purchase<br /> completion.</span>
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-gray-800 font-medium">
              <strong>Track Recovery Rates:  </strong><span className="font-normal text-base">  Monitor the effectiveness of your recovery <br />campaigns with in-depth analytics.</span>
            </span>
          </li>
        </ul>
        <button className="mt-8 bg-lgreen text-white px-6 py-3 rounded-md text-lg font-semibold shadow-md hover:bg-green-700">
          Create A FREE Account
        </button>
        <div className="mt-6 grid grid-cols-2  text-gray-800">
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-lgreen mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              
Timely Reminders
            </li>
            <li className="flex items-start">
              <span className="text-lgreen mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Incentive Offers
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-lgreen mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              
Personalized Recommendations
            </li>
            <li className="flex items-start">
              <span className="text-lgreen mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              
Recovery Analytics
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
  <div className="md:w-1/2 mt-0 lg:mt-10 text-left">
    <h1 className='font-semibold mb-2'>Product Launch Announcements 🚀</h1>
    <h1 className="text-4xl font-semibold text-gray-900 leading-tight md:leading-snug">
    Boost Sales with<br />Effective Product<br />Launch Campaigns
    </h1>
    <p className="mt-4 text-lg text-gray-700">
    Promote new product launches and drive sales<br />with targeted email campaigns designed to create<br /> buzz and excitement.
    </p>
    <ul className="mt-6 space-y-4">
      <li className="flex items-start">
        <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="text-black font-medium">
          <span className='font-bold'>Targeted Announcements:<span className='font-normal'>Send personalized launch emails to segmented audiences.</span></span>
        </span>
      </li>
      <li className="flex items-start">
        <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="text-black font-medium">
          <strong>
          Engaging Content: </strong> <span className="font-normal">Use rich media and compelling copy to highlight new products.</span>
        </span>
      </li>
      <li className="flex items-start">
        <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="text-gray-800 font-medium">
          <strong>Pre-Order Campaigns:  </strong><span className="font-normal text-base">Generate early interest with pre-order announcements.</span>
        </span>
      </li>
      <li className="flex items-start">
        <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="text-gray-800 font-medium">
          <strong>Launch Analytics: </strong><span className="font-normal text-base">Track the performance of your launch campaigns in real-time.</span>
        </span>
      </li>
    </ul>
    <button className="mt-8 bg-lgreen text-white px-6 py-3 rounded-md text-lg font-semibold shadow-md hover:bg-green-700">
      Create A FREE Account
    </button>
    <div className="mt-6 grid grid-cols-2 text-gray-800">
      <ul className="space-y-2">
        <li className="flex items-start">
          <span className="text-lgreen mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          Targeted Emails
        </li>
        <li className="flex items-start">
          <span className="text-lgreen mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          Performance Tracking
        </li>
      </ul>
      <ul className="space-y-2">
        <li className="flex items-start">
          <span className="text-lgreen mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          Pre-Order Campaigns
        </li>
        <li className="flex items-start">
          <span className="text-lgreen mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          Engaging Media
        </li>
      </ul>
    </div>
  </div>
</div>


{/*third */}
<div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto justify-between  px-6 py-10 md:px-16 md:py-20">
      {/* Left Side Content */}
      <div className="md:w-1/2 mt-0 lg:mt-10 text-left">
      <h1 className='font-semibold mb-2'>Customer Retention Programs 🎉</h1>
        <h1 className="text-4xl font-semibold text-gray-900 leading-tight md:leading-snug">
        Enhance Customer<br />Loyalty with<br />Personalized Retention<br />Emails

        </h1>
        <p className="mt-4 text-lg text-gray-700">
        Keep your customers coming back with personalized retention programs that reward loyalty and encourage repeat purchases.
        </p>
        <ul className="mt-6 space-y-4">
          <li className="flex items-start">
            <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-black font-medium">
              <span className='font-bold'>Loyalty Programs:  </span><span className='font-normal'> Send personalized emails about loyalty rewards and points.</span> 
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-black font-medium">
              <strong>Win-Back Campaigns:</strong> <span className="font-normal">Re-engage inactive customers with special offers.</span>
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-gray-800 font-medium">
              <strong>Anniversary Emails:</strong><span className="font-normal text-base">Celebrate customer milestones with exclusive discounts.</span>
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-gray-800 font-medium">
              <strong>Customer Feedback: </strong><span className="font-normal text-base">Collect feedback to improve products and services.</span>
            </span>
          </li>
        </ul>
        <button className="mt-8 bg-lgreen text-white px-6 py-3 rounded-md text-lg font-semibold shadow-md hover:bg-green-700">
          Create A FREE Account
        </button>
        <div className="mt-6 grid grid-cols-2  text-gray-800">
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-lgreen mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
           

              Loyalty Rewards
            </li>
            <li className="flex items-start">
              <span className="text-lgreen mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Milestone Celebrations
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-lgreen mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
             
              Re-Engagement Offers
            </li>
            <li className="flex items-start">
              <span className="text-lgreen mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Feedback Collection
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
