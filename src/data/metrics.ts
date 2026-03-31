// src/data/metrics.ts
// 主要指標データ — 2026年3月31日時点（Q4 2025実績ベース）

export interface Metric {
  id: string;
  label: string;
  value: string;
  change: string;
  period: string;
  isPositive: boolean;
  description: string;
  icon: string;
}

export const metrics: Metric[] = [
  {
    id: "revenue",
    label: "四半期純収益",
    value: "$1.025B",
    change: "+40%",
    period: "Q4 2025",
    isPositive: true,
    description: "史上初の四半期収益10億ドル突破を達成",
    icon: "💰",
  },
  {
    id: "adj_ebitda",
    label: "調整後EBITDA",
    value: "$318M",
    change: "+60%",
    period: "Q4 2025",
    isPositive: true,
    description: "EBITDAマージン31%を記録し過去最高を更新",
    icon: "📈",
  },
  {
    id: "net_income",
    label: "GAAP純利益",
    value: "$174M",
    change: "+161%",
    period: "Q4 2025",
    isPositive: true,
    description: "9四半期連続のGAAP黒字を達成し利益率が大幅向上",
    icon: "✅",
  },
  {
    id: "eps",
    label: "EPS（希薄化後）",
    value: "$0.13",
    change: "+$0.11",
    period: "Q4 2025",
    isPositive: true,
    description: "前年同期比で大幅な増益を達成",
    icon: "🏦",
  },
  {
    id: "members",
    label: "総会員数",
    value: "1,370万人",
    change: "+35%",
    period: "2026/03",
    isPositive: true,
    description: "Q4単期で100万人の新規会員を獲得",
    icon: "👥",
  },
  {
    id: "products",
    label: "総プロダクト数",
    value: "2,020万件",
    change: "+37%",
    period: "2026/03",
    isPositive: true,
    description: "クロスセル戦略により2,000万件の大台を突破",
    icon: "📦",
  },
  {
    id: "guidance_rev",
    label: "2026年度 収益目標",
    value: "約$4.65B",
    change: "+30%",
    period: "FY2026",
    isPositive: true,
    description: "2026年度は前年比30%増の収益成長を維持する見通し",
    icon: "🎯",
  },
  {
    id: "guidance_eps",
    label: "2026年度 予想EPS",
    value: "$0.60",
    change: "FY2026",
    period: "予想",
    isPositive: true,
    description: "通期での利益成長加速とマージン拡大を計画",
    icon: "💡",
  },
];
