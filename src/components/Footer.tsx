import React from 'react';
import klerovaLogo from '@/assets/klerova-logo.png';
import { Linkedin, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative bg-background-subtle border-t border-border py-12 px-4 sm:px-6 lg:px-8 z-10">
      <div className="w-full">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2">
            <img 
              src={klerovaLogo} 
              alt="Klevora Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-black text-gradient tracking-tight">klevora</span>
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
            <Link 
              to="/contact" 
              className="text-foreground-muted hover:text-primary transition-colors duration-300 text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Social */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <a href="https://www.linkedin.com/company/klevora-in/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-foreground-muted hover:text-primary">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://x.com/Team_Klevora" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-foreground-muted hover:text-primary">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com/klevora_global?igsh=MXFpbWoyczF1OWZybg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-foreground-muted hover:text-primary">
            <Instagram className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-foreground-muted text-sm">
            © {new Date().getFullYear()} <span className="text-gradient font-black tracking-tight">klevora</span>. All rights reserved. Empowering businesses with intelligent AI solutions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;