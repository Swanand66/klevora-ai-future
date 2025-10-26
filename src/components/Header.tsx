import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import klerovaLogo from '@/assets/klerova-logo.png';
import { NavLink, Link } from 'react-router-dom';

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

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header 
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-lg border-b-2 border-primary/30 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src={klerovaLogo} 
              alt="Klevora Logo" 
              className="w-11 h-11 object-contain"
            />
            <span className="text-2xl font-black text-gradient tracking-tight">Klevora</span>
          </Link>

          {/* Desktop Navigation - Moved to Right */}
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              <NavLink to="/about" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                About Us
              </NavLink>
              <NavLink to="/agents" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                Agents
              </NavLink>
              <NavLink to="/testimonials" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                Testimonials
              </NavLink>
                <NavLink to="/careers" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                  Careers
                </NavLink>
            </nav>
            <Link to="/contact" onClick={closeMenu}>
              <Button className="btn-primary">Contact Us</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 lg:hidden">

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
              <NavLink to="/about" onClick={closeMenu} className={({isActive}) => `text-left py-2 text-foreground-muted hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`}>
                About Us
              </NavLink>
              <NavLink to="/agents" onClick={closeMenu} className={({isActive}) => `text-left py-2 text-foreground-muted hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`}>
                Agents
              </NavLink>
              <NavLink to="/testimonials" onClick={closeMenu} className={({isActive}) => `text-left py-2 text-foreground-muted hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`}>
                Testimonials
              </NavLink>
                <NavLink to="/careers" onClick={closeMenu} className={({isActive}) => `text-left py-2 text-foreground-muted hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`}>
                  Careers
                </NavLink>
              <Link to="/contact" onClick={closeMenu} className="w-full mt-4">
                <Button className="btn-primary w-full">Contact Us</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
