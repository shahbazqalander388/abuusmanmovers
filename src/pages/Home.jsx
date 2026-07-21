import React, { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import Hero from '../components/home/Hero';
import FaqSection, { faqs as homeFaqs } from '../components/home/FaqSection';

const AboutSnippet = lazy(() => import('../components/home/AboutSnippet'));
const ServicesSnippet = lazy(() => import('../components/home/ServicesSnippet'));
const ServiceAreas = lazy(() => import('../components/home/ServiceAreas'));
const GallerySnippet = lazy(() => import('../components/home/GallerySnippet'));
const WhyChooseUs = lazy(() => import('../components/home/WhyChooseUs'));
const Testimonials = lazy(() => import('../components/home/Testimonials'));
const Contact = lazy(() => import('./Contact'));

const LazySection = ({ children }) => <Suspense fallback={null}>{children}</Suspense>;

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO 
        title={t('seo.homeTitle')} 
        description={t('seo.homeDesc')} 
        path="/"
        faq={homeFaqs}
      />
      <Hero />
      <LazySection><AboutSnippet /></LazySection>
      <LazySection><ServicesSnippet /></LazySection>
      <LazySection><ServiceAreas /></LazySection>
      <LazySection><GallerySnippet /></LazySection>
      <LazySection><WhyChooseUs /></LazySection>
      <LazySection><Testimonials /></LazySection>
      <LazySection><FaqSection /></LazySection>
      <LazySection><Contact compact showSeo={false} /></LazySection>
    </>
  );
};

export default Home;
