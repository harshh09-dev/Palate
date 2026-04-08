import AppShell from "@/components/AppShell";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mockRecipes, categories } from "@/lib/mockData";
import { motion } from "framer-motion";
import { Heart, Bookmark, Clock, Flame } from "lucide-react";

const Recipes = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();

  const filtered = mockRecipes.filter((r) => {
    const matchCat = activeCategory === "All" || r.tags.includes(activeCategory);
    const matchSearch = r.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <AppShell>
      <div className="space-y-5">
        <h1 className="text-2xl font-bold">Recipes</h1>

        <SearchBar value={search} onChange={setSearch} />

        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setActiveCategory(cat.label)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                activeCategory === cat.label
                  ? "bg-primary text-primary-foreground"
                  : "glass text-muted-foreground"
              }`}
            >
              {cat.emoji} {cat.label}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filtered.map((recipe, i) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => navigate(`/recipes/${recipe.id}`)}
              className="glass-card overflow-hidden cursor-pointer active:scale-[0.98] transition-transform"
            >
              <div className="h-44 bg-secondary flex items-center justify-center text-6xl relative">
                {recipe.image}
                {recipe.expiryMatch && (
                  <span className="absolute top-3 left-3 text-[10px] font-semibold text-primary bg-primary/15 border border-primary/25 px-2.5 py-1 rounded-full">
                    Use Soon
                  </span>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground">{recipe.title}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{recipe.author}</p>
                  </div>
                  <div className="flex items-center gap-2 ml-2">
                    <Heart className={`w-5 h-5 ${recipe.liked ? "fill-red-500 text-red-500" : "text-muted-foreground"}`} />
                    <Bookmark className={`w-5 h-5 ${recipe.saved ? "fill-primary text-primary" : "text-muted-foreground"}`} />
                  </div>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground mt-2">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{recipe.time}</span>
                  <span className="flex items-center gap-1"><Flame className="w-3 h-3" />{recipe.calories} cal</span>
                  <span className="text-xs">❤️ {recipe.likes}</span>
                </div>
                <div className="flex gap-1.5 mt-2">
                  {recipe.tags.map((t) => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AppShell>
  );
};

export default Recipes;
