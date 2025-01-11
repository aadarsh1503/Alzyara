import React from 'react';
import CounterSection from '../Solutions/CounterSection';
import EmailMarketingSection from '../Solutions/EmailMarketingSection';
import Sales2 from './Sales2';


const SalesTeam = () => {
  return (
    <div>
    <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto justify-between  px-6 py-10 md:px-16 md:py-20">
      {/* Left Side Content */}
      <div className="md:w-1/2 mt-0 lg:mt-10 text-left">
      <h1 className='font-semibold mb-2'>Lead Generation and Nurturing 🎯</h1>
        <h1 className="text-3xl font-semibold text-gray-900 leading-tight md:leading-snug">
        Convert Leads into <br />Customers with <br />Automated Workflows
        </h1>
        <p className="mt-4 text-lg text-gray-700">
        Empower your sales teams to generate and nurture <br />leads more effectively with SendMails’ powerful <br />automation features.


        </p>
        <ul className="mt-6 space-y-4">
          <li className="flex items-start">
            <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-black font-medium">
              <span className='font-bold'>Automated Follow-ups: </span><span className='font-normal'> Automatically send follow-up emails<br /> based on user actions.</span> 
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-black font-medium">
              <strong>Lead Scoring:</strong> <span className="font-normal">Prioritize leads based on their engagement.</span>
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-gray-800 font-medium">
              <strong>Personalized Outreach:</strong><span className="font-normal text-base"> Tailor messages for each lead to increase<br /> conversion rates..</span>
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-gray-800 font-medium">
              <strong>Drip Campaigns:  </strong><span className="font-normal text-base"> Nurture leads over time with targeted content.</span>
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
              Automated Follow-ups
            </li>
            <li className="flex items-start">
              <span className="text-lgreen mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Personalized Outreach
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-lgreen mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Lead Prioritization
            </li>
            <li className="flex items-start">
              <span className="text-lgreen mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Effective Drip Campaigns
            </li>
          </ul>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img src="https://sendmails.io/wp-content/uploads/2024/09/Workflow-Automations.png" alt="Email Design Preview" className="max-w-full h-auto rounded-md" />
      </div>
    </div>
    
<Sales2 />
<CounterSection />
    {/*Second */}
    <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto justify-between  px-6 py-10 md:px-16 md:py-20">
  {/* Right Side Image */}
  <div className="md:w-1/2 mt-10 md:mt-0 flex -ml-20 justify-center">
    <img src="https://sendmails.io/wp-content/uploads/2024/09/Sales-Teams-Solution-1.png" alt="Email Design Preview" className="max-w-full h-auto rounded-md " />
  </div>

  {/* Left Side Content */}
  <div className="md:w-1/2 mt-0 lg:mt-10 text-left">
    <h1 className='font-semibold mb-2'>Client Communication and Follow-ups 📬</h1>
    <h1 className="text-4xl font-semibold text-gray-900 leading-tight md:leading-snug">
    Maintain Strong Client<br />Relationships with<br />Timely Communications
    </h1>
    <p className="mt-4 text-lg text-gray-700">
    Ensure your sales team maintains strong <br />relationships with clients through timely and<br /> personalized follow-up emails.
    </p>
    <ul className="mt-6 space-y-4">
      <li className="flex items-start">
        <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="text-black font-medium">
          <span className='font-bold'>Scheduled Follow-ups:<span className='font-normal'>Automate scheduling of follow-up emails.</span></span>
        </span>
      </li>
      <li className="flex items-start">
        <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="text-black font-medium">
          <strong>Templates and Personalization:</strong> <span className="font-normal">Use email templates and personalization tags.</span>
        </span>
      </li>
      <li className="flex items-start">
        <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="text-gray-800 font-medium">
          <strong>Real-Time Notifications: </strong><span className="font-normal text-base">Get notified when a client engages with your emails.</span>
        </span>
      </li>
      <li className="flex items-start">
        <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="text-gray-800 font-medium">
          <strong>Feedback Collection: </strong><span className="font-normal text-base">Easily gather client feedback to improve services.</span>
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
          Scheduled Emails
        </li>
        <li className="flex items-start">
          <span className="text-lgreen mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          Real-Time Alerts
        </li>
      </ul>
      <ul className="space-y-2">
        <li className="flex items-start">
          <span className="text-lgreen mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          Personalized Templates
        </li>
        <li className="flex items-start">
          <span className="text-lgreen mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          Feedback Mechanisms
        </li>
      </ul>
    </div>
  </div>
</div>


{/*third */}
<div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto justify-between  px-6 py-10 md:px-16 md:py-20">
      {/* Left Side Content */}
      <div className="md:w-1/2 mt-0 lg:mt-10 text-left">
      <h1 className='font-semibold mb-2'>Performance Tracking and Analytics 📊</h1>
        <h1 className="text-4xl font-semibold text-gray-900 leading-tight md:leading-snug">
        Data-Driven Insights to<br />Boost Sales<br />Performance

        </h1>
        <p className="mt-4 text-lg text-gray-700">
        Use SendMails’ advanced analytics to measure and improve your sales team’s performance.
        </p>
        <ul className="mt-6 space-y-4">
          <li className="flex items-start">
            <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-black font-medium">
              <span className='font-bold'>Real-Time Data: </span><span className='font-normal'> Monitor email opens, clicks, and responses in real-time.</span> 
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-black font-medium">
              <strong>Detailed Reporting:</strong> <span className="font-normal">Generate comprehensive reports on sales activities.</span>
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-gray-800 font-medium">
              <strong>Trend Analysis:</strong><span className="font-normal text-base">Identify trends and patterns to inform your strategy.</span>
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-gray-800 font-medium">
              <strong>Custom Dashboards: </strong><span className="font-normal text-base">Create dashboards tailored to your sales metrics.</span>
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
           

              Real-Time Insights
            </li>
            <li className="flex items-start">
              <span className="text-lgreen mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Custom Dashboards
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-lgreen mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
             
Comprehensive Reports
            </li>
            <li className="flex items-start">
              <span className="text-lgreen mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Trend Analysis
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

export default SalesTeam;
