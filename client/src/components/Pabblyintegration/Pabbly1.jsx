import React from 'react'

const Pabbly1 = () => {
  return (
    <div>
            <div className="bg-white font-poppins mt-24 mx-auto flex flex-col lg:flex-row items-center justify-between px-8 lg:px-20 py-12 lg:py-12">
      {/* Left Section */}
      <div className=" max-w-lg ml-2 mx-auto space-y-6">
 
        <h2 className="text-3xl lg:text-4xl font-bold leading-snug text-black">
        Automate your workflows
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
        Pabbly connects with Alzyara and automates all your tedious workflows. Connect your apps with a few simple clicks.
        </p>
     
      </div>

      {/* Right Section */}
      <div className="lg:w-2/3 mt-8  lg:mt-0 flex justify-center">
  <div className="w-full h-auto rounded-lg flex items-center justify-center">
    {/* Placeholder for the right side */}
    <img src="https://sendmails.io/wp-content/uploads/2024/09/Pabbly-and-Sendmails-1536x1536.png" className="w-[500px] h-auto lg:w-[500px] lg:h-auto" alt="Right Side Image" />
  </div>
</div>
</div>
    </div>
  )
}

export default Pabbly1