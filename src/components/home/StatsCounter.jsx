import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useSpring, useTransform } from 'framer-motion';
import { FaSmile, FaTruck, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const AnimatedNumber = ({ end, suffix }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const springValue = useSpring(0, { duration: 2500, bounce: 0 });
  const displayValue = useTransform(springValue, (current) => Math.floor(current) + suffix);

  useEffect(() => {
    if (inView && !hasAnimated) {
      springValue.set(end);
      setHasAnimated(true);
    }
  }, [inView, end, springValue, hasAnimated]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
};

const StatsCounter = () => {
  const { t } = useTranslation();

  const stats = [
    { id: 1, icon: <FaSmile aria-hidden="true" />, end: 1500, suffix: "+", title: t('home.statHappyClients') },
    { id: 2, icon: <FaTruck aria-hidden="true" />, end: 3200, suffix: "+", title: t('home.statSuccessfulMoves') },
    { id: 3, icon: <FaMapMarkerAlt aria-hidden="true" />, end: 6, suffix: "", title: t('home.statCitiesCovered') },
    { id: 4, icon: <FaUsers aria-hidden="true" />, end: 45, suffix: "+", title: t('home.statProfessionalStaff') },
  ];

  return (
    <section className="relative py-20 overflow-hidden" aria-label="Company statistics">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1586528116311-ad8ed7e66a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")' }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-primary/90 mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-white text-center">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center p-4">
              <div className="text-4xl md:text-5xl mb-4 text-accent-light opacity-80" aria-hidden="true">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-extrabold mb-2">
                <AnimatedNumber end={stat.end} suffix={stat.suffix} />
              </div>
              <div className="text-sm md:text-base font-medium tracking-wider uppercase text-gray-200">
                {stat.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
