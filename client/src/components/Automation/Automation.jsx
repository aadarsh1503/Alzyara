import React, { useEffect, useState } from "react";
import i1 from "./i1.png";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { TrendingUp, BarChart3, Users } from "lucide-react"; // Icons for data cards

const Automation = () => {
  const { t, i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(i18n.language === 'ar');
  useEffect(() => {
    setIsRTL(i18n.language === 'ar');
  }, [i18n.language]);

  const animatedMetrics = [
    { icon: <TrendingUp size={20} />, value: '98%', label: 'Open Rate', position: { top: '60%', left: '10%' }, delay: 0 },
    { icon: <BarChart3 size={20} />, value: '24%', label: 'CTR', position: { top: '40%', left: '80%' }, delay: 1.5 },
    { icon: <Users size={20} />, value: '1.2k', label: 'Leads', position: { top: '75%', left: '50%' }, delay: 3 },
  ];

  const mainFeatures = [
    { key: 'real_time_data', desc: 'real_time_data_desc' },
    { key: 'comprehensive_insights', desc: 'comprehensive_insights_desc' },
    { key: 'visual_reports', desc: 'visual_reports_desc' }
  ];

  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white overflow-hidden py-20 md:py-28">
      {/* Background Glows */}
      <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-parrot/5 rounded-full blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-cyan-400/5 rounded-full blur-3xl" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 items-center">
          
          {/* Left Side: The Visual Hub with Animated Metrics */}
          <div className={`relative h-96 flex items-center justify-center ${isRTL ? 'md:order-2' : 'md:order-1'}`}>
            <motion.div
              className="absolute w-[90%] max-w-lg rounded-xl shadow-2xl shadow-gray-900/10"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <img src={i1} alt={t('email_preview_alt')} className="w-full h-auto rounded-xl" />
            </motion.div>

            {/* The emerging metric cards */}
            {animatedMetrics.map((metric, i) => (
              <motion.div
                key={i}
                className="absolute flex items-center gap-3 p-3 bg-white/60 backdrop-blur-md rounded-xl shadow-lg ring-1 ring-black/5"
                style={{ top: metric.position.top, left: metric.position.left, transform: 'translateX(-50%)' }}
                animate={{
                  y: [0, -120, -120, 0],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 5,
                  delay: metric.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.8, 1]
                }}
              >
                <div className="text-lgreen p-2 bg-green-100 rounded-lg">{metric.icon}</div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">{metric.value}</p>
                  <p className="text-xs text-gray-600">{metric.label}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side: The Content */}
          <motion.div 
            className={`${isRTL ? 'md:order-1 text-right' : 'md:order-2 text-left'}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.15 }}
          >
            <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="font-semibold text-sm text-green-700 py-1 px-3 mb-4 bg-green-100 rounded-full inline-block">{t('email_tracker')}</motion.p>
            
            <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
              <span className="relative inline-block">
                {t('collect_actionable_data')}
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-3 md:h-4 bg-parrot -z-10"
                  style={{ transformOrigin: isRTL ? 'right' : 'left' }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, ease: [0.12, 0, 0.39, 0], delay: 0.4 }}
                ></motion.span>
              </span>
              <span> {t('from_your_emails')}</span>
            </motion.h2>

            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mt-6 text-lg text-gray-600 max-w-xl">
              {t('track_email_campaign')}
            </motion.p>

            <motion.ul variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mt-8 space-y-5">
              {mainFeatures.map((item) => (
                <li key={item.key} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="flex-shrink-0 flex items-center justify-center text-white w-6 h-6 mt-1 rounded-full bg-lgreen">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-800">
                    <strong className="font-semibold text-gray-900">{t(item.key)}:</strong> {t(item.desc)}
                  </span>
                </li>
              ))}
            </motion.ul>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className={`mt-10 flex ${isRTL ? 'justify-end' : 'justify-start'}`}>
              <motion.button 
                className="bg-lgreen text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg shadow-green-500/20"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('create_free_account')}
              </motion.button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Automation;