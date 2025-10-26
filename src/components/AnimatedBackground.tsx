import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 bg-animated">
      {/* Floating particles */}
      <div className="particles" />
      
      {/* Additional particle layers */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-primary rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animation: `particle-float ${25 + Math.random() * 15}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background-subtle to-background opacity-70" />
      
    </div>
  );
};

export default AnimatedBackground;