import React from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Careers: React.FC = () => {
  return (
    <Layout>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-gradient mb-4">
            Careers at Klevora
          </h1>
          <p className="text-lg md:text-xl text-foreground-muted mb-10">
            We're not hiring right now, but we appreciate your interest.
          </p>

          <div className="card-glow p-8 rounded-2xl bg-background/50 backdrop-blur border">
            <div className="flex items-center justify-center gap-3">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-amber-400 animate-pulse" />
              <p className="text-base md:text-lg text-foreground">
                There are no open roles at the moment. Please check back soon.
              </p>
            </div>

            <p className="text-foreground-muted mt-4">
              If you'd like to introduce yourself, feel free to reach out—we'll keep your details on file for future opportunities.
            </p>

            <div className="mt-6 flex justify-center">
              <Link to="/contact" aria-label="Contact Klevora">
                <Button className="btn-primary">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
