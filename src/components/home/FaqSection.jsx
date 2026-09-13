import React, { useState } from 'react';
import { m } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { HIGH_CONVERTING_FAQS } from '../../data/seoSchemaData';

const FaqSection = () => {
  const { i18n } = useTranslation();
  const [openIndex, setOpenIndex] = useState(0);
  const isAr = i18n.language === 'ar';

  return (
    <section id="faq" className="scroll-mt-24 bg-[#102a4b]/90 py-24" aria-label="Frequently asked questions">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-accent">
              {isAr ? 'الأسئلة الشائعة' : 'FAQ'}
            </p>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              {isAr ? 'الأسئلة الأكثر تداولاً عن نقل العفش' : 'Frequently Asked Questions'}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-200">
              {isAr
                ? 'كل ما تحتاج لمعرفته قبل حجز خدمة نقل الأثاث وتغليف العفش مع خبراء أبو عثمان.'
                : 'Everything you need to know before planning your move with Abu Usman Movers.'}
            </p>
          </m.div>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {HIGH_CONVERTING_FAQS.map((item, index) => {
            const isOpen = openIndex === index;
            const questionText = isAr && item.questionAr ? item.questionAr : item.question;
            const answerText = item.answer;

            return (
              <m.div
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-start transition-colors hover:bg-slate-50"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-gray-900 text-base md:text-lg pr-4">
                    {questionText}
                  </span>
                  <FaChevronDown
                    className={`text-accent shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed text-sm md:text-base border-t border-gray-100 pt-4">
                    {answerText}
                  </div>
                )}
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
