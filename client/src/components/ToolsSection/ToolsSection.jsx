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
  FaEnvelopeOpenText,
  FaSignature, // A better icon for DKIM
  FaLink,      // A better icon for Custom Domains
} from "react-icons/fa";

// --- Step 1: Refactor all 14 features into a clean data array ---
const featuresData = [
  {
    icon: <FaChartPie />,
    titleKey: 'subject_analyzer',
    descriptionKey: 'subject_analyzer_desc',
    href: '/feature1',
  },
  {
    icon: <FaMousePointer />,
    titleKey: 'drag_drop_builder',
    descriptionKey: 'drag_drop_builder_desc',
    href: '/feature1',
  },
  {
    icon: <FaCheckSquare />,
    titleKey: 'email_validation',
    descriptionKey: 'email_validation_desc',
    href: '/feature1',
  },
  {
    icon: <FaInfoCircle />,
    titleKey: 'handle_bounce_unsubscribe',
    descriptionKey: 'handle_bounce_unsubscribe_desc',
    href: '/feature1',
  },
  {
    icon: <FaChartLine />,
    titleKey: 'detailed_analytics',
    descriptionKey: 'detailed_analytics_desc',
    href: '/feature1',
  },
  {
    icon: <FaPen />,
    titleKey: 'wysiwyg_editor',
    descriptionKey: 'wysiwyg_editor_desc',
    href: '/feature1',
  },
  {
    icon: <FaNetworkWired />,
    titleKey: 'marketing_automation',
    descriptionKey: 'marketing_automation_desc',
    href: '/feature1',
  },
  {
    icon: <FaEnvelopeOpenText />,
    titleKey: 'email_tracking',
    descriptionKey: 'email_tracking_desc',
    href: '/feature1',
  },
  {
    // Using a more intuitive icon than FaChartPie for segmentation
    icon: <FaUsers />,
    titleKey: 'list_segmentation',
    descriptionKey: 'list_segmentation_desc',
    href: '/feature1',
  },
  {
    icon: <FaServer />,
    titleKey: 'custom_smtp_server',
    descriptionKey: 'custom_smtp_description',
    href: '/feature1',
  },
  {
    icon: <FaUsers />,
    titleKey: 'manage_list_subscribers',
    descriptionKey: 'manage_list_subscribers_description',
    href: '/feature1',
  },
  {
    // Using a more intuitive icon than FaPen for DKIM/Signatures
    icon: <FaSignature />,
    titleKey: 'add_dkim_structure',
    descriptionKey: 'add_dkim_structure_description',
    href: '/feature1',
  },
  {
    // Using a more intuitive icon than FaCheckSquare for Domains
    icon: <FaLink />,
    titleKey: 'custom_tracking_domains',
    descriptionKey: 'custom_tracking_domains_description',
    href: '/feature1',
  },
  {
    icon: <FaReplyAll />,
    titleKey: 'auto_responder',
    descriptionKey: 'auto_responder_description',
    href: '/feature1',
  },
];

const ToolsSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    // Section container with a light, airy background
    <div className={`py-16 sm:py-24 bg-gray-50 ${isRTL ? 'rtl' : ''}`}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* --- Step 2: Integrated Header Section for a clean and robust layout --- */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('all_tools_needed')}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {t('start_converting_leads')}
          </p>
        </div>

        {/* --- Step 3: Dynamic Grid rendered from the data array. Note the lg:grid-cols-4 for better fit --- */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuresData.map((feature, index) => (
            <a 
              key={index} 
              href={feature.href} 
              // Card styling focused on a clean, light aesthetic with engaging hover effects
              className="group block rounded-2xl border border-gray-200 bg-white p-6 shadow-sm
                         transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-teal-600/10"
            >
              {/* Icon container with vibrant hover effect */}
              <div 
                className="flex h-16 w-16 items-center justify-center rounded-xl bg-gray-100 
                           text-3xl text-teal-600 transition-all duration-300
                           group-hover:bg-teal-500 group-hover:text-white group-hover:scale-110"
              >
                {feature.icon}
              </div>
              {/* Text content with high-contrast, readable colors */}
              <div className="mt-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  {t(feature.titleKey)}
                </h3>
                <p className="mt-1 text-base text-gray-600">
                  {t(feature.descriptionKey)}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolsSection;