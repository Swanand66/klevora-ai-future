import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 bg-animated">
      {/* Floating particles */}
      <div className="particles" />
      
      {/* Additional particle layers */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animation: `particle-float ${15 + Math.random() * 10}s linear infinite`,
            }}
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background-subtle to-background opacity-90" />
    </div>
  );
};

export default AnimatedBackground;