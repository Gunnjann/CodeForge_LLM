import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Code2, ArrowLeft, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

// Firebase
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      console.log("Logged in:", userCredential.user);

      toast.success("Welcome back!");
      navigate("/dashboard");

    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background dark flex">

      {/* LEFT PANEL */}
      <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 xl:px-24">
        <div className="w-full max-w-md mx-auto">

          {/* BACK */}
          <Link
            to="/"
            className="flex items-center gap-2 mb-6 text-gray-300 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          {/* LOGO */}
          <div className="flex items-center gap-2 mb-6">
            <Code2 className="w-6 h-6 text-teal-400" />
            <span className="text-xl font-bold text-white">
              CodeForge AI
            </span>
          </div>

          {/* TITLE */}
          <h1 className="text-3xl font-bold mb-2 text-white">
            Welcome back
          </h1>

          <p className="text-gray-300 mb-6">
            Sign in to continue building with AI
          </p>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <Label className="text-gray-300">Email</Label>
              <Input
                className="bg-gray-900 border border-gray-600 text-white placeholder-gray-500"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>

            <div>
              <Label className="text-gray-300">Password</Label>
              <div className="relative">
                <Input
                  className="bg-gray-900 border border-gray-600 text-white placeholder-gray-500"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2 text-gray-400 hover:text-white"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>

            {/* BUTTON */}
            <Button
              disabled={isLoading}
              className="w-full bg-teal-500 hover:bg-teal-400 text-white"
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          {/* SIGNUP */}
          <p className="text-center mt-4 text-gray-300">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-teal-400 hover:text-teal-300"
            >
              Sign up
            </Link>
          </p>

        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="hidden lg:flex flex-1 items-center justify-center relative gradient-subtle">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute w-96 h-96 bg-teal-500/30 rounded-full blur-3xl animate-pulse-glow" />
        <div className="relative z-10 text-center p-12">
          <div className="glass-strong rounded-3xl p-8 max-w-md">
            <Code2 className="w-16 h-16 text-teal-400 mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-4 text-white">
              Build Faster with AI
            </h2>
            <p className="text-gray-300">
              Generate complete web applications from natural language descriptions.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Login;