import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import icons
import i1 from "./i1.webp";
import { useTranslation } from "react-i18next";

const CustomerSupportSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t, i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(i18n.language === 'ar');
  useEffect(() => {
    setIsRTL(i18n.language === 'ar');
  }, [i18n.language]);
  

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
      <img src={i1} alt={t('award_image_alt')} className="h-72" />
    </div>

    <div className={`md:w-1/2 ml-0 lg:-ml-[200px] ${i18n.language === 'ar' ? 'lg:ml-0 relative lg:left-20 left-0' : ''} mt-4 md:mt-0`}>
      <h2 className="text-5xl font-bold">
        {t('get')} <span className="text-lgreen">{t('award_winning')}</span> {t('customer_support')}
      </h2>
      <p className="text-gray-700 text-lg mt-6">
        {t('support_description')}
      </p>
    </div>
  </div>
</div>
 
<div className="text-center mt-10">
  <button className="bg-lgreen mb-4 hover:bg-hgreen text-white py-4 px-6 w-56 rounded-lg">
    {t('start_free')}
  </button>
  <a href="/pricing">
    <button className="lg:ml-4 mr-0 lg:mr-4 ml-0 bg-transparent border border-black text-black py-4 px-4 w-56 rounded-lg hover:text-white hover:bg-black">
      {t('see_pricing')}
    </button>
  </a>
</div>

<div className="text-center mb-20 mt-4 text-sm text-gray-500">
  <p>{t('shopify_reviews')}</p>
</div>
    </div>
  );
};

export default CustomerSupportSection;
