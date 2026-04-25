import { Link } from "react-router-dom";
import { Code2, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="container-wide">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">CodeForge AI</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm">
              Build websites with AI. Learn while you build. The future of web development is here.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              <li><Link to="/features" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Pricing</Link></li>
              <li><Link to="/docs" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Documentation</Link></li>
              <li><Link to="/changelog" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Changelog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground text-sm transition-colors">About</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Blog</Link></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground text-sm transition-colors">GitHub</a></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 mt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">
            © 2024 CodeForge AI. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
