import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { 
  User, 
  Bell, 
  Palette, 
  Shield, 
  CreditCard,
  ChevronRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

const Settings = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    avatar: "",
  });

  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    updates: true,
  });

  const handleSave = () => {
    toast.success("Settings saved successfully!");
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl">
        <h2 className="text-2xl font-bold mb-6">Settings</h2>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="glass-strong h-auto p-1 flex-wrap">
            <TabsTrigger value="profile" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              <User className="w-4 h-4 mr-2" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="notifications" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              <Bell className="w-4 h-4 mr-2" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="appearance" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              <Palette className="w-4 h-4 mr-2" />
              Appearance
            </TabsTrigger>
            <TabsTrigger value="security" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              <Shield className="w-4 h-4 mr-2" />
              Security
            </TabsTrigger>
            <TabsTrigger value="billing" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              <CreditCard className="w-4 h-4 mr-2" />
              Billing
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <div className="glass-strong rounded-xl p-6 space-y-6">
              <h3 className="text-lg font-semibold">Profile Information</h3>
              
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center text-3xl text-white font-bold">
                  {profile.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <Button variant="outline" size="sm" className="bg-surface border-border mb-2">
                    Change Avatar
                  </Button>
                  <p className="text-xs text-muted-foreground">JPG, PNG or GIF. Max 2MB.</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="bg-surface border-border"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email"
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="bg-surface border-border"
                  />
                </div>
              </div>

              <Button onClick={handleSave} className="gradient-primary">
                Save Changes
              </Button>
            </div>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications">
            <div className="glass-strong rounded-xl p-6 space-y-6">
              <h3 className="text-lg font-semibold">Notification Preferences</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-surface">
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive updates via email</p>
                  </div>
                  <Switch 
                    checked={notifications.email}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, email: checked })}
                  />
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg bg-surface">
                  <div>
                    <p className="font-medium">Push Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive push notifications in browser</p>
                  </div>
                  <Switch 
                    checked={notifications.push}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, push: checked })}
                  />
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg bg-surface">
                  <div>
                    <p className="font-medium">Product Updates</p>
                    <p className="text-sm text-muted-foreground">Get notified about new features</p>
                  </div>
                  <Switch 
                    checked={notifications.updates}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, updates: checked })}
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Appearance Tab */}
          <TabsContent value="appearance">
            <div className="glass-strong rounded-xl p-6 space-y-6">
              <h3 className="text-lg font-semibold">Appearance</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-surface">
                  <div>
                    <p className="font-medium">Dark Mode</p>
                    <p className="text-sm text-muted-foreground">Use dark theme across the app</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="p-4 rounded-lg bg-surface">
                  <p className="font-medium mb-3">Accent Color</p>
                  <div className="flex gap-3">
                    {["#14b8a6", "#3b82f6", "#8b5cf6", "#f43f5e", "#f59e0b"].map((color) => (
                      <button
                        key={color}
                        className="w-8 h-8 rounded-full ring-2 ring-offset-2 ring-offset-background"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security">
            <div className="glass-strong rounded-xl p-6 space-y-6">
              <h3 className="text-lg font-semibold">Security</h3>
              
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-4 rounded-lg bg-surface hover:border-primary/30 border border-transparent transition-colors">
                  <div className="text-left">
                    <p className="font-medium">Change Password</p>
                    <p className="text-sm text-muted-foreground">Update your password</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </button>

                <button className="w-full flex items-center justify-between p-4 rounded-lg bg-surface hover:border-primary/30 border border-transparent transition-colors">
                  <div className="text-left">
                    <p className="font-medium">Two-Factor Authentication</p>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </button>

                <button className="w-full flex items-center justify-between p-4 rounded-lg bg-surface hover:border-primary/30 border border-transparent transition-colors">
                  <div className="text-left">
                    <p className="font-medium">Active Sessions</p>
                    <p className="text-sm text-muted-foreground">Manage your active sessions</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>
            </div>
          </TabsContent>

          {/* Billing Tab */}
          <TabsContent value="billing">
            <div className="glass-strong rounded-xl p-6 space-y-6">
              <h3 className="text-lg font-semibold">Billing & Plans</h3>
              
              <div className="p-6 rounded-xl gradient-subtle border border-primary/20">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Current Plan</p>
                    <p className="text-2xl font-bold">Free</p>
                  </div>
                  <Button className="gradient-primary">Upgrade</Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  You're on the free plan. Upgrade to unlock unlimited projects and advanced features.
                </p>
              </div>

              <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-4 rounded-lg bg-surface hover:border-primary/30 border border-transparent transition-colors">
                  <div className="text-left">
                    <p className="font-medium">Payment Methods</p>
                    <p className="text-sm text-muted-foreground">Manage your payment methods</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </button>

                <button className="w-full flex items-center justify-between p-4 rounded-lg bg-surface hover:border-primary/30 border border-transparent transition-colors">
                  <div className="text-left">
                    <p className="font-medium">Billing History</p>
                    <p className="text-sm text-muted-foreground">View your past invoices</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
