import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import cloudLogo from '@/assets/cloud-logo.png';
import fastapiLogo from '@/assets/fastapi-logo.png';
import huggingfaceLogo from '@/assets/huggingface-logo.png';
import langchainLogo from '@/assets/langchain-logo.png';
import pytorchLogo from '@/assets/pytorch-logo.png';
import tensorflowLogo from '@/assets/tensorflow-logo.png';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 z-10">
      {/* Background handled globally by AnimatedBackground */}

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight">
          <span className="text-gradient block">klevora</span>
          <span className="block text-white text-4xl md:text-6xl lg:text-7xl">
            Your Klever Upgrade
          </span>
        </h1>

        {/* Subheading (empty since moved above) */}
        <p className="text-3xl md:text-4xl lg:text-5xl text-foreground-muted max-w-4xl mx-auto mb-12 leading-relaxed font-semibold">
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
