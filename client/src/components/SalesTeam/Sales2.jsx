import React from 'react';
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
        className={`flex items-center  justify-center w-16 h-16 rounded-md mb-4 ${
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
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const cards = [
    {
      title: 'Email Sign-Up Forms',
      description:
        'Add an email sign-up form on your website, Facebook, and Instagram ads to capture queries from highly qualified leads.',
      icon: <FaEnvelope className="text-4xl" />,
    },
    {
      title: 'Automated Email Sequences',
      description:
        'Initiate automated email  right after sign-up with Alzyara easy-to-build email workflows using a drag-and-drop interface.',
      icon: <FaNetworkWired  className="text-4xl" />,
    },
    {
      title: 'Build Relationships Fast',
      description:
        'Guide parents through your admissions process with personalized email workflows that ensure students sign up correctly.',
      icon: <FaPhone className="text-4xl" />,
    },
    {
      title: 'Route Qualified Leads',
      description:
        'Provide instant information to assist students in completing your onboarding process easily through automated email sequences.',
      icon: <FaGem className="text-4xl" />,
    },
    {
      title: 'Personalized Promotions',
      description:
        'Send students automated email reminders of timetables and classes, ensuring they never miss an important session.',
      icon: <FaHandshake  className="text-4xl" />,
    },
    {
      title: 'Integrate Your Tools',
      description:
        'Instantly deliver reports and exam results to students and parents with automated email notifications.',
      icon: <FaCogs  shake className="text-4xl" />,
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
