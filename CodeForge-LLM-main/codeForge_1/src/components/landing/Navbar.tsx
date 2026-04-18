import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Code2, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-black/70 backdrop-blur-md border-b border-white/10 py-3"
          : "py-5"
      )}
    >
      <div className="container-wide flex items-center justify-between px-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center">
            <Code2 className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white">
            CodeForge AI
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#how-it-works"
            className="text-gray-300 hover:text-white text-sm transition-colors"
          >
            How It Works
          </a>

          <a
            href="#features"
            className="text-gray-300 hover:text-white text-sm transition-colors"
          >
            Features
          </a>

          <Link
            to="/docs"
            className="text-gray-300 hover:text-white text-sm transition-colors"
          >
            Docs
          </Link>
        </div>

        {/* Auth buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="text-gray-300 hover:text-white"
          >
            <Link to="/login">Sign In</Link>
          </Button>

          <Button
            asChild
            size="sm"
            className="bg-teal-500 hover:bg-teal-400 text-white"
          >
            <Link to="/signup">Get Started</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md mt-2 mx-4 rounded-xl p-6 animate-scale-in">
          <div className="flex flex-col gap-4">

            <a
              href="#how-it-works"
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </a>

            <a
              href="#features"
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>

            <Link
              to="/docs"
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Docs
            </Link>

            <hr className="border-white/10" />

            <Button
              asChild
              variant="ghost"
              className="justify-start text-gray-300 hover:text-white"
            >
              <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                Sign In
              </Link>
            </Button>

            <Button
              asChild
              className="bg-teal-500 hover:bg-teal-400 text-white"
            >
              <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                Get Started
              </Link>
            </Button>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
