import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, ArrowRight, ChefHat } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <Card className="bg-gradient-hero border-0 shadow-warm overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-warm opacity-20 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/20 rounded-full translate-y-12 -translate-x-12"></div>
          
          <CardContent className="p-12 text-center relative z-10">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary-foreground/20 rounded-2xl">
                <ChefHat className="h-12 w-12 text-primary-foreground" />
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your Kitchen?
            </h2>
            
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8 max-w-2xl mx-auto">
              Join thousands of home cooks who are already using NutriVerse to discover amazing recipes and plan delicious meals with the power of AI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="outline" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-primary-foreground text-lg px-8 py-4">
                Get Started Free
                <Sparkles className="ml-2 h-5 w-5" />
              </Button>
              
              <Button variant="ghost" size="lg" className="text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-4">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            {/* Integration Notice */}
            <div className="mt-12 p-6 bg-primary-foreground/10 rounded-xl border border-primary-foreground/20">
              <p className="text-primary-foreground/80 text-sm">
                <strong>Note:</strong> To unlock the full power of NutriVerse including AI recipe generation, user authentication, and personal recipe storage, you'll need to connect to Supabase for backend functionality.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;