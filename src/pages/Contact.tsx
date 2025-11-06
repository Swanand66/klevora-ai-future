import React from "react";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Linkedin, Twitter, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-gradient mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            Have a question or want to work together? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </section>

      {/* Social Links */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-6">Connect With Us</h2>
          <div className="flex justify-center gap-6">
            <a 
              href="https://www.linkedin.com/company/klevora-in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a 
              href="https://x.com/Team_Klevora" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-8 h-8" />
            </a>
            <a 
              href="https://www.instagram.com/klevora_global?igsh=MXFpbWoyczF1OWZybg==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
