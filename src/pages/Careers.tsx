import React from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Careers: React.FC = () => {
  const benefits = [
    {
      title: "Innovation First",
      description: "Work on cutting-edge AI technologies and shape the future"
    },
    {
      title: "Remote Flexibility",
      description: "Work from anywhere with flexible hours and trust-based culture"
    },
    {
      title: "Growth Opportunities",
      description: "Continuous learning and career advancement paths"
    },
    {
      title: "Creative Freedom",
      description: "Your ideas matter—contribute to product direction"
    },
    {
      title: "Collaborative Team",
      description: "Join a passionate team that values collaboration"
    },
    {
      title: "Fast-Paced",
      description: "Move quickly, iterate often, and see your impact"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-gradient mb-6">
            Join the Future of AI
          </h1>
          <p className="text-xl text-foreground mb-8 max-w-3xl mx-auto">
            Build revolutionary AI solutions that transform how businesses grow
          </p>
          
          <div className="inline-block card-glow p-6 rounded-2xl bg-background/80 backdrop-blur border border-purple-500/30 text-center">
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <span className="inline-flex h-3 w-3 rounded-full bg-purple-500 animate-pulse" />
              <p className="text-lg md:text-xl text-foreground font-semibold">
                No open positions right now
              </p>
            </div>
            <p className="text-foreground-muted mt-3 text-sm md:text-base text-center">
              But we're always looking for exceptional talent. Introduce yourself and we'll keep you in mind!
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center text-gradient mb-4">
            Why Join Klevora?
          </h2>
          <p className="text-center text-foreground-muted mb-12 text-lg max-w-2xl mx-auto">
            We're building something extraordinary. Here's what makes Klevora special.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="group relative card-glow p-6 rounded-xl bg-background/50 backdrop-blur border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
                <div className="absolute top-4 right-4 text-5xl font-black text-purple-500/5">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 relative z-10">
                  {benefit.title}
                </h3>
                <p className="text-foreground-muted text-sm relative z-10">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card-glow p-10 rounded-3xl bg-gradient-to-br from-purple-900/30 via-background/50 to-pink-900/30 backdrop-blur border border-purple-500/40">
            <h2 className="text-3xl md:text-4xl font-black text-gradient mb-4">
              Ready to Make an Impact?
            </h2>
            <p className="text-lg text-foreground-muted mb-8 max-w-2xl mx-auto">
              We'd love to hear from you! Share your story, your passion, and how you want to contribute to the future of AI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact" aria-label="Contact Klevora">
                <Button className="btn-primary text-base px-8 py-3">
                  Get in Touch
                </Button>
              </Link>
              <a 
                href="mailto:careers@klevora.com"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-background/80 backdrop-blur border border-purple-500/30 hover:border-purple-500/60 transition-all text-foreground font-semibold text-base"
              >
                Email Us Directly
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
