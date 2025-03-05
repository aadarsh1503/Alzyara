import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
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

const ToolsSection = () => {
  const { t, i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(i18n.language === 'ar');
  useEffect(() => {
    setIsRTL(i18n.language === 'ar');
  }, [i18n.language]);
  
  return (
    <div className={`bg-white ml-0 lg:ml-20 ${i18n.language === 'ar' ? 'lg:mr-20' : ''}  py-16 `}>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-1 items-center">
        {/* Left Side: Blocks */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
          {/* Subject Analyzer */}
          <a href="/feature1" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
  <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
    <FaChartPie />
  </div>
  <h3 className="text-lg font-semibold mb-2">{t('subject_analyzer')}</h3>
  <p className="text-gray-600">{t('subject_analyzer_desc')}</p>
</a>

<a href="/feature1" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
  <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
    <FaMousePointer />
  </div>
  <h3 className="text-lg font-semibold mb-2">{t('drag_drop_builder')}</h3>
  <p className="text-gray-600">{t('drag_drop_builder_desc')}</p>
</a>

<a href="/feature1" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
  <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
    <FaCheckSquare />
  </div>
  <h3 className="text-lg font-semibold mb-2">{t('email_validation')}</h3>
  <p className="text-gray-600">{t('email_validation_desc')}</p>
</a>

<a href="/feature1" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
  <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
    <FaInfoCircle />
  </div>
  <h3 className="text-lg font-semibold mb-2">{t('handle_bounce_unsubscribe')}</h3>
  <p className="text-gray-600">{t('handle_bounce_unsubscribe_desc')}</p>
</a>

<a href="/feature1" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
  <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
    <FaChartLine />
  </div>
  <h3 className="text-lg font-semibold mb-2">{t('detailed_analytics')}</h3>
  <p className="text-gray-600">{t('detailed_analytics_desc')}</p>
</a>

<a href="/feature1" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
  <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
    <FaPen />
  </div>
  <h3 className="text-lg font-semibold mb-2">{t('wysiwyg_editor')}</h3>
  <p className="text-gray-600">{t('wysiwyg_editor_desc')}</p>
</a>

<a href="/feature1" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
  <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
    <FaNetworkWired />
  </div>
  <h3 className="text-lg font-semibold mb-2">{t('marketing_automation')}</h3>
  <p className="text-gray-600">{t('marketing_automation_desc')}</p>
</a>

<a href="/feature1" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
  <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
    <FaEnvelopeOpenText />
  </div>
  <h3 className="text-lg font-semibold mb-2">{t('email_tracking')}</h3>
  <p className="text-gray-600">{t('email_tracking_desc')}</p>
</a>

<a href="/feature1" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
  <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
    <FaChartPie />
  </div>
  <h3 className="text-lg font-semibold mb-2">{t('list_segmentation')}</h3>
  <p className="text-gray-600">{t('list_segmentation_desc')}</p>
</a>

{/* Handle Bounce & Unsubscribe */}
<a href="/feature1" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
  <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
    <FaServer />
  </div>
  <h3 className="text-lg font-semibold mb-2">{t('custom_smtp_server')}</h3>
  <p className="text-gray-600">{t('custom_smtp_description')}</p>
</a>
{/* Detailed Analytics */}
<a href="/feature1" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
  <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
    <FaUsers />
  </div>
  <h3 className="text-lg font-semibold mb-2">{t('manage_list_subscribers')}</h3>
  <p className="text-gray-600">{t('manage_list_subscribers_description')}</p>
</a>

{/* WYSIWYG Editor */}
<a href="/feature1" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
  <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
    <FaPen />
  </div>
  <h3 className="text-lg font-semibold mb-2">{t('add_dkim_structure')}</h3>
  <p className="text-gray-600">{t('add_dkim_structure_description')}</p>
</a>

<a href="/feature1" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
  <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
    <FaCheckSquare />
  </div>
  <h3 className="text-lg font-semibold mb-2">{t('custom_tracking_domains')}</h3>
  <p className="text-gray-600">{t('custom_tracking_domains_description')}</p>
</a>

<a href="/feature1" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
  <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
    <FaReplyAll />
  </div>
  <h3 className="text-lg font-semibold mb-2">{t('auto_responder')}</h3>
  <p className="text-gray-600">{t('auto_responder_description')}</p>
</a>

        </div>

        {/* Right Side: Text */}
        <div className="text-left ml-0 lg:ml-20 mt-0 lg:-mt-[1300px]">
        <h2 className="lg:text-4xl  text-3xl font-semibold mb-4">{t('all_tools_needed')}</h2>
        <p className="text-gray-600 text-lg">{t('start_converting_leads')}</p>
        </div>
      </div>
    </div>
  );
};

export default ToolsSection;
