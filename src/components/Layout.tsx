import React from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-background">
      <AnimatedBackground />
      <Header />
      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
