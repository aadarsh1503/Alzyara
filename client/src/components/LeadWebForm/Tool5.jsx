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
  FaEnvelopeOpenText,
  FaFilter
} from "react-icons/fa";

import ApiIcon from '@mui/icons-material/Api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot,faWandMagicSparkles,faChartBar,faBolt,faCog,faFileSignature  ,faFilter ,faInfoCircle,faGripLines,faMousePointer ,faMobileAlt,faImage      } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from "react-i18next";

const Tool5 = () => {
  const { t, i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(i18n.language === 'ar');
  useEffect(() => {
    setIsRTL(i18n.language === 'ar');
  }, [i18n.language]);
  
  return (
    <div className="bg-white ml-0 lg:ml-20  py-16 ">
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-1 items-center">
        {/* Left Side: Blocks */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
          {/* Subject Analyzer */}
          <a href="/feature5" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
  <div className="w-20 aspect-square flex items-center justify-center text-lgreen text-3xl mb-4 bg-gray-200 rounded-lg group-hover:bg-lgreen group-hover:text-white">
    <FontAwesomeIcon icon={faFileSignature} />
  </div>
  <h3 className="text-lg font-semibold mb-2">{t('embedded_form')}</h3>
  <p className="text-gray-600">{t('embedded_form_description')}</p>
</a>

{/* Drag & Drop Builder */}
<a href="/feature5" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
  <div className="w-20 aspect-square flex items-center justify-center text-lgreen text-3xl mb-4 bg-gray-200 rounded-lg group-hover:bg-lgreen group-hover:text-white">
    <FontAwesomeIcon icon={faMousePointer} />
  </div>
  <h3 className="text-lg font-semibold mb-2">{t('drag_drop_builder')}</h3>
  <p className="text-gray-600">{t('drag_drop_builder_description')}</p>
</a>

{/* Email Validation */}
<a href="/feature5" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
  <div className="w-20 aspect-square flex items-center justify-center text-lgreen text-3xl mb-4 bg-gray-200 rounded-lg group-hover:bg-lgreen group-hover:text-white">
    <FaChartPie />
  </div>
  <h3 className="text-lg font-semibold mb-2">{t('detailed_analytics')}</h3>
  <p className="text-gray-600">{t('detailed_analytics_description')}</p>
</a>

{/* Mobile Responsive */}
<a href="/feature5" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
  <div className="w-20 aspect-square flex items-center justify-center text-lgreen text-3xl mb-4 bg-gray-200 rounded-lg group-hover:bg-lgreen group-hover:text-white">
    <FontAwesomeIcon icon={faMobileAlt} />
  </div>
  <h3 className="text-lg font-semibold mb-2">{t('mobile_responsive')}</h3>
  <p className="text-gray-600">{t('mobile_responsive_description')}</p>
</a>

{/* Outgoing Webhooks */}
<a href="/feature5" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
  <div className="w-20 aspect-square flex items-center justify-center text-lgreen text-3xl mb-4 bg-gray-200 rounded-lg group-hover:bg-lgreen group-hover:text-white">
    <FontAwesomeIcon icon={faBolt} />
  </div>
  <h3 className="text-lg font-semibold mb-2">{t('outgoing_webhooks')}</h3>
  <p className="text-gray-600">{t('outgoing_webhooks_description')}</p>
</a>

{/* Add Images/Links */}
<a href="/feature5" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
  <div className="w-20 aspect-square flex items-center justify-center text-lgreen text-3xl mb-4 bg-gray-200 rounded-lg group-hover:bg-lgreen group-hover:text-white">
    <FontAwesomeIcon icon={faImage} />
  </div>
  <h3 className="text-lg font-semibold mb-2">{t('add_images_links')}</h3>
  <p className="text-gray-600">{t('add_images_links_description')}</p>
</a>

<a href="/feature5" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
  <div className="w-20 aspect-square flex items-center justify-center text-lgreen text-3xl mb-4 bg-gray-200 rounded-lg group-hover:bg-lgreen group-hover:text-white">
    <FaChartPie />
  </div>
  <h3 className="text-lg font-semibold mb-2">{t('list_segmentation')}</h3>
  <p className="text-gray-600">{t('list_segmentation_description')}</p>
</a>

{/* Marketing Automation */}
<a href="/feature5" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
  <div className="w-20 aspect-square flex items-center justify-center text-lgreen text-3xl mb-4 bg-gray-200 rounded-lg group-hover:bg-lgreen group-hover:text-white">
    <FaNetworkWired />
  </div>
  <h3 className="text-lg font-semibold mb-2">{t('marketing_automation')}</h3>
  <p className="text-gray-600">{t('marketing_automation_description')}</p>
</a>

{/* Filters */}
<a href="/feature5" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
  <div className="w-20 aspect-square flex items-center justify-center text-lgreen text-3xl mb-4 bg-gray-200 rounded-lg group-hover:bg-lgreen group-hover:text-white">
    <FaFilter />
  </div>
  <h3 className="text-lg font-semibold mb-2">{t('filters')}</h3>
  <p className="text-gray-600">{t('filters_description')}</p>
</a>
</div>
{/* Section Title */}
<div className="text-left mt-0 lg:ml-20 ml-0 lg:-mt-[700px]">
  <h2 className="lg:text-5xl text-3xl font-bold mb-4">{t('all_tools_title')}</h2>
  <p className="text-gray-600 text-lg">{t('all_tools_description')}</p>
</div>

      </div>
    </div>
  );
};

export default Tool5;
