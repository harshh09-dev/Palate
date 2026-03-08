import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus, Share2, Download } from "lucide-react";
import { useState } from "react";

const initialCategories = [
  { name: "Vegetables", items: [{ text: "Onion ×3", done: false }, { text: "Tomatoes ×4", done: true }, { text: "Spinach", done: false }, { text: "Garlic", done: false }] },
  { name: "Protein", items: [{ text: "Chicken breast 500g", done: false }, { text: "Eggs ×12", done: true }] },
  { name: "Dairy", items: [{ text: "Milk 1L", done: false }, { text: "Cheddar cheese", done: false }, { text: "Greek yogurt", done: true }] },
  { name: "Grains", items: [{ text: "Brown rice 1kg", done: false }, { text: "Whole wheat pasta", done: false }] },
  { name: "Spices", items: [{ text: "Cumin powder", done: false }, { text: "Red pepper flakes", done: true }] },
];

const Grocery = () => {
  const [categories, setCategories] = useState(initialCategories);

  const toggle = (catIdx: number, itemIdx: number) => {
    const updated = [...categories];
    updated[catIdx].items[itemIdx].done = !updated[catIdx].items[itemIdx].done;
    setCategories(updated);
  };

  const total = categories.reduce((s, c) => s + c.items.length, 0);
  const purchased = categories.reduce((s, c) => s + c.items.filter((i) => i.done).length, 0);

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-3xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Grocery List</h1>
            <p className="text-muted-foreground mt-1">{purchased} of {total} items purchased</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-1"><Plus className="w-3.5 h-3.5" /> Add Item</Button>
            <Button variant="outline" size="sm" className="gap-1"><Share2 className="w-3.5 h-3.5" /> Share</Button>
            <Button variant="outline" size="sm" className="gap-1"><Download className="w-3.5 h-3.5" /> PDF</Button>
          </div>
        </div>

        {/* Progress */}
        <div className="w-full h-2 bg-muted rounded-full">
          <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${(purchased / total) * 100}%` }} />
        </div>

        {categories.map((cat, ci) => (
          <Card key={cat.name}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center justify-between">
                {cat.name}
                <span className="text-xs text-muted-foreground font-normal">{cat.items.filter((i) => i.done).length}/{cat.items.length}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {cat.items.map((item, ii) => (
                <label key={ii} className="flex items-center gap-3 cursor-pointer group">
                  <Checkbox checked={item.done} onCheckedChange={() => toggle(ci, ii)} />
                  <span className={`text-sm ${item.done ? "line-through text-muted-foreground" : "text-foreground"}`}>{item.text}</span>
                </label>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Grocery;
