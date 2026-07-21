import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

export const faqs = [
  {
    question: 'How far in advance should I book a move?',
    answer: 'We recommend booking as early as possible, especially for peak seasonal periods. Early booking helps us reserve the ideal time and crew for your move.',
  },
  {
    question: 'Do you provide packing materials?',
    answer: 'Yes. We offer packing supplies and can also provide full packing services if you prefer a hands-off experience.',
  },
  {
    question: 'Do you serve all cities in Saudi Arabia?',
    answer: 'We cover major cities and regional routes throughout Saudi Arabia, including Riyadh, Jeddah, Dammam, Khobar, Jubail, and more.',
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="scroll-mt-24 bg-[#102a4b]/90 py-24" aria-label="Frequently asked questions">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-accent">FAQ</p>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Frequently asked questions</h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-200">Everything you need to know before planning your move with Abu Usman Movers.</p>
          </motion.div>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-semibold text-gray-900">{item.question}</span>
                  <FaChevronDown className={`text-accent transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && <div className="px-6 pb-6 text-gray-600">{item.answer}</div>}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
