import React from "react";
import i1 from "./i1.webp"

const MarketingSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto justify-between  px-6 py-10 md:px-16 md:py-20">
    {/* Left Side Content */}
    <div className="md:w-1/2 mt-0 lg:mt-10 text-left">
    <h1 className='font-semibold w-64 rounded-md mb-2 bg-bkg'>POWERFUL EMAIL DESIGNER 🎨</h1>
      <h1 className="text-40px font-semibold text-gray-900 leading-tight md:leading-snug">
      Create stunning & <br /> 
      </h1>
      <h1 className="text-4xl sm:text-40px font-semibold text- leading-tight relative inline-block">
      personalized email designs 
          <span className="absolute -bottom-1 left-0 w-full h-4 bg-parrot -z-10"></span>
        </h1>
        <h1 className="text-40px font-semibold text-gray-900 leading-tight md:leading-snug">
        in minutes <br /> 
      </h1>
      <p className="mt-4 text-lg text-gray-700">
      Design beautiful, responsive templates with ease – <br />without any coding required. Import HTML email<br /> template and manage it with fresh new looks in <br /> seconds.
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
            User-Friendly Interface:  </span><span className='font-normal'> Design professional emails with <br />a simple drag- and-drop editor.</span> 
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="text-black font-medium">
            <strong>Customizable Elements:  </strong> <span className="font-normal">Choose from a variety of <br />pre-designed templatesor start from scratch.</span>
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="text-gray-800 font-medium">
            <strong>Mobile-Responsive Designs:</strong><span className="font-normal text-base">Ensure your emails look<br /> perfect on any device.</span>
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
            
            No Coding Needed
          </li>
          <li className="flex items-start">
            <span className="text-lgreen mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            Responsive Templates
          </li>
        </ul>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-lgreen mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            
Drag & Drop
          </li>
          <li className="flex items-start">
            <span className="text-lgreen mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            Fresh New Looks
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

export default MarketingSection;
