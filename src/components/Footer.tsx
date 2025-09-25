import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-background-subtle border-t border-border py-12 px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-bright rounded-lg flex items-center justify-center">
              <span className="text-background font-bold text-lg">K</span>
            </div>
            <span className="text-xl font-bold text-foreground">Klevora</span>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <a 
              href="/privacy" 
              className="text-foreground-muted hover:text-primary transition-colors duration-300 text-sm"
            >
              Privacy Policy
            </a>
            <a 
              href="/terms" 
              className="text-foreground-muted hover:text-primary transition-colors duration-300 text-sm"
            >
              Terms of Service
            </a>
            <a 
              href="mailto:hello@klevora.ai" 
              className="text-foreground-muted hover:text-primary transition-colors duration-300 text-sm"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-foreground-muted text-sm">
            © {new Date().getFullYear()} Klevora. All rights reserved. Empowering SMEs with intelligent AI solutions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;