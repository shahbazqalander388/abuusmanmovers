import React, { useMemo, useState } from 'react';
import { m } from 'framer-motion';
import { FaTruckMoving, FaBoxOpen, FaShieldAlt, FaHome, FaClock, FaHandsHelping, FaCamera, FaImages, FaPlay } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { COMPANY_DETAILS } from '../utils/constants';
import ResponsiveImage from '../components/ResponsiveImage';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const HIGHLIGHT_KEYS = [
  { key: 'expertCrew', icon: <FaTruckMoving />, color: 'from-blue-500 to-blue-700' },
  { key: 'premiumPacking', icon: <FaBoxOpen />, color: 'from-indigo-500 to-indigo-700' },
  { key: 'insured', icon: <FaShieldAlt />, color: 'from-cyan-500 to-cyan-700' },
  { key: 'residential', icon: <FaHome />, color: 'from-sky-500 to-sky-700' },
  { key: 'onTime', icon: <FaClock />, color: 'from-teal-500 to-teal-700' },
  { key: 'support', icon: <FaHandsHelping />, color: 'from-emerald-500 to-emerald-700' },
];

const GALLERY_ITEMS = [
  {
    filename: 'gallery-image-01_k2znzs.jpg',
    src: 'https://res.cloudinary.com/dai2g47e4/image/upload/v1784590172/gallery-image-01_k2znzs.jpg',
    type: 'image',
    alt: 'Professional movers loading furniture',
  },
  {
    filename: 'gallery-image-02_oply7y.jpg',
    src: 'https://res.cloudinary.com/dai2g47e4/image/upload/v1784590172/gallery-image-02_oply7y.jpg',
    type: 'image',
    alt: 'Carefully packed moving boxes',
  },
  {
    filename: 'gallery-image-03_qc3flt.jpg',
    src: 'https://res.cloudinary.com/dai2g47e4/image/upload/v1784590173/gallery-image-03_qc3flt.jpg',
    type: 'image',
    alt: 'Team preparing for office relocation',
  },
  {
    filename: 'gallery-image-04_kogsg8.jpg',
    src: 'https://res.cloudinary.com/dai2g47e4/image/upload/v1784590173/gallery-image-04_kogsg8.jpg',
    type: 'image',
    alt: 'Moving services in progress',
  },
  {
    filename: 'gallery-image-05_h5z1jm.jpg',
    src: 'https://res.cloudinary.com/dai2g47e4/image/upload/v1784590173/gallery-image-05_h5z1jm.jpg',
    type: 'image',
    alt: 'Secure packing and transport',
  },
  {
    filename: 'gallery-image-06_oaw9zv.jpg',
    src: 'https://res.cloudinary.com/dai2g47e4/image/upload/v1784590174/gallery-image-06_oaw9zv.jpg',
    type: 'image',
    alt: 'Heavy furniture removal',
  },
  {
    filename: 'gallery-image-07_jsymgz.jpg',
    src: 'https://res.cloudinary.com/dai2g47e4/image/upload/v1784590173/gallery-image-07_jsymgz.jpg',
    type: 'image',
    alt: 'Careful loading of belongings',
  },
  {
    filename: 'gallery-image-09_qnups5.jpg',
    src: 'https://res.cloudinary.com/dai2g47e4/image/upload/v1784590175/gallery-image-09_qnups5.jpg',
    type: 'image',
    alt: 'Completed residential move',
  },
  {
    filename: 'gallery-video-01_t8sapb.mp4',
    src: 'https://res.cloudinary.com/dai2g47e4/video/upload/q_auto,f_auto/v1784590206/gallery-video-01_t8sapb.mp4',
    type: 'video',
    alt: 'Moving team video preview',
  },
  {
    filename: 'gallery-video-02_jb9366.mp4',
    src: 'https://res.cloudinary.com/dai2g47e4/video/upload/q_auto,f_auto/v1784590195/gallery-video-02_jb9366.mp4',
    type: 'video',
    alt: 'Secure loading process video',
  },
  {
    filename: 'gallery-video-03_jg8xnj.mp4',
    src: 'https://res.cloudinary.com/dai2g47e4/video/upload/q_auto,f_auto/v1784590203/gallery-video-03_jg8xnj.mp4',
    type: 'video',
    alt: 'Truck transport in action',
  },
  {
    filename: 'gallery-video-04_flm4hi.mp4',
    src: 'https://res.cloudinary.com/dai2g47e4/video/upload/q_auto,f_auto/v1784590195/gallery-video-04_flm4hi.mp4',
    type: 'video',
    alt: 'Final delivery and setup',
  },
];

const imageExtensions = ['jpg', 'jpeg', 'png', 'webp'];
const videoExtensions = ['mp4', 'webm', 'mov'];

const VIDEO_POSTER = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720"><rect width="1280" height="720" fill="#0f172a"/><circle cx="640" cy="360" r="110" fill="#111b36"/><polygon points="600,520 600,200 860,360" fill="#fff"/></svg>';

const Gallery = () => {
  const { t } = useTranslation();
  const [activeMedia, setActiveMedia] = useState(null);

  const galleryItems = useMemo(
    () =>
      GALLERY_ITEMS.map((item) => ({
        ...item,
      })),
    [],
  );

  return (
    <>
      <SEO
        title={t('seo.galleryTitle')}
        description={t('seo.galleryDesc')}
        path="/gallery"
      />

      {/* Page Header */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden" aria-label="Page header">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <m.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {t('gallery.pageTitle')}
          </m.h1>
          <m.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-accent-light"
            aria-label="Breadcrumb"
          >
            <span>{t('navbar.home')}</span>
            <span aria-hidden="true">/</span>
            <span className="text-white">{t('gallery.breadcrumb')}</span>
          </m.nav>
        </div>
      </section>

      {/* Photo Gallery Placeholder Grid */}
      <section className="py-20 bg-white" aria-label="Photo gallery">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-accent font-semibold tracking-wider uppercase mb-2 flex items-center justify-center gap-2">
                <FaImages aria-hidden="true" />
                {t('gallery.photosSubtitle')}
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {t('gallery.photosTitle')}
              </h2>
              <p className="text-gray-600 text-lg">
                {t('gallery.photosIntro')}
              </p>
            </m.div>
          </div>

          {/* Gallery Grid */}
          <m.div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {galleryItems.map((item) => (
              <m.div
                key={item.filename}
                variants={itemVariants}
                className="group overflow-hidden rounded-[24px] bg-white shadow-sm border border-gray-100 min-h-[280px]"
              >
                {item.type === 'image' ? (
                  <button
                    type="button"
                    onClick={() => setActiveMedia(item)}
                    className="relative block w-full h-full overflow-hidden rounded-[24px]"
                    aria-label={t('gallery.openMedia', { name: item.alt })}
                  >
                    <ResponsiveImage
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105"
                      widths={[360, 720, 1200]}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setActiveMedia(item)}
                    className="relative block w-full h-full overflow-hidden rounded-[24px]"
                    aria-label={t('gallery.playVideo', { name: item.alt })}
                  >
                    <video
                      controls
                      poster={VIDEO_POSTER}
                      preload="none"
                      className="w-full h-full object-cover"
                    >
                      <source src={item.src} type={`video/${item.filename.split('.').pop().toLowerCase()}`} />
                    </video>
                    <span className="absolute inset-0 flex items-center justify-center text-white pointer-events-none">
                      <span className="bg-black/50 rounded-full p-3 opacity-90">
                        <FaPlay className="text-xl" />
                      </span>
                    </span>
                  </button>
                )}
              </m.div>
            ))}
          </m.div>

          {activeMedia && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6"
              role="dialog"
              aria-modal="true"
              aria-label={t('gallery.mediaPreview')}
              onClick={() => setActiveMedia(null)}
            >
              <div
                className="relative max-w-6xl w-full mx-auto rounded-3xl overflow-hidden bg-white shadow-2xl"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setActiveMedia(null)}
                  className="absolute top-4 right-4 z-20 bg-black/70 text-white rounded-full p-3 hover:bg-black"
                  aria-label={t('gallery.closePreview')}
                >
                  ✕
                </button>
                {activeMedia.type === 'image' ? (
                  <ResponsiveImage
                    src={activeMedia.src}
                    alt={activeMedia.alt}
                    className="w-full max-h-[80vh] object-contain bg-black"
                    loading="eager"
                    widths={[800, 1200, 1920]}
                    sizes="100vw"
                  />
                ) : (
                  <video
                    controls
                    autoPlay
                    className="w-full max-h-[80vh] bg-black"
                  >
                    <source src={activeMedia.src} type={`video/${activeMedia.filename.split('.').pop().toLowerCase()}`} />
                    {t('gallery.videoNotSupported')}
                  </video>
                )}
              </div>
            </div>
          )}

          {/* Info note */}
          <m.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 text-center"
          >
            <p className="inline-flex items-center gap-2 text-sm text-gray-600 bg-gray-50 border border-gray-200 px-6 py-3 rounded-full">
              <FaCamera aria-hidden="true" />
              {t('gallery.addPhoto')} — {t('gallery.placeholder')}
            </p>
          </m.div>
        </div>
      </section>

      {/* Service Highlights Grid */}
      <section className="py-20 bg-gray-50 relative overflow-hidden" aria-label="Service highlights">
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl -mr-40 -mt-40 pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -ml-40 -mb-40 pointer-events-none" aria-hidden="true" />

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-accent font-semibold tracking-wider uppercase mb-2">
                {t('gallery.highlightsSubtitle')}
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {t('gallery.highlightsTitle')}{' '}
                <span className="text-accent">{t('gallery.highlightsTitleHighlight')}</span>
              </h2>
              <p className="text-gray-600 text-lg">
                {t('gallery.highlightsIntro')}
              </p>
            </m.div>
          </div>

          <m.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {HIGHLIGHT_KEYS.map((item) => (
              <m.div
                key={item.key}
                variants={itemVariants}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100
                           hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                <div className={`h-1.5 w-full bg-gradient-to-r ${item.color}`} aria-hidden="true" />
                <div className="p-8">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-3xl text-white mb-6
                                shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    aria-hidden="true"
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                    {t(`gallery.highlights.${item.key}.title`)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t(`gallery.highlights.${item.key}.description`)}
                  </p>
                </div>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-primary" aria-label="Call to action">
        <div className="container mx-auto px-4 text-center">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('gallery.ctaTitle')}
            </h2>
            <p className="text-accent-light text-lg mb-8 max-w-2xl mx-auto">
              {t('gallery.ctaDesc')}
            </p>
            <a
              href={COMPANY_DETAILS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get a free moving quote via WhatsApp"
              className="inline-flex items-center gap-2 bg-white text-primary font-bold py-4 px-10 rounded-full
                         hover:bg-accent-light hover:text-white transition-all hover:scale-105 shadow-lg"
            >
              {t('gallery.getFreeQuote')}
            </a>
          </m.div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
