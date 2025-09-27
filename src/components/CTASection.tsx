import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Mail, Linkedin } from 'lucide-react';

const CTASection = () => {
  return (
    <section id="contact" className="relative py-12 px-6 lg:px-8 z-10">
      <div className="max-w-3xl mx-auto">
        {/* Main CTA Block */}
        <div className="card-glow text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Klever?
          </h2>
          <p className="text-lg text-foreground-muted mb-6 max-w-xl mx-auto leading-relaxed">
            Stop doing work that a computer could handle. Let's talk about how AI can make your business life easier.
          </p>
          
          <div className="flex justify-center items-center">
            <Button className="btn-primary group px-8 py-4 h-auto">
              <Calendar className="w-4 h-4 mr-2" />
              Book Your Free Meet
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-sm text-foreground-muted mb-3">Join 500+ businesses already working smarter</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-foreground-muted">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-success mr-2" />
                Free chat to see if we're a fit
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-success mr-2" />
                No pressure, no commitments
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-success mr-2" />
                Honest advice about what you need
              </div>
            </div>
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 rounded-xl bg-card border border-card-border hover:border-primary transition-colors duration-300">
            <Linkedin className="w-6 h-6 text-primary mx-auto mb-2" />
            <h3 className="font-semibold mb-1 text-sm">LinkedIn</h3>
            <p className="text-foreground-muted text-xs mb-2">Connect with us on LinkedIn</p>
            <a href="https://www.linkedin.com/company/klevora-in/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-bright transition-colors text-sm">
              Follow Us
            </a>
          </div>

          <div className="text-center p-4 rounded-xl bg-card border border-card-border hover:border-primary transition-colors duration-300">
            <Mail className="w-6 h-6 text-primary mx-auto mb-2" />
            <h3 className="font-semibold mb-1 text-sm">Email Us</h3>
            <p className="text-foreground-muted text-xs mb-2">Get detailed information and pricing</p>
            <a href="mailto:klevora.connect@gmail.com" className="text-primary hover:text-primary-bright transition-colors text-sm">
              klevora.connect@gmail.com
            </a>
          </div>

          <div className="text-center p-4 rounded-xl bg-card border border-card-border hover:border-primary transition-colors duration-300">
            <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />
            <h3 className="font-semibold mb-1 text-sm">Schedule Meet</h3>
            <p className="text-foreground-muted text-xs mb-2">See our AI agents in action</p>
            <button className="text-primary hover:text-primary-bright transition-colors text-sm">
              Book Meeting
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;