import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { 
  Sparkles, 
  Loader2, 
  Play, 
  Code2, 
  FileCode2, 
  Network, 
  MessageSquare,
  ChevronRight,
  RefreshCw
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const appTypes = [
  { id: "landing", label: "Landing Page", description: "Marketing page with sections" },
  { id: "fullstack", label: "Full-Stack App", description: "Complete application with backend" },
  { id: "dashboard", label: "Dashboard", description: "Admin panel or analytics" },
];

const generationSteps = [
  { id: 1, label: "Analyzing requirements" },
  { id: 2, label: "Designing architecture" },
  { id: 3, label: "Generating code" },
  { id: 4, label: "Creating explanations" },
  { id: 5, label: "Building mind map" },
];

const CreateProject = () => {
  const [prompt, setPrompt] = useState("");
  const [selectedType, setSelectedType] = useState("fullstack");
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    setIsComplete(false);
    
    // Simulate generation steps
    for (let i = 0; i < generationSteps.length; i++) {
      setCurrentStep(i + 1);
      await new Promise(resolve => setTimeout(resolve, 1500));
    }
    
    setIsGenerating(false);
    setIsComplete(true);
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Prompt section */}
        <div className="glass-strong rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Create New Project</h2>
              <p className="text-sm text-muted-foreground">Describe your idea and let AI build it</p>
            </div>
          </div>

          {/* Prompt textarea */}
          <div className="relative mb-6">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe the website you want to build... e.g., 'A task management app with user authentication, drag-and-drop boards, and team collaboration features'"
              className="w-full h-40 p-4 rounded-xl bg-surface border border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/20 resize-none transition-all duration-200 text-foreground placeholder:text-muted-foreground"
            />
            <div className="absolute bottom-4 right-4 text-sm text-muted-foreground">
              {prompt.length} / 2000
            </div>
          </div>

          {/* App type selection */}
          <div className="mb-6">
            <label className="text-sm font-medium text-muted-foreground mb-3 block">Application Type</label>
            <div className="grid md:grid-cols-3 gap-3">
              {appTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={cn(
                    "p-4 rounded-xl border text-left transition-all duration-200",
                    selectedType === type.id
                      ? "border-primary bg-primary/10"
                      : "border-border bg-surface hover:border-primary/30"
                  )}
                >
                  <p className="font-medium mb-1">{type.label}</p>
                  <p className="text-sm text-muted-foreground">{type.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Generate button */}
          <Button 
            onClick={handleGenerate}
            disabled={!prompt.trim() || isGenerating}
            className="btn-glow w-full h-12 text-base"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5 mr-2" />
                Generate Application
              </>
            )}
          </Button>

          {/* Progress steps */}
          {isGenerating && (
            <div className="mt-6 space-y-3">
              {generationSteps.map((step) => (
                <div 
                  key={step.id}
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-lg transition-all duration-300",
                    currentStep >= step.id ? "bg-primary/10" : "bg-surface"
                  )}
                >
                  {currentStep > step.id ? (
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                      <ChevronRight className="w-3 h-3 text-white" />
                    </div>
                  ) : currentStep === step.id ? (
                    <Loader2 className="w-5 h-5 text-primary animate-spin" />
                  ) : (
                    <div className="w-5 h-5 rounded-full border border-border" />
                  )}
                  <span className={cn(
                    "text-sm",
                    currentStep >= step.id ? "text-foreground" : "text-muted-foreground"
                  )}>
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Output workspace */}
        {isComplete && (
          <div className="glass-strong rounded-2xl overflow-hidden animate-fade-in">
            <Tabs defaultValue="preview" className="w-full">
              <div className="border-b border-border px-4">
                <TabsList className="h-14 bg-transparent">
                  <TabsTrigger value="preview" className="data-[state=active]:bg-surface">
                    <Play className="w-4 h-4 mr-2" />
                    Preview
                  </TabsTrigger>
                  <TabsTrigger value="code" className="data-[state=active]:bg-surface">
                    <Code2 className="w-4 h-4 mr-2" />
                    Code Explorer
                  </TabsTrigger>
                  <TabsTrigger value="notebook" className="data-[state=active]:bg-surface">
                    <FileCode2 className="w-4 h-4 mr-2" />
                    Notebook
                  </TabsTrigger>
                  <TabsTrigger value="mindmap" className="data-[state=active]:bg-surface">
                    <Network className="w-4 h-4 mr-2" />
                    Mind Map
                  </TabsTrigger>
                  <TabsTrigger value="chat" className="data-[state=active]:bg-surface">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    AI Chat
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="preview" className="p-0 m-0">
                <div className="relative">
                  <div className="absolute top-4 right-4 z-10">
                    <Button size="sm" variant="outline" className="bg-surface">
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Refresh
                    </Button>
                  </div>
                  <div className="h-[600px] bg-surface flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-2xl gradient-primary mx-auto mb-4 flex items-center justify-center">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-lg font-medium mb-2">Live Preview</p>
                      <p className="text-sm text-muted-foreground">Your generated app will appear here</p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="code" className="p-0 m-0">
                <div className="flex h-[600px]">
                  {/* File tree */}
                  <div className="w-64 border-r border-border p-4">
                    <p className="text-sm font-medium mb-3">Files</p>
                    <div className="space-y-1 text-sm">
                      {["src/", "├── components/", "│   ├── Header.tsx", "│   ├── Hero.tsx", "│   └── Footer.tsx", "├── pages/", "│   └── index.tsx", "├── App.tsx", "└── main.tsx"].map((file, i) => (
                        <div key={i} className="text-muted-foreground font-mono hover:text-foreground cursor-pointer py-1">
                          {file}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Code editor */}
                  <div className="flex-1 p-4 bg-surface">
                    <pre className="text-sm font-mono text-muted-foreground">
                      <code>{`// App.tsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}`}</code>
                    </pre>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="notebook" className="p-6 m-0">
                <div className="space-y-6 max-w-3xl">
                  <div className="p-4 rounded-xl bg-surface border border-border">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm font-medium">Component: Header</span>
                    </div>
                    <pre className="text-sm font-mono text-muted-foreground bg-background p-3 rounded-lg mb-3">
{`export default function Header() {
  return <header>...</header>;
}`}
                    </pre>
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Explanation:</strong> The Header component provides the top navigation bar. 
                      It includes the logo, navigation links, and authentication buttons.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-surface border border-border">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-cyan-400" />
                      <span className="text-sm font-medium">Component: Hero</span>
                    </div>
                    <pre className="text-sm font-mono text-muted-foreground bg-background p-3 rounded-lg mb-3">
{`export default function Hero() {
  return <section>...</section>;
}`}
                    </pre>
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Why this exists:</strong> The Hero section is the first thing users see. 
                      It contains the main headline, description, and call-to-action buttons.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="mindmap" className="p-6 m-0">
                <div className="h-[500px] flex items-center justify-center">
                  <div className="text-center">
                    <Network className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="text-lg font-medium mb-2">Architecture Mind Map</p>
                    <p className="text-sm text-muted-foreground max-w-md">
                      Interactive visualization of your app's structure, 
                      showing how pages, components, and APIs connect.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="chat" className="p-0 m-0">
                <div className="flex h-[600px]">
                  <div className="flex-1 flex flex-col">
                    {/* Chat messages */}
                    <div className="flex-1 p-6 space-y-4 overflow-auto">
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                          <Sparkles className="w-4 h-4 text-white" />
                        </div>
                        <div className="glass rounded-xl p-4 max-w-lg">
                          <p className="text-sm">
                            I've generated your application! Here are some things you can ask me:
                          </p>
                          <div className="flex flex-wrap gap-2 mt-3">
                            {["Add authentication", "Optimize this code", "Explain the Hero component"].map((suggestion) => (
                              <button 
                                key={suggestion}
                                className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                              >
                                {suggestion}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Chat input */}
                    <div className="p-4 border-t border-border">
                      <div className="flex gap-3">
                        <input
                          type="text"
                          placeholder="Ask anything about your code..."
                          className="flex-1 h-12 px-4 rounded-xl bg-surface border border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                        />
                        <Button className="h-12 px-6 gradient-primary">
                          Send
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default CreateProject;
