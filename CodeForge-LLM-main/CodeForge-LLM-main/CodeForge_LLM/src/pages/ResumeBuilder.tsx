import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { 
  FileText, 
  Sparkles, 
  Download, 
  Plus,
  Trash2,
  GripVertical
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ResumeBuilder = () => {
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      name: "John Doe",
      email: "john@example.com",
      phone: "+1 234 567 890",
      location: "San Francisco, CA",
      summary: "Full-stack developer with 5+ years of experience building scalable web applications.",
    },
    experience: [
      { id: 1, title: "Senior Developer", company: "Tech Corp", duration: "2022 - Present", description: "Led development of core platform features." },
    ],
    education: [
      { id: 1, degree: "B.S. Computer Science", school: "Stanford University", year: "2018" },
    ],
    skills: ["React", "TypeScript", "Node.js", "Python", "PostgreSQL"],
  });

  const handleAIImprove = (field: string) => {
    toast.success(`AI improved your ${field}!`);
  };

  return (
    <DashboardLayout>
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Form side */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Resume Builder</h2>
            <Button className="btn-glow">
              <Download className="w-4 h-4 mr-2" />
              Export PDF
            </Button>
          </div>

          {/* Personal Info */}
          <div className="glass-strong rounded-xl p-6 space-y-4">
            <h3 className="font-semibold flex items-center gap-2">
              <FileText className="w-4 h-4 text-primary" />
              Personal Information
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name" 
                  value={resumeData.personalInfo.name}
                  onChange={(e) => setResumeData({
                    ...resumeData,
                    personalInfo: { ...resumeData.personalInfo, name: e.target.value }
                  })}
                  className="bg-surface border-border"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email"
                  value={resumeData.personalInfo.email}
                  onChange={(e) => setResumeData({
                    ...resumeData,
                    personalInfo: { ...resumeData.personalInfo, email: e.target.value }
                  })}
                  className="bg-surface border-border"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input 
                  id="phone" 
                  value={resumeData.personalInfo.phone}
                  onChange={(e) => setResumeData({
                    ...resumeData,
                    personalInfo: { ...resumeData.personalInfo, phone: e.target.value }
                  })}
                  className="bg-surface border-border"
                />
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input 
                  id="location" 
                  value={resumeData.personalInfo.location}
                  onChange={(e) => setResumeData({
                    ...resumeData,
                    personalInfo: { ...resumeData.personalInfo, location: e.target.value }
                  })}
                  className="bg-surface border-border"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <Label htmlFor="summary">Professional Summary</Label>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => handleAIImprove("summary")}
                  className="text-primary"
                >
                  <Sparkles className="w-3 h-3 mr-1" />
                  AI Improve
                </Button>
              </div>
              <Textarea 
                id="summary"
                value={resumeData.personalInfo.summary}
                onChange={(e) => setResumeData({
                  ...resumeData,
                  personalInfo: { ...resumeData.personalInfo, summary: e.target.value }
                })}
                className="bg-surface border-border min-h-[100px]"
              />
            </div>
          </div>

          {/* Experience */}
          <div className="glass-strong rounded-xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Work Experience</h3>
              <Button variant="outline" size="sm" className="bg-surface border-border">
                <Plus className="w-4 h-4 mr-1" />
                Add
              </Button>
            </div>
            
            {resumeData.experience.map((exp) => (
              <div key={exp.id} className="p-4 rounded-lg bg-surface border border-border">
                <div className="flex items-start gap-3">
                  <GripVertical className="w-4 h-4 text-muted-foreground mt-1 cursor-grab" />
                  <div className="flex-1 space-y-3">
                    <div className="grid md:grid-cols-2 gap-3">
                      <Input 
                        value={exp.title} 
                        placeholder="Job Title"
                        className="bg-background border-border"
                      />
                      <Input 
                        value={exp.company} 
                        placeholder="Company"
                        className="bg-background border-border"
                      />
                    </div>
                    <Input 
                      value={exp.duration} 
                      placeholder="Duration"
                      className="bg-background border-border"
                    />
                    <div className="flex items-start gap-2">
                      <Textarea 
                        value={exp.description} 
                        placeholder="Description"
                        className="bg-background border-border min-h-[80px]"
                      />
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => handleAIImprove("experience")}
                        className="text-primary flex-shrink-0"
                      >
                        <Sparkles className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="text-destructive flex-shrink-0">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="glass-strong rounded-xl p-6 space-y-4">
            <h3 className="font-semibold">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm flex items-center gap-2"
                >
                  {skill}
                  <button className="hover:text-destructive transition-colors">
                    <Trash2 className="w-3 h-3" />
                  </button>
                </span>
              ))}
              <button className="px-3 py-1.5 rounded-full border border-dashed border-border text-muted-foreground text-sm hover:border-primary hover:text-primary transition-colors">
                <Plus className="w-3 h-3 inline mr-1" />
                Add Skill
              </button>
            </div>
          </div>
        </div>

        {/* Preview side */}
        <div className="glass-strong rounded-xl p-8 h-fit sticky top-24">
          <h3 className="font-semibold mb-6 text-center">Live Preview</h3>
          
          <div className="bg-white text-black rounded-lg p-8 shadow-lg">
            {/* Resume preview */}
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold">{resumeData.personalInfo.name}</h1>
              <p className="text-sm text-gray-600">
                {resumeData.personalInfo.email} • {resumeData.personalInfo.phone}
              </p>
              <p className="text-sm text-gray-600">{resumeData.personalInfo.location}</p>
            </div>

            <div className="mb-6">
              <h2 className="text-sm font-bold uppercase border-b border-gray-300 pb-1 mb-2">Summary</h2>
              <p className="text-sm text-gray-700">{resumeData.personalInfo.summary}</p>
            </div>

            <div className="mb-6">
              <h2 className="text-sm font-bold uppercase border-b border-gray-300 pb-1 mb-2">Experience</h2>
              {resumeData.experience.map((exp) => (
                <div key={exp.id} className="mb-3">
                  <div className="flex justify-between">
                    <span className="font-semibold text-sm">{exp.title}</span>
                    <span className="text-xs text-gray-600">{exp.duration}</span>
                  </div>
                  <p className="text-sm text-gray-600">{exp.company}</p>
                  <p className="text-xs text-gray-700 mt-1">{exp.description}</p>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-sm font-bold uppercase border-b border-gray-300 pb-1 mb-2">Skills</h2>
              <p className="text-sm text-gray-700">{resumeData.skills.join(" • ")}</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ResumeBuilder;
