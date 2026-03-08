import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PalateLogo from "@/components/PalateLogo";

const Splash = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 2, 100));
    }, 30);
    const timeout = setTimeout(() => navigate("/home"), 2000);
    return () => { clearInterval(interval); clearTimeout(timeout); };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col items-center justify-center relative overflow-hidden">
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-primary-foreground/5 -top-20 -left-20"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-primary-foreground/5 -bottom-10 -right-10"
        animate={{ scale: [1, 1.15, 1], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="flex flex-col items-center gap-6 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <PalateLogo size="xl" showText={false} />
        </motion.div>

        <div className="text-center">
          <h1 className="text-5xl font-bold text-primary-foreground tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            Palate
          </h1>
          <motion.p
            className="text-primary-foreground/80 mt-2 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Your Personal Taste, Perfected
          </motion.p>
        </div>

        <div className="w-48 h-1 bg-primary-foreground/20 rounded-full overflow-hidden mt-6">
          <motion.div
            className="h-full bg-primary-foreground rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </motion.div>

      <motion.p
        className="absolute bottom-10 text-primary-foreground/60 text-sm tracking-wider"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        AI Powered Cooking Assistant
      </motion.p>
    </div>
  );
};

export default Splash;
