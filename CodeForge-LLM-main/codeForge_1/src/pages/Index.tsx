import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import TargetUsersSection from "@/components/landing/TargetUsersSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background dark">
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <section id="features">
          <FeaturesSection />
        </section>
        <TargetUsersSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
