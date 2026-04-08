import AppShell from "@/components/AppShell";
import SearchBar from "@/components/SearchBar";
import ExpiryBadge from "@/components/ExpiryBadge";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mockRecipes, mockSavedItems, categories } from "@/lib/mockData";
import { getExpiryStatus } from "@/lib/expiry";
import { motion } from "framer-motion";
import { Flame, Clock, ArrowRight } from "lucide-react";

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();

  const expiringItems = mockSavedItems
    .filter((i) => getExpiryStatus(i.expiryDate) === "soon" || getExpiryStatus(i.expiryDate) === "expired")
    .sort((a, b) => new Date(a.expiryDate).getTime() - new Date(b.expiryDate).getTime());

  const expiryRecipes = mockRecipes.filter((r) => r.expiryMatch);

  return (
    <AppShell>
      <div className="space-y-6">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-2xl font-bold text-foreground">Hello Anjali 👋</h1>
          <p className="text-muted-foreground text-sm mt-1">What do you want to cook today?</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
          <SearchBar value={search} onChange={setSearch} />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setActiveCategory(cat.label)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeCategory === cat.label
                  ? "bg-primary text-primary-foreground glow-emerald-sm"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              <span>{cat.emoji}</span>
              {cat.label}
            </button>
          ))}
        </motion.div>

        {expiringItems.length > 0 && (
          <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-bold flex items-center gap-2">
                <Flame className="w-5 h-5 text-primary" />
                Cook Before It Expires
              </h2>
              <button onClick={() => navigate("/saved")} className="text-primary text-xs font-medium flex items-center gap-1">
                View all <ArrowRight className="w-3 h-3" />
              </button>
            </div>
            <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
              {expiringItems.map((item) => (
                <div key={item.id} className="glass-card p-3 min-w-[120px] flex flex-col items-center gap-2">
                  <span className="text-3xl">{item.emoji}</span>
                  <span className="text-xs font-medium text-foreground">{item.name}</span>
                  <ExpiryBadge expiryDate={item.expiryDate} showDays />
                </div>
              ))}
            </div>
          </motion.section>
        )}

        <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h2 className="text-lg font-bold mb-3">🧠 Smart Suggestions</h2>
          <div className="space-y-3">
            {expiryRecipes.map((recipe) => (
              <div
                key={recipe.id}
                onClick={() => navigate(`/recipes/${recipe.id}`)}
                className="glass-card p-4 flex items-center gap-4 cursor-pointer hover:bg-white/10 transition-all active:scale-[0.98]"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center text-3xl flex-shrink-0">
                  {recipe.image}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm text-foreground truncate">{recipe.title}</h3>
                  <div className="flex items-center gap-3 text-[11px] text-muted-foreground mt-1">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{recipe.time}</span>
                    <span className="flex items-center gap-1"><Flame className="w-3 h-3" />{recipe.calories} cal</span>
                  </div>
                  <span className="inline-block mt-1.5 text-[10px] font-semibold text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full">
                    Uses expiring items
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
          <h2 className="text-lg font-bold mb-3">🔥 Trending Recipes</h2>
          <div className="grid grid-cols-2 gap-3">
            {mockRecipes.slice(0, 4).map((recipe) => (
              <div
                key={recipe.id}
                onClick={() => navigate(`/recipes/${recipe.id}`)}
                className="glass-card overflow-hidden cursor-pointer hover:bg-white/10 transition-all active:scale-[0.98]"
              >
                <div className="h-24 bg-secondary flex items-center justify-center text-4xl">
                  {recipe.image}
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-xs text-foreground truncate">{recipe.title}</h3>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{recipe.time} · {recipe.calories} cal</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </AppShell>
  );
};

export default Dashboard;
