import MarketingLayout from "@/components/MarketingLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sparkles, Calendar, Activity, ShoppingCart, Users, Brain,
  ChefHat, ArrowRight, Check, Star, Zap, Shield,
} from "lucide-react";

const stats = [
  { value: "10K+", label: "Recipes Generated" },
  { value: "5K+", label: "Active Users" },
  { value: "50K+", label: "Meals Planned" },
  { value: "4.9", label: "App Rating" },
];

const features = [
  { icon: Brain, title: "AI Smart Kitchen", desc: "Tell us what ingredients you have — AI generates recipes, nutrition, and cooking steps instantly.", color: "primary" },
  { icon: Calendar, title: "AI Meal Planner", desc: "Get a personalized weekly meal plan with nutrition summary and auto-generated grocery list.", color: "accent" },
  { icon: Activity, title: "Nutrition Intelligence", desc: "Track macros, get weekly reports, and receive AI-powered dietary recommendations.", color: "primary" },
  { icon: ShoppingCart, title: "Smart Grocery Lists", desc: "Auto-generate grocery lists from meal plans. Merge duplicates and estimate quantities.", color: "accent" },
  { icon: Users, title: "Social Cooking", desc: "Share recipes, follow chefs, discover trending meals, and build your cooking community.", color: "primary" },
  { icon: Shield, title: "Privacy First", desc: "Your data stays secure. Full control over what you share and what stays private.", color: "accent" },
];

const steps = [
  { step: "01", title: "Set Your Preferences", desc: "Tell us your diet, allergies, goals, and cooking style." },
  { step: "02", title: "AI Plans Your Week", desc: "Get a full weekly meal plan with nutrition breakdown." },
  { step: "03", title: "Cook & Track", desc: "Follow recipes, track nutrition, and auto-generate grocery lists." },
];

const testimonials = [
  { name: "Sarah M.", role: "Fitness Enthusiast", text: "Palate completely changed how I eat. The AI meal planner saves me hours every week.", rating: 5 },
  { name: "James R.", role: "Home Chef", text: "The recipe generator is insane. I type in what I have and get gourmet meals back.", rating: 5 },
  { name: "Priya K.", role: "Student", text: "Budget-friendly meal plans that actually taste good? Palate nails it every time.", rating: 5 },
];

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    features: ["Browse 500+ recipes", "Basic meal planner", "Community access", "3 AI generations/month"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$5",
    period: "/month",
    features: ["Unlimited AI meal planning", "Advanced nutrition reports", "Smart grocery automation", "Priority support", "Export grocery lists"],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Team",
    price: "$12",
    period: "/month",
    features: ["Everything in Pro", "Family meal plans", "Shared grocery lists", "Custom diet programs", "API access"],
    cta: "Contact Sales",
    popular: false,
  },
];

const Landing = () => {
  const navigate = useNavigate();

  return (
    <MarketingLayout>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-subtle" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <Sparkles className="w-4 h-4" /> AI-Powered Cooking Assistant
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight max-w-4xl mx-auto">
              Your Personal
              <span className="text-primary block">AI Chef & Nutrition Coach</span>
            </h1>

            <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto leading-relaxed">
              Plan meals, track nutrition, and generate grocery lists automatically. Palate helps you decide what to cook with the power of AI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6" onClick={() => navigate("/signup")}>
                Start Cooking Smart <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6" onClick={() => navigate("/features")}>
                See All Features
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-bold text-foreground">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Everything You Need to
              <span className="text-primary block">Cook Smarter</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Six powerful pillars that turn Palate from a tool into your personal cooking platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50">
                  <CardContent className="p-8">
                    <div className={`p-3 rounded-xl w-fit mb-5 ${f.color === "primary" ? "bg-gradient-hero" : "bg-gradient-warm"}`}>
                      <f.icon className={`w-6 h-6 ${f.color === "primary" ? "text-primary-foreground" : "text-accent-foreground"}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{f.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gradient-subtle">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">How Palate Works</h2>
            <p className="text-lg text-muted-foreground">Three simple steps to transform your kitchen.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                className="text-center space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto">
                  {s.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Loved by Home Cooks</h2>
            <p className="text-lg text-muted-foreground">See what our community has to say.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full border-border/50">
                  <CardContent className="p-8 space-y-4">
                    <div className="flex gap-1">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-foreground leading-relaxed">"{t.text}"</p>
                    <div>
                      <p className="font-semibold text-foreground">{t.name}</p>
                      <p className="text-sm text-muted-foreground">{t.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-muted-foreground">Start free. Upgrade when you need more.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPlans.map((plan) => (
              <Card key={plan.name} className={`relative border-2 ${plan.popular ? "border-primary shadow-warm" : "border-border/50"}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                    <div className="mt-2">
                      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                    onClick={() => navigate("/signup")}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="p-3 bg-gradient-hero rounded-xl w-fit mx-auto mb-6">
            <ChefHat className="w-10 h-10 text-primary-foreground" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ready to Cook Smarter?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of home cooks using AI to plan meals, track nutrition, and discover recipes.
          </p>
          <Button variant="hero" size="lg" className="text-lg px-10 py-6" onClick={() => navigate("/signup")}>
            Get Started Free <Sparkles className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </MarketingLayout>
  );
};

export default Landing;
