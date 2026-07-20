import React from 'react';
import ServiceAreasComponent from '../ServiceAreas/ServiceAreas.jsx';

const ServiceAreas = () => {
  return (
    <section id="service-areas" className="scroll-mt-24 py-24 bg-white relative overflow-hidden" aria-label="Service locations">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <ServiceAreasComponent animateOnScroll={true} />
      </div>
    </section>
  );
};

export default ServiceAreas;
