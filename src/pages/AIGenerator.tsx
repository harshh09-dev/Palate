import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, RotateCcw, CalendarPlus, Heart, Loader2 } from "lucide-react";
import { useState } from "react";

const mockResult = {
  title: "Spinach & Cheese Omelette",
  ingredients: ["3 eggs", "1 cup fresh spinach", "50g cheddar cheese", "1 tbsp butter", "Salt & pepper"],
  instructions: [
    "Beat eggs in a bowl with salt and pepper.",
    "Melt butter in a non-stick pan over medium heat.",
    "Pour egg mixture and cook for 2 minutes.",
    "Add spinach and cheese on one half.",
    "Fold omelette and cook for another minute.",
    "Slide onto plate and serve hot.",
  ],
  nutrition: { calories: 340, protein: 24, carbs: 4, fat: 26 },
};

const AIGenerator = () => {
  const [ingredients, setIngredients] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<typeof mockResult | null>(null);

  const handleGenerate = () => {
    setLoading(true);
    setTimeout(() => {
      setResult(mockResult);
      setLoading(false);
    }, 2000);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-3xl">
        <div>
          <h1 className="text-3xl font-bold text-foreground">AI Recipe Generator</h1>
          <p className="text-muted-foreground mt-1">Tell us what you have and we'll create a recipe</p>
        </div>

        {/* Input */}
        <Card>
          <CardHeader><CardTitle className="text-lg">What ingredients do you have?</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="e.g. eggs, spinach, cheese, garlic..."
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div>
                <label className="text-xs text-muted-foreground mb-1 block">Cuisine</label>
                <Select><SelectTrigger><SelectValue placeholder="Any" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="italian">Italian</SelectItem>
                    <SelectItem value="indian">Indian</SelectItem>
                    <SelectItem value="mexican">Mexican</SelectItem>
                    <SelectItem value="asian">Asian</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1 block">Time</label>
                <Select><SelectTrigger><SelectValue placeholder="Any" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="15">Under 15 min</SelectItem>
                    <SelectItem value="30">Under 30 min</SelectItem>
                    <SelectItem value="60">Under 1 hour</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1 block">Difficulty</label>
                <Select><SelectTrigger><SelectValue placeholder="Any" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="easy">Easy</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="hard">Hard</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1 block">Calories</label>
                <Select><SelectTrigger><SelectValue placeholder="Any" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="300">Under 300</SelectItem>
                    <SelectItem value="500">Under 500</SelectItem>
                    <SelectItem value="800">Under 800</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button onClick={handleGenerate} disabled={loading || !ingredients.trim()} className="gap-2 w-full sm:w-auto">
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
              {loading ? "Generating..." : "Generate Recipe"}
            </Button>
          </CardContent>
        </Card>

        {/* Result */}
        {result && (
          <Card className="border-primary/30">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" /> {result.title}
                </CardTitle>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="gap-1" onClick={() => { setResult(null); handleGenerate(); }}>
                    <RotateCcw className="w-3.5 h-3.5" /> Regenerate
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div>
                <h4 className="font-semibold text-foreground mb-2 text-sm">Ingredients</h4>
                <ul className="space-y-1">
                  {result.ingredients.map((ing, i) => (
                    <li key={i} className="text-sm text-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {ing}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2 text-sm">Instructions</h4>
                <ol className="space-y-2">
                  {result.instructions.map((step, i) => (
                    <li key={i} className="text-sm flex gap-2">
                      <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                      <span className="text-foreground">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="grid grid-cols-4 gap-3 text-center p-3 bg-muted/50 rounded-lg">
                {Object.entries(result.nutrition).map(([k, v]) => (
                  <div key={k}>
                    <p className="text-lg font-bold text-foreground">{v}</p>
                    <p className="text-xs text-muted-foreground capitalize">{k === "calories" ? "kcal" : `g ${k}`}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <Button size="sm" className="gap-1"><Heart className="w-3.5 h-3.5" /> Save Recipe</Button>
                <Button size="sm" variant="outline" className="gap-1"><CalendarPlus className="w-3.5 h-3.5" /> Add to Planner</Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
};

export default AIGenerator;
