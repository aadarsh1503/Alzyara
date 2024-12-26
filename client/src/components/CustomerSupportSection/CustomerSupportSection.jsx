import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import icons
import i1 from "./i1.webp";

const CustomerSupportSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample images - Replace with your own src paths
  const teamMembers = [
    { name: "Gintarė", src: "https://www.omnisend.com/wp-content/themes/omnisend-v2/assets/img/support-business/member/new/Gintare-min.jpg" },
    { name: "Monika", src: "https://www.omnisend.com/wp-content/themes/omnisend-v2/assets/img/support-business/member/new/Monika-min.jpg" },
    { name: "Šarūnas", src: "https://www.omnisend.com/wp-content/themes/omnisend-v2/assets/img/support-business/member/new/Sarunas-min.jpg" },
    { name: "Rūgėras", src: "https://www.omnisend.com/wp-content/themes/omnisend-v2/assets/img/support-business/member/new/Edgaras-min.jpg" },
    { name: "Emily", src: "https://www.omnisend.com/wp-content/themes/omnisend-v2/assets/img/support-business/member/emily-min.png" },
    { name: "Matjia", src: "https://www.omnisend.com/wp-content/themes/omnisend-v2/assets/img/support-business/member/new/Matija-min.jpg" },
    { name: "DeivyDas", src: "https://www.omnisend.com/wp-content/themes/omnisend-v2/assets/img/support-business/member/new/Deivydas-min.jpg" },
    { name: "Armintas", src: "https://www.omnisend.com/wp-content/themes/omnisend-v2/assets/img/support-business/member/new/Armintas-min.jpg" },
  ];

  const itemsPerSlide = 4;
  const maxSlide = Math.ceil(teamMembers.length / itemsPerSlide) - 1;

  const handleNext = () => {
    setCurrentSlide((prev) => (prev < maxSlide ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : maxSlide));
  };

  const visibleMembers = teamMembers.slice(
    currentSlide * itemsPerSlide,
    currentSlide * itemsPerSlide + itemsPerSlide
  );

  return (
    <div>
    <div className="py-10 bg-green-100 mx-auto max-w-5xl px-4">
      <div className="flex p-4 flex-col md:flex-row items-center text-center md:text-left mb-8">
        <div className="md:w-1/2 ml-20 flex justify-center md:justify-start">
          <img src={i1} alt="Award" className="h-72" />
        </div>

        <div className="md:w-1/2 ml-0 lg:-ml-[200px] mt-4 md:mt-0">
          <h2 className="text-5xl font-bold">
            Get <span className="text-green-800">award-winning</span> customer support
          </h2>
          <p className="text-gray-700 text-lg mt-6">
            With a Stevie Award for fantastic customer support and more than 5,300 five-star reviews on Shopify, we know how to get support right. Get top-notch 24/7 customer support to help your business grow.
          </p>
        </div>
      </div>
      <hr className="border-t border-gray-300 mt-2 mb-10" />

      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold">Meet amazing people behind our support</h3>
        <div className="flex flex-col items-center gap-4 mt-4">
  <div className="grid grid-cols-4 gap-4">
    {visibleMembers.map((member, index) => (
      <div
        key={index}
        className="relative text-center w-56 h-40 mx-auto rounded-xl overflow-hidden border-2 border-gray-300"
      >
        <img
          src={member.src}
          alt={member.name}
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-0 p-2 font-extrabold text-left bg-opacity-60 text-white text-sm w-full py-1">
          {member.name}
        </div>
      </div>
    ))}
  </div>

  {/* Buttons below the grid */}
  <div className="flex gap-4">
    <button
      onClick={handlePrev}
      className="bg-gray-300 p-3 rounded-full hover:bg-gray-400"
    >
      <FaArrowLeft className="text-xl text-gray-700" />
    </button>

    <button
      onClick={handleNext}
      className="bg-gray-300 p-3 rounded-full hover:bg-gray-400"
    >
      <FaArrowRight className="text-xl text-gray-700" />
    </button>
  </div>
</div>
</div>
      </div>

      <div className="text-center mt-10">
        <button className="bg-green-500 text-white py-4 px-6 w-56 rounded-lg hover:bg-green-600">
          Start free
        </button>
        <button className="ml-4 bg-transparent border border-black text-black py-4 px-4 w-56 rounded-lg hover:text-white hover:bg-black">
          See our pricing plans
        </button>
      </div>

      <div className="text-center mt-4 text-sm text-gray-500">
        <p>Over 5,300+ five-star Shopify reviews</p>
      </div>
    </div>
  );
};

export default CustomerSupportSection;
