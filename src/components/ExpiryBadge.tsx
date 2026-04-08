import { getExpiryStatus, getExpiryColor, getExpiryLabel, getDaysRemaining } from "@/lib/expiry";

interface ExpiryBadgeProps {
  expiryDate: string;
  showDays?: boolean;
}

const ExpiryBadge = ({ expiryDate, showDays = false }: ExpiryBadgeProps) => {
  const status = getExpiryStatus(expiryDate);
  const colors = getExpiryColor(status);
  const days = getDaysRemaining(expiryDate);

  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold ${colors.bg} ${colors.text} ${colors.border} border`}>
      {status === "expired" ? "⚠️" : status === "soon" ? "⏳" : "✅"}
      {showDays ? (days < 0 ? `${Math.abs(days)}d ago` : `${days}d left`) : getExpiryLabel(status)}
    </span>
  );
};

export default ExpiryBadge;
