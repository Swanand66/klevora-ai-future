import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Sparkles, MessageSquare } from 'lucide-react';

const SmartContentSection = () => {
  const [industry, setIndustry] = useState('');
  const [implementation, setImplementation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [generatedSnippets, setGeneratedSnippets] = useState<string[]>([]);

  const generateSnippets = async () => {
    if (!industry.trim() || !implementation.trim()) return;

    setIsLoading(true);
    
    // Simulate AI generation with realistic delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const snippets = [
      `"Implementing Klevora's AI solutions in our ${industry.toLowerCase()} business has been transformational. ${implementation} The automated workflows have streamlined our operations beyond our expectations."`,
      `"As a ${industry.toLowerCase()} company, we needed reliable AI integration. ${implementation} Klevora delivered exactly what we needed with exceptional support throughout the process."`,
      `"The ROI from Klevora's AI implementation has exceeded our projections. ${implementation} Our team can now focus on strategic growth instead of repetitive tasks."`
    ];
    
    setGeneratedSnippets(snippets);
    setIsLoading(false);
  };

  const handleReset = () => {
    setIndustry('');
    setImplementation('');
    setGeneratedSnippets([]);
  };

  return (
    <section className="relative py-20 px-6 lg:px-8 z-10">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Smart Content Assistant
            </h2>
          </div>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Generate authentic testimonial snippets for your industry using our AI-powered content generator.
          </p>
        </div>

        {/* Interactive Tool */}
        <div className="card-glow">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Generate Testimonial Snippets
          </h3>

          {/* Input Form */}
          <div className="space-y-6 mb-8">
            <div>
              <label htmlFor="industry" className="block text-sm font-medium text-foreground mb-2">
                Industry
              </label>
              <Input
                id="industry"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                placeholder="e.g., Healthcare, Manufacturing, E-commerce"
                className="bg-input border-input-border focus:border-primary focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="implementation" className="block text-sm font-medium text-foreground mb-2">
                AI Implementation & Results
              </label>
              <Textarea
                id="implementation"
                value={implementation}
                onChange={(e) => setImplementation(e.target.value)}
                placeholder="Describe how AI was implemented and what results were achieved. e.g., 'We reduced processing time by 80% and eliminated manual errors in our inventory management system.'"
                rows={4}
                className="bg-input border-input-border focus:border-primary focus:ring-primary resize-none"
              />
            </div>

            <Button
              onClick={generateSnippets}
              disabled={!industry.trim() || !implementation.trim() || isLoading}
              className="w-full btn-primary h-12 text-lg"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Generating Snippets...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 mr-2" />
                  Generate Snippets
                </>
              )}
            </Button>
          </div>

          {/* Generated Results */}
          {generatedSnippets.length > 0 && (
            <div className="border-t border-border pt-8">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-xl font-semibold flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2 text-primary" />
                  Generated Testimonial Snippets
                </h4>
                <Button
                  onClick={handleReset}
                  variant="outline"
                  size="sm"
                  className="btn-secondary"
                >
                  Generate New
                </Button>
              </div>

              <div className="space-y-4">
                {generatedSnippets.map((snippet, index) => (
                  <div
                    key={index}
                    className="p-6 bg-background-subtle rounded-lg border border-card-border hover:border-primary/30 transition-colors duration-300 group"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 flex-shrink-0">
                        <span className="text-primary text-sm font-medium">{index + 1}</span>
                      </div>
                      <p className="text-foreground-muted leading-relaxed italic">
                        {snippet}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-sm text-foreground-muted text-center">
                  💡 <strong>Tip:</strong> These snippets are AI-generated examples. Customize them to match your specific use case and brand voice.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SmartContentSection;