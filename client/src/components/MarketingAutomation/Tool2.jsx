import React, { useEffect, useState } from "react";
import { FaServer, FaChartPie } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRobot,
  faWandMagicSparkles,
  faChartBar,
  faBolt,
  faCog,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import "./m.css"; // Your CSS file for the Pabbly icon
import { useTranslation } from "react-i18next";

// The data array remains the same - it's clean and efficient.
const featuresData = [
  {
    icon: <FontAwesomeIcon icon={faRobot} />,
    titleKey: 'create_stunning',
    descriptionKey: 'build_workflows',
    href: '/feature2',
  },
  {
    icon: <FontAwesomeIcon icon={faWandMagicSparkles} />,
    titleKey: 'ai_writer',
    descriptionKey: 'email_writer',
    href: '/feature2',
  },
  {
    icon: <FontAwesomeIcon icon={faChartBar} />,
    titleKey: 'detailed_analytics',
    descriptionKey: 'track_results',
    href: '/feature2',
  },
  {
    icon: <FaServer />,
    titleKey: 'api_integration',
    descriptionKey: 'use_api',
    href: '/feature2',
  },
  {
    icon: <FontAwesomeIcon icon={faBolt} />,
    titleKey: 'outgoing_webhooks',
    descriptionKey: 'instant_webhooks',
    href: '/feature2',
  },
  {
    icon: <FontAwesomeIcon icon={faCog} />,
    titleKey: 'zapier_integration',
    descriptionKey: 'connect_apps',
    href: '/feature2',
  },
  {
    icon: <div className="p-icon">P</div>,
    titleKey: 'pabbly_integration',
    descriptionKey: 'pabbly_integration_description',
    href: '/feature2',
  },
  {
    icon: <FontAwesomeIcon icon={faFilter} />,
    titleKey: 'filter',
    descriptionKey: 'filter_description',
    href: '/feature2',
  },
  {
    icon: <FaChartPie />,
    titleKey: 'customer_smtp_server',
    descriptionKey: 'customer_smtp_server_description',
    href: '/feature2',
  },
];

const Tool2 = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    // Section container with a light, airy background
    <div className={`py-16 sm:py-24 bg-gray-50 ${isRTL ? 'rtl' : ''}`}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('effortless_automation_title')}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {t('effortless_automation_description')}
          </p>
        </div>

        {/* Dynamic Grid of Feature Cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature, index) => (
            <a 
              key={index} 
              href={feature.href} 
              // Card styling focused purely on a clean, light aesthetic
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

export default Tool2;