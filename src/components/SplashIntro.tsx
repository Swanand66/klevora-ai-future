import React, { useEffect, useMemo, useRef, useState } from 'react';
import logo from '@/assets/klerova-logo.png';

interface SplashIntroProps {
  text?: string;
  typingSpeedMs?: number;
  pauseAfterMs?: number;
  initialDelayMs?: number;
  onDone?: () => void;
}

// Fullscreen intro: shows logo and types the brand name, then unmounts
const SplashIntro: React.FC<SplashIntroProps> = ({
  text = 'Your Klever Upgrade',
  typingSpeedMs = 60,
  pauseAfterMs = 600,
  initialDelayMs = 1200,
  onDone,
}) => {
  const [visible, setVisible] = useState(true);
  const [typed, setTyped] = useState('');
  const [showTyping, setShowTyping] = useState(false);
  const timeoutsRef = useRef<number[]>([]);

  const letters = useMemo(() => text.split(''), [text]);

  useEffect(() => {
    // Prevent body scroll while splash is visible
    const prevOverflow = document.body.style.overflow;
    if (visible) document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [visible]);

  // Show only logo first, then start typing after delay
  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setShowTyping(true), initialDelayMs);
    return () => clearTimeout(t);
  }, [initialDelayMs, visible]);

  useEffect(() => {
    if (!showTyping) return;
    // Clear previous timeouts if any
    timeoutsRef.current.forEach((id) => clearTimeout(id));
    timeoutsRef.current = [];
    setTyped('');

    let i = 0;
    const total = letters.length;
    const typeNext = () => {
      // Use slice to avoid any undefined appends
      setTyped(text.slice(0, i + 1));
      i += 1;
      if (i < total) {
        const id = window.setTimeout(typeNext, typingSpeedMs);
        timeoutsRef.current.push(id);
      } else {
        const id = window.setTimeout(() => { onDone?.(); setVisible(false); }, pauseAfterMs);
        timeoutsRef.current.push(id);
      }
    };

    const id0 = window.setTimeout(typeNext, typingSpeedMs);
    timeoutsRef.current.push(id0);

    return () => {
      timeoutsRef.current.forEach((id) => clearTimeout(id));
      timeoutsRef.current = [];
    };
  }, [letters, text, typingSpeedMs, pauseAfterMs, showTyping]);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Intro"
      aria-modal="true"
      style={{
        position: 'fixed',
        inset: 0,
        background: '#0A0A0A', // dark mode background
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 99999,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <img src={logo} alt="Klevora logo" style={{ width: 56, height: 56 }} />
        {showTyping && (
          <span
            style={{ 
              fontSize: 42, 
              lineHeight: '56px', 
              fontWeight: 700, 
              letterSpacing: 0.5, 
              fontFamily: 'Poppins, sans-serif',
              paddingBottom: '12px',
              minHeight: '68px',
              display: 'flex',
              alignItems: 'center',
              background: 'linear-gradient(135deg, hsl(280,85%,55%) 0%, hsl(320,95%,62%) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 12px rgba(108,71,255,0.25)', // optional neon effect
            }}
          >
            {typed}
            <span className="inline-block w-[10px] h-[42px] ml-[2px] bg-[hsl(300_90%_55%)] animate-pulse" style={{ marginBottom: '4px' }} />
          </span>
        )}
      </div>
    </div>
  );
};

export default SplashIntro;
