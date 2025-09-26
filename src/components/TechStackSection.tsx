import React from 'react';
import langchainLogo from '@/assets/langchain-logo.png';
import pytorchLogo from '@/assets/pytorch-logo.png';
import tensorflowLogo from '@/assets/tensorflow-logo.png';
import huggingfaceLogo from '@/assets/huggingface-logo.png';
import fastapiLogo from '@/assets/fastapi-logo.png';
import cloudLogo from '@/assets/cloud-logo.png';

const TechStackSection = () => {
  const technologies = [
    { name: 'LangChain', logo: langchainLogo },
    { name: 'PyTorch', logo: pytorchLogo },
    { name: 'TensorFlow', logo: tensorflowLogo },
    { name: 'Hugging Face', logo: huggingfaceLogo },
    { name: 'FastAPI', logo: fastapiLogo },
    { name: 'Cloud', logo: cloudLogo },
  ];

  // Duplicate the array to create seamless loop
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <section id="technology" className="relative py-20 px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powered by Leading Technology
          </h2>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
            We use a modern, robust tech stack to build scalable and powerful AI solutions.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Gradient masks for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* Marquee */}
          <div className="flex whitespace-nowrap animate-marquee">
            {duplicatedTechs.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex-none mx-8 md:mx-12 lg:mx-16"
              >
                <div className="flex flex-col items-center justify-center">
                  <img
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    className="w-16 h-16 md:w-20 md:h-20 object-contain mb-2 filter brightness-90 hover:brightness-110 transition-all duration-300"
                  />
                  <span className="text-sm font-medium text-foreground-muted">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
