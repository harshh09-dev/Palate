import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Sparkles, Clock, Flame, Heart } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const filters = ["All", "Vegetarian", "High Protein", "Quick Meals", "Desserts", "Keto"];

const mockRecipes = [
  { id: "1", title: "Avocado Toast & Eggs", calories: 380, time: "15 min", image: "🥑", tags: ["Quick Meals", "Vegetarian"], saved: true },
  { id: "2", title: "Grilled Chicken Salad", calories: 450, time: "25 min", image: "🥗", tags: ["High Protein"], saved: false },
  { id: "3", title: "Pasta Primavera", calories: 520, time: "30 min", image: "🍝", tags: ["Vegetarian"], saved: true },
  { id: "4", title: "Teriyaki Salmon Bowl", calories: 580, time: "35 min", image: "🍣", tags: ["High Protein"], saved: false },
  { id: "5", title: "Berry Smoothie Bowl", calories: 280, time: "10 min", image: "🫐", tags: ["Quick Meals", "Vegetarian"], saved: false },
  { id: "6", title: "Chicken Tikka Masala", calories: 620, time: "45 min", image: "🍛", tags: ["High Protein"], saved: true },
  { id: "7", title: "Chocolate Lava Cake", calories: 450, time: "30 min", image: "🍫", tags: ["Desserts"], saved: false },
  { id: "8", title: "Greek Yogurt Parfait", calories: 220, time: "5 min", image: "🥣", tags: ["Quick Meals", "Vegetarian"], saved: false },
  { id: "9", title: "Keto Cauliflower Rice", calories: 180, time: "20 min", image: "🍚", tags: ["Keto"], saved: false },
];

const Recipes = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filtered = mockRecipes.filter((r) => {
    const matchFilter = activeFilter === "All" || r.tags.includes(activeFilter);
    const matchSearch = r.title.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Recipes</h1>
            <p className="text-muted-foreground mt-1">Discover and manage your recipes</p>
          </div>
          <div className="flex gap-2">
            <Button onClick={() => navigate("/ai-generator")} className="gap-2">
              <Sparkles className="w-4 h-4" /> AI Generate
            </Button>
            <Button variant="outline" className="gap-2" onClick={() => navigate("/recipes/create")}>
              <Plus className="w-4 h-4" /> Create Recipe
            </Button>
          </div>
        </div>

        {/* Search + Filters */}
        <div className="space-y-3">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search recipes..." className="pl-9" value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <Badge
                key={f}
                variant={activeFilter === f ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </Badge>
            ))}
          </div>
        </div>

        {/* Recipe Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((recipe) => (
            <Card
              key={recipe.id}
              className="group cursor-pointer hover:shadow-card transition-shadow"
              onClick={() => navigate(`/recipes/${recipe.id}`)}
            >
              <CardContent className="p-0">
                <div className="h-40 bg-muted flex items-center justify-center text-5xl rounded-t-lg">
                  {recipe.image}
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{recipe.title}</h3>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Flame className="w-3 h-3" />{recipe.calories} cal</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{recipe.time}</span>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex gap-1">
                      {recipe.tags.map((t) => (
                        <Badge key={t} variant="secondary" className="text-[10px] px-1.5 py-0">{t}</Badge>
                      ))}
                    </div>
                    <Heart className={`w-4 h-4 ${recipe.saved ? "fill-destructive text-destructive" : "text-muted-foreground"}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Recipes;
