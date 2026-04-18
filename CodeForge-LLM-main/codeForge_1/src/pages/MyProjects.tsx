import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { 
  FolderOpen, 
  Search, 
  MoreVertical, 
  Trash2, 
  Copy, 
  ExternalLink,
  Grid3X3,
  List
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const projects = [
  { 
    id: 1, 
    name: "E-commerce Dashboard", 
    tech: ["React", "TypeScript", "Tailwind"], 
    updatedAt: "2 hours ago",
    description: "Full-featured admin panel for online store management"
  },
  { 
    id: 2, 
    name: "Portfolio Website", 
    tech: ["React", "Framer Motion"], 
    updatedAt: "Yesterday",
    description: "Personal portfolio with animations and project showcase"
  },
  { 
    id: 3, 
    name: "Blog Platform", 
    tech: ["React", "Supabase", "MDX"], 
    updatedAt: "3 days ago",
    description: "Content management system with markdown support"
  },
  { 
    id: 4, 
    name: "Task Manager", 
    tech: ["React", "Redux", "DnD"], 
    updatedAt: "1 week ago",
    description: "Kanban-style task management with drag and drop"
  },
  { 
    id: 5, 
    name: "Weather App", 
    tech: ["React", "OpenWeather API"], 
    updatedAt: "2 weeks ago",
    description: "Real-time weather forecasts with location search"
  },
  { 
    id: 6, 
    name: "Chat Application", 
    tech: ["React", "Socket.io", "Node"], 
    updatedAt: "3 weeks ago",
    description: "Real-time messaging with rooms and direct messages"
  },
];

const MyProjects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredProjects = projects.filter(project => 
    project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">My Projects</h2>
            <p className="text-muted-foreground">{projects.length} projects total</p>
          </div>

          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects..."
                className="pl-10 w-64 bg-surface border-border"
              />
            </div>

            {/* View toggle */}
            <div className="flex items-center border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={cn(
                  "p-2 transition-colors",
                  viewMode === "grid" ? "bg-primary text-white" : "bg-surface text-muted-foreground hover:text-foreground"
                )}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={cn(
                  "p-2 transition-colors",
                  viewMode === "list" ? "bg-primary text-white" : "bg-surface text-muted-foreground hover:text-foreground"
                )}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Projects grid/list */}
        {viewMode === "grid" ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="card-interactive group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                    <FolderOpen className="w-6 h-6 text-white" />
                  </div>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="glass-strong">
                      <DropdownMenuItem>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Open
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Copy className="w-4 h-4 mr-2" />
                        Duplicate
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <h3 className="font-semibold mb-2">{project.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-muted-foreground">Updated {project.updatedAt}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="flex items-center justify-between p-4 rounded-xl glass hover:border-primary/30 transition-all duration-200 cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                    <FolderOpen className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium">{project.name}</h3>
                    <div className="flex items-center gap-2">
                      {project.tech.slice(0, 2).map((tech) => (
                        <span key={tech} className="text-xs text-muted-foreground">{tech}</span>
                      ))}
                      {project.tech.length > 2 && (
                        <span className="text-xs text-muted-foreground">+{project.tech.length - 2}</span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">{project.updatedAt}</span>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="glass-strong">
                      <DropdownMenuItem>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Open
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Copy className="w-4 h-4 mr-2" />
                        Duplicate
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <FolderOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-lg font-medium mb-2">No projects found</p>
            <p className="text-muted-foreground">Try adjusting your search query</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default MyProjects;
