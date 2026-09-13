import React, { lazy, Suspense } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import MobileActionBar from './MobileActionBar';

const FloatingButtons = lazy(() => import('./FloatingButtons'));

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col font-sans bg-[#07192d] text-white">
      <Navbar />
      <main className="flex-1 bg-transparent pb-16 md:pb-0">{children}</main>
      <Footer />
      <Suspense fallback={null}>
        <FloatingButtons />
      </Suspense>
      <MobileActionBar />
    </div>
  );
};

export default Layout;
