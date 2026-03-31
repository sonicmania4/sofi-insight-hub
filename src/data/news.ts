// src/data/news.ts
// ニュース・トピックデータ — 2026年3月31日最終更新

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  date: string;
  category: "決算" | "製品" | "提携" | "規制" | "市場" | "経営";
  href: string;
  isImportant?: boolean;
}

export const news: NewsItem[] = [
  {
    id: "news-2026-mar-2",
    title: "ローン基盤事業（LPB）の拡大契約を発表（総額36億ドル）",
    summary: "2026年3月26日、SoFiは大手機関投資家等との新規ローン資金調達枠を発表。キャピタルライト戦略を加速し、安定的な手数料収益の増加を狙う。",
    date: "2026年3月26日",
    category: "提携",
    href: "https://www.sofi.com/press",
    isImportant: true,
  },
  {
    id: "news-2026-mar-1",
    title: "MastercardとSoFiUSD（ステーブルコイン）の決済提携を発表",
    summary: "SoFi独自のステーブルコインをMastercardネットワークの決済手段として利用可能に。既存金融と暗号資産のボーダレス化を推進する歴史的提携。",
    date: "2026年3月中旬",
    category: "提携",
    href: "https://www.sofi.com/press",
    isImportant: true,
  },
  {
    id: "news-2026-mar-3",
    title: "一部ショートセラーの報告に対し「事実無根」と強く反論",
    summary: "Muddy Waters等の報告に対し、「不正確で誤解を招く情報」であると強い否定を表明。業績の透明性とキャピタルライト戦略の正当性を改めて強調した。",
    date: "2026年3月下旬",
    category: "市場",
    href: "https://investors.sofi.com",
    isImportant: false,
  },
  {
    id: "news-2026-q4-results",
    title: "FY2025決算発表：四半期売上高 10億ドル突破の歴史的マイルストーン",
    summary: "2026年1月末、GAAP純収益 10.25億ドルに達したことを報告し、全事業セグメントでの記録的高収益を発表。通期での大幅なEPS改善を計画。",
    date: "2026年1月30日",
    category: "決算",
    href: "https://investors.sofi.com/news-releases",
    isImportant: true,
  },
  {
    id: "news-2026-guidance",
    title: "2026年度通期ガイダンス：EPS $0.60を目標に設定",
    summary: "規模拡大とマージン向上を背景に、2026年度の通期黒字をさらに広げる強気の経営指針を提示。収益成長率は約30%を維持の見通し。",
    date: "2026年1月30日",
    category: "経営",
    href: "https://investors.sofi.com",
  },
];
