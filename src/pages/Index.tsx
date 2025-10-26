import React, { useState } from 'react';
import Layout from '@/components/Layout';
import SplashIntro from '@/components/SplashIntro';
import HeroSection from '@/components/HeroSection';
import TechStackSection from '@/components/TechStackSection';
import AITeamSection from '@/components/AITeamSection';
import ProcessSection from '@/components/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';

const Index = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <>
      {/* Splash overlay sits outside Layout so it covers header/footer/bot */}
      <SplashIntro onDone={() => setRevealed(true)} />
      <div
        className={`transition-[opacity,transform] duration-500 ease-out ${
          revealed ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <Layout>
          <HeroSection />
          <TechStackSection />
          <AITeamSection />
          <ProcessSection />
          <TestimonialsSection />
          <CTASection />
        </Layout>
      </div>
    </>
  );
};

export default Index;
