import React from 'react';
import { PhoneOutgoing, Calculator, BarChart3, Glasses } from 'lucide-react';

const AITeamSection = () => {
  const agents = [
    {
      icon: 'phone-outgoing',
      title: 'AI Voice Agent',
      description: 'Give your brand a voice. This AI handles calls, answers queries, and provides 24/7 support with natural, human-like conversation.',
      features: ['Customer Support Calls', 'Appointment Booking', 'Lead Qualification']

    },
    {
      icon: Calculator,
      title: 'Finance Agent',
      description: "No more spreadsheet headaches. Get instant financial insights and catch problems before they become expensive mistakes.",
      features: ['Expense Automation', 'Financial Reports', 'Budget Optimization']
    },
    {
      icon: BarChart3,
      title: 'Performance Monitor',
      description: "See what's really working in your business. Get clear reports that actually help you make better decisions.",
      features: ['KPI Tracking', 'Trend Analysis', 'Performance Reports']
    },
    {
      icon: hat-glasses,
      title: 'Customer Support Agent',
      description: "An intelligent customer support agent designed to provide instant, 24/7 assistance. It can handle FAQs, troubleshoot issues, guide users through processes, and escalate complex queries when needed.",
      features: ['Handle FAQs', 'Troubleshoot Issues', 'Escalate', 'Guide Users']
    }
  ];

  return (
    <section id="agents" className="relative py-20 px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Your New AI Team
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Think of these as your digital employees - they never take breaks, never make mistakes, and they love doing the repetitive tasks you hate.
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {agents.map((agent, index) => {
            const IconComponent = agent.icon;
            return (
              <div
                key={agent.title}
                className="card-agent group"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary-bright flex items-center justify-center mb-4 transition-all duration-300 ease-out group-hover:scale-[1.03] group-hover:shadow-lg">
                    <IconComponent className="w-8 h-8 text-primary-foreground transition-all duration-300 ease-out" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {agent.title}
                  </h3>
                  <p className="text-foreground-muted mb-6 leading-relaxed">
                    {agent.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    {agent.features.map((feature, featureIndex) => (
                      <div 
                        key={feature}
                        className="flex items-center text-sm text-foreground-muted"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out rounded-xl pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AITeamSection;
