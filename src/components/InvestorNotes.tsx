// src/components/InvestorNotes.tsx
import { investorNotes } from "@/data/investorNotes";
import SectionTitle from "@/components/ui/SectionTitle";

const sentimentStyles = {
  positive: "border-emerald-500/20 bg-emerald-500/5",
  neutral: "border-slate-500/20 bg-slate-500/5",
  watch: "border-amber-500/20 bg-amber-500/5",
};

const sentimentBadge = {
  positive: "bg-emerald-500/20 text-emerald-400",
  neutral: "bg-slate-500/20 text-slate-400",
  watch: "bg-amber-500/20 text-amber-400",
};

const sentimentLabel = {
  positive: "✅ ポジティブ",
  neutral: "➖ 中立",
  watch: "⚠️ 要注意",
};

export default function InvestorNotes() {
  return (
    <section id="investor-notes" className="section-container">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="投資家メモ"
          accentColor="from-amber-400 to-orange-400"
          subtitle="SoFiを見る上で重要な投資論点と考慮事項。"
        />

        <div className="grid md:grid-cols-2 gap-5">
          {investorNotes.map((note) => (
            <div
              key={note.id}
              className={`glass-card p-6 border ${sentimentStyles[note.sentiment]} hover:scale-[1.01] transition-transform duration-200`}
            >
              {/* ヘッダー */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{note.icon}</span>
                  <h3 className="text-white font-bold text-base">{note.category}</h3>
                </div>
                <span
                  className={`text-xs px-2.5 py-1 rounded-full font-semibold ${sentimentBadge[note.sentiment]}`}
                >
                  {sentimentLabel[note.sentiment]}
                </span>
              </div>

              {/* 論点 */}
              <ul className="space-y-2">
                {note.points.map((point, i) => (
                  <li key={i} className="text-sm text-slate-300 flex gap-2.5">
                    <span className="text-indigo-400 mt-0.5 flex-shrink-0">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
