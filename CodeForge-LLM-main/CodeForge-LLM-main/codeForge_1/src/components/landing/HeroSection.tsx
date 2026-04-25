import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Code2, Brain, MessageSquare, FileCode2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      
      {/* 🔥 Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl animate-pulse-glow delay-500" />

      {/* 🔥 NEW: Dark overlay (fix visibility issue) */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      <div className="relative z-10 container-narrow text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-gray-300">
            AI-Powered Development Platform
          </span>
        </div>

        {/* 🔥 IMPROVED HEADLINE */}
        <div className="space-y-4 mb-6 animate-slide-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-lg">
            Build Websites with AI.
          </h1>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent drop-shadow-lg">
            Learn While You Build.
          </h1>
        </div>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 animate-slide-up delay-100 leading-relaxed">
          Transform your ideas into fully functional web applications with natural language. 
          Our AI generates production-ready code and teaches you every step of the way.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-200">
          <Button asChild size="lg" className="btn-glow h-12 px-8 text-base">
            <Link to="/signup">
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg" className="btn-ghost h-12 px-8 text-base">
            <a href="#how-it-works">See How It Works</a>
          </Button>
        </div>

        {/* Feature pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-12 animate-fade-in delay-300">
          {[
            { icon: Code2, label: "Full-Stack Apps" },
            { icon: Brain, label: "AI Learning" },
            { icon: MessageSquare, label: "Interactive Chat" },
            { icon: FileCode2, label: "Code Notebook" },
          ].map((feature) => (
            <div 
              key={feature.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 text-sm text-gray-300"
            >
              <feature.icon className="w-4 h-4 text-cyan-400" />
              {feature.label}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-cyan-400 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
