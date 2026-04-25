import { 
  Sparkles, 
  FileCode2, 
  Network, 
  MessageSquare, 
  Code2, 
  Layers 
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Website Generator",
    description: "Generate complete full-stack applications from natural language descriptions. Landing pages, dashboards, or complex apps.",
  },
  {
    icon: FileCode2,
    title: "Code Explanation Notebook",
    description: "Every line of code explained in plain language. Understand why each piece exists and how it works together.",
  },
  {
    icon: Network,
    title: "Mind Map Visualization",
    description: "Visual graphs showing your app's architecture. See how pages, components, APIs, and databases connect.",
  },
  {
    icon: MessageSquare,
    title: "Interactive AI Chat",
    description: "Ask questions, request changes, and get real-time explanations. The AI updates your code instantly.",
  },
  {
    icon: Code2,
    title: "Built-in Code Editor",
    description: "Full-featured code editor with syntax highlighting. Edit, preview, and deploy all in one place.",
  },
  {
    icon: Layers,
    title: "Component Library",
    description: "Pre-built, customizable components for faster development. Consistent design across your entire application.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="section-padding relative gradient-subtle">
      <div className="container-wide">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to <span className="gradient-text">Build & Learn</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A complete platform that combines AI code generation with interactive learning tools.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-interactive group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-cyan-400/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
