import AppShell from "@/components/AppShell";
import { useState } from "react";
import { motion } from "framer-motion";
import { ScanLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import ExpiryBadge from "@/components/ExpiryBadge";
import { useToast } from "@/hooks/use-toast";

const expiryOptions = [
  { label: "1 day", days: 1 },
  { label: "3 days", days: 3 },
  { label: "1 week", days: 7 },
  { label: "2 weeks", days: 14 },
];

const ScanPage = () => {
  const [scanned, setScanned] = useState(false);
  const [selectedExpiry, setSelectedExpiry] = useState<number | null>(null);
  const { toast } = useToast();

  const futureDate = (days: number) => {
    const d = new Date();
    d.setDate(d.getDate() + days);
    return d.toISOString().split("T")[0];
  };

  const handleScan = () => {
    setTimeout(() => setScanned(true), 1500);
  };

  const handleSave = () => {
    toast({ title: "Item Saved!", description: "Greek Yogurt added to your items." });
    setScanned(false);
    setSelectedExpiry(null);
  };

  return (
    <AppShell>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
        <h1 className="text-2xl font-bold">Scan Product</h1>

        {/* Camera View */}
        <div className="glass-card h-64 relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-4 border-2 border-primary/30 rounded-2xl" />
          {!scanned && (
            <div className="absolute left-4 right-4 h-0.5 bg-primary/60 animate-scan-line rounded-full" />
          )}
          <ScanLine className="w-12 h-12 text-primary/40" />
        </div>

        {!scanned ? (
          <Button onClick={handleScan} className="w-full h-12 rounded-2xl text-base font-semibold glow-emerald">
            Start Scanning
          </Button>
        ) : (
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
            {/* Product Card */}
            <div className="glass-card p-4 flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center text-3xl">🥣</div>
              <div>
                <h3 className="font-semibold">Greek Yogurt</h3>
                <p className="text-xs text-muted-foreground">Dairy · 150g</p>
              </div>
            </div>

            {/* Expiry Selector */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Set Expiry</label>
              <div className="grid grid-cols-2 gap-2">
                {expiryOptions.map((opt) => (
                  <button
                    key={opt.days}
                    onClick={() => setSelectedExpiry(opt.days)}
                    className={`glass-card px-4 py-3 text-sm font-medium text-center transition-all ${
                      selectedExpiry === opt.days ? "border-primary bg-primary/10 text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Preview */}
            {selectedExpiry && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-card p-4 flex items-center justify-between">
                <span className="text-sm">Status preview:</span>
                <ExpiryBadge expiryDate={futureDate(selectedExpiry)} showDays />
              </motion.div>
            )}

            <Button onClick={handleSave} className="w-full h-12 rounded-2xl text-base font-semibold glow-emerald" disabled={!selectedExpiry}>
              Save Item
            </Button>
          </motion.div>
        )}
      </motion.div>
    </AppShell>
  );
};

export default ScanPage;
