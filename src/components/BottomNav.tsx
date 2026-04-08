import { Home, ChefHat, ScanLine, Bookmark, PlusCircle } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", icon: Home, path: "/dashboard" },
  { label: "Recipes", icon: ChefHat, path: "/recipes" },
  { label: "Scan", icon: ScanLine, path: "/scan" },
  { label: "Saved", icon: Bookmark, path: "/saved" },
  { label: "Add", icon: PlusCircle, path: "/recipes/create" },
];

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-white/10 safe-area-bottom">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto px-2">
        {navItems.map((item) => {
          const active = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="flex flex-col items-center gap-0.5 py-1 px-3 relative"
            >
              {active && (
                <motion.div
                  layoutId="bottomnav-indicator"
                  className="absolute -top-0.5 w-8 h-0.5 bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <item.icon
                className={`w-5 h-5 transition-colors ${active ? "text-primary" : "text-muted-foreground"}`}
              />
              <span
                className={`text-[10px] font-medium transition-colors ${active ? "text-primary" : "text-muted-foreground"}`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
