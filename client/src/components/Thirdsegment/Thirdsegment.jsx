import React from "react";
import i1 from "./i1.webp"

const Thirdsegment = () => {
  return (
    <div className="bg-white  mx-auto flex flex-col lg:flex-row items-center justify-between px-8 lg:px-20 py-12 lg:py-12">
      {/* Left Section */}
      <div className=" max-w-sm ml-0 lg:ml-20 mx-auto space-y-6">
        <p className="text-sm text-gray-500 uppercase font-semibold tracking-wider">
        segmentation
        </p>
        <h2 className="text-3xl lg:text-5xl font-bold leading-snug text-black">
        Personalization that’s intuitive (not frustrating)
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
        Target the right people with the right message at the right time with unlimited segments that update in real time. Group your audiences based on campaign activity, shopping behavior, and more.
        </p>
        <hr className="border-t border-gray-300 mt-4" />
        <div className=" items-center gap-2 mt-6">
          <span className="text-lgreen text-3xl font-bold">↑ 62.2%

</span>
          <span className="text-gray-900 text-sm">
            <br />Higher order rate with segmented campaigns.
          
          </span>
          <span className="text-gray-500"><br />Get a second chance every time someone abandons their basket</span>
        </div>
        <hr className="border-t border-gray-300 mt-4" />
      </div>

      {/* Right Section */}
      <div className="lg:w-2/3 mt-8 lg:-ml-[300px] lg:mt-0 flex justify-center">
  <div className="w-full h-auto rounded-lg flex items-center justify-center">
    {/* Placeholder for the right side */}
    <img src={i1} className="w-[500px] h-auto lg:w-[800px] lg:h-auto" alt="Right Side Image" />
  </div>
</div>

    </div>
  );
};

export default Thirdsegment;
