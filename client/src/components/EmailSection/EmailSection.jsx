import React from 'react';

const EmailSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 px-6 py-10 md:px-16 md:py-20">
      {/* Left Side Content */}
      <div className="md:w-1/2 text-left">
        <h1 className="text-4xl font-bold text-gray-900 leading-tight md:leading-snug">
          Create Stunning Emails Effortlessly
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Easily craft beautiful, responsive emails with our intuitive drag-and-drop designer—no coding skills needed.
        </p>
        <ul className="mt-6 space-y-4">
          <li className="flex items-start">
            <span className="text-green-500 mr-3 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-gray-800 font-medium">
              <strong>User-Friendly Interface:</strong> Design professional emails with a simple drag-and-drop editor.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-3 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-gray-800 font-medium">
              <strong>Customizable Templates:</strong> Choose from a variety of pre-designed templates or start from scratch.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-3 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-gray-800 font-medium">
              <strong>Mobile-Responsive Designs:</strong> Ensure your emails look perfect on any device.
            </span>
          </li>
        </ul>
        <button className="mt-8 bg-green-600 text-white px-6 py-3 rounded-md text-lg font-semibold shadow-md hover:bg-green-700">
          Create A FREE Account
        </button>
        <div className="mt-6 grid grid-cols-2 gap-4 text-gray-800">
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              No Coding Required
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Professional Designs in Minutes
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Responsive on All Devices
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Unlimited Design Flexibility
            </li>
          </ul>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img src="/path-to-image.png" alt="Email Design Preview" className="max-w-full h-auto rounded-md shadow-lg" />
      </div>
    </div>
  );
};

export default EmailSection;
