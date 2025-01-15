import React from 'react'
import i1 from "./i1.webp"
const FourthHome = () => {
  return (
    <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto justify-between  px-6 py-10 md:px-16 md:py-20">
    {/* Right Side Image */}
    <div className="md:w-1/2 mt-10 md:mt-0 flex -ml-2 justify-center">
      <img src={i1} alt="Email Design Preview" className="max-w-full h-auto rounded-md " />
    </div>
  
    {/* Left Side Content */}
    <div className="md:w-1/2 mt-0 lg:mt-10 relative left-20 text-left">
      <h1 className='font-semibold w-[160px] rounded-md p-2 bg-bkg mb-2'>CONTACT CRM 👥</h1>
      <h1 className='text-40px leading-tight font-semibold'>Manage your contact<br /> list and</h1>
      <h1 className="text-4xl sm:text-40px font-semibold text- leading-tight relative inline-block">
      verify your emails
          <span className="absolute -bottom-1 left-0 w-full h-4 bg-parrot -z-10"></span>
        </h1>
        
      <p className="mt-4 text-lg text-gray-700">
     
      Understand your customer needs and optimize<br />your sales and marketing efforts. Streamline your<br />efforts and deliver a unified customer experience.
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
            Centralized Contact Storage: </span><span className='font-normal'> Keep all your contacts in one <br /> organized place.</span>
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="text-black font-medium">
            <strong>Detailed Segmentation:  </strong> <span className="font-normal">Easily segment contacts to tailor<br /> your marketing efforts.</span>
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="text-gray-800 font-medium">
            <strong>Effortless Management:  </strong><span className="font-normal text-base"> Quickly add, edit, and manage <br />your contact list.</span>
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-white mr-3 mt-2 p-xs rounded-full bg-lgreen">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="text-gray-800 font-medium">
            <strong>Enhanced Communication:  </strong><span className="font-normal text-base"> Improve your outreach with<br />well-organized contact data.</span>
          </span>
        </li>
        
      </ul>
      <button className="mt-8 bg-lgreen text-white px-6 py-3 rounded-md text-lg font-semibold shadow-md hover:bg-hgreen">
        Create A FREE Account
      </button>
      <div className="mt-6 grid grid-cols-2 text-black font-semibold">
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-lgreen mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
           
            Customer Insights
          </li>
          <li className="flex items-start">
            <span className="text-lgreen mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
           
            Optimized Marketing
          </li>
        </ul>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-lgreen mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            
Unified Experience
          </li>
          <li className="flex items-start">
            <span className="text-lgreen mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            
            
Streamlined Sales
          </li>
          
        </ul>
      </div>
    </div>
  </div>
  )
}

export default FourthHome