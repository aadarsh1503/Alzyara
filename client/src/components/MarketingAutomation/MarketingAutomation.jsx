import React from 'react';
import ToolsSection from '../ToolsSection/ToolsSection';
import Tool2 from './Tool2';
import i5 from "./i5.png"
import i1 from "./i1.png"
const MarketingAutomation = () => {
  return (
    <div>
    <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto justify-between  px-6 py-10 md:px-16 md:py-20">
      {/* Left Side Content */}
      <div className="md:w-1/2 mt-0 lg:mt-10 text-left">
      <h1 className='font-semibold mb-2'>Workflow Builder 🛠️</h1>
        <h1 className="text-4xl font-semibold text-gray-900 leading-tight md:leading-snug">
        Automate Your<br />Marketing with Ease
        </h1>
        <p className="mt-4 text-lg text-gray-700">
        Streamline your marketing efforts with <br />automated workflows tailored to customer<br /> actions.
        </p>
        <ul className="mt-6 space-y-4">
          <li className="flex items-start">
            <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-black font-medium">
              <span className='font-bold'>
              Customizable Workflows: </span><span className='font-normal'> Design professional emails with a<br /> simple drag-and-drop editor.</span> 
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-black font-medium">
              <strong>Trigger-Based Automation: </strong> <span className="font-normal">Choose from a variety of pre-<br />designed templates or start from scratch.</span>
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-gray-800 font-medium">
              <strong>Efficiency Boost:</strong><span className="font-normal text-base"> Save time by automating repetitive tasks.</span>
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-gray-800 font-medium">
              <strong>Enhanced Engagement:</strong><span className="font-normal text-base"> Keep your audience engaged with<br /> timely, relevant messages.</span>
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
              Visual Workflow Editor
            </li>
            <li className="flex items-start">
              <span className="text-lgreen mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Time-Saving Automation
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-lgreen mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Automate Repetitive Tasks
            </li>
            <li className="flex items-start">
              <span className="text-lgreen mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Increase Customer Engagement
            </li>
          </ul>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img src={i1} alt="Email Design Preview" className="max-w-full h-auto rounded-md " />
      </div>
    </div>
    

    {/*Second */}
    <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto justify-between  px-6 py-10 md:px-16 md:py-20">
  {/* Right Side Image */}
  <div className="md:w-1/2 mt-10 md:mt-0 flex -ml-20 justify-center">
    <img src={i5} alt="Email Design Preview" className="max-w-full h-auto rounded-md " />
  </div>

  {/* Left Side Content */}
  <div className="md:w-1/2 mt-0 lg:mt-10 text-left">
    <h1 className='font-semibold mb-2'>Trigger-Based Emails 📬</h1>
    <h1 className="text-4xl font-semibold text-gray-900 leading-tight md:leading-snug">
    Send Timely and<br />Relevant Emails Automatically
    </h1>
    <p className="mt-4 text-lg text-gray-700">
    Activate automated emails based on specific<br />user actions to keep your audience engaged.
    </p>
    <ul className="mt-6 space-y-4">
      <li className="flex items-start">
        <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="text-black font-medium">
          <span className='font-bold'>
          Reactive Campaigns:</span><span className='font-normal'> Send emails automatically based on user<br />actions like sign-ups, purchases, or site visits.</span>
        </span>
      </li>
      <li className="flex items-start">
        <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="text-black font-medium">
          <strong>Engagement Boost: </strong> <span className="font-normal">Increase engagement by sending timely, <br />relevant messages.</span>
        </span>
      </li>
      <li className="flex items-start">
        <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="text-gray-800 font-medium">
          <strong>Customization: </strong><span className="font-normal text-base"> Customize triggers to match your specific<br /> marketing goals.</span>
        </span>
      </li>
      <li className="flex items-start">
        <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="text-gray-800 font-medium">
          <strong>Seamless Automation: </strong><span className="font-normal text-base"> Ensure continuous communication<br /> without manual intervention.</span>
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
          Timely Engagement
        </li>
        <li className="flex items-start">
          <span className="text-lgreen mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
         
Automatic Trigger Setup
        </li>
      </ul>
      <ul className="space-y-2">
        <li className="flex items-start">
          <span className="text-lgreen mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          Boost Customer Interaction
        </li>
        <li className="flex items-start">
          <span className="text-lgreen mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          Relevant Messaging
        </li>
      </ul>
    </div>
  </div>
</div>


{/*third */}
<div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto justify-between  px-6 py-10 md:px-16 md:py-20">
      {/* Left Side Content */}
      <div className="md:w-1/2 mt-0 lg:mt-10 text-left">
      <h1 className='font-semibold mb-2'>Detailed Analytics 📊</h1>
        <h1 className="text-4xl font-semibold text-gray-900 leading-tight md:leading-snug">
        Deliver Highly Targeted<br />and Personalized<br />Campaigns

        </h1>
        <p className="mt-4 text-lg text-gray-700">
        Segment your audience to send highly <br />relevant and personalized email campaigns.
        </p>
        <ul className="mt-6 space-y-4">
          <li className="flex items-start">
            <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-black font-medium">
              <span className='font-bold'>Targeted Campaigns: </span><span className='font-normal'> Deliver personalized emails to specific<br /> audience segments.</span> 
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-black font-medium">
              <strong>Dynamic Segments:</strong> <span className="font-normal">Automatically update segments based on<br />user behavior and data.</span>
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-gray-800 font-medium">
              <strong>Enhanced Personalization: </strong><span className="font-normal text-base"> Use custom fields and tags to tailor<br /> content to individual recipients.</span>
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-gray-800 font-medium">
              <strong>Increased Conversions: </strong><span className="font-normal text-base"> Higher relevancy leads to better<br /> engagement and conversion rates.</span>
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
              Precise Audience Targeting
            </li>
            <li className="flex items-start">
              <span className="text-lgreen mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Enhanced Email Personalization
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-lgreen mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Dynamic Segment Updates
            </li>
            <li className="flex items-start">
              <span className="text-lgreen mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Boost Conversion Rates
            </li>
          </ul>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img src="https://sendmails.io/wp-content/uploads/2024/09/Copy-of-Glide-Campaign-AI-Chatbot.png" alt="Email Design Preview" className="max-w-full h-auto rounded-md " />
      </div>
    </div>
    <Tool2 />
    </div>
  );
};

export default MarketingAutomation;
