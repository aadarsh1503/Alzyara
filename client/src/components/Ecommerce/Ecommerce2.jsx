import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingCart,
  faHourglass,
  faHandsHelping,
  faMoneyBillAlt,
  faCheckCircle,
  faShoppingBag,
} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next'; // Importing translation hook

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
        <FontAwesomeIcon icon={icon} className="text-4xl " />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

const Ecommerce2 = () => {
  const { t } = useTranslation(); // Hook for translation
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const cards = [
    {
      title: t('share_your_catalog'), // Translated key for title
      description: t('share_catalog_description'), // Translated key for description
      icon: faShoppingCart,
    },
    {
      title: t('fast_responses_to_offers'),
      description: t('fast_responses_description'),
      icon: faHourglass,
    },
    {
      title: t('confirmation_and_support'),
      description: t('confirmation_support_description'),
      icon: faHandsHelping,
    },
    {
      title: t('personalized_promotions'),
      description: t('personalized_promotions_description'),
      icon: faMoneyBillAlt,
    },
    {
      title: t('loyalty_program_updates'),
      description: t('loyalty_program_description'),
      icon: faCheckCircle,
    },
    {
      title: t('in_stock_new_products'),
      description: t('in_stock_description'),
      icon: faShoppingBag,
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

export default Ecommerce2;
