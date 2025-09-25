import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Mail, Phone } from 'lucide-react';

const CTASection = () => {
  return (
    <section id="contact" className="relative py-20 px-6 lg:px-8 z-10">
      <div className="max-w-4xl mx-auto">
        {/* Main CTA Block */}
        <div className="card-glow text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Grow Smarter?
          </h2>
          <p className="text-xl text-foreground-muted mb-8 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of SMEs who have transformed their operations with Klevora's AI solutions. 
            Start your free consultation today and discover how AI can revolutionize your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="btn-primary group text-lg px-10 py-6 h-auto">
              <Calendar className="w-5 h-5 mr-2" />
              Book Your Free Demo
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button className="btn-secondary text-lg px-10 py-6 h-auto">
              <Mail className="w-5 h-5 mr-2" />
              Get Custom Quote
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-foreground-muted mb-4">Trusted by 500+ SMEs worldwide</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-foreground-muted">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-success mr-2" />
                Free 30-minute consultation
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-success mr-2" />
                No commitment required
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-success mr-2" />
                Custom AI strategy included
              </div>
            </div>
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-xl bg-card border border-card-border hover:border-primary transition-colors duration-300">
            <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Call Us</h3>
            <p className="text-foreground-muted text-sm mb-3">Speak directly with our AI experts</p>
            <a href="tel:+1-555-KLEVORA" className="text-primary hover:text-primary-bright transition-colors">
              +1 (555) KLEVORA
            </a>
          </div>

          <div className="text-center p-6 rounded-xl bg-card border border-card-border hover:border-primary transition-colors duration-300">
            <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Email Us</h3>
            <p className="text-foreground-muted text-sm mb-3">Get detailed information and pricing</p>
            <a href="mailto:hello@klevora.ai" className="text-primary hover:text-primary-bright transition-colors">
              hello@klevora.ai
            </a>
          </div>

          <div className="text-center p-6 rounded-xl bg-card border border-card-border hover:border-primary transition-colors duration-300">
            <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Schedule Demo</h3>
            <p className="text-foreground-muted text-sm mb-3">See our AI agents in action</p>
            <button className="text-primary hover:text-primary-bright transition-colors">
              Book Meeting
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;