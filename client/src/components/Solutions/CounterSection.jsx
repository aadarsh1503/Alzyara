import React, { useState, useEffect } from "react";
import CountUp from "react-countup";

const CounterSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById("stats-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <div
      id="stats-section"
      className="bg-lgreen mt-4 text-white py-16 flex justify-center items-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-32 text-center">
        <div>
          <h2 className="text-5xl font-bold">
            {isVisible && (
              <CountUp start={0} end={3000} duration={3} separator="," />
            )}
            <span className="text-green-300">+</span>
          </h2>
          <p className="text-lg mt-2">Clients Served</p>
        </div>
        <div>
          <h2 className="text-5xl font-bold">
            {isVisible && <CountUp start={0} end={98} duration={3} />}%
          </h2>
          <p className="text-lg mt-2">Customer Satisfaction</p>
        </div>
        <div>
          <h2 className="text-5xl font-bold">
            {isVisible && <CountUp start={0} end={25} duration={3} />}%
          </h2>
          <p className="text-lg mt-2">Engagement Increase</p>
        </div>
        <div>
          <h2 className="text-5xl font-bold">
            {isVisible && <CountUp start={0} end={40} duration={3} />}%
          </h2>
          <p className="text-lg mt-2">Time Saved</p>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;