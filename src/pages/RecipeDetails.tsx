import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Heart, Share2, CalendarPlus, ShoppingCart, Clock, Flame, Users } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const recipe = {
  id: "1",
  title: "Avocado Toast & Eggs",
  author: "Chef Maria",
  likes: 234,
  time: "15 min",
  servings: 2,
  calories: 380,
  image: "🥑",
  tags: ["Quick Meals", "Vegetarian"],
  ingredients: [
    "2 slices sourdough bread",
    "1 ripe avocado",
    "2 eggs",
    "1 tbsp olive oil",
    "Salt & pepper to taste",
    "Red pepper flakes",
    "Lemon juice",
  ],
  instructions: [
    "Toast the sourdough bread until golden and crispy.",
    "While bread is toasting, heat olive oil in a non-stick pan over medium heat.",
    "Crack eggs into the pan and cook sunny-side up for 3-4 minutes.",
    "Halve the avocado, remove pit, and scoop flesh into a bowl.",
    "Mash avocado with lemon juice, salt, and pepper.",
    "Spread mashed avocado evenly on toasted bread.",
    "Top each slice with a fried egg.",
    "Sprinkle red pepper flakes and serve immediately.",
  ],
  nutrition: { calories: 380, protein: 18, carbs: 32, fat: 22, fiber: 8 },
};

const RecipeDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-4xl">
        <Button variant="ghost" size="sm" className="gap-2" onClick={() => navigate("/recipes")}>
          <ArrowLeft className="w-4 h-4" /> Back to Recipes
        </Button>

        {/* Hero */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="h-56 md:w-72 bg-muted rounded-xl flex items-center justify-center text-7xl shrink-0">
            {recipe.image}
          </div>
          <div className="space-y-3 flex-1">
            <h1 className="text-3xl font-bold text-foreground">{recipe.title}</h1>
            <p className="text-muted-foreground">By {recipe.author}</p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Heart className="w-4 h-4 text-destructive" />{recipe.likes}</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{recipe.time}</span>
              <span className="flex items-center gap-1"><Users className="w-4 h-4" />{recipe.servings} servings</span>
              <span className="flex items-center gap-1"><Flame className="w-4 h-4" />{recipe.calories} cal</span>
            </div>
            <div className="flex gap-2">
              {recipe.tags.map((t) => <Badge key={t} variant="secondary">{t}</Badge>)}
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              <Button size="sm" className="gap-1"><Heart className="w-3.5 h-3.5" /> Save</Button>
              <Button size="sm" variant="outline" className="gap-1"><CalendarPlus className="w-3.5 h-3.5" /> Add to Plan</Button>
              <Button size="sm" variant="outline" className="gap-1"><ShoppingCart className="w-3.5 h-3.5" /> Grocery</Button>
              <Button size="sm" variant="ghost" className="gap-1"><Share2 className="w-3.5 h-3.5" /> Share</Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Ingredients */}
          <Card>
            <CardHeader><CardTitle className="text-lg">Ingredients</CardTitle></CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {recipe.ingredients.map((ing, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <div className="w-4 h-4 mt-0.5 rounded border border-border shrink-0" />
                    {ing}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Instructions */}
          <Card className="md:col-span-2">
            <CardHeader><CardTitle className="text-lg">Instructions</CardTitle></CardHeader>
            <CardContent>
              <ol className="space-y-4">
                {recipe.instructions.map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-foreground">{step}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </div>

        {/* Nutrition */}
        <Card>
          <CardHeader><CardTitle className="text-lg">Nutrition per Serving</CardTitle></CardHeader>
          <CardContent>
            <div className="grid grid-cols-5 gap-4 text-center">
              {Object.entries(recipe.nutrition).map(([key, val]) => (
                <div key={key}>
                  <p className="text-2xl font-bold text-foreground">{val}</p>
                  <p className="text-xs text-muted-foreground capitalize">{key === "calories" ? "kcal" : `g ${key}`}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default RecipeDetails;
