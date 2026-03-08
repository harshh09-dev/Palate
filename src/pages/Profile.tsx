import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings, Heart, ChefHat, CalendarDays } from "lucide-react";
import { useNavigate } from "react-router-dom";

const myRecipes = [
  { title: "Avocado Toast & Eggs", calories: 380, emoji: "🥑" },
  { title: "Pasta Primavera", calories: 520, emoji: "🍝" },
  { title: "Berry Smoothie Bowl", calories: 280, emoji: "🫐" },
];

const savedRecipes = [
  { title: "Chicken Tikka Masala", calories: 620, emoji: "🍛" },
  { title: "Teriyaki Salmon Bowl", calories: 580, emoji: "🍣" },
];

const Profile = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-3xl">
        {/* Profile Header */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-3xl">👤</div>
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-foreground">John Doe</h1>
                <p className="text-muted-foreground text-sm">Healthy eating enthusiast | Home cook</p>
                <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                  <span><strong className="text-foreground">24</strong> recipes</span>
                  <span><strong className="text-foreground">128</strong> followers</span>
                  <span><strong className="text-foreground">56</strong> following</span>
                </div>
              </div>
              <Button variant="outline" size="sm" className="gap-1" onClick={() => navigate("/settings")}>
                <Settings className="w-3.5 h-3.5" /> Edit
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="my-recipes">
          <TabsList>
            <TabsTrigger value="my-recipes" className="gap-1"><ChefHat className="w-3.5 h-3.5" /> My Recipes</TabsTrigger>
            <TabsTrigger value="saved" className="gap-1"><Heart className="w-3.5 h-3.5" /> Saved</TabsTrigger>
            <TabsTrigger value="plans" className="gap-1"><CalendarDays className="w-3.5 h-3.5" /> Meal Plans</TabsTrigger>
          </TabsList>

          <TabsContent value="my-recipes" className="space-y-3 mt-4">
            {myRecipes.map((r) => (
              <Card key={r.title} className="cursor-pointer hover:shadow-card transition-shadow">
                <CardContent className="p-4 flex items-center gap-3">
                  <span className="text-2xl">{r.emoji}</span>
                  <div className="flex-1">
                    <p className="font-medium text-foreground text-sm">{r.title}</p>
                    <p className="text-xs text-muted-foreground">{r.calories} cal</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="saved" className="space-y-3 mt-4">
            {savedRecipes.map((r) => (
              <Card key={r.title} className="cursor-pointer hover:shadow-card transition-shadow">
                <CardContent className="p-4 flex items-center gap-3">
                  <span className="text-2xl">{r.emoji}</span>
                  <div className="flex-1">
                    <p className="font-medium text-foreground text-sm">{r.title}</p>
                    <p className="text-xs text-muted-foreground">{r.calories} cal</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="plans" className="mt-4">
            <Card>
              <CardContent className="p-6 text-center text-muted-foreground">
                <CalendarDays className="w-8 h-8 mx-auto mb-2 text-muted-foreground/50" />
                <p className="text-sm">No saved meal plans yet</p>
                <Button size="sm" className="mt-3" onClick={() => navigate("/planner")}>Create Meal Plan</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
