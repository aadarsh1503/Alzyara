// src/Market2.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCogs,
  faBullhorn,
  faReply,
  faGem,
  faHeadphones,
  faCalendar,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons';

import { faConfluence } from '@fortawesome/free-brands-svg-icons'; 
import { faHandshake, faUser, faTools } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const Card = ({ title, description, icon, isHovered }) => {
  return (
    <div
      className={`transition-colors outline-black outline duration-300 border rounded-lg p-6 shadow-md ${
        isHovered ? 'bg-lgreen text-white' : 'bg-white text-gray-800'
      }`}
    >
      <div
        className={`flex items-center  justify-center w-16 h-16 rounded-md mb-4 ${
          isHovered ? 'bg-lgreen text-white' : 'bg-gray-100 text-lgreen'
        }`}
      >
        <FontAwesomeIcon icon={icon} className="text-4xl " />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

const Market2 = () => {
  const { t } = useTranslation(); // hook to access translation function
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const cards = [
    {
      title: t('lead_management'),
      description:
        t('lead_management_desc'),
      icon: faUser,
    },
    {
      title: t('instant_problem_resolution'),
      description:
        t('instant_problem_resolution_desc'),
      icon: faTools,
    },
    {
      title: t('support_for_admissions'),
      description:
        t('support_for_admissions_desc'),
      icon: faReply,
    },
    {
      title: t('onboarding_support'),
      description:
        t('onboarding_support_desc'),
      icon: faHeadphones,
    },
    {
      title: t('timely_class_reminders'),
      description:
        t('timely_class_reminders_desc'),
      icon: faCalendar,
    },
    {
      title: t('student_reports'),
      description:
        t('student_reports_desc'),
      icon: faChartLine,
    },
  ];

  return (
    <div className="grid grid-cols-1  max-w-5xl mx-auto md:grid-cols-2 gap-6 p-8  bg-gray-50">
      {cards.map((card, index) => (
        <div
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Card
            title={card.title}
            description={card.description}
            icon={card.icon}
            isHovered={hoveredIndex === index}
          />
        </div>
      ))}
    </div>
  );
};

export default Market2;
