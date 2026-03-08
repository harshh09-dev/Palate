import MarketingLayout from "@/components/MarketingLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sparkles, Calendar, Activity, ShoppingCart, Users, Brain,
  ChefHat, ArrowRight, Check, Star, Shield,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

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
    name: "Free", price: "$0", period: "forever",
    features: ["Browse 500+ recipes", "Basic meal planner", "Community access", "3 AI generations/month"],
    cta: "Get Started", popular: false,
  },
  {
    name: "Pro", price: "$5", period: "/month",
    features: ["Unlimited AI meal planning", "Advanced nutrition reports", "Smart grocery automation", "Priority support", "Export grocery lists"],
    cta: "Start Free Trial", popular: true,
  },
  {
    name: "Team", price: "$12", period: "/month",
    features: ["Everything in Pro", "Family meal plans", "Shared grocery lists", "Custom diet programs", "API access"],
    cta: "Contact Sales", popular: false,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const Landing = () => {
  const navigate = useNavigate();

  return (
    <MarketingLayout>
      {/* Hero with background image */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 w-full">
          <div className="max-w-2xl">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="inline-flex items-center gap-2 glass text-primary text-sm font-medium px-4 py-2 rounded-full mb-8">
                <Sparkles className="w-4 h-4" /> AI-Powered Cooking Assistant
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6"
              style={{ fontFamily: "var(--font-display)" }}
              initial="hidden" animate="visible" variants={fadeUp} custom={1}
            >
              Your Personal{" "}
              <span className="text-gradient-primary">AI Chef</span> &{" "}
              <span className="text-gradient-warm">Nutrition Coach</span>
            </motion.h1>

            <motion.p
              className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg"
              initial="hidden" animate="visible" variants={fadeUp} custom={2}
            >
              Plan meals, track nutrition, and generate grocery lists automatically. Palate helps you decide what to cook with the power of AI.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial="hidden" animate="visible" variants={fadeUp} custom={3}
            >
              <Button variant="hero" size="lg" className="text-lg px-8 py-6" onClick={() => navigate("/signup")}>
                Start Cooking Smart <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 glass" onClick={() => navigate("/features")}>
                See All Features
              </Button>
            </motion.div>

            {/* Stats inline */}
            <motion.div
              className="flex flex-wrap gap-8 mt-16"
              initial="hidden" animate="visible" variants={fadeUp} custom={4}
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-bold text-foreground" style={{ fontFamily: "var(--font-display)" }}>{s.value}</p>
                  <p className="text-sm text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center max-w-3xl mx-auto mb-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Everything You Need to <span className="text-gradient-primary">Cook Smarter</span>
            </h2>
            <p className="text-lg text-muted-foreground">Six powerful pillars that turn Palate from a tool into your personal cooking platform.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <Card className="h-full glass-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 group">
                  <CardContent className="p-8">
                    <div className={`p-3 rounded-xl w-fit mb-5 transition-transform duration-300 group-hover:scale-110 ${f.color === "primary" ? "bg-gradient-hero" : "bg-gradient-warm"}`}>
                      <f.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2" style={{ fontFamily: "var(--font-display)" }}>{f.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-28 bg-gradient-subtle">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div className="text-center mb-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-display)" }}>How Palate Works</h2>
            <p className="text-lg text-muted-foreground">Three simple steps to transform your kitchen.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <motion.div key={s.step} className="text-center space-y-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <div className="w-20 h-20 rounded-2xl bg-gradient-hero text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto shadow-soft" style={{ fontFamily: "var(--font-display)" }}>
                  {s.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground" style={{ fontFamily: "var(--font-display)" }}>{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-display)" }}>Loved by Home Cooks</h2>
            <p className="text-lg text-muted-foreground">See what our community has to say.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <Card className="h-full glass-card hover:shadow-elevated transition-all duration-500">
                  <CardContent className="p-8 space-y-4">
                    <div className="flex gap-1">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-foreground leading-relaxed italic">"{t.text}"</p>
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
      <section className="py-28 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-display)" }}>Simple, Transparent Pricing</h2>
            <p className="text-lg text-muted-foreground">Start free. Upgrade when you need more.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <motion.div key={plan.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <Card className={`relative h-full ${plan.popular ? "border-2 border-primary shadow-elevated scale-105" : "glass-card"}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-hero text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <CardContent className="p-8 space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground" style={{ fontFamily: "var(--font-display)" }}>{plan.name}</h3>
                      <div className="mt-2">
                        <span className="text-4xl font-bold text-foreground" style={{ fontFamily: "var(--font-display)" }}>{plan.price}</span>
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
                    <Button className="w-full" variant={plan.popular ? "hero" : "outline"} onClick={() => navigate("/signup")}>
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="p-4 bg-gradient-hero rounded-2xl w-fit mx-auto mb-8 shadow-soft">
              <ChefHat className="w-10 h-10 text-primary-foreground" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Ready to Cook Smarter?
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Join thousands of home cooks using AI to plan meals, track nutrition, and discover recipes.
            </p>
            <Button variant="hero" size="lg" className="text-lg px-10 py-6" onClick={() => navigate("/signup")}>
              Get Started Free <Sparkles className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </MarketingLayout>
  );
};

export default Landing;
