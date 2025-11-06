import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {/* Base dark background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Purple-Pink Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-pink-900/30" />
    </div>
  );
};

export default AnimatedBackground;