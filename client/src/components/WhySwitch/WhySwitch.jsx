import React from 'react';

const WhySwitch = () => {
  return (
    <div className='bg-dgreen'>
    <div className="flex max-w-4xl  mx-auto items-center justify-between px-8 py-12">
      {/* Left side (Text) */}
      <div className="w-1/2 space-y-4">
        <h2 className="text-sm text-black bg-parrot w-[100px]  uppercase font-semibold tracking-wider">why Switch</h2>
        <p className="text-5xl text-white font-bold">Get up and<br /> running in<br /> 30 minutes</p>
        <p className="text-sm underline font-semibold text-white">Make the move today</p>
      </div>

      {/* Right side (Image) */}
      <div className="w-1/2">
        <img src="https://www.omnisend.com/wp-content/themes/omnisend-v2/assets/img/components/switch/switch2.svg" alt="Image Description" className="w-[400px] h-auto rounded-lg shadow-lg" />
      </div>
    </div>
    </div>
  );
};

export default WhySwitch;
