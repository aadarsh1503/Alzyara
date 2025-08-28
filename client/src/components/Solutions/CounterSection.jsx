import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";

// Using modern, sleek icons from Heroicons
import { HiOutlineInboxIn, HiOutlineSparkles, HiOutlineChartBar, HiOutlineClock } from "react-icons/hi";

// Data is now in an array for cleaner, more maintainable code
const statsData = [
  {
    id: 1,
    icon: <HiOutlineInboxIn className="h-8 w-8" />,
    end: 3000,
    suffix: "+",
    label: "clients_served",
  },
  {
    id: 2,
    icon: <HiOutlineSparkles className="h-8 w-8" />,
    end: 98,
    suffix: "%",
    label: "customer_satisfaction",
  },
  {
    id: 3,
    icon: <HiOutlineChartBar className="h-8 w-8" />,
    end: 25,
    suffix: "%",
    label: "engagement_increase",
  },
  {
    id: 4,
    icon: <HiOutlineClock className="h-8 w-8" />,
    end: 40,
    suffix: "%",
    label: "time_saved",
  },
];

const CounterSection = () => {
  const { t, i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const isRTL = i18n.language === 'ar';

  // --- MODIFIED useEffect HOOK ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // Set visibility based on whether the element is intersecting
        // This will be true when it enters the viewport and false when it leaves
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup function to unobserve when the component is unmounted
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <div
      ref={sectionRef}
      id="stats-section"
      className={`relative py-20 sm:py-24 ${isRTL ? "rtl" : ""
        } bg-slate-50 dark:bg-slate-900 transition-colors duration-500`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {statsData.map((stat) => (
            <div
              key={stat.id}
              className="group relative transform-gpu overflow-hidden rounded-2xl border 
                         border-slate-200/50 bg-white/30 p-6 backdrop-blur-xl transition-all duration-300
                         hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/10
                         dark:border-slate-100/10 dark:bg-slate-800/20 dark:hover:shadow-teal-400/20"
            >
              <div className="absolute top-0 left-1/2 -ml-32 h-64 w-64
                             bg-gradient-to-br from-teal-500 to-sky-400
                             rounded-full opacity-0 blur-3xl transition-all duration-500
                             group-hover:opacity-10 dark:group-hover:opacity-20"
              />
              <div className="relative mb-4 inline-flex items-center justify-center rounded-lg 
                             bg-teal-500/10 p-4 text-teal-500 dark:text-teal-400">
                {stat.icon}
              </div>
              <h2 className="text-5xl font-bold text-slate-800 dark:text-white">
                {/* 
                  When isVisible becomes true, CountUp mounts and animates.
                  When isVisible becomes false, it unmounts.
                  On the next mount, it starts fresh.
                */}
                {isVisible && (
                  <CountUp start={0} end={stat.end} duration={3} separator="," />
                )}
                {/* If not visible, we can show a placeholder or nothing */}
                {!isVisible && <span>0</span>}
                <span className="text-teal-500 dark:text-teal-400">{stat.suffix}</span>
              </h2>
              <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">
                {t(stat.label)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounterSection;