// src/data/earnings.ts
// 決算ハイライトデータ — 四半期ごとに追記/更新してください

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
    id: "q4-2024",
    quarter: "Q4 2024",
    date: "2025年1月",
    revenue: "$734.1M",
    revenueYoY: "+19%",
    netIncome: "$66.5M",
    members: "1,010万人",
    membersGrowth: "+34%",
    adjEbitda: "$210.7M",
    isLatest: true,
    highlights: [
      "年間を通じて初のGAAP黒字を達成",
      "会員数が1,000万人を突破",
      "テクノロジープラットフォーム収益がYoY 10%増",
      "GalileoがFY2024に166億件のトランザクションを処理",
      "フィナンシャルサービスセグメントが黒字転換",
    ],
  },
  {
    id: "q3-2024",
    quarter: "Q3 2024",
    date: "2024年10月",
    revenue: "$697.1M",
    revenueYoY: "+30%",
    netIncome: "$60.7M",
    members: "940万人",
    membersGrowth: "+35%",
    adjEbitda: "$186.2M",
    highlights: [
      "フィナンシャルサービスが牽引し四半期純収益が過去最高を更新",
      "3四半期連続のGAAP黒字を達成",
      "SCOTUS判決後に学生ローン組成が回復",
      "新製品：SoFi Protect保険をローンチ",
    ],
  },
  {
    id: "q2-2024",
    quarter: "Q2 2024",
    date: "2024年7月",
    revenue: "$598.6M",
    revenueYoY: "+20%",
    netIncome: "$17.4M",
    members: "880万人",
    membersGrowth: "+41%",
    adjEbitda: "$144.5M",
    highlights: [
      "2四半期連続のGAAP黒字",
      "フィナンシャルサービス収益がYoY 80%増",
      "SoFi当座/普通預金が370万口座を突破",
      "TechnisysがTechプラットフォームの成長に貢献",
    ],
  },
];
