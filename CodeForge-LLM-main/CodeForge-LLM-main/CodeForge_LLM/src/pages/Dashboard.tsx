import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Link, useNavigate } from "react-router-dom";
import { Plus, FolderOpen, Clock, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

// Firebase
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

const stats = [
  { label: "Total Projects", value: "12", icon: FolderOpen, trend: "+3 this month" },
  { label: "Hours Saved", value: "48", icon: Clock, trend: "Using AI" },
  { label: "Lines Generated", value: "15.2K", icon: Zap, trend: "+2.1K this week" },
];

const recentProjects = [
  { name: "E-commerce Dashboard", tech: "React, TypeScript", updatedAt: "2 hours ago" },
  { name: "Portfolio Website", tech: "React, Tailwind", updatedAt: "Yesterday" },
  { name: "Blog Platform", tech: "React, Supabase", updatedAt: "3 days ago" },
];

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (error) {
      toast.error("Error logging out");
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* Welcome */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold mb-1 text-white">
              Welcome back! 👋
            </h2>
            <p className="text-gray-300">
              Ready to build something amazing today?
            </p>
          </div>

          <div className="flex gap-2">
            <Button asChild className="bg-teal-500 hover:bg-teal-400 text-white">
              <Link to="/dashboard/create">
                <Plus className="w-4 h-4 mr-2" />
                New Project
              </Link>
            </Button>

            <Button variant="destructive" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="card-interactive">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-300 text-sm mb-1">
                    {stat.label}
                  </p>
                  <p className="text-3xl font-bold text-white">
                    {stat.value}
                  </p>
                </div>

                <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-teal-400" />
                </div>
              </div>

              <div className="flex items-center gap-1 mt-3 text-sm text-gray-400">
                <TrendingUp className="w-4 h-4 text-teal-400" />
                {stat.trend}
              </div>
            </div>
          ))}
        </div>

        {/* Recent Projects */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">
              Recent Projects
            </h3>

            <Link
              to="/dashboard/projects"
              className="text-sm text-teal-400 hover:text-teal-300"
            >
              View all
            </Link>
          </div>

          <div className="space-y-3">
            {recentProjects.map((project) => (
              <div
                key={project.name}
                className="flex items-center justify-between p-4 rounded-xl glass hover:border-teal-400/30 transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-teal-500 flex items-center justify-center">
                    <FolderOpen className="w-5 h-5 text-white" />
                  </div>

                  <div>
                    <p className="font-medium text-white">
                      {project.name}
                    </p>
                    <p className="text-sm text-gray-300">
                      {project.tech}
                    </p>
                  </div>
                </div>

                <span className="text-sm text-gray-400">
                  {project.updatedAt}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="glass rounded-2xl p-6">
          <h3 className="text-lg font-semibold mb-4 text-white">
            Quick Actions
          </h3>

          <div className="grid md:grid-cols-3 gap-4">

            {["Create Landing Page", "Build Dashboard", "Full-Stack App"].map((title) => (
              <Button
                key={title}
                asChild
                variant="outline"
                className="h-auto py-4 justify-start bg-surface border-border hover:border-teal-400/50"
              >
                <Link to="/dashboard/create" className="flex flex-col items-start">
                  <span className="font-medium text-white">{title}</span>
                  <span className="text-xs text-gray-300">
                    Quick start template
                  </span>
                </Link>
              </Button>
            ))}

          </div>
        </div>

      </div>
    </DashboardLayout>
  );
};

export default Dashboard;