import { Button } from "@/components/ui/button";
import { ChefHat, Sparkles, Calendar, Brain } from "lucide-react";
import heroImage from "@/assets/hero-cooking.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Fresh ingredients and cooking setup" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Logo and tagline */}
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-hero rounded-xl shadow-warm">
                <ChefHat className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                  Nutri<span className="text-fresh">Verse</span>
                </h1>
                <p className="text-muted-foreground text-lg">Your Smart Culinary Assistant</p>
              </div>
            </div>

            {/* Main headline */}
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold leading-tight text-foreground">
                Transform Your Kitchen Into a 
                <span className="block text-fresh"> Smart Culinary Universe</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Discover, create, and plan meals with the power of AI. Your personalized recipe collection and intelligent meal planning assistant.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Start Cooking Smart
                <Sparkles className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Explore Recipes
              </Button>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-warm rounded-lg">
                  <Brain className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">AI-Powered</h3>
                  <p className="text-sm text-muted-foreground">Smart recipe generation</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-hero rounded-lg">
                  <Calendar className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Meal Planning</h3>
                  <p className="text-sm text-muted-foreground">Weekly planning made easy</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="space-y-6">
            <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-card border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-hero rounded-lg">
                  <Sparkles className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">AI Recipe Generation</h3>
              </div>
              <p className="text-muted-foreground">
                Generate unique recipes from simple prompts using Google's Gemini AI. From "healthy breakfast bowl" to gourmet dinner ideas.
              </p>
            </div>

            <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-card border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-warm rounded-lg">
                  <Calendar className="h-5 w-5 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Smart Meal Planning</h3>
              </div>
              <p className="text-muted-foreground">
                Automatically create weekly meal plans based on your dietary goals, preferences, and available ingredients.
              </p>
            </div>

            <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-card border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-hero rounded-lg">
                  <ChefHat className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Personal Recipe Collection</h3>
              </div>
              <p className="text-muted-foreground">
                Save, organize, and share your favorite recipes in your private culinary vault. Access them anywhere, anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;