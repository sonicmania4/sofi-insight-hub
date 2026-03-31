// src/data/earnings.ts
// 決算ハイライトデータ — 2026年3月31日最終更新

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
    quarter: "Q4 2025 (最新実績)",
    date: "2026年1月30日発表",
    revenue: "$1.025B",
    revenueYoY: "+40%",
    netIncome: "$174M",
    members: "1,370万人",
    membersGrowth: "+35%",
    adjEbitda: "$318M",
    isLatest: true,
    highlights: [
      "初の四半期収益10億ドル突破を達成した歴史的決算",
      "GAAP純利益は$0.13/株（前年同期比161%増）と大幅伸長",
      "「キャピタルライト」戦略の成功により資本効率が向上",
      "調整後EBITDAマージン31%を達成。B2B部門が収益を牽引",
      "2026年度通期の収益30%成長ガイダンスに加え、EPS $0.60を目標に設定",
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
      "預金高の継続的な増加が資金調達コストを劇的に低減",
      "Technisys/Galileoプラットフォームの外部採用が過去最高を更新",
      "金融サービス部門がローン部門を凌ぐ収益の柱へ成長",
    ],
  },
  {
    id: "q2-2025",
    quarter: "Q2 2025",
    date: "2025年7月",
    revenue: "$780M",
    revenueYoY: "+30%",
    netIncome: "$85M",
    members: "1,170万人",
    membersGrowth: "+33%",
    adjEbitda: "$230M",
    highlights: [
      "金融商品間のクロスセル率が飛躍的に向上",
      "SoFi Bankの純利鞘（NIM）が堅調に推移",
      "新保険商品「SoFi Protect」の寄与が明確に",
    ],
  },
];
