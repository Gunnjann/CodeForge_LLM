import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Code2, ArrowLeft, Eye, EyeOff, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

// Firebase
import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const passwordRequirements = [
    { label: "At least 8 characters", met: formData.password.length >= 8 },
    { label: "Contains a number", met: /\d/.test(formData.password) },
    { label: "Contains uppercase letter", met: /[A-Z]/.test(formData.password) },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      await updateProfile(userCredential.user, {
        displayName: formData.name,
      });

      toast.success("Account created successfully!");
      navigate("/dashboard");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex">

      {/* LEFT PANEL */}
      <div className="hidden lg:flex flex-1 items-center justify-center relative bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="relative z-10 text-center p-12">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-white">
              What you'll get
            </h2>

            <ul className="space-y-4 text-left">
              {[
                "AI-powered code generation",
                "Interactive learning notebooks",
                "Visual architecture maps",
                "Built-in code editor",
                "Unlimited projects",
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-teal-500 flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 xl:px-24">
        <div className="w-full max-w-md mx-auto">

          {/* BACK */}
          <Link
            to="/"
            className="flex items-center gap-2 mb-6 text-gray-300 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
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
            Create your account
          </h1>

          <p className="text-gray-300 mb-6">
            Start building amazing apps with AI today
          </p>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <Label className="text-gray-300">Full Name</Label>
              <Input
                className="bg-gray-900 border border-gray-600 text-white placeholder-gray-500"
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>

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

              {/* PASSWORD RULES */}
              {formData.password && (
                <div className="mt-2 space-y-1 text-sm text-gray-300">
                  {passwordRequirements.map((req) => (
                    <div key={req.label}>
                      {req.met ? "✅" : "❌"} {req.label}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* BUTTON */}
            <Button
              disabled={isLoading}
              className="w-full bg-teal-500 hover:bg-teal-400 text-white"
            >
              {isLoading ? "Creating..." : "Create Account"}
            </Button>
          </form>

          {/* LOGIN */}
          <p className="text-center mt-4 text-gray-300">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-teal-400 hover:text-teal-300"
            >
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Signup;