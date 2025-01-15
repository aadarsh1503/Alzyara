import React from "react";
import i1 from "./i1.webp"

const Thirdsegment = () => {
  return (
    <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto justify-between  px-6 py-10 md:px-16 md:py-20">
    {/* Left Side Content */}
    <div className="md:w-1/2 mt-0 lg:mt-10 text-left">
    <h1 className='font-semibold w-64 rounded-md mb-2 bg-bkg'>EASY WORKFLOW BUILDER 🤖</h1>
      <h1 className="text-40px font-semibold text-gray-900 leading-tight md:leading-snug">
      Save time & money with<br /> 
      </h1>
      <h1 className="text-4xl sm:text-40px font-semibold text- leading-tight relative whitespace-nowrap inline-block">
      automated email workflows
          <span className="absolute -bottom-1 left-0 w-full h-4 bg-parrot -z-10"></span>
        </h1>
 
      <p className="mt-4 text-lg text-gray-700">
      Build marketing automation workflows based on <br />customers' actions and behavior. Track contact<br /> engagement with tags, custom fields, analytics, <br /> and performance reporting.
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
            Customizable Workflows:  </span><span className='font-normal'> Build complex workflows with <br /> a visual editor.</span> 
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="text-black font-medium">
            <strong>Trigger-Based Automation:   </strong> <span className="font-normal">Automate emails based on user <br /> actions like sign-ups and purchases.</span>
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="text-gray-800 font-medium">
            <strong>Efficiency Boost: </strong><span className="font-normal text-base">Save time by automating   repetitive tasks.</span>
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="text-gray-800 font-medium">
            <strong> Enhanced Engagement:</strong><span className="font-normal text-base">Keep your audience engaged with <br />  timely, relevant messages.</span>
          </span>
        </li>
        
      </ul>
      <button className="mt-8 bg-lgreen text-white px-6 py-3 rounded-md text-lg font-semibold shadow-md hover:bg-hgreen">
        Create A FREE Account
      </button>
      <div className="mt-6 grid grid-cols-2 font-semibold  text-black">
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-lgreen mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            
            Automate Marketing
          </li>
          <li className="flex items-start">
            <span className="text-lgreen mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            Custom Fields
          </li>
        </ul>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-lgreen mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            
            Performance Reports
          </li>
          <li className="flex items-start">
            <span className="text-lgreen mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            Track Engagement
          </li>
        </ul>
      </div>
    </div>

    {/* Right Side Image */}
    <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
      <img src={i1} alt="Email Design Preview" className="max-w-full h-auto rounded-md " />
    </div>
  </div>
  );
};

export default Thirdsegment;
