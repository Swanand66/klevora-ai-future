import React from "react";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Linkedin, Twitter, Instagram } from "lucide-react";

const Contact = () => {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      {/* Top CTA Banner */}
      <CTASection />
    </Layout>
  );
};

export default Contact;
