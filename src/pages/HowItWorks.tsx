import MarketingLayout from "@/components/MarketingLayout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { UserPlus, Sparkles, ChefHat, ShoppingCart, ArrowRight } from "lucide-react";

const steps = [
  { icon: UserPlus, num: "01", title: "Create Your Profile", desc: "Sign up and tell us your dietary preferences, allergies, health goals, and cooking style. This takes under 2 minutes." },
  { icon: Sparkles, num: "02", title: "AI Generates Your Plan", desc: "Our AI creates a personalized weekly meal plan with full nutrition breakdown, calorie targets, and macro balance." },
  { icon: ChefHat, num: "03", title: "Cook with Guidance", desc: "Follow step-by-step recipes with voice cooking mode. Track your nutrition as you eat throughout the week." },
  { icon: ShoppingCart, num: "04", title: "Smart Grocery List", desc: "Palate auto-generates your grocery list, merges duplicate ingredients, estimates quantities, and tracks your budget." },
];

const HowItWorks = () => {
  const navigate = useNavigate();

  return (
    <MarketingLayout>
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-4">
              How <span className="text-primary">Palate</span> Works
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From sign-up to your first meal — here's the journey.
            </p>
          </div>

          <div className="space-y-16">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-32 h-32 shrink-0 rounded-3xl bg-gradient-hero flex items-center justify-center">
                  <s.icon className="w-14 h-14 text-primary-foreground" />
                </div>
                <div className="text-center md:text-left">
                  <span className="text-sm font-bold text-primary">Step {s.num}</span>
                  <h3 className="text-2xl font-bold text-foreground mt-1 mb-2">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-lg">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-20">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6" onClick={() => navigate("/signup")}>
              Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
};

export default HowItWorks;
