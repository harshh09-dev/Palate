import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Share2, Bookmark } from "lucide-react";

const filters = ["Trending", "Healthy", "Quick Meals", "Desserts", "Vegetarian"];

const posts = [
  { id: 1, user: "Chef Maria", avatar: "👩‍🍳", title: "Spicy Thai Basil Chicken", image: "🍛", likes: 234, comments: 18, tags: ["Quick Meals"] },
  { id: 2, user: "Alex Cook", avatar: "👨‍🍳", title: "Homemade Sourdough Bread", image: "🍞", likes: 567, comments: 42, tags: ["Trending"] },
  { id: 3, user: "FitFoodie", avatar: "💪", title: "High Protein Açaí Bowl", image: "🫐", likes: 189, comments: 12, tags: ["Healthy"] },
  { id: 4, user: "SweetTooth", avatar: "🧁", title: "Tiramisu from Scratch", image: "🍰", likes: 423, comments: 31, tags: ["Desserts"] },
  { id: 5, user: "VeganVibes", avatar: "🌱", title: "Rainbow Veggie Stir Fry", image: "🥦", likes: 312, comments: 24, tags: ["Vegetarian", "Healthy"] },
  { id: 6, user: "HomeChef", avatar: "🏠", title: "One-Pot Chicken Pasta", image: "🍝", likes: 278, comments: 19, tags: ["Quick Meals"] },
];

const Community = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Community</h1>
          <p className="text-muted-foreground mt-1">Discover recipes from fellow cooks</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <Badge key={f} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">{f}</Badge>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <Card key={post.id} className="group hover:shadow-card transition-shadow">
              <CardContent className="p-0">
                <div className="h-40 bg-muted flex items-center justify-center text-5xl rounded-t-lg">{post.image}</div>
                <div className="p-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{post.avatar}</span>
                    <span className="text-sm font-medium text-foreground">{post.user}</span>
                  </div>
                  <h3 className="font-semibold text-foreground">{post.title}</h3>
                  <div className="flex gap-1">
                    {post.tags.map((t) => <Badge key={t} variant="secondary" className="text-[10px]">{t}</Badge>)}
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-border">
                    <div className="flex gap-3">
                      <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-destructive transition-colors">
                        <Heart className="w-3.5 h-3.5" /> {post.likes}
                      </button>
                      <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors">
                        <MessageCircle className="w-3.5 h-3.5" /> {post.comments}
                      </button>
                      <button className="text-muted-foreground hover:text-foreground transition-colors">
                        <Share2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <button className="text-muted-foreground hover:text-primary transition-colors">
                      <Bookmark className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Community;
