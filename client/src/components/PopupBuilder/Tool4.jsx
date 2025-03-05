import React, { useEffect, useState } from "react";
import {
  FaChartPie,
  FaNetworkWired,
  FaMousePointer,
  FaServer,
  FaReplyAll,
  FaPen,
  FaCheckSquare,
  FaInfoCircle,
  FaChartLine,
  FaUsers,
  FaEnvelopeOpenText
} from "react-icons/fa";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRobot,
  faWandMagicSparkles,
  faChartBar,
  faBolt,
  faCog,
  faFilter,
  faInfoCircle,
  faGripLines,
  faMousePointer,
  faMobileAlt,
  faImage
} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from "react-i18next";

const Tool4 = () => {
  const { t, i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(i18n.language === 'ar');
  useEffect(() => {
    setIsRTL(i18n.language === 'ar');
  }, [i18n.language]);
  
  return (
    <div className="bg-white ml-0 lg:ml-20 py-16">
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-1 items-center">
        {/* Left Side: Blocks */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
          {/* Subject Analyzer */}
          <a href="/feature4" className="bg-gray-100 p-6 rounded-lg w-full shadow-sm flex flex-col items-start group">
  <div className="w-20 aspect-square flex items-center justify-center text-lgreen text-3xl mb-4 bg-gray-200 rounded-lg group-hover:bg-lgreen group-hover:text-white">
    <FontAwesomeIcon icon={faMousePointer} />
  </div>
  <h3 className="text-lg font-semibold mb-2">{t('drag_and_drop_builder')}</h3>
  <p className="text-gray-600">{t('drag_and_drop_description')}</p>
</a>

{/* Mobile Responsive */}
<a href="/feature4" className="bg-gray-100 p-6 rounded-lg w-full shadow-sm flex flex-col items-start group">
  <div className="w-20 aspect-square flex items-center justify-center text-lgreen text-3xl mb-4 bg-gray-200 rounded-lg group-hover:bg-lgreen group-hover:text-white">
    <FontAwesomeIcon icon={faMobileAlt} />
  </div>
  <h3 className="text-lg font-semibold mb-2">{t('mobile_responsive')}</h3>
  <p className="text-gray-600">{t('mobile_responsive_description')}</p>
</a>

{/* Email Validation */}
<a href="/feature4" className="bg-gray-100 p-6 rounded-lg w-full shadow-sm flex flex-col items-start group">
  <div className="w-20 aspect-square flex items-center justify-center text-lgreen text-3xl mb-4 bg-gray-200 rounded-lg group-hover:bg-lgreen group-hover:text-white">
    <FontAwesomeIcon icon={faChartBar} />
  </div>
  <h3 className="text-lg font-semibold mb-2">{t('detailed_analytics')}</h3>
  <p className="text-gray-600">{t('detailed_analytics_description')}</p>
</a>

{/* Handle Bounce & Unsubscribe */}
<a href="/feature4" className="bg-gray-100 p-6 rounded-lg w-full shadow-sm flex flex-col items-start group">
  <div className="w-20 aspect-square flex items-center justify-center text-lgreen text-3xl mb-4 bg-gray-200 rounded-lg group-hover:bg-lgreen group-hover:text-white">
    <FontAwesomeIcon icon={faImage} />
  </div>
  <h3 className="text-lg font-semibold mb-2">{t('add_images_links')}</h3>
  <p className="text-gray-600">{t('add_images_links_description')}</p>
</a>

{/* Detailed Analytics */}
<a href="/feature4" className="bg-gray-100 p-6 rounded-lg w-full shadow-sm flex flex-col items-start group">
  <div className="w-20 aspect-square flex items-center justify-center text-lgreen text-3xl mb-4 bg-gray-200 rounded-lg group-hover:bg-lgreen group-hover:text-white">
    <FontAwesomeIcon icon={faBolt} />
  </div>
  <h3 className="text-lg font-semibold mb-2">{t('outgoing_webhooks')}</h3>
  <p className="text-gray-600">{t('outgoing_webhooks_description')}</p>
</a>

          {/* WYSIWYG Editor */}
          <a href="/feature4" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
  <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
    <FontAwesomeIcon icon={faRobot} />
  </div>
  <h3 className="text-lg font-semibold mb-2">{t('create_automation_workflows')}</h3>
  <p className="text-gray-600">{t('create_automation_workflows_description')}</p>
</a>

{/* Marketing Automation */}
<a href="/feature4" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
  <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
    <FaNetworkWired />
  </div>
  <h3 className="text-lg font-semibold mb-2">{t('marketing_automation')}</h3>
  <p className="text-gray-600">{t('marketing_automation_description')}</p>
</a>
</div>
<div className="text-left mt-0 ml-0 lg:ml-20 lg:-mt-[700px]">
  <h2 className="lg:text-4xl text-3xl font-bold mb-4">{t('all_tools_you_need')}</h2>
  <p className="text-gray-600 text-lg">
    {t('start_converting_leads_today')}
  </p>
</div>

      </div>
    </div>
  );
};

export default Tool4;
