import AppShell from "@/components/AppShell";
import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const CreateRecipe = () => {
  const [title, setTitle] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [step, setStep] = useState("");
  const [steps, setSteps] = useState<string[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();

  const addIngredient = () => {
    if (ingredient.trim()) {
      setIngredients([...ingredients, ingredient.trim()]);
      setIngredient("");
    }
  };

  const addStep = () => {
    if (step.trim()) {
      setSteps([...steps, step.trim()]);
      setStep("");
    }
  };

  const handleSubmit = () => {
    toast({ title: "Recipe Created!", description: "Your recipe has been saved." });
    navigate("/recipes");
  };

  return (
    <AppShell>
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <h1 className="text-2xl font-bold">Add Recipe</h1>

        <div className="glass-card h-40 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-white/10 transition-colors">
          <Camera className="w-8 h-8 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Tap to add photo</span>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Title</label>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Recipe name..." className="h-11 rounded-2xl glass border-white/10 bg-white/5" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Ingredients</label>
          <div className="flex gap-2">
            <Input value={ingredient} onChange={(e) => setIngredient(e.target.value)} placeholder="Add ingredient..." className="h-11 rounded-2xl glass border-white/10 bg-white/5 flex-1" onKeyDown={(e) => e.key === "Enter" && addIngredient()} />
            <Button onClick={addIngredient} size="icon" className="h-11 w-11 rounded-2xl"><Plus className="w-4 h-4" /></Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {ingredients.map((ing, i) => (
              <span key={i} className="glass-card px-3 py-1.5 text-xs flex items-center gap-1.5">
                {ing}
                <X className="w-3 h-3 cursor-pointer text-muted-foreground hover:text-foreground" onClick={() => setIngredients(ingredients.filter((_, j) => j !== i))} />
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Steps</label>
          <div className="flex gap-2">
            <Input value={step} onChange={(e) => setStep(e.target.value)} placeholder="Add step..." className="h-11 rounded-2xl glass border-white/10 bg-white/5 flex-1" onKeyDown={(e) => e.key === "Enter" && addStep()} />
            <Button onClick={addStep} size="icon" className="h-11 w-11 rounded-2xl"><Plus className="w-4 h-4" /></Button>
          </div>
          <div className="space-y-2">
            {steps.map((s, i) => (
              <div key={i} className="glass-card px-4 py-3 flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-primary/20 text-primary text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                <span className="text-sm flex-1">{s}</span>
                <X className="w-3.5 h-3.5 cursor-pointer text-muted-foreground hover:text-foreground flex-shrink-0 mt-0.5" onClick={() => setSteps(steps.filter((_, j) => j !== i))} />
              </div>
            ))}
          </div>
        </div>

        <Button onClick={handleSubmit} className="w-full h-12 rounded-2xl text-base font-semibold glow-emerald">
          Create Recipe
        </Button>
      </motion.div>
    </AppShell>
  );
};

export default CreateRecipe;
