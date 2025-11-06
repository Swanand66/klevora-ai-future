import React from 'react';
import awsLogo from '@/assets/AWS.png';
import databricksLogo from '@/assets/Databrick_logo.png';
import dockerLogo from '@/assets/Docker.png';
import fastapiLogo from '@/assets/FastAPI.png';
import powerbiLogo from '@/assets/256px-New_Power_BI_Logo.svg.png';
import anacondaLogo from '@/assets/Anaconda.png';
import figmaLogo from '@/assets/Figma.png';
import gptLogo from '@/assets/gpt.png';
import mistralLogo from '@/assets/mistral.png';
import ollamaLogo from '@/assets/ollama-logo-png_seeklogo-593420.png';
import snowLogo from '@/assets/snow.png';
import stackoverflowLogo from '@/assets/Stack Overflow.png';

const TechStackSection = () => {
  const technologies = [
    { name: 'AWS', logo: awsLogo },
    { name: 'FastAPI', logo: fastapiLogo },
    { name: 'Docker', logo: dockerLogo },
    { name: 'Power BI', logo: powerbiLogo },
    { name: 'GPT', logo: gptLogo },
    { name: 'Mistral', logo: mistralLogo },
    { name: 'Databricks', logo: databricksLogo },
    { name: 'Anaconda', logo: anacondaLogo },
    { name: 'Figma', logo: figmaLogo },
    { name: 'Ollama', logo: ollamaLogo },
    { name: 'Snowflake', logo: snowLogo },
    { name: 'Stack Overflow', logo: stackoverflowLogo },
  ];

  // Duplicate the array to create seamless loop
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <section id="technology" className="relative py-20 px-6 lg:px-8 z-10 mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powered by Leading Technology
          </h2>
          <p className="text-xl text-foreground max-w-2xl mx-auto">
            We use a modern, robust tech stack to build scalable and powerful AI solutions.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden w-screen -ml-[50vw] left-1/2">
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
                    className="w-16 h-16 md:w-20 md:h-20 object-contain filter brightness-90 hover:brightness-110 transition-all duration-300"
                  />
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
