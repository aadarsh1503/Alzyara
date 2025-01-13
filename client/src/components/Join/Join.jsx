import React from 'react';
import i45 from "./i45.png"
const Join = () => {
  return (
    <div className='' style={{ backgroundImage: 'url(https://www.derrickau.com/wp-content/uploads/2016/05/xdark-footer-bg.png)' }}> 
    <div className="relative bg-cover bg-center max-w-4xl mx-auto  text-white py-16 px-6" >
      <div className="relative z-10 flex flex-col items-start"> {/* Aligned to left */}
        {/* Main Title */}
        <h1 className="text-4xl lg:text-4xl font-extrabold text-left">
          Join the <br /> <span className="text-parrot">125,000+ ecommerce<br /> brands </span>
           that grow with<br /> Alzyara every day.
        </h1>

        {/* Buttons */}
        <div className="flex flex-wrap justify-start gap-4 mt-8">
          <button className="bg-parrot text-gray-900 hover:outline-parrot outline hover:bg-black hover:text-parrot  font-semibold py-3 px-6 w-56 rounded-lg ">
            Start free
          </button>
          <button className="border border-white text-white  font-semibold py-3 px-6 w-56 rounded-lg hover:bg-white hover:text-gray-900">
            See pricing
          </button>
        </div>

        {/* Rating */}
        <div className="mt-4 text-left">
          <span className="flex items-center justify-start gap-2 text-parrot">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M12 .587l3.668 7.449 8.214 1.179-5.941 5.862 1.401 8.18L12 18.896l-7.342 3.861 1.401-8.18-5.941-5.862 8.214-1.179z" />
              </svg>
            ))}
          </span>
          <p className="text-xs mt-2">5,400+ glowing reviews on Shopify</p>
        </div>
      </div>

      {/* Right side image */}
      <div className="absolute top-0 right-0 lg:w-1/3 w-32 h-32 lg:h-full">
        <img src={i45} alt="Right Side Image" className="object-cover w-full h-full" />
      </div>
    </div>
    </div>
  );
};

export default Join;
