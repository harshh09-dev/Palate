import MarketingLayout from "@/components/MarketingLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChefHat, Heart, Target, Zap } from "lucide-react";

const values = [
  { icon: Heart, title: "Health First", desc: "Every feature we build prioritizes your nutritional well-being." },
  { icon: Target, title: "Personalization", desc: "No two users are the same. Palate adapts to your unique preferences." },
  { icon: Zap, title: "AI-Powered", desc: "We leverage the latest AI to make cooking effortless and intelligent." },
  { icon: ChefHat, title: "Community", desc: "Cooking is better together. Share, learn, and grow with fellow cooks." },
];

const About = () => {
  const navigate = useNavigate();

  return (
    <MarketingLayout>
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-4">
              About <span className="text-primary">Palate</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're on a mission to make healthy eating effortless through the power of AI.
            </p>
          </div>

          <div className="prose prose-lg max-w-3xl mx-auto text-muted-foreground mb-20 space-y-6">
            <p>
              Palate was born from a simple frustration — deciding what to cook every day is exhausting. Tracking nutrition shouldn't feel like homework. And grocery shopping shouldn't be a guessing game.
            </p>
            <p>
              We built Palate to be the AI-powered cooking assistant we always wished we had. One that understands your dietary needs, respects your budget, and genuinely makes your life easier in the kitchen.
            </p>
            <p>
              Today, Palate helps thousands of home cooks plan meals, discover recipes, track nutrition, and automate grocery lists — all powered by cutting-edge AI.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-foreground text-center mb-10">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {values.map((v) => (
              <Card key={v.title} className="border-border/50">
                <CardContent className="p-8 flex gap-5">
                  <div className="p-3 bg-gradient-hero rounded-xl h-fit">
                    <v.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">{v.title}</h3>
                    <p className="text-muted-foreground">{v.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6" onClick={() => navigate("/signup")}>
              Join the Palate Community
            </Button>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
};

export default About;
