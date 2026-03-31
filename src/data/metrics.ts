// src/data/metrics.ts
// 主要指標データ — 2026年3月31日最終更新

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
    period: "Q4 2025実績",
    isPositive: true,
    description: "史上初の10億ドル突破を達成。2026年度はさらなる加速を計画。",
    icon: "💰",
  },
  {
    id: "adj_ebitda",
    label: "調整後EBITDA",
    value: "$318M",
    change: "+60%",
    period: "Q4 2025実績",
    isPositive: true,
    description: "マージン31%を達成。B2B部門の高収益化が寄与。",
    icon: "📈",
  },
  {
    id: "lpb_agreements",
    label: "ローン基盤事業契約",
    value: "$3.6B",
    change: "新規契約",
    period: "2026/03",
    isPositive: true,
    description: "大手機関投資家等との「キャピタルライト」戦略に基づく新規資金調達枠（2026年3月発表）。",
    icon: "🤝",
  },
  {
    id: "net_income",
    label: "GAAP純利益",
    value: "$174M",
    change: "+161%",
    period: "Q4 2025実績",
    isPositive: true,
    description: "連続黒字記録を更新中。収益構造の劇的な改善を証明。",
    icon: "✅",
  },
  {
    id: "members",
    label: "総会員数",
    value: "1,370万人",
    change: "+35%",
    period: "2026/03",
    isPositive: true,
    description: "過去最高のペースで増加。全方位金融アプリとしての地位を確立。",
    icon: "👥",
  },
  {
    id: "sofiusd",
    label: "SoFiUSD 流通",
    value: "運用開始",
    change: "Mastercard提携",
    period: "2026/03",
    isPositive: true,
    description: "SoFi独自のステーブルコインによる決済ネットワークをMastercardと共同展開。",
    icon: "🌐",
  },
  {
    id: "guidance_rev",
    label: "2026年度 収益目標",
    value: "約$4.65B",
    change: "+30%",
    period: "FY2026予想",
    isPositive: true,
    description: "通期での力強い成長を維持。資本効率の向上を重視。",
    icon: "🎯",
  },
  {
    id: "eps_target",
    label: "2026予想EPS",
    value: "$0.60",
    change: "FY2026",
    period: "通期予想",
    isPositive: true,
    description: "一株あたり利益の飛躍的な向上を計画（Q1予想は$0.12）。",
    icon: "💡",
  },
];
