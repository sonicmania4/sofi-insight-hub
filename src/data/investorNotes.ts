// src/data/investorNotes.ts
// 投資家メモデータ — 論点を追記・編集してください

export interface InvestorNote {
  id: string;
  category: string;
  icon: string;
  points: string[];
  sentiment: "positive" | "neutral" | "watch";
}

export const investorNotes: InvestorNote[] = [
  {
    id: "growth",
    category: "成長軌道",
    icon: "📈",
    sentiment: "positive",
    points: [
      "2020年以来の収益CAGR 約25%以上",
      "会員数の成長が一貫してYoY 30%超",
      "フィナンシャルサービスが最大の収益セグメントに",
      "クロスセル率が複数製品利用会員の増加とともに改善",
    ],
  },
  {
    id: "profitability",
    category: "収益性とスケールへの道筋",
    icon: "✅",
    sentiment: "positive",
    points: [
      "FY2024に初の年間GAAP黒字を達成",
      "調整後EBITDAマージンが大幅に拡大",
      "オペレーティングレバレッジが業績に現れ始める",
      "テクノロジープラットフォームの収益性が改善",
    ],
  },
  {
    id: "interest_rate",
    category: "金利感応度",
    icon: "⚠️",
    sentiment: "watch",
    points: [
      "ローン部門は依然として金利環境に感応的",
      "高金利は個人/学生ローンのNIM（純利鞘）を圧迫",
      "FRB政策に伴い銀行預金コストが上昇",
      "利下げはローン組成の大きな追い風となり得る",
    ],
  },
  {
    id: "galileo_technisys",
    category: "Galileo / Technisys プラットフォーム",
    icon: "🔧",
    sentiment: "positive",
    points: [
      "Galileo：1.7億以上の有効化口座、大手フィンテック顧客",
      "Technisys：クラウドネイティブのコアバンキングプラットフォーム",
      "B2B部門がリカーリングで高マージンの収益を提供",
      "純粋な消費者向けフィンテックとの重要な差別化要因",
    ],
  },
  {
    id: "member_flywheel",
    category: "会員フライホイール",
    icon: "🔄",
    sentiment: "positive",
    points: [
      "会員増加 → 製品増加 → 会員一人当たり収益増加",
      "SoFiマネー（当座/普通預金）がアンカープロダクトとして機能",
      "フィナンシャルサービスのクロスセルがARPU成長を牽引",
      "目標は会員のメインのフィナンシャルインスティテューションになること",
    ],
  },
  {
    id: "guidance_execution",
    category: "ガイダンスと実行力の実績",
    icon: "🎯",
    sentiment: "positive",
    points: [
      "経営陣はガイダンスを一貫して達成または上回ってきた",
      "FY2025収益ガイダンス 約$32億",
      "FY2025のEPSガイダンスを注視する必要あり",
      "規制環境が引き続き重要な変数",
    ],
  },
];
