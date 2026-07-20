import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaClock, FaHandsHelping, FaMapMarkedAlt } from 'react-icons/fa';

const features = [
  { icon: <FaShieldAlt />, title: 'Safe & Secure', description: 'We protect your belongings with professional packing and careful handling.' },
  { icon: <FaClock />, title: 'On-Time Delivery', description: 'Punctual service and transparent scheduling for every move.' },
  { icon: <FaHandsHelping />, title: 'Expert Team', description: 'Experienced movers who understand the demands of every relocation.' },
  { icon: <FaMapMarkedAlt />, title: 'Wide Coverage', description: 'Serving major cities across Saudi Arabia with reliable transport.' },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="scroll-mt-24 bg-white py-24" aria-label="Why choose us">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-accent">Why Choose Us</h4>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Trusted moving solutions built around your comfort</h2>
            <p className="text-lg text-gray-600">We combine local expertise, careful planning, and professional service to make every relocation stress-free.</p>
          </motion.div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-3xl border border-gray-100 bg-gray-50 p-8 text-center shadow-sm"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-2xl text-accent">
                {feature.icon}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
