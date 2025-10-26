import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  // Listen to video play/pause events
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);
      
      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);
      
      return () => {
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
      };
    }
  }, []);

  // Play video when it comes into view
  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const rect = videoRef.current.getBoundingClientRect();
        const viewHeight = window.innerHeight || document.documentElement.clientHeight;
        // Check if the video is in the viewport
        if (rect.top >= 0 && rect.bottom <= viewHeight) {
          // Don't auto-play, just let user click the play button
          // videoRef.current.play().catch((error) => {
          //   console.error('Error trying to play the video:', error);
          // });
        } else {
          if (!videoRef.current.paused) {
            videoRef.current.pause();
          }
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
          <span className="block text-black text-4xl md:text-6xl lg:text-7xl">
            Your Klever Upgrade
          </span>
        </h1>

        {/* Simple description */}
        <p className="text-lg text-foreground-muted leading-relaxed max-w-3xl mx-auto mb-6">
          Our AI assistants take care of the boring, repetitive stuff so you can focus on what really matters growing your business.
          From automating tasks to unlocking insights from data, we make it easier to scale smarter, faster, and with less effort.
        </p>

        {/* Primary CTA */}
        <div className="flex items-center justify-center mb-12">
          <Link to="/contact">
            <Button className="btn-primary inline-flex items-center gap-2">
              Contact our team
              <ArrowUpRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>

        {/* Spacer */}
        <div style={{ marginTop: '9rem' }}></div>

        {/* Video and Description */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-16">
          <div className="md:w-1/2 text-center flex flex-col justify-center ml-auto mr-8">
            <p className="text-lg text-foreground-muted leading-relaxed mb-4">
              <span className="font-bold bg-gradient-to-r from-[hsl(280_85%_55%)] to-[hsl(320_95%_62%)] bg-clip-text text-transparent">At Klevora,</span> we’re not just building tools we’re building the future. Our mission is to scale businesses at lightspeed using AI, automation, and next-gen digital intelligence.
            </p>
            <p className="text-lg text-foreground-muted leading-relaxed mb-4">
              Smarter workflows, sharper decisions, and 10x growth vibes that’s what we deliver. We believe in the power of remote work, global collaboration, and creating a culture where talent thrives without borders.
            </p>
            <p className="text-lg text-foreground-muted leading-relaxed">
              Klevora isn’t just a company  it’s the Klever upgrade every business needs to go from zero to legendary.
            </p>
          </div>
          <div className="md:w-1/2 relative">
            <video
              ref={videoRef}
              src="/videos/klevora-klevi.mp4"
              className="w-full rounded-md shadow-lg bg-black h-full"
              onClick={togglePlayPause}
            >
              Your browser does not support the video tag.
            </video>
            
            {/* Play Button Overlay */}
            {!isPlaying && (
              <button
                onClick={togglePlayPause}
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-all duration-300 rounded-md group"
                aria-label="Play video"
              >
                <div className="w-20 h-20 flex items-center justify-center bg-primary/90 hover:bg-primary rounded-full shadow-glow-strong transition-all duration-300 group-hover:scale-110">
                  <Play className="w-10 h-10 text-white ml-1" fill="white" />
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
