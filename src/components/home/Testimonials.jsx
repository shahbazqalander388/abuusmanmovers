import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    quote: 'They were punctual, professional, and made our move feel effortless. Highly recommended.',
    name: 'Ahmed Al-Saud',
    role: 'Home Relocation',
  },
  {
    quote: 'The team handled our office move with care and efficiency. Everything arrived safely.',
    name: 'Sarah Khan',
    role: 'Corporate Move',
  },
  {
    quote: 'Excellent communication and great service from start to finish. We will call them again.',
    name: 'Omar Nasser',
    role: 'Villa Move',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="scroll-mt-24 bg-[#102a4b]/80 py-24" aria-label="Testimonials">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-accent">Testimonials</p>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">What our clients say</h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-200">Trusted by families and businesses across Saudi Arabia for reliable moving support.</p>
          </motion.div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm"
            >
              <div className="mb-4 flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <FaStar key={starIndex} />
                ))}
              </div>
              <p className="mb-6 text-gray-700">“{item.quote}”</p>
              <div>
                <h3 className="font-semibold text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
