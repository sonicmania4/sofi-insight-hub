import { NewsItem } from "@/data/news";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";

const categoryVariant: Record<NewsItem["category"], "indigo" | "cyan" | "green" | "amber" | "rose"> = {
  決算: "indigo",
  製品: "cyan",
  提携: "green",
  規制: "amber",
  市場: "rose",
  経営: "rose",
};

interface NewsSectionProps {
  news?: NewsItem[];
}

export default function NewsSection({ news = [] }: NewsSectionProps) {
  return (
    <section id="news" className="section-container">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="ニュース・トピック"
          accentColor="from-cyan-400 to-emerald-400"
          subtitle="SoFi Technologiesに関する重要なヘッドラインと動向。"
        />

        <div className="space-y-4">
          {news.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-5 flex gap-4 hover:border-cyan-500/30 hover:-translate-y-0.5 transition-all duration-200 group block"
            >
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <Badge label={item.category} variant={categoryVariant[item.category]} />
                  {item.isImportant && <Badge label="★ 重要" variant="amber" />}
                  <span className="text-xs text-slate-600">{item.date}</span>
                </div>
                <h3 className="text-white font-semibold text-sm md:text-base leading-snug mb-2 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed hidden md:block">
                  {item.summary}
                </p>
              </div>
              <div className="text-slate-600 group-hover:text-cyan-400 transition-colors self-center flex-shrink-0">
                →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
