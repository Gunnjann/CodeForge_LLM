import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container-narrow relative z-10">
        <div className="glass-strong rounded-3xl p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Build Your <span className="gradient-text">First App?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
            Join thousands of creators who are building and learning with AI. 
            Start for free, no credit card required.
          </p>
          
          <Button asChild size="lg" className="btn-glow h-14 px-10 text-lg">
            <Link to="/signup">
              Start Building Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
