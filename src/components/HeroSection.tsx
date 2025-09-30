import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Play video when it comes into view
  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const rect = videoRef.current.getBoundingClientRect();
        const viewHeight = window.innerHeight || document.documentElement.clientHeight;
        // Check if the video is in the viewport
        if (rect.top >= 0 && rect.bottom <= viewHeight) {
          videoRef.current.play().catch((error) => {
            // Handle play error (e.g., autoplay policy)
            console.error('Error trying to play the video:', error);
          });
        } else {
          videoRef.current.pause();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [videoRef]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 lg:px-8 z-10">
      {/* Background handled globally by AnimatedBackground */}

      <div className="text-center relative z-10 flex flex-col items-center justify-center" style={{ marginTop: '9rem' }}>
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight">
          <span className="text-gradient block mb-4">Klevora</span>
          <span className="block text-white text-4xl md:text-6xl lg:text-7xl">
            Your Klever Upgrade
          </span>
        </h1>

        {/* Simple description */}
        <p className="text-lg text-foreground-muted leading-relaxed max-w-3xl mx-auto mb-12">
          Our AI assistants take care of the boring, repetitive stuff so you can focus on what really matters growing your business.
          From automating tasks to unlocking insights from data, we make it easier to scale smarter, faster, and with less effort.
        </p>

        {/* Spacer */}
        <div style={{ marginTop: '9rem' }}></div>

        {/* Video and Description */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-16">
          <div className="md:w-1/2 text-center flex flex-col justify-center ml-auto mr-8">
            <p className="text-lg text-foreground-muted leading-relaxed mb-4">
              <span className="font-bold text-purple-300">At Klevora,</span> we’re not just building tools we’re building the future. Our mission is to scale businesses at lightspeed using AI, automation, and next-gen digital intelligence.
            </p>
            <p className="text-lg text-foreground-muted leading-relaxed mb-4">
              Smarter workflows, sharper decisions, and 10x growth vibes that’s what we deliver. We believe in the power of remote work, global collaboration, and creating a culture where talent thrives without borders.
            </p>
            <p className="text-lg text-foreground-muted leading-relaxed">
              Klevora isn’t just a company  it’s the Klever upgrade every business needs to go from zero to legendary.
            </p>
          </div>
          <div className="md:w-1/2">
            <video
              ref={videoRef}
              src="/videos/klevora-klevi.mp4"
              controlsList="nodownload nofullscreen noplaybackrate nodisable"
              controls
              className="w-full rounded-md shadow-lg bg-black h-full"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
