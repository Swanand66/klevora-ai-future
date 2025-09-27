import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import klerovaLogo from '@/assets/klerova-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-lg border-b-2 border-primary/30 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src={klerovaLogo} 
              alt="Klevora Logo" 
              className="w-11 h-11 object-contain"
            />
            <span className="text-2xl font-black text-gradient tracking-tight">klevora</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('agents')}
              className="nav-link"
            >
              Agents
            </button>
            <button 
              onClick={() => scrollToSection('process')}
              className="nav-link"
            >
              Process
            </button>
            <button 
              onClick={() => scrollToSection('technology')}
              className="nav-link"
            >
              Technology
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="nav-link"
            >
              Testimonials
            </button>
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="hidden lg:inline-flex btn-primary"
            >
              Contact Us
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border mt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('agents')}
                className="text-left py-2 text-foreground-muted hover:text-primary transition-colors"
              >
                Agents
              </button>
              <button 
                onClick={() => scrollToSection('process')}
                className="text-left py-2 text-foreground-muted hover:text-primary transition-colors"
              >
                Process
              </button>
              <button 
                onClick={() => scrollToSection('technology')}
                className="text-left py-2 text-foreground-muted hover:text-primary transition-colors"
              >
                Technology
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-left py-2 text-foreground-muted hover:text-primary transition-colors"
              >
                Testimonials
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="btn-primary w-full mt-4"
              >
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;