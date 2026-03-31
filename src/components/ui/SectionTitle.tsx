// src/components/ui/SectionTitle.tsx
interface SectionTitleProps {
  title: string;
  subtitle?: string;
  accentColor?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  accentColor = "from-indigo-400 to-cyan-400",
}: SectionTitleProps) {
  return (
    <div className="mb-10">
      <h2
        className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${accentColor} bg-clip-text text-transparent`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-slate-400 text-sm md:text-base max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
