import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

const SettingsPage = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-2xl">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground mt-1">Manage your account and preferences</p>
        </div>

        {/* Account */}
        <Card>
          <CardHeader><CardTitle className="text-lg">Account</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground">Name</label>
                <Input defaultValue="John Doe" className="mt-1" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input defaultValue="john@example.com" className="mt-1" />
              </div>
            </div>
            <Button size="sm">Save Changes</Button>
          </CardContent>
        </Card>

        {/* Diet Preferences */}
        <Card>
          <CardHeader><CardTitle className="text-lg">Diet Preferences</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {["Vegetarian", "Low Carb", "High Protein", "Gluten Free"].map((pref) => (
              <div key={pref} className="flex items-center justify-between">
                <span className="text-sm text-foreground">{pref}</span>
                <Switch />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card>
          <CardHeader><CardTitle className="text-lg">Notifications</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {[
              { label: "Meal reminders", desc: "Get notified about upcoming meals" },
              { label: "Grocery alerts", desc: "Remind me to shop" },
              { label: "Community updates", desc: "New likes and comments" },
              { label: "Weekly reports", desc: "Nutrition summary every Sunday" },
            ].map((n) => (
              <div key={n.label} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">{n.label}</p>
                  <p className="text-xs text-muted-foreground">{n.desc}</p>
                </div>
                <Switch defaultChecked />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Danger Zone */}
        <Card className="border-destructive/30">
          <CardHeader><CardTitle className="text-lg text-destructive">Danger Zone</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Export Data</p>
                <p className="text-xs text-muted-foreground">Download all your recipes and meal plans</p>
              </div>
              <Button variant="outline" size="sm">Export</Button>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Delete Account</p>
                <p className="text-xs text-muted-foreground">Permanently delete your account and data</p>
              </div>
              <Button variant="destructive" size="sm">Delete</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;
