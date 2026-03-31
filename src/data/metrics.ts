// src/data/metrics.ts
// 主要指標データ — ここを更新すると指標カードが更新されます

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
    label: "純収益",
    value: "$734.1M",
    change: "+19%",
    period: "Q4 2024",
    isPositive: true,
    description: "フィナンシャルサービス部門がYoY成長を牽引",
    icon: "💰",
  },
  {
    id: "adj_net_revenue",
    label: "調整後純収益",
    value: "$739.0M",
    change: "+21%",
    period: "Q4 2024",
    isPositive: true,
    description: "特定項目を除く調整後純収益",
    icon: "📊",
  },
  {
    id: "adj_ebitda",
    label: "調整後EBITDA",
    value: "$210.7M",
    change: "+53%",
    period: "Q4 2024",
    isPositive: true,
    description: "オペレーティングレバレッジが反映された力強いEBITDA拡大",
    icon: "📈",
  },
  {
    id: "net_income",
    label: "GAAP純利益",
    value: "$66.5M",
    change: "+黒字転換",
    period: "Q4 2024",
    isPositive: true,
    description: "GAAP黒字化を初めて年間通じて達成",
    icon: "✅",
  },
  {
    id: "eps",
    label: "EPS（希薄化後）",
    value: "$0.06",
    change: "+黒字転換",
    period: "Q4 2024",
    isPositive: true,
    description: "GAAP希薄化後EPS、初の黒字四半期",
    icon: "🏦",
  },
  {
    id: "members",
    label: "総会員数",
    value: "1,010万人",
    change: "+34%",
    period: "Q4 2024",
    isPositive: true,
    description: "1,000万会員突破のマイルストーンを達成",
    icon: "👥",
  },
  {
    id: "products",
    label: "総プロダクト数",
    value: "1,470万件",
    change: "+32%",
    period: "Q4 2024",
    isPositive: true,
    description: "複数製品を利用する会員が増加",
    icon: "📦",
  },
  {
    id: "guidance",
    label: "FY2025 収益ガイダンス",
    value: "約$32億",
    change: "FY2025",
    period: "ガイダンス",
    isPositive: true,
    description: "2025年度調整後純収益ガイダンス",
    icon: "🎯",
  },
];
