import React from 'react';

const EmailMarketingSection = () => {
  return (
    <div className='bg-lgreen min-h-screen'>
    <div className=" text-center mt-20 bg- max-w-7xl mx-auto py-16 px-4">
        <div className='bg-white py-10 rounded-xl '>
      <div className="text-center mt-20 bg-white mb-4">
        <span className="bg-[#f4f7f6] text-sm font-semibold text-black py-1 px-3 border border-[#d6dedb] rounded-full">
          FOREVER FREE ACCOUNT
        </span>
      </div>
      <h1 className="lg:text-5xl sm:text-3xl bg-white font-semibold text-[#3b4b48] mb-4">
        Ready to step up your email<br /> marketing game?
      </h1>
      <p className="text-black lg:text-lg  bg-white sm:text-base mb-8 max-w-md mx-auto">
        Create your free Alzyara account and unlock the power of email marketing, automation, analytics, and seamless integrations.
      </p>
      <button className="bg-lgreen hover:bg-hgreen text-white text-sm sm:text-base py-3 px-6 rounded-lg">
        Create A FREE Account
      </button>
      <p className="text-black text-xs mt-4 mb-0 lg:mb-10">
        No Credit Card Required | Forever FREE Account
      </p>
      </div>
    </div>
    </div>
  );
};

export default EmailMarketingSection;