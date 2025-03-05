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

import ApiIcon from '@mui/icons-material/Api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot,faWandMagicSparkles,faChartBar,faBolt,faCog ,faFilter ,faInfoCircle   } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from "react-i18next";
const Tool3 = () => {
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
          <a href="/feature3" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
          <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
            <FontAwesomeIcon icon={faRobot} />
            </div>
            <h3 className="text-lg font-semibold mb-2">{t('subject_analyzer')}</h3>
            <p className="text-gray-600">
            
            {t('subject_analyzer_desc')}
            </p>
          </a>
          {/* Drag & Drop Builder */}
          <a href="/feature3" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
          <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
            <FontAwesomeIcon icon={faInfoCircle } />
            </div>
            <h3 className="text-lg font-semibold mb-2">{t('drag_drop_builder')}</h3>
            <p className="text-gray-600">
            
            {t('drag_drop_builder_desc')}
            </p>
          </a>
          {/* Email Validation */}
          <a href="/feature3" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
          <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
            <FontAwesomeIcon icon={faChartBar} />
            </div>
            <h3 className="text-lg font-semibold mb-2">{t('email_validation')}</h3>
            <p className="text-gray-600">
            
            {t('email_validation_desc')}
            </p>
          </a>
          {/* Handle Bounce & Unsubscribe */}
          <a href="/feature3" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
            <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
              <FaServer />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              {t('handle_bounce_unsubscribe')}
              
            </h3>
            <p className="text-gray-600">
            {t('handle_bounce_unsubscribe_desc')}
            </p>
          </a>
          {/* Detailed Analytics */}
          <a href="/feature3" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
            <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
            <FontAwesomeIcon icon={faBolt}  />
            </div>
            <h3 className="text-lg font-semibold mb-2">{t('detailed_analytics')}</h3>
            <p className="text-gray-600">
          
            {t('detailed_analytics_desc')}
            </p>
          </a>
          {/* WYSIWYG Editor */}
          <a href="/feature3" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
          <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
            <FontAwesomeIcon icon={faCog}  />
            </div>
            <h3 className="text-lg font-semibold mb-2">{t('wysiwyg_editor')}</h3>
            <p className="text-gray-600">
        
          
            {t('wysiwyg_editor_desc')}
            </p>
          </a>
          <a href="/feature3" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
          <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
<FaChartPie />
  </div>
  <h3 className="text-lg font-semibold mb-2">{t('marketing_automation')}</h3>
  <p className="text-gray-600">

  {t('marketing_automation_desc')}
  </p>
</a>
{/* Drag & Drop Builder */}
<a href="/feature3" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
            <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
  <FaNetworkWired />
  </div>
  <h3 className="text-lg font-semibold mb-2">{t('email_tracking')}</h3>
  <p className="text-gray-600">

  {t('email_tracking_desc')}
  </p>
</a>

{/* Email Validation */}
<a href="/feature3" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
            <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
    <FaChartPie />
  </div>
  <h3 className="text-lg font-semibold mb-2">{t('list_segmentation')}</h3>
  <p className="text-gray-600">

  {t('list_segmentation_desc')}
  </p>
</a>
{/* Handle Bounce & Unsubscribe */}


        </div>

        {/* Right Side: Text */}
        <div className="text-left mt-0 ml-0 lg:ml-20 lg:-mt-[700px]">
          <h2 className="lg:text-4xl text-3xl font-bold mb-4">All the Tools You <br />Need</h2>
          <p className="text-gray-600 text-lg">
          Start converting leads today with our top-tier CRM <br /> and sales engagement solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tool3;








