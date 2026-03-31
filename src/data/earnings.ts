// src/data/earnings.ts
// 決算ハイライトデータ — 2026年3月31日時点

export interface EarningHighlight {
  id: string;
  quarter: string;
  date: string;
  revenue: string;
  revenueYoY: string;
  netIncome: string;
  members: string;
  membersGrowth: string;
  adjEbitda: string;
  highlights: string[];
  isLatest?: boolean;
}

export const earnings: EarningHighlight[] = [
  {
    id: "q4-2025",
    quarter: "Q4 2025",
    date: "2026年1月30日",
    revenue: "$1.025B",
    revenueYoY: "+40%",
    netIncome: "$174M",
    members: "1,370万人",
    membersGrowth: "+35%",
    adjEbitda: "$318M",
    isLatest: true,
    highlights: [
      "史上初の四半期売上高10億ドル突破を達成",
      "9四半期連続のGAAP黒字、純利益は前年比161%増",
      "四半期で過去最高の100万人の新規会員を獲得",
      "調整後EBITDAマージンは前年から大幅拡大し31%に到達",
      "2026年度通期の収益30%成長ガイダンスを提示",
    ],
  },
  {
    id: "q3-2025",
    quarter: "Q3 2025",
    date: "2025年10月",
    revenue: "$895M",
    revenueYoY: "+28%",
    netIncome: "$120M",
    members: "1,270万人",
    membersGrowth: "+35%",
    adjEbitda: "$270M",
    highlights: [
      "当座/普通預金の拡大が低コストの資金調達を継続牽引",
      "テクノロジープラットフォームの外部顧客採用が加速",
      "フィナンシャルサービスの収益貢献が他セグメントを圧倒",
    ],
  },
  {
    id: "q4-2024",
    quarter: "Q4 2024",
    date: "2025年1月",
    revenue: "$734.1M",
    revenueYoY: "+19%",
    netIncome: "$66.5M",
    members: "1,010万人",
    membersGrowth: "+34%",
    adjEbitda: "$210.7M",
    highlights: [
      "年間を通じて初のGAAP黒字を達成",
      "会員数が1,000万人を突破",
      "テクノロジープラットフォーム収益がYoY 10%増",
    ],
  },
];
