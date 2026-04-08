import { differenceInDays, parseISO } from "date-fns";

export type ExpiryStatus = "fresh" | "soon" | "expired";

export function getExpiryStatus(expiryDate: string): ExpiryStatus {
  const days = differenceInDays(parseISO(expiryDate), new Date());
  if (days < 0) return "expired";
  if (days <= 3) return "soon";
  return "fresh";
}

export function getDaysRemaining(expiryDate: string): number {
  return differenceInDays(parseISO(expiryDate), new Date());
}

export function getExpiryColor(status: ExpiryStatus) {
  switch (status) {
    case "fresh": return { bg: "bg-primary/20", text: "text-primary", border: "border-primary/30" };
    case "soon": return { bg: "bg-yellow-500/20", text: "text-yellow-400", border: "border-yellow-500/30" };
    case "expired": return { bg: "bg-destructive/20", text: "text-red-400", border: "border-destructive/30" };
  }
}

export function getExpiryLabel(status: ExpiryStatus) {
  switch (status) {
    case "fresh": return "Fresh";
    case "soon": return "Use Soon";
    case "expired": return "Expired";
  }
}
