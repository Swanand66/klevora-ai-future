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
          We empower Small and Medium-sized Enterprises with custom AI solutions, 
          turning complex challenges into intelligent, automated workflows.
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

        {/* Floating stats or indicators */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-foreground-muted">SMEs Automated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <div className="text-foreground-muted">Efficiency Increase</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-foreground-muted">AI Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;