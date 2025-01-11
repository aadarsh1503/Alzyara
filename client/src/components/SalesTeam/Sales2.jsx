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

const Sales2 = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const cards = [
    {
      title: 'Lead Management',
      description:
        'Engage and attract new students through targeted email campaigns  with your CRM to broadcast marketing messages effectively.',
      icon: faCogs,
    },
    {
      title: 'Instant Problem Resolution',
      description:
        'Provide quick answers with automated email responses and escalate to support teams when human intervention is needed.',
      icon: faBullhorn,
    },
    {
      title: 'Support for Admissions',
      description:
        'Guide parents through your admissions process with personalized email workflows that ensure students sign up correctly.',
      icon: faReply,
    },
    {
      title: 'Onboarding Support',
      description:
        'Provide instant information to assist students in completing your onboarding process easily through automated email sequences.',
      icon: faGem,
    },
    {
      title: 'Timely class Reminders',
      description:
        'Send students automated email reminders of timetables and classes, ensuring they never miss an important session.',
      icon: faConfluence,  // Updated icon for WhatsApp
    },
    {
      title: 'Student Reports',
      description:
        'Instantly deliver reports and exam results to students and parents with automated email notifications.',
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

export default Sales2;
