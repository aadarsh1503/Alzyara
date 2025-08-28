import React, { useEffect, useState } from "react";
import i1 from "./i1.webp"; // Your mockup image
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, MousePointerClick, Smartphone } from "lucide-react"; // Modern icons

const MarketingSection = () => {
  const { t, i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(i18n.language === 'ar');
  const [hoveredFeature, setHoveredFeature] = useState(null);

  useEffect(() => {
    setIsRTL(i18n.language === 'ar');
  }, [i18n.language]);

  const features = [
    {
      icon: <MousePointerClick size={24} />,
      title: t('user_friendly_interface'),
      description: t('user_friendly_desc'),
      position: { top: '20%', left: '15%' }
    },
    {
      icon: <Palette size={24} />,
      title: t('customizable_elements'),
      description: t('customizable_desc'),
      position: { top: '50%', left: '60%' }
    },
    {
      icon: <Smartphone size={24} />,
      title: t('mobile_responsive_designs'),
      description: t('mobile_responsive_desc'),
      position: { top: '75%', left: '25%' }
    }
  ];

  return (
    <div className="relative overflow-hidden bg-white py-20 sm:py-28">
      {/* Soft, glowing background gradients */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-parrot/5 rounded-full blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[50rem] h-[50rem] bg-cyan-500/5 rounded-full blur-3xl" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-semibold text-base leading-7 text-lgreen">{t('powerful_email_designer')}</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {t('create_stunning')} <span className="text-lgreen">{t('personalized_email_designs')}</span> {t('in_minutes')}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            {t('design_description')}
          </p>
        </motion.div>

        {/* Interactive Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Feature List */}
          <motion.div 
            className="flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.2 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${isRTL ? 'text-right' : 'text-left'} ${
                  hoveredFeature === index
                    ? 'bg-green-50/70 ring-2 ring-lgreen shadow-xl'
                    : 'bg-gray-50/50 ring-1 ring-gray-200'
                }`}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${hoveredFeature === index ? 'bg-lgreen text-white' : 'bg-green-100 text-lgreen'}`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side: Interactive Mockup */}
          <motion.div 
            className="relative w-full aspect-[4/3] flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.3 }}
          >
            <div className="w-full h-full bg-white rounded-2xl shadow-2xl shadow-gray-900/10 ring-1 ring-gray-900/5 p-2">
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <img src={i1} alt={t('email_preview_alt')} className="w-full h-full object-cover" />

                <AnimatePresence>
                  {hoveredFeature !== null && (
                    <motion.div
                      className="absolute p-3 bg-white/70 backdrop-blur-md rounded-lg shadow-lg flex items-center gap-3 text-lgreen"
                      style={{
                        top: features[hoveredFeature].position.top,
                        left: features[hoveredFeature].position.left,
                        transform: 'translate(-50%, -50%)',
                      }}
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.7 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    >
                      {features[hoveredFeature].icon}
                      <span className="font-semibold text-sm">{features[hoveredFeature].title}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>
          </motion.div>

        </div>

        <motion.button 
          className="mt-16 bg-lgreen text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg shadow-green-500/30 transform transition-all"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {t('create_free_account')}
        </motion.button>
      </div>
    </div>
  );
};

export default MarketingSection;