import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 z-10">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight">
          Grow Smarter with{' '}
          <span className="text-gradient">Klevora</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-foreground-muted max-w-4xl mx-auto mb-12 leading-relaxed">
          Your klever upgrade
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            onClick={() => scrollToSection('contact')}
            className="btn-primary group text-lg px-10 py-6 h-auto"
          >
            Book Your Free Demo
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button 
            onClick={() => scrollToSection('agents')}
            className="btn-secondary group text-lg px-10 py-6 h-auto"
          >
            <Play className="mr-2 w-5 h-5 transition-transform group-hover:scale-110" />
            Explore Agents
          </Button>
        </div>

        {/* Simple description */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-lg text-foreground-muted leading-relaxed">
            We help small and medium businesses work smarter, not harder. 
            Our AI assistants handle the boring stuff so you can focus on what really matters - growing your business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;