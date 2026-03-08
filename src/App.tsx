import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "./pages/Splash";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import Recipes from "./pages/Recipes";
import RecipeDetails from "./pages/RecipeDetails";
import AIGenerator from "./pages/AIGenerator";
import MealPlanner from "./pages/MealPlanner";
import Nutrition from "./pages/Nutrition";
import Grocery from "./pages/Grocery";
import Community from "./pages/Community";
import Profile from "./pages/Profile";
import SettingsPage from "./pages/SettingsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/ai-generator" element={<AIGenerator />} />
          <Route path="/planner" element={<MealPlanner />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/grocery" element={<Grocery />} />
          <Route path="/community" element={<Community />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<SettingsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
