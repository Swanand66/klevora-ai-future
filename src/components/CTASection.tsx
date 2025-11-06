import React from "react";
import ContactForm from "@/components/ContactForm";
import { Linkedin, Twitter, Instagram } from "lucide-react";

const CTASection  = () => {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
      <>
      {/* Contact Form */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-2">Ready to Get Klever?</h2>
              <p className="text-foreground-muted mb-6">
                Stop doing work that a computer could handle. Let's talk about how AI can make your business life easier.
              </p>

              {/* Connect CTA */}
              <div className="mb-6">
                
                <p className="text-sm text-foreground-muted mt-2">Join 10+ businesses already working smarter</p>
              </div>

              {/* Quick reassurance bullets */}
              <ul className="space-y-2 text-sm text-foreground mb-8">
                <li>• Free chat to see if we're a fit</li>
                <li>• No pressure, no commitments</li>
                <li>• Honest advice about what you need</li>
              </ul>

              {/* Social/Email/Schedule blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="font-semibold mb-1 ">LinkedIn</div>
                  <p className="text-sm text-foreground-muted mb-2">Connect with us on LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/company/klevora-in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline "
                    aria-label="Open LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 " />
                    <span className="bg-gradient-to-r from-[hsl(280_85%_55%)] to-[hsl(320_95%_62%)] bg-clip-text text-transparent">
                      Linkedin
                    </span>
                  </a>
                </div>
                <div>
                  <div className="font-semibold mb-1">Twitter(X)</div>
                  <p className="text-sm text-foreground-muted mb-2">Connect with us on Twitter</p>
                  <a
                    href="https://x.com/Team_Klevora"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                    aria-label="Open Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                    <span className="bg-gradient-to-r from-[hsl(280_85%_55%)] to-[hsl(320_95%_62%)] bg-clip-text text-transparent">
                      Twitter
                    </span>
                  </a>
                </div>
                <div>
                  <div className="font-semibold mb-1">Instagram</div>
                  <p className="text-sm text-foreground-muted mb-2">Connect with us on Instagram</p>
                  <a
                    href="https://www.instagram.com/klevora_global?igsh=MXFpbWoyczF1OWZybg=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                    aria-label="Open Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                    <span className="bg-gradient-to-r from-[hsl(280_85%_55%)] to-[hsl(320_95%_62%)] bg-clip-text text-transparent">
                    Instagram
                    </span>
                  </a>
                </div>

              
                <div>
                  <div className="font-semibold mb-1">Email Us</div>
                  <p className="text-sm text-foreground-muted">Get detailed information and pricing</p>
                  <a href="mailto:klevora.connect@gmail.com" className="text-primary hover:underline bg-gradient-to-r from-[hsl(280_85%_55%)] to-[hsl(320_95%_62%)] bg-clip-text text-transparent">klevora.connect@gmail.com</a>
                </div>

              </div>
            </div>
            <div id="contact-form" className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      </>
  );
};

export default CTASection;
