import React from 'react';
import { PhoneOutgoing, Calculator, BarChart3, Glasses, Wrench, Plug, Workflow, ShieldCheck, Rocket, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AITeamSection = () => {
  const agents = [
    {
      icon: PhoneOutgoing,
      title: 'AI Voice Agent',
      description: 'Conversational AI for calls and support that automates common tasks and integrates with your stack.',
      features: [
        'Automated customer support',
        'Appointment booking',
        'Lead qualification',
        'CRM & helpdesk integration',
        '24/7 availability'
      ]

    },
    {
      icon: ShieldCheck,
      title: 'Privacy first AI-CRM',
      description: 'On-premises CRM agent that automates outreach and qualification while keeping data in your environment.',
      features: [
        'On-premises (FastAPI + React)',
        'Automated lead qualification',
        'Multi-channel outreach',
        'Locally-hosted LLMs',
        'Cloud-free compliance'
      ]
    },
    {
      icon: BarChart3,
      title: 'TrackX Agent',
      description: 'Workspace AI that automates check-ins, tasks and meetings while surfacing team productivity insights.',
      features: [
        'Unified check-ins',
        'Automated task flows',
        'Meetings & leave tracking',
        'Team dynamics analysis',
        'Real-time productivity insights'
      ]
    },
    {
      icon: Glasses,
      title: 'Customer Support Agent',
      description: 'Support AI that answers FAQs, troubleshoots, guides users and escalates when needed, instantly.',
      features: [
        '24/7 instant assistance',
        'Handle FAQs',
        'Troubleshoot issues',
        'Guide user flows',
        'Escalate complex queries'
      ]
    }
  ];

  return (
    <section id="agents" className="relative py-20 px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
            Meet Your New AI Team — Custom Services Available
          </h2>
          <p className="text-lg text-foreground max-w-4xl mx-auto text-center">
            Ready-to-run agents for common tasks, plus fully bespoke AI solutions crafted for your exact workflows, tools, and KPIs.
          </p>

          {/* Two-column: bullets + CTA card */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="md:col-span-3 card-glow">
              <h3 className="text-2xl font-semibold mb-3">What we build, custom for you</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-foreground-muted">
                <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary"/> CRM/ERP/Helpdesk Integrations</li>
                <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary"/> Workflow Automation & Orchestration</li>
                <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary"/> AI Voice & Chat Assistants (brand-tuned)</li>
                <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary"/> Data Pipelines, ETL & Analytics Agents</li>
                <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary"/> Human-in-the-loop Reviews & Approvals</li>
                <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary"/> Security, Compliance & Audit-ready Logic</li>
              </ul>
            </div>
            <div className="md:col-span-2 card-glow flex flex-col items-start justify-between relative z-20">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Let’s design your agent</h3>
                <p className="text-sm text-foreground-muted mb-4">Average turnaround: 2–4 weeks. Fixed milestones. Integration-first approach.</p>
              </div>
              <div className="mt-2">
                <Link to="/contact" className="relative z-20 pointer-events-auto inline-block">
                  <Button className="btn-primary">Request a Custom Solution</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Agents Grid moved below custom sections */}

        {/* Custom AI Services – feature highlights */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Custom AI Services that scale with you</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card-glow">
              <div className="flex items-center gap-3 mb-2"><Wrench className="w-5 h-5 text-primary"/><span className="font-semibold">Bespoke Agents</span></div>
              <p className="text-sm text-foreground-muted">We design agents around your exact process, tone, and guardrails. No one-size-fits-all.</p>
            </div>
            <div className="card-glow">
              <div className="flex items-center gap-3 mb-2"><Plug className="w-5 h-5 text-primary"/><span className="font-semibold">Deep Integrations</span></div>
              <p className="text-sm text-foreground-muted">Connect to CRM, ERP, ticketing systems, Slack, email, Zapier or custom APIs.</p>
            </div>
            <div className="card-glow">
              <div className="flex items-center gap-3 mb-2"><Workflow className="w-5 h-5 text-primary"/><span className="font-semibold">Orchestrated Workflows</span></div>
              <p className="text-sm text-foreground-muted">Multi-step automations with human-in-the-loop for accuracy where it matters.</p>
            </div>
            <div className="card-glow">
              <div className="flex items-center gap-3 mb-2"><ShieldCheck className="w-5 h-5 text-primary"/><span className="font-semibold">Security & Compliance</span></div>
              <p className="text-sm text-foreground-muted">Role-based access, audit trails, PII handling, and policy-aligned behavior.</p>
            </div>
            <div className="card-glow">
              <div className="flex items-center gap-3 mb-2"><Clock className="w-5 h-5 text-primary"/><span className="font-semibold">SLAs & Monitoring</span></div>
              <p className="text-sm text-foreground-muted">Uptime commitments, alerts, analytics dashboards and continuous tuning.</p>
            </div>
            <div className="card-glow">
              <div className="flex items-center gap-3 mb-2"><Rocket className="w-5 h-5 text-primary"/><span className="font-semibold">Fast Iteration</span></div>
              <p className="text-sm text-foreground-muted">Ship v1 fast, then iterate weekly with measurable KPI improvements.</p>
            </div>
          </div>
        </div>

        {/* Process timeline */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center">How custom builds work</h3>
          <div className="card-glow">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div>
                <div className="font-semibold mb-1">1. Discovery</div>
                <p className="text-sm text-foreground-muted">Goals, data sources, success metrics.</p>
              </div>
              <div>
                <div className="font-semibold mb-1">2. Design</div>
                <p className="text-sm text-foreground-muted">Flows, prompts, safeguards, UX.</p>
              </div>
              <div>
                <div className="font-semibold mb-1">3. Build</div>
                <p className="text-sm text-foreground-muted">Agent logic, integrations, tests.</p>
              </div>
              <div>
                <div className="font-semibold mb-1">4. Integrate</div>
                <p className="text-sm text-foreground-muted">Environments, access, training.</p>
              </div>
              <div>
                <div className="font-semibold mb-1">5. Iterate</div>
                <p className="text-sm text-foreground-muted">Monitor KPIs and improve weekly.</p>
              </div>
            </div>
          </div>
        </div>
        {/* AI Safety Framework - agent-style card (matches other agent cards) */}
        <div className="mt-10">
          <div className="card-agent group w-full flex items-start gap-8 p-6 relative" style={{ alignItems: 'stretch' }}>
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary-bright flex items-center justify-center mb-4 transition-all duration-300 ease-out">
                <ShieldCheck className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2 text-foreground">AI Safety Framework</h3>
              <div className="mb-3">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-primary/90 text-primary-foreground">Core</span>
              </div>
              <p className="text-foreground-muted mb-4 leading-relaxed">AgentSentry lets you observe and control agent/tool actions originating from LLM apps. It records detailed traces (user inputs, assistant outputs, and tool calls), evaluates them against safety rules, and returns allow / warn / block decisions along with human-readable reasons. AgentSentry also supports asynchronous, dynamic checks via a worker for runtime policy evaluation.</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                <div>
                  <div className="font-semibold mb-1">Observe & control</div>
                  <p className="text-sm text-foreground-muted">Watch agent and tool actions in real time and intercept or modify behavior when needed.</p>
                </div>
                <div>
                  <div className="font-semibold mb-1">Trace recording</div>
                  <p className="text-sm text-foreground-muted">Store traces of user, assistant, and tool calls for auditing, debugging, and replay.</p>
                </div>
                <div>
                  <div className="font-semibold mb-1">Policy eval & async checks</div>
                  <p className="text-sm text-foreground-muted">Evaluate traces against safety rules to return allow / warn / block decisions with reasons; supports async dynamic checks via a worker.</p>
                </div>
              </div>
            </div>

            {/* subtle hover overlay to match agent cards */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out rounded-xl pointer-events-none" />
          </div>
        </div>

        {/* Agents Grid (now at the bottom) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <div className="mb-4">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-primary/90 text-primary-foreground">
                      Customizable
                    </span>
                  </div>
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
