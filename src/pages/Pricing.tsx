import MarketingLayout from "@/components/MarketingLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    desc: "Perfect for exploring Palate.",
    features: ["Browse 500+ recipes", "Basic meal planner", "Community access", "3 AI generations/month", "Basic nutrition tracking"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$5",
    period: "/month",
    desc: "For serious home cooks.",
    features: ["Unlimited AI meal planning", "Advanced nutrition reports", "Smart grocery automation", "Voice cooking mode", "AI cooking chat", "Priority support", "Export grocery lists"],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Team",
    price: "$12",
    period: "/month",
    desc: "For families and groups.",
    features: ["Everything in Pro", "Family meal plans (up to 6)", "Shared grocery lists", "Custom diet programs", "API access", "Dedicated support"],
    cta: "Contact Sales",
    popular: false,
  },
];

const faqs = [
  { q: "Can I cancel anytime?", a: "Yes. Cancel anytime — no questions asked. You'll keep access until the end of your billing period." },
  { q: "Is there a free trial?", a: "Pro plan includes a 14-day free trial. No credit card required." },
  { q: "What payment methods are accepted?", a: "We accept all major credit cards and PayPal." },
  { q: "Can I switch plans?", a: "Absolutely. Upgrade or downgrade at any time from your settings." },
];

const Pricing = () => {
  const navigate = useNavigate();

  return (
    <MarketingLayout>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Simple, Transparent <span className="text-primary">Pricing</span>
            </h1>
            <p className="text-lg text-muted-foreground">Start free. Upgrade when you're ready.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-24">
            {plans.map((plan) => (
              <Card key={plan.name} className={`relative border-2 ${plan.popular ? "border-primary shadow-warm" : "border-border/50"}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{plan.desc}</p>
                    <div className="mt-4">
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
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"} onClick={() => navigate("/signup")}>
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-10">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="border-b border-border pb-6">
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
};

export default Pricing;
