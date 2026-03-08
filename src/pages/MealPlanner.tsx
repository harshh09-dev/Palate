import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Trash2, ShoppingCart, Plus } from "lucide-react";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const meals = ["Breakfast", "Lunch", "Dinner", "Snack"];

const mockPlan: Record<string, Record<string, string>> = {
  Monday: { Breakfast: "Oatmeal Bowl", Lunch: "Chicken Salad", Dinner: "Pasta Primavera", Snack: "" },
  Tuesday: { Breakfast: "Smoothie Bowl", Lunch: "", Dinner: "Teriyaki Salmon", Snack: "Greek Yogurt" },
  Wednesday: { Breakfast: "", Lunch: "Caesar Wrap", Dinner: "", Snack: "" },
  Thursday: { Breakfast: "Avocado Toast", Lunch: "", Dinner: "Stir Fry Tofu", Snack: "Trail Mix" },
  Friday: { Breakfast: "", Lunch: "Burrito Bowl", Dinner: "", Snack: "" },
  Saturday: { Breakfast: "Pancakes", Lunch: "", Dinner: "Grilled Steak", Snack: "" },
  Sunday: { Breakfast: "", Lunch: "Sushi Bowl", Dinner: "Roasted Chicken", Snack: "Fruit Salad" },
};

const MealPlanner = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Meal Planner</h1>
            <p className="text-muted-foreground mt-1">Plan your meals for the week</p>
          </div>
          <div className="flex gap-2">
            <Button className="gap-2"><Sparkles className="w-4 h-4" /> Auto Generate Week</Button>
            <Button variant="outline" className="gap-2"><Trash2 className="w-4 h-4" /> Clear Week</Button>
            <Button variant="outline" className="gap-2"><ShoppingCart className="w-4 h-4" /> Grocery List</Button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Header */}
            <div className="grid grid-cols-8 gap-2 mb-2">
              <div className="text-sm font-medium text-muted-foreground p-2" />
              {days.map((d) => (
                <div key={d} className="text-sm font-semibold text-foreground text-center p-2 bg-muted rounded-lg">
                  {d.slice(0, 3)}
                </div>
              ))}
            </div>

            {/* Rows */}
            {meals.map((meal) => (
              <div key={meal} className="grid grid-cols-8 gap-2 mb-2">
                <div className="text-sm font-medium text-muted-foreground p-2 flex items-center">{meal}</div>
                {days.map((day) => {
                  const recipe = mockPlan[day]?.[meal];
                  return (
                    <Card key={`${day}-${meal}`} className="min-h-[70px] cursor-pointer hover:border-primary/40 transition-colors">
                      <CardContent className="p-2 flex items-center justify-center h-full">
                        {recipe ? (
                          <p className="text-xs text-foreground text-center font-medium">{recipe}</p>
                        ) : (
                          <Plus className="w-4 h-4 text-muted-foreground" />
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MealPlanner;
