import { Metric } from "@/data/metrics";
import SectionTitle from "@/components/ui/SectionTitle";

interface KeyMetricsProps {
  metrics?: Metric[];
}

export default function KeyMetrics({ metrics = [] }: KeyMetricsProps) {
  return (
    <section id="metrics" className="section-container bg-slate-900/40">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="主要指標"
          accentColor="from-cyan-400 to-indigo-400"
          subtitle="最新の報告数値。SoFi IR資料より。"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((m) => (
            <div
              key={m.id}
              className="glass-card p-5 hover:border-indigo-500/40 hover:shadow-indigo-500/10 hover:shadow-lg transition-all duration-300 group"
            >
              {/* アイコン + 期間 */}
              <div className="flex items-start justify-between mb-3">
                <span className="text-2xl">{m.icon}</span>
                <span className="text-xs text-slate-500 font-mono">{m.period}</span>
              </div>

              {/* 数値 */}
              <div className="text-2xl md:text-3xl font-extrabold text-white mb-1 group-hover:text-indigo-200 transition-colors">
                {m.value}
              </div>

              {/* 変化率バッジ */}
              <div className="mb-2">
                <span
                  className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                    m.isPositive
                      ? "bg-emerald-500/20 text-emerald-400"
                      : "bg-rose-500/20 text-rose-400"
                  }`}
                >
                  {m.change}
                </span>
              </div>

              {/* ラベル */}
              <div className="text-sm text-slate-300 font-semibold">{m.label}</div>

              {/* 説明 */}
              <div className="mt-2 text-xs text-slate-500 leading-relaxed border-t border-slate-700/50 pt-2">
                {m.description}
              </div>
            </div>
          ))}
        </div>

        {/* グラフ追加用プレースホルダー */}
        <div className="mt-8 glass-card p-6 border-dashed border-slate-600 text-center">
          <div className="text-slate-500 text-sm">
            📊 売上・会員数推移グラフ — 近日追加予定
          </div>
        </div>
      </div>
    </section>
  );
}
