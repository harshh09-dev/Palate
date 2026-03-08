import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coffee, Sun, Moon, Cookie, ShoppingCart, TrendingUp, CalendarDays, ChefHat } from "lucide-react";

const todaysMeals = [
  { meal: "Breakfast", recipe: "Avocado Toast & Eggs", calories: 380, icon: Coffee },
  { meal: "Lunch", recipe: "Grilled Chicken Salad", calories: 450, icon: Sun },
  { meal: "Dinner", recipe: "Pasta Primavera", calories: 520, icon: Moon },
  { meal: "Snack", recipe: "Greek Yogurt & Berries", calories: 180, icon: Cookie },
];

const nutritionData = [
  { label: "Calories", value: 1530, target: 2000, unit: "kcal", color: "bg-primary" },
  { label: "Protein", value: 95, target: 120, unit: "g", color: "bg-accent" },
  { label: "Carbs", value: 180, target: 250, unit: "g", color: "bg-fresh-light" },
  { label: "Fat", value: 55, target: 70, unit: "g", color: "bg-cooking-light" },
];

const groceryItems = ["Milk", "Eggs", "Tomatoes", "Chicken", "Spinach", "Olive Oil", "Rice", "Lemons"];

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Greeting */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Good morning! 👋</h1>
          <p className="text-muted-foreground mt-1">Here's your cooking overview for today</p>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Recipes Saved", value: "24", icon: ChefHat },
            { label: "Meals Planned", value: "18", icon: CalendarDays },
            { label: "Calories Today", value: "1,530", icon: TrendingUp },
            { label: "Grocery Items", value: "8", icon: ShoppingCart },
          ].map((stat) => (
            <Card key={stat.label}>
              <CardContent className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Today's Meals */}
          <div className="lg:col-span-2 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Today's Meals</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {todaysMeals.map((item) => (
                  <div key={item.meal} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">{item.meal}</p>
                        <p className="text-xs text-muted-foreground">{item.recipe}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-foreground">{item.calories} cal</p>
                      <Button variant="ghost" size="sm" className="text-xs h-6 px-2">Edit</Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Nutrition Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Nutrition Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {nutritionData.map((item) => {
                    const pct = Math.round((item.value / item.target) * 100);
                    return (
                      <div key={item.label} className="text-center">
                        <div className="relative w-16 h-16 mx-auto mb-2">
                          <svg className="w-16 h-16 -rotate-90" viewBox="0 0 36 36">
                            <path className="text-muted" strokeDasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                            <path className="text-primary" strokeDasharray={`${pct}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                          </svg>
                          <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-foreground">{pct}%</span>
                        </div>
                        <p className="text-sm font-medium text-foreground">{item.value}{item.unit}</p>
                        <p className="text-xs text-muted-foreground">{item.label}</p>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar widgets */}
          <div className="space-y-4">
            {/* Weekly Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Weekly Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-1 text-center">
                  {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
                    <div key={i} className={`p-2 rounded-lg text-xs font-medium ${i === 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                      {day}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-3 text-center">3 of 7 days planned</p>
              </CardContent>
            </Card>

            {/* Grocery Reminder */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center justify-between">
                  Grocery List
                  <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full font-normal">
                    {groceryItems.length} items
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {groceryItems.slice(0, 5).map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-4 h-4 rounded border border-border" />
                      {item}
                    </li>
                  ))}
                </ul>
                {groceryItems.length > 5 && (
                  <p className="text-xs text-muted-foreground mt-2">+{groceryItems.length - 5} more items</p>
                )}
                <Button variant="outline" size="sm" className="w-full mt-3">
                  View Grocery List
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
