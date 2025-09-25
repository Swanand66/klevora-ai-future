import React from 'react';
import { Brain, Code, TestTube, Rocket } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: Brain,
      title: 'Train',
      description: "We learn how your business works and teach our AI to understand your specific needs and challenges."
    },
    {
      icon: Code,
      title: 'Develop',
      description: "We build your AI assistants using the best tools available, making sure they fit perfectly into your workflow."
    },
    {
      icon: TestTube,
      title: 'Test',
      description: "We make sure everything works perfectly with your real data before you start relying on it daily."
    },
    {
      icon: Rocket,
      title: 'Deploy',
      description: "Your AI team goes live and starts helping immediately. We stick around to make sure everything runs smoothly."
    }
  ];

  return (
    <section id="process" className="relative py-20 px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How We Make It Happen
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Simple steps to get your AI team up and running. No tech headaches, just results.
          </p>
        </div>

        {/* Process Flow */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 process-line" />
          
          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.title}
                  className="relative flex flex-col items-center text-center group"
                  style={{
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center z-10">
                    {index + 1}
                  </div>

                  {/* Icon Circle */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-bright flex items-center justify-center shadow-glow group-hover:shadow-glow-strong transition-all duration-300 transform group-hover:scale-110 z-10 relative">
                      <IconComponent className="w-10 h-10 text-primary-foreground" />
                    </div>
                    
                    {/* Glowing ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse" />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-foreground-muted leading-relaxed max-w-xs">
                      {step.description}
                    </p>
                  </div>

                  {/* Connection to next step (mobile) */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden mt-8 mb-4 w-0.5 h-12 bg-gradient-to-b from-primary to-transparent" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-foreground-muted mb-6">
            Ready to transform your business with AI?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary"
          >
            Start Your AI Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;