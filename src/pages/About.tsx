import React from "react";
import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black text-gradient mb-6">
              About Klevora
            </h1>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              Empowering businesses with intelligent AI solutions that transform complex challenges into automated workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="card-glow">
              <h2 className="text-2xl font-bold text-gradient mb-4">Our Mission</h2>
              <p className="text-foreground-muted leading-relaxed">
                At Klevora, we believe in making advanced AI technology accessible to businesses of all sizes. 
                Our mission is to empower organizations with custom AI agents that automate workflows, 
                enhance decision-making, and drive innovation.
              </p>
            </div>

            <div className="card-glow">
              <h2 className="text-2xl font-bold text-gradient mb-4">Our Vision</h2>
              <p className="text-foreground-muted leading-relaxed">
                We envision a future where every business can leverage the power of artificial intelligence 
                to solve their unique challenges. Through cutting-edge technology and personalized solutions, 
                we're building that future today.
              </p>
            </div>
          </div>

          <div className="card-glow">
            <h2 className="text-2xl font-bold text-gradient mb-6">Why Choose Klevora?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Custom Solutions</h3>
                <p className="text-foreground-muted text-sm">
                  Tailored AI agents designed specifically for your business needs and workflows.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Expert Team</h3>
                <p className="text-foreground-muted text-sm">
                  World-class AI specialists with deep expertise in machine learning and automation.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Proven Results</h3>
                <p className="text-foreground-muted text-sm">
                  Track record of delivering measurable ROI and business transformation.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Scalable Technology</h3>
                <p className="text-foreground-muted text-sm">
                  Solutions that grow with your business and adapt to changing needs.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">24/7 Support</h3>
                <p className="text-foreground-muted text-sm">
                  Dedicated support team available around the clock to ensure your success.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Innovation First</h3>
                <p className="text-foreground-muted text-sm">
                  Constantly evolving with the latest AI advancements and best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
