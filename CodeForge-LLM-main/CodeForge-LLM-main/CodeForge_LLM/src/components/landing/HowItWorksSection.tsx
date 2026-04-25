import { Wand2, BookOpen, GitBranch } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Wand2,
    title: "Describe Your Idea",
    description: "Simply describe what you want to build in plain English. Our AI understands your vision and requirements.",
    gradient: "from-primary to-cyan-400",
  },
  {
    number: "02",
    icon: BookOpen,
    title: "AI Builds Your App",
    description: "Watch as the AI generates a complete, production-ready application with proper architecture and best practices.",
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    number: "03",
    icon: GitBranch,
    title: "Learn & Modify",
    description: "Explore interactive code explanations, visualize your app structure, and customize with AI assistance.",
    gradient: "from-blue-500 to-primary",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding relative">
      <div className="container-wide">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From idea to deployed application in minutes, not hours. Learn as you go.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-border to-transparent z-0" />
              )}

              <div className="card-feature relative z-10 h-full">
                {/* Number badge */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${step.gradient} mb-6`}>
                  <step.icon className="w-6 h-6 text-white" />
                </div>

                {/* Step number */}
                <div className="absolute top-6 right-6 text-4xl font-bold text-border/50 select-none">
                  {step.number}
                </div>

                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
