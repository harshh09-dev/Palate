import AppShell from "@/components/AppShell";
import ExpiryBadge from "@/components/ExpiryBadge";
import { useState } from "react";
import { motion } from "framer-motion";
import { mockRecipes, mockSavedItems } from "@/lib/mockData";
import { getExpiryStatus } from "@/lib/expiry";
import { useNavigate } from "react-router-dom";
import { Heart, Clock, Flame } from "lucide-react";

const SavedPage = () => {
  const [tab, setTab] = useState<"recipes" | "items">("recipes");
  const navigate = useNavigate();

  const savedRecipes = mockRecipes.filter((r) => r.saved);
  const sortedItems = [...mockSavedItems].sort((a, b) => new Date(a.expiryDate).getTime() - new Date(b.expiryDate).getTime());

  return (
    <AppShell>
      <div className="space-y-5">
        <h1 className="text-2xl font-bold">Saved</h1>

        {/* Tabs */}
        <div className="flex gap-1 p-1 glass rounded-2xl">
          {(["recipes", "items"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition-all capitalize ${
                tab === t ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {tab === "recipes" ? (
          <div className="space-y-3">
            {savedRecipes.map((recipe, i) => (
              <motion.div
                key={recipe.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => navigate(`/recipes/${recipe.id}`)}
                className="glass-card p-4 flex items-center gap-4 cursor-pointer active:scale-[0.98] transition-transform"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center text-3xl flex-shrink-0">
                  {recipe.image}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm truncate">{recipe.title}</h3>
                  <div className="flex items-center gap-3 text-[11px] text-muted-foreground mt-1">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{recipe.time}</span>
                    <span className="flex items-center gap-1"><Flame className="w-3 h-3" />{recipe.calories} cal</span>
                  </div>
                </div>
                <Heart className="w-5 h-5 fill-red-500 text-red-500 flex-shrink-0" />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {sortedItems.map((item, i) => {
              const status = getExpiryStatus(item.expiryDate);
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`glass-card p-4 flex items-center gap-4 ${
                    status === "expired" ? "border-destructive/30" : status === "soon" ? "border-yellow-500/30" : ""
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-2xl flex-shrink-0">
                    {item.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm">{item.name}</h3>
                    <p className="text-[11px] text-muted-foreground mt-0.5">{item.category}</p>
                  </div>
                  <ExpiryBadge expiryDate={item.expiryDate} showDays />
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </AppShell>
  );
};

export default SavedPage;
