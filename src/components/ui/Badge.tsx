// src/components/ui/Badge.tsx
interface BadgeProps {
  label: string;
  variant?: "indigo" | "cyan" | "green" | "amber" | "rose";
}

const variantClasses = {
  indigo: "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30",
  cyan: "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30",
  green: "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",
  amber: "bg-amber-500/20 text-amber-300 border border-amber-500/30",
  rose: "bg-rose-500/20 text-rose-300 border border-rose-500/30",
};

export default function Badge({ label, variant = "indigo" }: BadgeProps) {
  return (
    <span
      className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full ${variantClasses[variant]}`}
    >
      {label}
    </span>
  );
}
