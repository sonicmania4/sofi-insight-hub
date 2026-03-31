// src/components/EarningsHighlights.tsx
import { earnings } from "@/data/earnings";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";

export default function EarningsHighlights() {
  return (
    <section id="earnings" className="section-container">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="決算ハイライト"
          accentColor="from-indigo-400 to-purple-400"
          subtitle="四半期決算の主要結果と注目ポイント。"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {earnings.map((q) => (
            <div
              key={q.id}
              className={`glass-card p-6 flex flex-col hover:border-indigo-500/40 transition-all duration-300 ${
                q.isLatest ? "ring-1 ring-indigo-500/40" : ""
              }`}
            >
              {/* ヘッダー */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-extrabold text-white">{q.quarter}</h3>
                  <p className="text-xs text-slate-500">{q.date}</p>
                </div>
                {q.isLatest && <Badge label="最新" variant="indigo" />}
              </div>

              {/* 数値グリッド */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-slate-800/60 rounded-lg p-3">
                  <div className="text-xs text-slate-500">純収益</div>
                  <div className="text-white font-bold">{q.revenue}</div>
                  <div className="text-xs text-emerald-400">{q.revenueYoY} YoY</div>
                </div>
                <div className="bg-slate-800/60 rounded-lg p-3">
                  <div className="text-xs text-slate-500">純利益</div>
                  <div className="text-white font-bold">{q.netIncome}</div>
                  <div className="text-xs text-slate-500">GAAP</div>
                </div>
                <div className="bg-slate-800/60 rounded-lg p-3">
                  <div className="text-xs text-slate-500">会員数</div>
                  <div className="text-white font-bold">{q.members}</div>
                  <div className="text-xs text-emerald-400">{q.membersGrowth} YoY</div>
                </div>
                <div className="bg-slate-800/60 rounded-lg p-3">
                  <div className="text-xs text-slate-500">調整後EBITDA</div>
                  <div className="text-white font-bold">{q.adjEbitda}</div>
                  <div className="text-xs text-slate-500">adj.</div>
                </div>
              </div>

              {/* ハイライト */}
              <div className="flex-1">
                <p className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">
                  ハイライト
                </p>
                <ul className="space-y-1.5">
                  {q.highlights.map((h, i) => (
                    <li key={i} className="text-xs text-slate-300 flex gap-2">
                      <span className="text-indigo-400 mt-0.5 flex-shrink-0">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
