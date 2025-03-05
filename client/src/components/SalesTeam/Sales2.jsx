import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaBullhorn, FaReply, FaGem, FaHandshake, FaEnvelope, FaNetworkWired, FaPhone, FaCogs } from 'react-icons/fa';
import { FaConfluence } from 'react-icons/fa'; 

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
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

const Sales2 = () => {
  const { t, i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(i18n.language === 'ar');
  useEffect(() => {
    setIsRTL(i18n.language === 'ar');
  }, [i18n.language]);

  
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const cards = [
    {
      title: t('email_sign_up_forms'),
      description: t('email_signup_description'),
      icon: <FaEnvelope className="text-4xl" />,
    },
    {
      title: t('automated_email_sequences'),
      description: t('automated_email_description'),
      icon: <FaNetworkWired  className="text-4xl" />,
    },
    {
      title: t('build_relationships_fast'),
      description: t('build_relationships_description'),
      icon: <FaPhone className="text-4xl" />,
    },
    {
      title: t('route_qualified_leads'),
      description: t('route_qualified_leads_description'),
      icon: <FaGem className="text-4xl" />,
    },
    {
      title: t('personalized_promotions'),
      description: t('personalized_promotions_description'),
      icon: <FaHandshake  className="text-4xl" />,
    },
    {
      title: t('integrate_your_tools'),
      description: t('integrate_your_tools_description'),
      icon: <FaCogs shake className="text-4xl" />,
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

export default Sales2;
