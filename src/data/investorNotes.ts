// src/data/investorNotes.ts
// 投資家メモデータ — 2026年3月31日最終更新

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
    category: "成長の多角化",
    icon: "📈",
    sentiment: "positive",
    points: [
      "月間100万人近い新規会員獲得ペースを維持",
      "フィナンシャルサービス部門が最大の利益ドライバーへ",
      "クロスセルフライホイールがARPU（顧客単価）を押し上げ",
      "2026年3月の36億ドル規模の契約により資本効率が向上",
    ],
  },
  {
    id: "profitability",
    category: "継続的な収益性",
    icon: "✅",
    sentiment: "positive",
    points: [
      "9四半期連続のGAAP黒字を達成（2023年末〜2026年現在）",
      "調整後EBITDAマージン目標を30%台半ばへ上方修正",
      "B2B部門（Galileo/Technisys）が安定した高マージンを創出",
      "2026年度通期EPS目標 $0.60 への強いコミットメント",
    ],
  },
  {
    id: "capital_light",
    category: "キャピタルライト戦略",
    icon: "⚙️",
    sentiment: "positive",
    points: [
      "自社バランスシートに依存しないローン組成・サービスモデルへ移行",
      "機関投資家へのローン売却・管理手数料による収益拡大",
      "金利変動リスクを抑えつつ、高いROE（自己資本利益率）を目指す",
      "2026年3月の大型提携はこの戦略の成功を象徴",
    ],
  },
  {
    id: "crypto_web3",
    category: "次世代金融（SoFiUSD）",
    icon: "🌐",
    sentiment: "positive",
    points: [
      "Mastercardとの提携によるSoFiUSD（ステーブルコイン）決済開始",
      "既存の銀行口座とデジタル資産のシームレスな統合を実現",
      "若年層・デジタルネイティブ層の囲い込みを強化",
      "決済手数料収益の新たな柱としての期待",
    ],
  },
  {
    id: "market_sentiment",
    category: "市場のセンチメントと課題",
    icon: "⚠️",
    sentiment: "watch",
    points: [
      "一部ショートセラーによる会計処理への指摘（会社側は強く否定）",
      "高金利環境の長期化によるローン需要への潜在的影響",
      "フィンテック他社（Robinhood、Block等）との競争激化",
      "Q1 2026決算（4月発表予定）での進捗確認が極めて重要",
    ],
  },
  {
    id: "guidance_execution",
    category: "実行力の証明",
    icon: "🎯",
    sentiment: "positive",
    points: [
      "経営陣による積極的なガイダンス達成のトラックレコード",
      "通期収益30%成長という高い目標設定への信頼性",
      "「全方位の金融機関になる」というビジョンの着実な具現化",
    ],
  },
];
