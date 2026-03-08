import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, X, Clock, Flame, Upload, ArrowLeft } from "lucide-react";

const CreateRecipe = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("4");
  const [ingredient, setIngredient] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [instruction, setInstruction] = useState("");
  const [instructions, setInstructions] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");

  const addIngredient = () => {
    if (ingredient.trim()) {
      setIngredients([...ingredients, ingredient.trim()]);
      setIngredient("");
    }
  };

  const addInstruction = () => {
    if (instruction.trim()) {
      setInstructions([...instructions, instruction.trim()]);
      setInstruction("");
    }
  };

  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock save — will integrate with backend
    navigate("/recipes");
  };

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Create Recipe</h1>
            <p className="text-muted-foreground mt-1">Share your culinary creation</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image Upload */}
          <Card>
            <CardContent className="p-6">
              <div className="border-2 border-dashed border-border rounded-xl h-48 flex flex-col items-center justify-center gap-3 text-muted-foreground hover:border-primary/50 transition-colors cursor-pointer">
                <Upload className="w-8 h-8" />
                <p className="text-sm">Click to upload recipe image</p>
                <p className="text-xs">PNG, JPG up to 5MB</p>
              </div>
            </CardContent>
          </Card>

          {/* Basic Info */}
          <Card>
            <CardHeader><CardTitle>Basic Info</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Recipe Title</Label>
                <Input id="title" placeholder="e.g. Avocado Toast & Eggs" value={title} onChange={(e) => setTitle(e.target.value)} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="desc">Description</Label>
                <Textarea id="desc" placeholder="Describe your recipe..." value={description} onChange={(e) => setDescription(e.target.value)} rows={3} />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label><Clock className="w-3 h-3 inline mr-1" />Cook Time</Label>
                  <Input placeholder="e.g. 30 min" value={cookTime} onChange={(e) => setCookTime(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label><Flame className="w-3 h-3 inline mr-1" />Calories</Label>
                  <Input placeholder="e.g. 450" value={calories} onChange={(e) => setCalories(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>Servings</Label>
                  <Input placeholder="e.g. 4" value={servings} onChange={(e) => setServings(e.target.value)} />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ingredients */}
          <Card>
            <CardHeader><CardTitle>Ingredients</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-2">
                <Input
                  placeholder="Add an ingredient..."
                  value={ingredient}
                  onChange={(e) => setIngredient(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addIngredient())}
                />
                <Button type="button" variant="outline" onClick={addIngredient}><Plus className="w-4 h-4" /></Button>
              </div>
              {ingredients.length > 0 && (
                <ul className="space-y-2">
                  {ingredients.map((ing, i) => (
                    <li key={i} className="flex items-center justify-between bg-muted/50 px-3 py-2 rounded-lg text-sm text-foreground">
                      <span>• {ing}</span>
                      <button type="button" onClick={() => setIngredients(ingredients.filter((_, j) => j !== i))}>
                        <X className="w-4 h-4 text-muted-foreground hover:text-destructive" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>

          {/* Instructions */}
          <Card>
            <CardHeader><CardTitle>Instructions</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-2">
                <Textarea
                  placeholder="Add a step..."
                  value={instruction}
                  onChange={(e) => setInstruction(e.target.value)}
                  rows={2}
                  className="flex-1"
                />
                <Button type="button" variant="outline" onClick={addInstruction} className="self-end"><Plus className="w-4 h-4" /></Button>
              </div>
              {instructions.length > 0 && (
                <ol className="space-y-2">
                  {instructions.map((step, i) => (
                    <li key={i} className="flex items-start justify-between bg-muted/50 px-3 py-2 rounded-lg text-sm text-foreground gap-3">
                      <span><strong className="text-primary">{i + 1}.</strong> {step}</span>
                      <button type="button" className="shrink-0" onClick={() => setInstructions(instructions.filter((_, j) => j !== i))}>
                        <X className="w-4 h-4 text-muted-foreground hover:text-destructive" />
                      </button>
                    </li>
                  ))}
                </ol>
              )}
            </CardContent>
          </Card>

          {/* Tags */}
          <Card>
            <CardHeader><CardTitle>Tags</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-2">
                <Input
                  placeholder="Add a tag..."
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                />
                <Button type="button" variant="outline" onClick={addTag}><Plus className="w-4 h-4" /></Button>
              </div>
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <Badge key={t} variant="secondary" className="gap-1 cursor-pointer" onClick={() => setTags(tags.filter((x) => x !== t))}>
                      {t} <X className="w-3 h-3" />
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Submit */}
          <div className="flex gap-3">
            <Button type="submit" className="flex-1" size="lg">Publish Recipe</Button>
            <Button type="button" variant="outline" size="lg" onClick={() => navigate(-1)}>Cancel</Button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default CreateRecipe;
