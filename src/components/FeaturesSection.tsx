import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, Sparkles, Shield, Users, Zap } from "lucide-react";
import recipeImage from "@/assets/recipe-collection.jpg";
import mealPlanImage from "@/assets/meal-planning.jpg";

const FeaturesSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Recipe Discovery",
      description: "Explore thousands of recipes from around the world, curated and organized just for you.",
      color: "fresh"
    },
    {
      icon: Sparkles,
      title: "AI-Generated Recipes",
      description: "Create unique recipes from simple text prompts using advanced AI technology.",
      color: "cooking"
    },
    {
      icon: Calendar,
      title: "Smart Meal Planning",
      description: "Automatically generate weekly meal plans based on your preferences and dietary goals.",
      color: "fresh"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your recipes and meal plans are securely stored and completely private to you.",
      color: "cooking"
    },
    {
      icon: Users,
      title: "Share & Collaborate",
      description: "Share your favorite recipes with friends and family, or keep them private.",
      color: "fresh"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Quick recipe searches, instant meal planning, and real-time synchronization.",
      color: "cooking"
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You Need for
            <span className="block text-fresh">Smart Cooking</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            NutriVerse combines the power of AI with intuitive design to revolutionize how you discover, create, and plan your meals.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className={`p-3 rounded-xl mb-6 w-fit ${
                  feature.color === 'fresh' ? 'bg-gradient-hero' : 'bg-gradient-warm'
                }`}>
                  <feature.icon className={`h-6 w-6 ${
                    feature.color === 'fresh' ? 'text-primary-foreground' : 'text-accent-foreground'
                  }`} />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Showcase */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Recipe Collection Feature */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-hero rounded-lg">
                <BookOpen className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">Your Personal Recipe Vault</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Build and organize your personal collection of recipes. Save discoveries, create custom categories, and access your culinary library from anywhere.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-fresh rounded-full"></div>
                Unlimited recipe storage
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-fresh rounded-full"></div>
                Custom categories and tags
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-fresh rounded-full"></div>
                Advanced search and filters
              </li>
            </ul>
            <Button variant="warm" size="lg" className="mt-6">
              Explore Recipe Collection
            </Button>
          </div>
          <div className="relative">
            <img 
              src={recipeImage} 
              alt="Recipe collection showcase" 
              className="rounded-2xl shadow-card w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Meal Planning Feature */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">
          <div className="relative lg:order-1">
            <img 
              src={mealPlanImage} 
              alt="Meal planning showcase" 
              className="rounded-2xl shadow-card w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
          </div>
          <div className="space-y-6 lg:order-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-warm rounded-lg">
                <Calendar className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">Intelligent Meal Planning</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Let AI create personalized weekly meal plans based on your dietary preferences, cooking time, and nutritional goals. Never wonder "what's for dinner?" again.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cooking rounded-full"></div>
                AI-powered meal suggestions
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cooking rounded-full"></div>
                Automatic grocery lists
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cooking rounded-full"></div>
                Nutritional balance tracking
              </li>
            </ul>
            <Button variant="hero" size="lg" className="mt-6">
              Start Meal Planning
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;