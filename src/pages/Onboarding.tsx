import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import PalateLogo from "@/components/PalateLogo";

const steps = [
  { title: "What is your diet type?", subtitle: "This helps us personalize your recipes", options: ["Vegetarian", "Non-vegetarian", "Vegan", "Keto", "High Protein", "Low Carb"], multi: false },
  { title: "What are your health goals?", subtitle: "We'll tailor meal plans to your goals", options: ["Lose Weight", "Maintain Weight", "Gain Muscle", "Healthy Eating"], multi: false },
  { title: "Any food allergies?", subtitle: "Select all that apply", options: ["Peanuts", "Dairy", "Gluten", "Soy", "Eggs", "None"], multi: true },
  { title: "Cooking preference?", subtitle: "What kind of meals do you enjoy?", options: ["Quick Meals", "Gourmet Cooking", "Budget Friendly", "Healthy Meals"], multi: false },
  { title: "Meals per day", subtitle: "Which meals do you want us to plan?", options: ["Breakfast", "Lunch", "Dinner", "Snacks"], multi: true },
];

const Onboarding = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<number, string[]>>({});

  const step = steps[currentStep];
  const selected = selections[currentStep] || [];

  const toggleOption = (option: string) => {
    setSelections((prev) => {
      const current = prev[currentStep] || [];
      if (step.multi) {
        if (option === "None") return { ...prev, [currentStep]: ["None"] };
        const filtered = current.filter((o) => o !== "None");
        return { ...prev, [currentStep]: filtered.includes(option) ? filtered.filter((o) => o !== option) : [...filtered, option] };
      }
      return { ...prev, [currentStep]: [option] };
    });
  };

  const next = () => { if (currentStep < steps.length - 1) setCurrentStep((s) => s + 1); else navigate("/dashboard"); };
  const prev = () => { if (currentStep > 0) setCurrentStep((s) => s - 1); };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex items-center justify-between px-6 py-4 border-b border-border">
        <PalateLogo size="sm" />
        <span className="text-sm text-muted-foreground">Step {currentStep + 1} of {steps.length}</span>
      </div>

      <div className="w-full h-1 bg-muted">
        <motion.div className="h-full bg-gradient-hero" animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }} transition={{ duration: 0.3 }} />
      </div>

      <div className="flex-1 flex items-center justify-center p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-lg text-center"
          >
            <h2 className="text-3xl font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-display)" }}>{step.title}</h2>
            <p className="text-muted-foreground mb-8">{step.subtitle}</p>
            <div className="grid grid-cols-2 gap-3">
              {step.options.map((option) => {
                const isSelected = selected.includes(option);
                return (
                  <button
                    key={option}
                    onClick={() => toggleOption(option)}
                    className={`p-4 rounded-xl border-2 text-sm font-medium transition-all duration-200 ${
                      isSelected ? "border-primary bg-primary/10 text-primary shadow-soft" : "border-border bg-card text-foreground hover:border-primary/50 hover:shadow-card"
                    }`}
                  >
                    <div className="flex items-center justify-center gap-2">
                      {isSelected && <Check className="w-4 h-4" />}
                      {option}
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between px-6 py-4 border-t border-border">
        <Button variant="ghost" onClick={prev} disabled={currentStep === 0}><ArrowLeft className="w-4 h-4 mr-2" /> Back</Button>
        <Button variant="hero" onClick={next} disabled={selected.length === 0}>
          {currentStep === steps.length - 1 ? "Finish Setup" : "Continue"} <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default Onboarding;
