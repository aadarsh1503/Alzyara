import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FaChartPie,
  FaNetworkWired,
  FaMousePointer, // More intuitive for Drag & Drop
  FaServer,
  FaPen,         // More intuitive for an editor
  FaCheckSquare, // More intuitive for validation
  FaInfoCircle,
  FaChartBar,
  FaUsers,       // More intuitive for segmentation
  FaEnvelopeOpenText
} from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faBolt, faCog } from '@fortawesome/free-solid-svg-icons';

// --- Step 1: Refactor features into a data array for clean, maintainable code ---
// Note: I've updated the icons to be more intuitive for each feature.
const featuresData = [
  {
    icon: <FontAwesomeIcon icon={faRobot} />,
    titleKey: 'subject_analyzer',
    descriptionKey: 'subject_analyzer_desc',
    href: '/feature3',
  },
  {
    icon: <FaMousePointer />, // Better icon
    titleKey: 'drag_drop_builder',
    descriptionKey: 'drag_drop_builder_desc',
    href: '/feature3',
  },
  {
    icon: <FaCheckSquare />, // Better icon
    titleKey: 'email_validation',
    descriptionKey: 'email_validation_desc',
    href: '/feature3',
  },
  {
    icon: <FaInfoCircle />, // Kept as it implies handling issues
    titleKey: 'handle_bounce_unsubscribe',
    descriptionKey: 'handle_bounce_unsubscribe_desc',
    href: '/feature3',
  },
  {
    icon: <FaChartBar />, // Better icon
    titleKey: 'detailed_analytics',
    descriptionKey: 'detailed_analytics_desc',
    href: '/feature3',
  },
  {
    icon: <FaPen />, // Better icon
    titleKey: 'wysiwyg_editor',
    descriptionKey: 'wysiwyg_editor_desc',
    href: '/feature3',
  },
  {
    icon: <FaNetworkWired />, // Better icon
    titleKey: 'marketing_automation',
    descriptionKey: 'marketing_automation_desc',
    href: '/feature3',
  },
  {
    icon: <FaEnvelopeOpenText />, // Better icon
    titleKey: 'email_tracking',
    descriptionKey: 'email_tracking_desc',
    href: '/feature3',
  },
  {
    icon: <FaUsers />, // Better icon
    titleKey: 'list_segmentation',
    descriptionKey: 'list_segmentation_desc',
    href: '/feature3',
  },
];

const Tool3 = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    // Section container with a light, airy background
    <div className={`py-16 sm:py-24 bg-gray-50 ${isRTL ? 'rtl' : ''}`}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* --- Step 2: Integrated Header Section for a clean and robust layout --- */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Using t() function for translatable text */}
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('all_tools_you_need_crm')}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {t('start_converting_leads_crm')}
          </p>
        </div>

        {/* --- Step 3: Dynamic Grid rendered from the data array --- */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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

export default Tool3;