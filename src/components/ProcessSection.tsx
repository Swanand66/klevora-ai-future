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

                  {/* Icon */}
                  <div className="relative mb-6">
                    <IconComponent className="w-16 h-16 text-primary transition-all duration-300 transform group-hover:scale-110" style={{
                      animation: 'bounce-gentle 2s ease-in-out infinite',
                      animationDelay: `${index * 0.3}s`
                    }} />
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