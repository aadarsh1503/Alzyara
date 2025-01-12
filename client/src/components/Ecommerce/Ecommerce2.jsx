import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCogs,
  faBullhorn,
  faReply,
  faGem,
  faShoppingCart,
  faHourglass,
  faHandsHelping,
  faTag,
  faMoneyBillAlt,
  faCheckCircle,
  faShoppingBag,

} from '@fortawesome/free-solid-svg-icons';
import { IoIosPaper } from 'react-icons/io';
import { faConfluence } from '@fortawesome/free-brands-svg-icons'; 
import { faHandshake } from '@fortawesome/free-solid-svg-icons';

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

const Ecommerce2 = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const cards = [
    {
      title: 'Share Your Catalog',
      description:
        'Use email to showcase your products and keep your customers updated with the latest stock information.',
      icon: faShoppingCart ,
    },
    {
      title: 'Fast Responses to offers',
      description:
        'Invite quick responses to your sales promotions, leveraging the high open rates of email marketing.',
      icon: faHourglass  ,
    },
    {
      title: 'Confirmation and Support',
      description:
        'Send automated order confirmations and billing updates, and provide support through automated email sequences.',
      icon: faHandsHelping,
    },
    {
      title: 'Personalized Promotions',
      description:
        'Send targeted email campaigns with personalized promotions based on customer purchase patterns or seasonal trends.',
      icon: faMoneyBillAlt,
    },
    {
      title: 'Loyalty Program Updates',
      description:
        'Enroll customers in your loyalty programs and keep them informed about points schemes and personalized special offers through email.',
      icon: faCheckCircle,  // Updated icon for WhatsApp
    },
    {
      title: 'In Stock & New Products',
      description:
        'Immediately alert customers when items are back in stock, and promote new products, upsell, and cross-sell through timely email notifications.',
      icon: faShoppingBag,  // Updated icon for engagement
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

export default Ecommerce2;
