import React, { useEffect, useState } from "react";
import CounterSection from "../Solutions/CounterSection";
import Secondpart from "./Secondpart";
import EmailMarketingSection from "../Solutions/EmailMarketingSection";
import i1 from "./i1.png"
import { useTranslation } from "react-i18next";

const Integrations = () => {
  const { t, i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(i18n.language === 'ar');
  useEffect(() => {
    setIsRTL(i18n.language === 'ar');
  }, [i18n.language]);
  return (
    <div className="overflow-x-hidden">
    <div className="bg-white  mt-24 mx-auto flex flex-col lg:flex-row items-center justify-between px-8 lg:px-20 py-12 lg:py-12">
      {/* Left Section */}
      <div className="max-w-xl ml-16 mr-20 mx-auto space-y-6">
      <p className="text-sm text-gray-500 uppercase font-semibold tracking-wider">
        {t("connect_title")}
      </p>
      <h2 className="text-3xl lg:text-4xl font-bold leading-snug text-black">
        {t("connect_heading")}
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        {t("connect_description")}
      </p>
      <button className="mt-8 bg-lgreen text-white px-5 py-2 rounded-md text-lg font-semibold shadow-md hover:bg-hgreen">
        {t("get_it_button")}
      </button>
    </div>

      {/* Right Section */}
      <div className={`lg:w-2/3 mt-8  ${i18n.language === 'ar' ? '' :''} lg:mt-0 flex justify-center`}>
  <div className="w-full h-auto rounded-lg flex items-center justify-center">
    {/* Placeholder for the right side */}
    <img src={i1} className="w-[500px] h-auto lg:w-[500px] lg:h-auto" alt="Right Side Image" />
  </div>
</div>
</div>
<CounterSection />
<Secondpart />
<EmailMarketingSection />
    </div>
  );
};

export default Integrations;
