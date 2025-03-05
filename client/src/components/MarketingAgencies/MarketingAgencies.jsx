import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCogs,
  faBullhorn,
  faReply,
  faGem,
} from '@fortawesome/free-solid-svg-icons';
import { faConfluence } from '@fortawesome/free-brands-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const Card = ({ title, description, icon, isHovered }) => {
  return (
    <div
      className={`transition-colors outline-black outline duration-300 border rounded-lg p-6 shadow-md ${
        isHovered ? 'bg-lgreen text-white' : 'bg-white text-gray-800'
      }`}
    >
      <div
        className={`flex items-center justify-center w-16 h-16 rounded-md mb-4 ${
          isHovered ? 'bg-lgreen text-white' : 'bg-gray-100 text-lgreen'
        }`}
      >
        <FontAwesomeIcon icon={icon} className="text-4xl" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

const MarketingAgencies = () => {
  const { t, i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(i18n.language === 'ar');
  useEffect(() => {
    setIsRTL(i18n.language === 'ar');
  }, [i18n.language]);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cards = [
    {
      title: t('integrate_your_crm'),
      description: t('integrate_your_crm_desc'),
      icon: faCogs,
    },
    {
      title: t('personalized_promotions'),
      description: t('personalized_promotions_desc'),
      icon: faBullhorn,
    },
    {
      title: t('intelligent_auto_response'),
      description: t('intelligent_auto_response_desc'),
      icon: faReply,
    },
    {
      title: t('add_to_your_agency_stack'),
      description: t('add_to_your_agency_stack_desc'),
      icon: faGem,
    },
    {
      title: t('forget_whatsapp_sms'),
      description: t('forget_whatsapp_sms_desc'),
      icon: faConfluence,
    },
    {
      title: t('engage_and_nurture'),
      description: t('engage_and_nurture_desc'),
      icon: faHandshake,
    },
  ];

  return (
    <div className="grid grid-cols-1 max-w-5xl mx-auto md:grid-cols-2 gap-6 p-8 bg-gray-50">
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

export default MarketingAgencies;
