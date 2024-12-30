import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCogs,
  faBullhorn,
  faReply,
  faGem,

} from '@fortawesome/free-solid-svg-icons';

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

const MarketingAgencies = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const cards = [
    {
      title: 'Integrate Your CRM',
      description:
        'Drive campaigns by integrating your favorite CRM - think of it as enterprise marketing management for email.',
      icon: faCogs,
    },
    {
      title: 'Personalized Promotions',
      description:
        'Design and send personalized offers at scale to maximize engagement using your CRM data.',
      icon: faBullhorn,
    },
    {
      title: 'Intelligent Auto-Response',
      description:
        'Auto-respond intelligently with automated email workflows built to follow logical sequences and escalate to sales teams when needed.',
      icon: faReply,
    },
    {
      title: 'Add to Your Agency Stack',
      description:
        'Seamlessly integrate with your existing tools, CRMs, Google Sheets, and other essential components of your software stack.',
      icon: faGem,
    },
    {
      title: 'Forget WhatsApp and SMS!',
      description:
        'Email remains a key channel. Attract and nurture leads with high-impact campaigns that deliver strong calls to action.',
      icon: faConfluence,  // Updated icon for WhatsApp
    },
    {
      title: 'Engage and Nurture',
      description:
        'Acquire, nurture, and upsell using powerful email automation, CRM integrations, and customer intelligence.',
      icon: faHandshake,  // Updated icon for engagement
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

export default MarketingAgencies;
