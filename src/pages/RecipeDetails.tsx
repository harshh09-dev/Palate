import AppShell from "@/components/AppShell";
import { useParams, useNavigate } from "react-router-dom";
import { mockRecipes, mockSavedItems } from "@/lib/mockData";
import { getExpiryStatus, getDaysRemaining } from "@/lib/expiry";
import { motion } from "framer-motion";
import { ArrowLeft, Heart, Bookmark, Clock, Flame, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = mockRecipes.find((r) => r.id === id);

  if (!recipe) {
    return (
      <AppShell>
        <div className="flex flex-col items-center justify-center h-[60vh] gap-4">
          <p className="text-muted-foreground">Recipe not found</p>
          <Button onClick={() => navigate("/recipes")} variant="outline">Go back</Button>
        </div>
      </AppShell>
    );
  }

  const matchingItems = mockSavedItems.filter(
    (item) => recipe.ingredients.some((ing) => ing.toLowerCase().includes(item.name.toLowerCase())) &&
      (getExpiryStatus(item.expiryDate) === "soon" || getExpiryStatus(item.expiryDate) === "expired")
  );

  return (
    <AppShell>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-5 -mx-4 -mt-4">
        <div className="relative h-56 bg-secondary flex items-center justify-center text-7xl">
          {recipe.image}
          <button onClick={() => navigate(-1)} className="absolute top-4 left-4 w-9 h-9 rounded-full glass flex items-center justify-center">
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div className="absolute top-4 right-4 flex gap-2">
            <button className="w-9 h-9 rounded-full glass flex items-center justify-center">
              <Heart className={`w-4 h-4 ${recipe.liked ? "fill-red-500 text-red-500" : ""}`} />
            </button>
            <button className="w-9 h-9 rounded-full glass flex items-center justify-center">
              <Bookmark className={`w-4 h-4 ${recipe.saved ? "fill-primary text-primary" : ""}`} />
            </button>
          </div>
        </div>

        <div className="px-4 space-y-5">
          <div>
            <h1 className="text-2xl font-bold">{recipe.title}</h1>
            <p className="text-sm text-muted-foreground mt-1">by {recipe.author}</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{recipe.time}</span>
              <span className="flex items-center gap-1"><Flame className="w-4 h-4" />{recipe.calories} cal</span>
              <span>❤️ {recipe.likes}</span>
            </div>
          </div>

          {matchingItems.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-4 border-yellow-500/30">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-semibold text-yellow-400">Expiry Insight</span>
              </div>
              <p className="text-xs text-muted-foreground">You have ingredients expiring soon:</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {matchingItems.map((item) => (
                  <span key={item.id} className="text-xs bg-yellow-500/15 text-yellow-400 border border-yellow-500/25 px-2 py-0.5 rounded-full">
                    {item.emoji} {item.name} ({getDaysRemaining(item.expiryDate)}d left)
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          <div>
            <h2 className="text-lg font-bold mb-3">Ingredients</h2>
            <div className="space-y-2">
              {recipe.ingredients.map((ing, i) => (
                <div key={i} className="glass-card px-4 py-3 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-sm">{ing}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3">Steps</h2>
            <div className="space-y-3">
              {recipe.steps.map((step, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <Button className="w-full h-12 rounded-2xl text-base font-semibold glow-emerald">
            Save with Expiry Tracking
          </Button>
        </div>
      </motion.div>
    </AppShell>
  );
};

export default RecipeDetails;
