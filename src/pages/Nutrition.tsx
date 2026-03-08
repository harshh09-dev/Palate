import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame, Beef, Wheat, Droplets, Leaf } from "lucide-react";

const dailySummary = [
  { label: "Calories", value: 1530, target: 2000, unit: "kcal", icon: Flame },
  { label: "Protein", value: 95, target: 120, unit: "g", icon: Beef },
  { label: "Carbs", value: 180, target: 250, unit: "g", icon: Wheat },
  { label: "Fat", value: 55, target: 70, unit: "g", icon: Droplets },
  { label: "Fiber", value: 22, target: 30, unit: "g", icon: Leaf },
];

const mealBreakdown = [
  { meal: "Breakfast", recipe: "Oatmeal Bowl", calories: 320, protein: 12, carbs: 48, fat: 10 },
  { meal: "Lunch", recipe: "Chicken Salad", calories: 450, protein: 38, carbs: 22, fat: 24 },
  { meal: "Dinner", recipe: "Pasta Primavera", calories: 520, protein: 18, carbs: 68, fat: 16 },
  { meal: "Snack", recipe: "Greek Yogurt", calories: 180, protein: 15, carbs: 20, fat: 4 },
];

const weeklyData = [
  { day: "Mon", calories: 1800 },
  { day: "Tue", calories: 1650 },
  { day: "Wed", calories: 2100 },
  { day: "Thu", calories: 1530 },
  { day: "Fri", calories: 1900 },
  { day: "Sat", calories: 2200 },
  { day: "Sun", calories: 1750 },
];

const Nutrition = () => {
  const maxCal = Math.max(...weeklyData.map((d) => d.calories));

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Nutrition</h1>
          <p className="text-muted-foreground mt-1">Track your daily nutrition intake</p>
        </div>

        {/* Daily Summary Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {dailySummary.map((item) => {
            const pct = Math.round((item.value / item.target) * 100);
            return (
              <Card key={item.label}>
                <CardContent className="p-4 text-center">
                  <item.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">{item.value}</p>
                  <p className="text-xs text-muted-foreground">/ {item.target} {item.unit}</p>
                  <div className="w-full h-1.5 bg-muted rounded-full mt-2">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${Math.min(pct, 100)}%` }} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Meal Breakdown */}
          <Card>
            <CardHeader><CardTitle className="text-lg">Meal Breakdown</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {mealBreakdown.map((m) => (
                <div key={m.meal} className="p-3 bg-muted/50 rounded-lg">
                  <div className="flex justify-between mb-1">
                    <div>
                      <p className="font-medium text-foreground text-sm">{m.meal}</p>
                      <p className="text-xs text-muted-foreground">{m.recipe}</p>
                    </div>
                    <p className="text-sm font-semibold text-foreground">{m.calories} cal</p>
                  </div>
                  <div className="flex gap-3 text-xs text-muted-foreground">
                    <span>P: {m.protein}g</span>
                    <span>C: {m.carbs}g</span>
                    <span>F: {m.fat}g</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Weekly Chart */}
          <Card>
            <CardHeader><CardTitle className="text-lg">Weekly Calories</CardTitle></CardHeader>
            <CardContent>
              <div className="flex items-end justify-between gap-2 h-48">
                {weeklyData.map((d) => (
                  <div key={d.day} className="flex-1 flex flex-col items-center gap-1">
                    <span className="text-xs text-muted-foreground">{d.calories}</span>
                    <div
                      className="w-full bg-primary/80 rounded-t-md"
                      style={{ height: `${(d.calories / maxCal) * 100}%` }}
                    />
                    <span className="text-xs font-medium text-foreground">{d.day}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Nutrition;
