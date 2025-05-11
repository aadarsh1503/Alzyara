import React from "react";
import { useTranslation } from "react-i18next";

const PrivacySection = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col mt-32 lg:flex-row gap-6 lg:gap-12 px-6 lg:px-16 py-8 lg:py-12">
      {/* Left Side: Static Content */}
      <div className="w-full lg:w-2/3">
        <p className="text-gray-700 mb-6 ">
          {t('privacy.introduction')} 
          <a
            href="https://alzyara.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dgreen underline mr-1 ml-2"
          >
            https://alzyara.com
          </a>{" "}
          {t('privacy.serviceExplanation')}
        </p>
        <h2 className="text-xl font-semibold mb-4">{t('privacy.infoWeCollect')}</h2>
        <ul className="list-decimal pl-5 space-y-4">
          <li>
            <span className="font-semibold">{t('privacy.personalData')}</span>
            <p className="text-gray-700 mt-2">{t('privacy.personalDataExplanation')}</p>
            <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-700">
              <li>{t('privacy.name')}</li>
              <li>{t('privacy.email')}</li>
              <li>{t('privacy.billingInfo')}</li>
              <li>{t('privacy.contactInfo')}</li>
              <li>{t('privacy.paymentDetails')}</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">{t('privacy.usageData')}</span>
            <p className="text-gray-700 mt-2">{t('privacy.usageDataExplanation')}</p>
            <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-700">
              <li>{t('privacy.ipAddress')}</li>
              <li>{t('privacy.browserType')}</li>
              <li>{t('privacy.deviceInfo')}</li>
              <li>{t('privacy.pagesVisited')}</li>
              <li>{t('privacy.timeSpent')}</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">{t('privacy.cookies')}</span>
            <p className="text-gray-700 mt-2">{t('privacy.cookiesExplanation')}</p>
            <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-700">
              <li>{t('privacy.utmTracking')}</li>
              <li>{t('privacy.retargetingCookies')}</li>
              <li>{t('privacy.googleAnalytics')}</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Right Side: Unique Scrollable Content */}
      <div className="w-full bg-white rounded-xl lg:w-1/5 left-[1000px] top-[40px]">
        <div className="shadow-custom p-4 rounded-xl">
          <h3 className="text-14px font-bold">{t('privacy.contactUs')}</h3>
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
              {t('privacy.contactMessage')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacySection;
