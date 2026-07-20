import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import Hero from '../components/home/Hero';
import AboutSnippet from '../components/home/AboutSnippet';
import ServicesSnippet from '../components/home/ServicesSnippet';
import ServiceAreas from '../components/home/ServiceAreas';
import GallerySnippet from '../components/home/GallerySnippet';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import FaqSection from '../components/home/FaqSection';
import Contact from './Contact';

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO 
        title={t('seo.homeTitle')} 
        description={t('seo.homeDesc')} 
        path="/"
      />
      <Hero />
      <AboutSnippet />
      <ServicesSnippet />
      <ServiceAreas />
      <GallerySnippet />
      <WhyChooseUs />
      <Testimonials />
      <FaqSection />
      <Contact compact showSeo={false} />
    </>
  );
};

export default Home;
