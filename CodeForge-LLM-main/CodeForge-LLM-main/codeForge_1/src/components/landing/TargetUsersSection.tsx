import { GraduationCap, Code2, Rocket, Users } from "lucide-react";

const audiences = [
  {
    icon: GraduationCap,
    title: "Students",
    description: "Learn web development by building real projects. Every concept explained as you go.",
  },
  {
    icon: Code2,
    title: "Beginners",
    description: "No coding experience needed. Start with your idea and learn the fundamentals along the way.",
  },
  {
    icon: Rocket,
    title: "Developers",
    description: "Accelerate your workflow. Generate boilerplate, explore new frameworks, and prototype faster.",
  },
  {
    icon: Users,
    title: "Founders",
    description: "Build your MVP in days, not months. Focus on your vision while AI handles the code.",
  },
];

const TargetUsersSection = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built for <span className="gradient-text">Everyone</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Whether you're learning to code or shipping products, we've got you covered.
          </p>
        </div>

        {/* Audience cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <div
              key={audience.title}
              className="text-center p-8 rounded-2xl glass hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl gradient-primary mx-auto mb-6 flex items-center justify-center">
                <audience.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{audience.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetUsersSection;
