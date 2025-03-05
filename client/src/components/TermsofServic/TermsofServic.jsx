import React from "react";
import { useTranslation } from "react-i18next";

const TermsofServic = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col mt-32 lg:flex-row gap-6 lg:gap-12 px-6 lg:px-16 py-8 lg:py-12">
      {/* Left Side: Static Content */}
      <div className="w-full lg:w-2/3">
        <h1 className="font-bold mb-2">{t('terms.introduction')}</h1>
        <p className="text-gray-700 mb-6">
          {t('terms.introductionText')}
        </p>
      </div>

      {/* Right Side: Unique Scrollable Content */}
      <div className="w-full bg-white rounded-xl lg:w-1/5 left-[1000px] top-[40px]">
        <div className="shadow-custom p-4 rounded-xl">
          <h3 className="text-14px font-bold">{t('terms.contactUs')}</h3>
          <div className="overflow-y-auto max-h-32 space-y-2">
            <p className="text-gray-700">
              <span className="font-semibold"></span>{" "}
              <a
                href="mailto:info@alzyara.com"
                className="text-lgreen text-14px font-bold"
              >
                info@alzyara.com
              </a>
            </p>
            <p className="text-gray-700 text-14px">
              {t('terms.contactMessage')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsofServic;
