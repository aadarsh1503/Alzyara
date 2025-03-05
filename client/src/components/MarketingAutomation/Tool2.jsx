import React, { useEffect, useState } from "react";
import {
  FaChartPie,
  FaServer,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRobot,
  faWandMagicSparkles,
  faChartBar,
  faBolt,
  faCog,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import "./m.css";
import { useTranslation } from "react-i18next";

const Tool2 = () => {
  const { t, i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(i18n.language === 'ar');
  useEffect(() => {
    setIsRTL(i18n.language === 'ar');
  }, [i18n.language]);
  
  return (
    <div className={`bg-white ml-0 lg:ml-20 ${i18n.language === 'ar' ? 'lg:mr-20' : ''}  py-16 `} >
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-1 items-center">
        {/* Left Side: Blocks */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
          {/* Subject Analyzer */}
          <a href="/feature2" className="bg-gray-100 p-6 rounded-lg w-full shadow-sm flex flex-col items-start group">
        <div className="w-20 aspect-square flex items-center justify-center text-lgreen text-3xl mb-4 bg-gray-200 rounded-lg group-hover:bg-lgreen group-hover:text-white">
          <FontAwesomeIcon icon={faRobot} />
        </div>
        <h3 className="text-base font-semibold mb-2">{t('create_stunning')}</h3>
        <p className="text-gray-600">{t('build_workflows')}</p>
      </a>

      <a href="/feature2" className="bg-gray-100 p-6 rounded-lg w-full shadow-sm flex flex-col items-start group">
        <div className="w-20 aspect-square flex items-center justify-center text-lgreen text-3xl mb-4 bg-gray-200 rounded-lg group-hover:bg-lgreen group-hover:text-white">
          <FontAwesomeIcon icon={faWandMagicSparkles} />
        </div>
        <h3 className="text-lg font-semibold mb-2">{t('ai_writer')}</h3>
        <p className="text-gray-600">{t('email_writer')}</p>
      </a>

      <a href="/feature2" className="bg-gray-100 p-6 rounded-lg w-full shadow-sm flex flex-col items-start group">
        <div className="w-20 aspect-square flex items-center justify-center text-lgreen text-3xl mb-4 bg-gray-200 rounded-lg group-hover:bg-lgreen group-hover:text-white">
          <FontAwesomeIcon icon={faChartBar} />
        </div>
        <h3 className="text-lg font-semibold mb-2">{t('detailed_analytics')}</h3>
        <p className="text-gray-600">{t('track_results')}</p>
      </a>

      <a href="/feature2" className="bg-gray-100 p-6 rounded-lg w-full shadow-sm flex flex-col items-start group">
        <div className="w-20 aspect-square flex items-center justify-center text-lgreen text-3xl mb-4 bg-gray-200 rounded-lg group-hover:bg-lgreen group-hover:text-white">
          <FaServer />
        </div>
        <h3 className="text-lg font-semibold mb-2">{t('api_integration')}</h3>
        <p className="text-gray-600">{t('use_api')}</p>
      </a>

      <a href="/feature2" className="bg-gray-100 p-6 rounded-lg w-full shadow-sm flex flex-col items-start group">
        <div className="w-20 aspect-square flex items-center justify-center text-lgreen text-3xl mb-4 bg-gray-200 rounded-lg group-hover:bg-lgreen group-hover:text-white">
          <FontAwesomeIcon icon={faBolt} />
        </div>
        <h3 className="text-lg font-semibold mb-2">{t('outgoing_webhooks')}</h3>
        <p className="text-gray-600">{t('instant_webhooks')}</p>
      </a>

      <a href="/feature2" className="bg-gray-100 p-6 rounded-lg w-full shadow-sm flex flex-col items-start group">
        <div className="w-20 aspect-square flex items-center justify-center text-lgreen text-3xl mb-4 bg-gray-200 rounded-lg group-hover:bg-lgreen group-hover:text-white">
          <FontAwesomeIcon icon={faCog} />
        </div>
        <h3 className="text-lg font-semibold mb-2">{t('zapier_integration')}</h3>
        <p className="text-gray-600">{t('connect_apps')}</p>
      </a>

          {/* Pabbly Integration */}
          <a href="/feature2" className="bg-gray-100 p-6 rounded-lg w-full shadow-sm flex flex-col items-start group">
  <div className="w-20 aspect-square flex items-center justify-center text-lgreen text-3xl mb-4 bg-gray-200 rounded-lg group-hover:bg-lgreen group-hover:text-white">
    <div className="p-icon">
      <span className="icon-text">P</span>
    </div>
  </div>
  <h3 className="text-lg font-semibold mb-2">{t('pabbly_integration')}</h3>
  <p className="text-gray-600">
    {t('pabbly_integration_description')}
  </p>
</a>

{/* Filter */}
<a href="/feature2" className="bg-gray-100 p-6 rounded-lg w-full shadow-sm flex flex-col items-start group">
  <div className="w-20 aspect-square flex items-center justify-center text-lgreen text-3xl mb-4 bg-gray-200 rounded-lg group-hover:bg-lgreen group-hover:text-white">
    <FontAwesomeIcon icon={faFilter} />
  </div>
  <h3 className="text-lg font-semibold mb-2">{t('filter')}</h3>
  <p className="text-gray-600">
    {t('filter_description')}
  </p>
</a>

{/* Customer SMTP Server */}
<a href="/feature2" className="bg-gray-100 p-6 rounded-lg w-full shadow-sm flex flex-col items-start group">
  <div className="w-20 aspect-square flex items-center justify-center text-lgreen text-3xl mb-4 bg-gray-200 rounded-lg group-hover:bg-lgreen group-hover:text-white">
    <FaChartPie />
  </div>
  <h3 className="text-lg font-semibold mb-2">{t('customer_smtp_server')}</h3>
  <p className="text-gray-600">
    {t('customer_smtp_server_description')}
  </p>
</a>

        </div>

        {/* Right Side: Text */}
        <div className="text-left ml-0 lg:ml-20 mt-0 lg:-mt-[700px]">
  <h2 className="lg:text-4xl text-3xl font-semibold mb-4">
    {t('effortless_automation_title')}
  </h2>
  <p className="text-gray-600 text-lg">
    {t('effortless_automation_description')}
  </p>
</div>

      </div>
    </div>
  );
};

export default Tool2;
