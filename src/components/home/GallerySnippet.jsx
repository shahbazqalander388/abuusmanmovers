import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const galleryMedia = [
  { type: 'image', src: '/gallery/gallery-image-01.jpeg', alt: 'Professional movers loading furniture' },
  { type: 'image', src: '/gallery/gallery-image-02.jpeg', alt: 'Carefully packed moving boxes' },
  { type: 'image', src: '/gallery/gallery-image-03.jpeg', alt: 'Team preparing for office relocation' },
  { type: 'image', src: '/gallery/gallery-image-04.jpeg', alt: 'Moving services in progress' },
  { type: 'image', src: '/gallery/gallery-image-05.jpeg', alt: 'Secure packing and transport' },
  { type: 'image', src: '/gallery/gallery-image-06.jpeg', alt: 'Heavy furniture removal' },
  { type: 'image', src: '/gallery/gallery-image-07.jpeg', alt: 'Careful loading of belongings' },
  { type: 'image', src: '/gallery/gallery-image-08.jpeg', alt: 'Warehouse and logistics support' },
  { type: 'image', src: '/gallery/gallery-image-09.jpeg', alt: 'Completed residential move' },
  { type: 'video', src: '/gallery/gallery-video-01.mp4', alt: 'Moving team video preview' },
  { type: 'video', src: '/gallery/gallery-video-02.mp4', alt: 'Secure loading process video' },
  { type: 'video', src: '/gallery/gallery-video-03.mp4', alt: 'Truck transport in action' },
  { type: 'video', src: '/gallery/gallery-video-04.mp4', alt: 'Final delivery and setup' },
];

const GallerySnippet = () => {
  return (
    <section id="gallery" className="scroll-mt-24 bg-gray-50 py-24" aria-label="Gallery preview">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-accent">Gallery</h4>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">A glimpse of our moving expertise</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">From household moves to corporate relocations, our team delivers a smooth and secure experience.</p>
          </motion.div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {galleryMedia.map((item, index) => (
            <motion.div
              key={item.alt}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="overflow-hidden rounded-3xl shadow-lg bg-black"
            >
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <video
                  src={item.src}
                  controls
                  className="h-64 w-full object-cover"
                />
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-semibold text-white transition-colors hover:bg-primary-light">
            Request a quote
            <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySnippet;
