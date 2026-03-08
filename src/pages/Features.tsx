import MarketingLayout from "@/components/MarketingLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Brain, Calendar, Activity, ShoppingCart, Users, MessageSquare,
  Mic, Camera, TrendingUp, Sparkles, ArrowRight,
} from "lucide-react";

const allFeatures = [
  { icon: Brain, title: "AI Smart Kitchen Assistant", desc: "Type what ingredients you have — get recipes, nutrition breakdown, cooking steps, and grocery suggestions powered by AI.", highlight: true },
  { icon: Calendar, title: "AI Weekly Meal Planner", desc: "Input your diet type, budget, calorie goals, and cooking time. AI generates a full weekly plan with nutrition summary and grocery list." },
  { icon: Activity, title: "Nutrition Intelligence Engine", desc: "Go beyond simple calorie tracking. Get macro analysis (protein, carbs, fat, fiber), weekly reports, and personalized dietary insights." },
  { icon: ShoppingCart, title: "Smart Grocery Automation", desc: "Auto-generate grocery lists from meal plans. System merges duplicate ingredients, estimates quantities, and suggests substitutes." },
  { icon: Users, title: "Social Cooking Network", desc: "Share recipes, follow cooks, like and comment on dishes. Discover trending recipes, healthy meals, and student-friendly options." },
  { icon: MessageSquare, title: "AI Cooking Chat", desc: "Chat-based cooking assistant. Ask anything — 'How do I cook pasta properly?' — and get step-by-step guidance." },
  { icon: Camera, title: "AI Ingredient Recognition", desc: "Upload a photo of your fridge. AI detects ingredients and suggests recipes you can make right now." },
  { icon: Mic, title: "Voice Cooking Mode", desc: "Cook hands-free with voice guidance. Say 'Next step' and the app reads the next instruction aloud." },
  { icon: TrendingUp, title: "Personalized Insights", desc: "Weekly nutrition reports like 'You consumed 25% less protein this week' with AI-suggested meals to balance your diet." },
];

const Features = () => {
  const navigate = useNavigate();

  return (
    <MarketingLayout>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <Sparkles className="w-4 h-4" /> Platform Features
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Built for Serious
              <span className="text-primary block">Home Cooks</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Every feature is designed to save you time, improve your diet, and make cooking enjoyable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Card className={`h-full hover:shadow-card transition-all hover:-translate-y-1 ${f.highlight ? "border-primary border-2" : "border-border/50"}`}>
                  <CardContent className="p-8">
                    <div className={`p-3 rounded-xl w-fit mb-5 ${i % 2 === 0 ? "bg-gradient-hero" : "bg-gradient-warm"}`}>
                      <f.icon className={`w-6 h-6 ${i % 2 === 0 ? "text-primary-foreground" : "text-accent-foreground"}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{f.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6" onClick={() => navigate("/signup")}>
              Get Started Free <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
};

export default Features;
