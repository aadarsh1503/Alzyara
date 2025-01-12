import React from 'react';
import Tool5 from './Tool5';

import i5 from "./i5.png"
const LeadWebForm = () => {
  return (
    <div>
    <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto justify-between  px-6 py-10 md:px-16 md:py-20">
      {/* Left Side Content */}
      <div className="md:w-1/2 mt-0 lg:mt-10 text-left">
      <h1 className='font-semibold mb-2'>Drag-and-Drop Form Builder 🛠️</h1>
        <h1 className="text-4xl font-semibold text-gray-900 leading-tight md:leading-snug">
        Easily Create Custom<br />Lead Capture Forms
        </h1>
        <p className="mt-4 text-lg text-gray-700">
        Build custom lead capture forms effortlessly <br />without any coding skills using our intuitive<br /> drag-and-drop form builder.
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
              User-Friendly Interface:  </span><span className='font-normal'> Design forms with a simple drag-and-<br />drop editor.</span> 
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-black font-medium">
              <strong>Customizable Elements:  </strong> <span className="font-normal">Tailor form fields, colors, and styles to<br />your needs.</span>
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-gray-800 font-medium">
              <strong>Quick Setup:</strong><span className="font-normal text-base"> Create and deploy forms in minutes.</span>
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-gray-800 font-medium">
              <strong>No Coding Required:</strong><span className="font-normal text-base"> Build powerful forms without any technical<br /> expertise.</span>
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
              
User-Friendly Interface
            </li>
            <li className="flex items-start">
              <span className="text-lgreen mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Quick Setup
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-lgreen mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              No Coding Required
            </li>
            <li className="flex items-start">
              <span className="text-lgreen mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Customizable Elements
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
  <div className="md:w-1/2 mt-0 lg:mt-10 text-left">
    <h1 className='font-semibold mb-2'>Embedded Forms 📥</h1>
    <h1 className="text-4xl font-semibold text-gray-900 leading-tight md:leading-snug">
    Seamlessly Capture<br /> Leads on Your Website
    </h1>
    <p className="mt-4 text-lg text-gray-700">
    Integrate lead capture forms directly into your<br />website for a smooth user experience and<br />better data collection.
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
          Easy Integration:</span><span className='font-normal'> Embed forms with a simple copy-paste of the<br />HTML code.</span>
        </span>
      </li>
      <li className="flex items-start">
        <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="text-black font-medium">
          <strong>Consistent Design: </strong> <span className="font-normal">Match the form design to your website’s look<br />and feel.</span>
        </span>
      </li>
      <li className="flex items-start">
        <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="text-gray-800 font-medium">
          <strong>High Conversion Rates: </strong><span className="font-normal text-base"> Capture leads without disrupting the<br /> user experience.</span>
        </span>
      </li>
      <li className="flex items-start">
        <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="text-gray-800 font-medium">
          <strong>Data Sync:  </strong><span className="font-normal text-base"> Automatically sync captured data with your CRM.</span>
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
          Easy Integration
        </li>
        <li className="flex items-start">
          <span className="text-lgreen mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
         

          High Conversion Rates
        </li>
      </ul>
      <ul className="space-y-2">
        <li className="flex items-start">
          <span className="text-lgreen mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          Consistent Design
        </li>
        <li className="flex items-start">
          <span className="text-lgreen mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          Data Sync
        </li>
      </ul>
    </div>
  </div>
</div>


{/*third */}
<div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto justify-between  px-6 py-10 md:px-16 md:py-20">
      {/* Left Side Content */}
      <div className="md:w-1/2 mt-0 lg:mt-10 text-left">
      <h1 className='font-semibold mb-2'>Instant Preview 👀</h1>
        <h1 className="text-4xl font-semibold text-gray-900 leading-tight md:leading-snug">
        See Your Forms in Real-<br />Time

        </h1>
        <p className="mt-4 text-lg text-gray-700">
        With SendMails' Instant Preview feature, you <br />can view your forms as you create them,<br />ensuring they look perfect before going live.
        </p>
        <ul className="mt-6 space-y-4">
          <li className="flex items-start">
            <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-black font-medium">
              <span className='font-bold'>Real-Time Updates:  </span><span className='font-normal'> Instantly see changes as you make them.</span> 
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-black font-medium">
              <strong>Accurate Display:</strong> <span className="font-normal">Preview exactly how your form will appear to users..</span>
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-gray-800 font-medium">
              <strong>Interactive Elements: </strong><span className="font-normal text-base"> Test form functionality on the spot.</span>
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-gray-800 font-medium">
              <strong>Optimize Design: </strong><span className="font-normal text-base"> Make immediate adjustments to improve user<br /> experience</span>
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
              Real-Time Updates
            </li>
            <li className="flex items-start">
              <span className="text-lgreen mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Functionality Testing
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-lgreen mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Accurate Display
            </li>
            <li className="flex items-start">
              <span className="text-lgreen mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Instant Optimization
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
