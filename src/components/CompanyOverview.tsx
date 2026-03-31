// src/components/CompanyOverview.tsx
import SectionTitle from "@/components/ui/SectionTitle";

const segments = [
  {
    name: "ローン事業",
    icon: "🏠",
    color: "from-indigo-500/20 to-indigo-600/5 border-indigo-500/20",
    description:
      "個人ローン、学生ローン借り換え、住宅ローンを提供。SoFiの元々のコア事業。",
  },
  {
    name: "フィナンシャルサービス",
    icon: "💳",
    color: "from-cyan-500/20 to-cyan-600/5 border-cyan-500/20",
    description:
      "当座・普通預金、クレジットカード、投資、暗号資産、保険商品など、生活に必要な金融サービスをワンストップで提供。",
  },
  {
    name: "テクノロジープラットフォーム",
    icon: "⚙️",
    color: "from-purple-500/20 to-purple-600/5 border-purple-500/20",
    description:
      "Galileo Financial Technologies と Technisys によるB2B APIインフラ。1.7億以上の口座を支えるフィンテック基盤。",
  },
];

export default function CompanyOverview() {
  return (
    <section id="overview" className="section-container">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="企業概要"
          subtitle="SoFi Technologiesはデジタル個人金融会社で、1つのアプリで金融商品・サービスをワンストップ提供。学生ローン借り換えからスタートし、フルスペックのフィンテックバンクへと進化を遂げています。"
        />

        {/* 基本情報 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "設立", value: "2011年" },
            { label: "ティッカー", value: "SOFI" },
            { label: "上場市場", value: "NASDAQ" },
            { label: "本社", value: "サンフランシスコ, CA" },
          ].map((fact) => (
            <div key={fact.label} className="glass-card p-4 text-center">
              <div className="text-xs text-slate-500 mb-1">{fact.label}</div>
              <div className="text-white font-bold text-sm">{fact.value}</div>
            </div>
          ))}
        </div>

        {/* 3事業セグメント */}
        <div className="grid md:grid-cols-3 gap-6">
          {segments.map((seg) => (
            <div
              key={seg.name}
              className={`glass-card p-6 bg-gradient-to-br ${seg.color} hover:scale-[1.02] transition-transform duration-200`}
            >
              <div className="text-3xl mb-3">{seg.icon}</div>
              <h3 className="text-white font-bold text-lg mb-3">{seg.name}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{seg.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
