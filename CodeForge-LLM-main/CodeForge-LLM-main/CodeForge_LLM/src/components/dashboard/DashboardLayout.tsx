import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Plus, 
  FolderOpen, 
  FileText, 
  Settings, 
  ChevronLeft,
  Code2,
  LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: Plus, label: "Create Project", path: "/dashboard/create" },
  { icon: FolderOpen, label: "My Projects", path: "/dashboard/projects" },
  { icon: FileText, label: "Resume Builder", path: "/dashboard/resume" },
  { icon: Settings, label: "Settings", path: "/dashboard/settings" },
];

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background dark flex w-full">
      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-0 h-screen glass-strong border-r border-border flex flex-col transition-all duration-300 z-40",
        isCollapsed ? "w-16" : "w-64"
      )}>
        {/* Logo */}
        <div className={cn(
          "flex items-center h-16 px-4 border-b border-border",
          isCollapsed ? "justify-center" : "gap-3"
        )}>
          <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
            <Code2 className="w-5 h-5 text-white" />
          </div>
          {!isCollapsed && <span className="font-bold text-lg">CodeForge</span>}
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const NavContent = (
              <Link
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                  isActive 
                    ? "bg-primary/10 text-primary border border-primary/20" 
                    : "text-muted-foreground hover:text-foreground hover:bg-surface"
                )}
              >
                <item.icon className={cn("w-5 h-5 flex-shrink-0", isActive && "text-primary")} />
                {!isCollapsed && <span className="text-sm font-medium">{item.label}</span>}
              </Link>
            );

            if (isCollapsed) {
              return (
                <Tooltip key={item.path} delayDuration={0}>
                  <TooltipTrigger asChild>
                    {NavContent}
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    {item.label}
                  </TooltipContent>
                </Tooltip>
              );
            }

            return <div key={item.path}>{NavContent}</div>;
          })}
        </nav>

        {/* Footer */}
        <div className="p-3 border-t border-border space-y-1">
          {/* Collapse button */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-surface w-full transition-all duration-200"
          >
            <ChevronLeft className={cn(
              "w-5 h-5 transition-transform duration-200",
              isCollapsed && "rotate-180"
            )} />
            {!isCollapsed && <span className="text-sm">Collapse</span>}
          </button>

          {/* Logout */}
          <Link
            to="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-surface transition-all duration-200"
          >
            <LogOut className="w-5 h-5" />
            {!isCollapsed && <span className="text-sm">Logout</span>}
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <main className={cn(
        "flex-1 transition-all duration-300",
        isCollapsed ? "ml-16" : "ml-64"
      )}>
        {/* Top bar */}
        <header className="h-16 glass-strong border-b border-border flex items-center justify-between px-6 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-semibold">
              {navItems.find(item => item.path === location.pathname)?.label || "Dashboard"}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            {/* Dark mode toggle placeholder */}
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <span className="sr-only">Toggle theme</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </Button>

            {/* User avatar */}
            <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-white text-sm font-medium">
              JD
            </div>
          </div>
        </header>

        {/* Page content */}
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
