import React, { useCallback, useEffect, useMemo, useState, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaArrowRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { COMPANY_DETAILS } from '../../utils/constants';

const ParticlesLayer = lazy(() => import('@tsparticles/react').then((module) => ({ default: module.default })));

const Hero = () => {
  const [showParticles, setShowParticles] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const enableParticles = () => setShowParticles(true);
    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(enableParticles, { timeout: 2000 });
      return () => window.cancelIdleCallback(idleId);
    }
    const timer = window.setTimeout(enableParticles, 1500);
    return () => window.clearTimeout(timer);
  }, []);

  const particlesInit = useCallback(async (engine) => {
    const { loadSlim } = await import('@tsparticles/slim');
    await loadSlim(engine);
  }, []);

  const particlesOptions = useMemo(() => ({
    fullScreen: false,
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'repulse' },
      },
      modes: {
        repulse: { distance: 120, duration: 0.4 },
      },
    },
    particles: {
      color: { value: ['#60a5fa', '#93c5fd', '#ffffff'] },
      links: {
        color: '#60a5fa',
        distance: 150,
        enable: true,
        opacity: 0.15,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.2,
        direction: 'none',
        random: true,
        straight: false,
        outModes: { default: 'out' },
      },
      number: {
        density: { enable: true, area: 900 },
        value: 60,
      },
      opacity: {
        value: { min: 0.1, max: 0.4 },
        animation: { enable: true, speed: 0.8, minimumValue: 0.1 },
      },
      shape: { type: 'circle' },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  }), []);

  return (
    <section
      id="top"
      className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)' }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 z-[1]" aria-hidden="true">
        {showParticles ? (
          <Suspense fallback={null}>
            <ParticlesLayer
              id="hero-particles"
              init={particlesInit}
              options={particlesOptions}
              className="w-full h-full"
            />
          </Suspense>
        ) : null}
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-semibold tracking-wider text-accent-light backdrop-blur-sm border border-accent/30">
              {t('hero.badge')}
            </span>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-7xl">
              {t('hero.titlePart1')} <span className="text-accent-light">{t('hero.titleHighlight')}</span>{' '}
              {t('hero.titlePart2')}
            </h1>
            <p className="mb-10 max-w-2xl text-lg text-gray-300 md:text-xl">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/services"
                className="group flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 font-bold text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/40"
              >
                {t('hero.ourServices')}
                <FaArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <a
                href={`tel:${COMPANY_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
                className="group flex items-center justify-center gap-2 rounded-full bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-md transition-all hover:bg-white hover:text-primary border border-white/20"
              >
                <FaPhoneAlt className="transition-transform group-hover:rotate-12" aria-hidden="true" />
                {t('hero.callUs')} {COMPANY_DETAILS.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/70 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        aria-hidden="true"
      >
        <span className="text-xs uppercase tracking-widest mb-2 font-semibold">{t('hero.scrollDown')}</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/70 to-transparent" />
      </motion.div>
    </section>
  );
};

export default React.memo(Hero);
