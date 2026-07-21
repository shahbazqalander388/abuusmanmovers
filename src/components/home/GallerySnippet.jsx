import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import ResponsiveImage from '../../components/ResponsiveImage';

const galleryMedia = [  { type: 'image', src: 'https://res.cloudinary.com/dai2g47e4/image/upload/v1784590172/gallery-image-01_k2znzs.jpg', alt: 'Professional movers loading furniture' },
  { type: 'image', src: 'https://res.cloudinary.com/dai2g47e4/image/upload/v1784590172/gallery-image-02_oply7y.jpg', alt: 'Carefully packed moving boxes' },
  { type: 'image', src: 'https://res.cloudinary.com/dai2g47e4/image/upload/v1784590173/gallery-image-03_qc3flt.jpg', alt: 'Team preparing for office relocation' },
  { type: 'image', src: 'https://res.cloudinary.com/dai2g47e4/image/upload/v1784590173/gallery-image-04_kogsg8.jpg', alt: 'Moving services in progress' },
  { type: 'image', src: 'https://res.cloudinary.com/dai2g47e4/image/upload/v1784590173/gallery-image-05_h5z1jm.jpg', alt: 'Secure packing and transport' },
  { type: 'image', src: 'https://res.cloudinary.com/dai2g47e4/image/upload/v1784590174/gallery-image-06_oaw9zv.jpg', alt: 'Heavy furniture removal' },
  { type: 'image', src: 'https://res.cloudinary.com/dai2g47e4/image/upload/v1784590173/gallery-image-07_jsymgz.jpg', alt: 'Careful loading of belongings' },
  { type: 'image', src: 'https://res.cloudinary.com/dai2g47e4/image/upload/v1784590175/gallery-image-09_qnups5.jpg', alt: 'Completed residential move' },
  { type: 'video', src: 'https://res.cloudinary.com/dai2g47e4/video/upload/v1784590206/gallery-video-01_t8sapb.mp4', alt: 'Moving team video preview' },
  { type: 'video', src: 'https://res.cloudinary.com/dai2g47e4/video/upload/v1784590195/gallery-video-02_jb9366.mp4', alt: 'Secure loading process video' },
  { type: 'video', src: 'https://res.cloudinary.com/dai2g47e4/video/upload/v1784590203/gallery-video-03_jg8xnj.mp4', alt: 'Truck transport in action' },
  { type: 'video', src: 'https://res.cloudinary.com/dai2g47e4/video/upload/v1784590195/gallery-video-04_flm4hi.mp4', alt: 'Final delivery and setup' },
];

const LazyVideo = ({ src, alt }) => {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: '200px' });

  return (
    <div ref={ref} className="h-64 w-full bg-gray-900">
      {inView ? (
        <video
          src={src}
          controls
          preload="none"
          className="h-64 w-full object-cover"
          aria-label={alt}
        />
      ) : (
        <div className="flex h-64 w-full items-center justify-center text-sm text-gray-400" aria-hidden="true">
          Loading video...
        </div>
      )}
    </div>
  );
};

const GallerySnippet = () => {  return (
    <section id="gallery" className="scroll-mt-24 bg-[#102a4b]/80 py-24" aria-label="Gallery preview">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-accent">Gallery</p>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">A glimpse of our moving expertise</h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-200">From household moves to corporate relocations, our team delivers a smooth and secure experience.</p>
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
                <ResponsiveImage
                  src={item.src}
                  alt={item.alt}
                  className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                  widths={[360, 720, 1200]}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  width={800}
                  height={600}
                />
              ) : (
                <LazyVideo src={item.src} alt={item.alt} />
              )}            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-green-700 px-7 py-3 font-semibold text-white transition-colors hover:bg-green-800">
            Request a quote
            <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySnippet;
