import React from 'react';
import { Users, DollarSign, TrendingUp, Settings } from 'lucide-react';

const AITeamSection = () => {
  const agents = [
    {
      icon: Users,
      title: 'HR Assistant',
      description: 'Automate recruitment, onboarding, and employee management with intelligent screening and personalized communications.',
      features: ['Resume Screening', 'Interview Scheduling', 'Employee Onboarding']
    },
    {
      icon: DollarSign,
      title: 'Finance Agent',
      description: 'Streamline financial operations with automated reporting, expense tracking, and intelligent budget analysis.',
      features: ['Expense Automation', 'Financial Reports', 'Budget Optimization']
    },
    {
      icon: TrendingUp,
      title: 'Performance Monitor',
      description: 'Track KPIs, analyze trends, and generate actionable insights to optimize your business performance.',
      features: ['KPI Tracking', 'Trend Analysis', 'Performance Reports']
    },
    {
      icon: Settings,
      title: 'Operations Manager',
      description: 'Optimize workflows, manage resources, and automate routine operational tasks for maximum efficiency.',
      features: ['Workflow Automation', 'Resource Management', 'Task Optimization']
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
            Specialized AI agents designed to transform different aspects of your business operations.
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
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary-bright flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
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
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AITeamSection;