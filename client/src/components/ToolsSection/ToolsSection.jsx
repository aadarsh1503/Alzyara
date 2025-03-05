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
            <h3 className="text-lg font-semibold mb-2">Subject Analyzer</h3>
            <p className="text-gray-600">
              Improve your email open rates by analyzing your subject line.
            </p>
          </a>
          {/* Drag & Drop Builder */}
          <a href="/feature1" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
          <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
              <FaMousePointer />
            </div>
            <h3 className="text-lg font-semibold mb-2">Drag & Drop Builder</h3>
            <p className="text-gray-600">
              Easily drag & drop the relevant blocks to create the email template.
            </p>
          </a>
          {/* Email Validation */}
          <a href="/feature1" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
          <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
              <FaCheckSquare />
            </div>
            <h3 className="text-lg font-semibold mb-2">Email Validation</h3>
            <p className="text-gray-600">
              Validate your email list for the best deliverability results.
            </p>
          </a>
          {/* Handle Bounce & Unsubscribe */}
          <a href="/feature1" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
          <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
              <FaInfoCircle />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Handle Bounce & Unsubscribe
            </h3>
            <p className="text-gray-600">
              Automatically remove all the bounced and unsubscribed emails.
            </p>
          </a>
          {/* Detailed Analytics */}
          <a href="/feature1" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
          <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
              <FaChartLine />
            </div>
            <h3 className="text-lg font-semibold mb-2">Detailed Analytics</h3>
            <p className="text-gray-600">
              In-depth tracking of the results of every campaign.
            </p>
          </a>
          {/* WYSIWYG Editor */}
          <a href="/feature1" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
          <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
              <FaPen />
            </div>
            <h3 className="text-lg font-semibold mb-2">WYSIWYG Editor</h3>
            <p className="text-gray-600">
              Use WYSIWYG Editor to create stunning emails without any hassle.
            </p>
          </a>
          <a href="/feature1" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
          <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
    <FaNetworkWired />
  </div>
  <h3 className="text-lg font-semibold mb-2">Marketing Automation</h3>
  <p className="text-gray-600">
    Nurture your leads with a series of automated emails based on the user's action
  </p>
</a>
{/* Drag & Drop Builder */}
<a href="/feature1" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
          <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
    <FaEnvelopeOpenText />
  </div>
  <h3 className="text-lg font-semibold mb-2">Email Tracking</h3>
  <p className="text-gray-600">
    Track every single engagement made by users for all your emails
  </p>
</a>

{/* Email Validation */}
<a href="/feature1" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
          <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
    <FaChartPie />
  </div>
  <h3 className="text-lg font-semibold mb-2">List Segmentation</h3>
  <p className="text-gray-600">
    Sending emails to targeted segments can increase email engagement & revenue by more than 25%.
  </p>
</a>
{/* Handle Bounce & Unsubscribe */}
<a href="/feature1" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
          <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
    <FaServer />
  </div>
  <h3 className="text-lg font-semibold mb-2">Custom SMTP Server</h3>
  <p className="text-gray-600">
    Connect unlimited customer SMTP servers to spread your email sending load
  </p>
</a>
{/* Detailed Analytics */}
<a href="/feature1" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
          <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
    <FaUsers />
  </div>
  <h3 className="text-lg font-semibold mb-2">Manage List and Subscribers</h3>
  <p className="text-gray-600">
    Manage and segment lists & subscribers easily with Alzyara
  </p>
</a>

{/* WYSIWYG Editor */}
<a href="/feature1" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
          <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
    <FaPen />
  </div>
  <h3 className="text-lg font-semibold mb-2">Add DKIM Structure</h3>
  <p className="text-gray-600">
    Sign your emails with your sending domain and improve deliverability
  </p>
</a>
<a href="/feature1" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
          <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
    <FaCheckSquare />
  </div>
  <h3 className="text-lg font-semibold mb-2">Custom Tracking Domains</h3>
  <p className="text-gray-600">
    Use your custom tracking domains for better deliverability
  </p>
</a>
<a href="/feature1" className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-start group">
          <div className="text-lgreen text-3xl mb-4 group-hover:bg-lgreen bg-gray-200 group-hover:text-white p-6 rounded-lg">
    <FaReplyAll />
  </div>
  <h3 className="text-lg font-semibold mb-2">Auto Responder</h3>
  <p className="text-gray-600">
    Automatically send a welcome email when a new subscriber joins your email list
  </p>
</a>

        </div>

        {/* Right Side: Text */}
        <div className="text-left ml-0 lg:ml-20 mt-0 lg:-mt-[1300px]">
        <h2 className="lg:text-4xl  text-3xl font-semibold mb-4">All the Tools You<br /> Need</h2>
          <p className="text-gray-600 text-lg">
            Start converting leads today with our top-tier<br /> Email Marketing solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ToolsSection;
