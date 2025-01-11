import React from 'react';


import Market2 from './Market2';
import CounterSection from '../Solutions/CounterSection';
import EmailMarketingSection from '../Solutions/EmailMarketingSection';


const Education = () => {
  return (
    <div>
    <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto justify-between  px-6 py-10 md:px-16 md:py-20">
      {/* Left Side Content */}
      <div className="md:w-1/2 mt-0 lg:mt-10 text-left">
      <h1 className='font-semibold mb-2'>Student Engagement and Retention 📚</h1>
        <h1 className="text-3xl font-semibold text-gray-900 leading-tight md:leading-snug">
        Boost Student Engagement <br />with Personalized Emails
        </h1>
        <p className="mt-4 text-lg text-gray-700">
        SendMails helps educational institutions keep <br />students engaged and informed through targeted email campaigns.


        </p>
        <ul className="mt-6 space-y-4">
          <li className="flex items-start">
            <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-black font-medium">
              <span className='font-bold'>Personalized Emails: </span><span className='font-normal'> Tailor messages to individual students.</span> 
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-black font-medium">
              <strong>Automated Updates:</strong> <span className="font-normal">Send automated updates about classes, events, and deadlines.</span>
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-gray-800 font-medium">
              <strong>Interactive Content:</strong><span className="font-normal text-base">  Include surveys, quizzes, and more to engage students.</span>
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-gray-800 font-medium">
              <strong>Performance Tracking: </strong><span className="font-normal text-base"> Measure engagement to improve future communications.</span>
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
              Tailored Communication
            </li>
            <li className="flex items-start">
              <span className="text-lgreen mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Timely Updates
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-lgreen mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Interactive Elements
            </li>
            <li className="flex items-start">
              <span className="text-lgreen mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              

              Engagement Metrics
            </li>
          </ul>
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
  <div className="md:w-1/2 mt-0 lg:mt-10 text-left">
    <h1 className='font-semibold mb-2'>Streamline Recruitment with Effective Email Campaigns</h1>
    <h1 className="text-4xl font-semibold text-gray-900 leading-tight md:leading-snug">
    Smarter Lead<br />Management
    </h1>
    <p className="mt-4 text-lg text-gray-700">
    Enhance your recruitment efforts and improve <br />enrollment rates with targeted marketing <br /> strategies.
    </p>
    <ul className="mt-6 space-y-4">
      <li className="flex items-start">
        <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="text-black font-medium">
          <span className='font-bold'>Targeted Outreach:<span className='font-normal'>Reach prospective students with personalized campaigns .</span></span>
        </span>
      </li>
      <li className="flex items-start">
        <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="text-black font-medium">
          <strong>Automated Workflows:</strong> <span className="font-normal">Automate follow-ups and application reminders.</span>
        </span>
      </li>
      <li className="flex items-start">
        <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="text-gray-800 font-medium">
          <strong>Data-Driven Strategies: </strong><span className="font-normal text-base">Use analytics to refine your recruitment approach.</span>
        </span>
      </li>
      <li className="flex items-start">
        <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="text-gray-800 font-medium">
          <strong>Multi-Channel Marketing: </strong><span className="font-normal text-base">  Integrate email with SMS and social media outreach.</span>
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
          Personalized Campaigns
        </li>
        <li className="flex items-start">
          <span className="text-lgreen mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          Analytical Insights
        </li>
      </ul>
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
          Multi-Channel Approach
        </li>
      </ul>
    </div>
  </div>
</div>


{/*third */}
<div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto justify-between  px-6 py-10 md:px-16 md:py-20">
      {/* Left Side Content */}
      <div className="md:w-1/2 mt-0 lg:mt-10 text-left">
      <h1 className='font-semibold mb-2'>RAlumni Engagement and Fundraising 💼</h1>
        <h1 className="text-4xl font-semibold text-gray-900 leading-tight md:leading-snug">
        Strengthen Alumni<br /> Relations and Increase<br /> Fundraising

        </h1>
        <p className="mt-4 text-lg text-gray-700">
        Keep alumni connected and foster a supportive community with tailored email outreach.
        </p>
        <ul className="mt-6 space-y-4">
          <li className="flex items-start">
            <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-black font-medium">
              <span className='font-bold'>Community Building: </span><span className='font-normal'> Send newsletters, event invites, and updates.</span> 
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-black font-medium">
              <strong>Fundraising Campaigns:</strong> <span className="font-normal">Create compelling appeals for donations.</span>
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-gray-800 font-medium">
              <strong>Donor Segmentation:</strong><span className="font-normal text-base">Segment alumni for targeted fundraising efforts.</span>
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-white mr-3 mt-2 p-xs rounded-full  bg-lgreen">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-gray-800 font-medium">
              <strong>Real-Time Analytics:</strong><span className="font-normal text-base"> Track campaign performance and donor engagement.</span>
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
           

              Community Outreach
            </li>
            <li className="flex items-start">
              <span className="text-lgreen mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Targeted Segmentation
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-lgreen mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Fundraising Appeals
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
