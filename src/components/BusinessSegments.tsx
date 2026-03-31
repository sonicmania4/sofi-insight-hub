// src/components/BusinessSegments.tsx
import SectionTitle from "@/components/ui/SectionTitle";

const segments = [
  {
    name: "ローン事業",
    icon: "🏠",
    gradient: "from-indigo-600/20 to-indigo-900/10",
    border: "border-indigo-500/20",
    accent: "text-indigo-400",
    products: ["個人ローン", "学生ローン借り換え", "住宅ローン"],
    highlights: [
      "歴史的に最大の収益セグメント",
      "金利環境に感応的（利下げが追い風）",
      "全国銀行免許によりFDIC付き融資が可能",
      "フィナンシャルサービスへの多角化で依存度を低減中",
    ],
  },
  {
    name: "フィナンシャルサービス",
    icon: "💳",
    gradient: "from-cyan-600/20 to-cyan-900/10",
    border: "border-cyan-500/20",
    accent: "text-cyan-400",
    products: ["SoFiマネー（預金）", "SoFi投資", "SoFiクレジットカード", "SoFi Protect"],
    highlights: [
      "最も成長が速いセグメント、収益規模でも最大に",
      "旺盛な預金増加が低コスト資金調達を支える",
      "クロスセルのフライホイールが長期戦略の核心",
      "2024年に黒字転換達成",
    ],
  },
  {
    name: "テクノロジープラットフォーム",
    icon: "⚙️",
    gradient: "from-purple-600/20 to-purple-900/10",
    border: "border-purple-500/20",
    accent: "text-purple-400",
    products: ["Galileo API", "Technisys コアバンキング", "B2B決済インフラ"],
    highlights: [
      "FY2024に166億件のトランザクションを処理",
      "世界で1.7億以上の有効化口座",
      "高マージンのリカーリングB2B収益",
      "フィンテックや銀行での採用が拡大",
    ],
  },
];

export default function BusinessSegments() {
  return (
    <section id="segments" className="section-container bg-slate-900/40">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="事業別まとめ"
          accentColor="from-purple-400 to-cyan-400"
          subtitle="SoFiは3つの事業セグメントを運営し、それぞれが長期成長に貢献しています。"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {segments.map((seg) => (
            <div
              key={seg.name}
              className={`glass-card p-6 bg-gradient-to-br ${seg.gradient} border ${seg.border} hover:scale-[1.02] transition-transform duration-200`}
            >
              {/* ヘッダー */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{seg.icon}</span>
                <h3 className={`font-extrabold text-lg ${seg.accent}`}>{seg.name}</h3>
              </div>

              {/* 製品タグ */}
              <div className="mb-4">
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-2 font-semibold">
                  主な製品・サービス
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {seg.products.map((p) => (
                    <span
                      key={p}
                      className="text-xs bg-slate-800/80 text-slate-300 px-2.5 py-1 rounded-full border border-slate-700/50"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              {/* 注目点 */}
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-2 font-semibold">
                  注目点
                </p>
                <ul className="space-y-1.5">
                  {seg.highlights.map((h, i) => (
                    <li key={i} className="text-xs text-slate-300 flex gap-2">
                      <span className={`${seg.accent} mt-0.5 flex-shrink-0`}>▸</span>
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
