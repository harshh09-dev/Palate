import MarketingLayout from "@/components/MarketingLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Heart, MessageSquare, TrendingUp, ArrowRight } from "lucide-react";

const trendingRecipes = [
  { title: "Spicy Korean Bibimbap", author: "Chef Kim", likes: 342, comments: 58, emoji: "🍚", tags: ["Trending", "Asian"] },
  { title: "Mediterranean Quinoa Bowl", author: "Sarah M.", likes: 287, comments: 43, emoji: "🥗", tags: ["Healthy", "Quick"] },
  { title: "Chocolate Protein Pancakes", author: "FitFoodie", likes: 256, comments: 37, emoji: "🥞", tags: ["High Protein", "Breakfast"] },
  { title: "Thai Green Curry", author: "Bangkok Bites", likes: 198, comments: 29, emoji: "🍛", tags: ["Spicy", "Dinner"] },
  { title: "Avocado Sushi Rolls", author: "SushiLover", likes: 176, comments: 24, emoji: "🍣", tags: ["Japanese", "Vegan"] },
  { title: "Keto Cauliflower Pizza", author: "LowCarbLife", likes: 165, comments: 21, emoji: "🍕", tags: ["Keto", "Dinner"] },
];

const CommunityPreview = () => {
  const navigate = useNavigate();

  return (
    <MarketingLayout>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <TrendingUp className="w-4 h-4" /> Trending Now
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Community <span className="text-primary">Recipes</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover recipes shared by home cooks around the world. Join the community to share yours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {trendingRecipes.map((r) => (
              <Card key={r.title} className="hover:shadow-card transition-all hover:-translate-y-1 cursor-pointer border-border/50">
                <CardContent className="p-0">
                  <div className="h-40 bg-muted flex items-center justify-center text-6xl rounded-t-lg">
                    {r.emoji}
                  </div>
                  <div className="p-5 space-y-3">
                    <h3 className="font-semibold text-foreground text-lg">{r.title}</h3>
                    <p className="text-sm text-muted-foreground">by {r.author}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><Heart className="w-4 h-4" /> {r.likes}</span>
                      <span className="flex items-center gap-1"><MessageSquare className="w-4 h-4" /> {r.comments}</span>
                    </div>
                    <div className="flex gap-2">
                      {r.tags.map((t) => (
                        <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6" onClick={() => navigate("/signup")}>
              Join the Community <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
};

export default CommunityPreview;
