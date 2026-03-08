import logoImg from "@/assets/palate-logo.png";

interface PalateLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  className?: string;
}

const sizes = {
  sm: "w-7 h-7",
  md: "w-9 h-9",
  lg: "w-12 h-12",
  xl: "w-20 h-20",
};

const textSizes = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-2xl",
  xl: "text-4xl",
};

const PalateLogo = ({ size = "md", showText = true, className = "" }: PalateLogoProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img src={logoImg} alt="Palate" className={`${sizes[size]} object-contain`} />
      {showText && (
        <span className={`${textSizes[size]} font-bold text-foreground`} style={{ fontFamily: "var(--font-display)" }}>
          Palate
        </span>
      )}
    </div>
  );
};

export default PalateLogo;
