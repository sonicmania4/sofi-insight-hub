// src/data/news.ts
// ニュース・トピックデータ — 2026年3月31日時点

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
    id: "news-2026-1",
    title: "SoFi、上場来初の四半期収益10億ドル突破を発表（2025年Q4実績）",
    summary: "2026年1月30日の決算発表にて、GAAP純収益が10.25億ドルに達したことを報告。9四半期連続のGAAP黒字を達成し、急速なマージン拡大を継続。",
    date: "2026年1月30日",
    category: "決算",
    href: "https://investors.sofi.com/news-releases",
    isImportant: true,
  },
  {
    id: "news-2026-2",
    title: "2026年度ガイダンス発表：収益30%成長と大幅増益を目標",
    summary: "経営陣は2026年度に通期GAAP利益率をさらに高め、EPS目標を$0.60前後、調整後EBITDA目標を16億ドルに設定した。",
    date: "2026年1月30日",
    category: "経営",
    href: "https://investors.sofi.com",
    isImportant: true,
  },
  {
    id: "news-2026-3",
    title: "SoFi会員数が1,370万人を突破、クロスセル比率は過去最高水準へ",
    summary: "預金高の増加に加え、証券、保険、カードなど複数プロダクト利用会員が急増。1人あたりの収益性が大幅に向上している。",
    date: "2026年3月",
    category: "製品",
    href: "https://www.sofi.com/press",
  },
  {
    id: "news-1",
    title: "SoFiが会社史上初の年間GAAP黒字を達成（FY2024）",
    summary: "SoFi TechnologiesはFY2024に年間GAAP黒字を初めて達成。フィンテックバンクとして安定的な収益フェーズに移行。",
    date: "2025年1月",
    category: "決算",
    href: "https://investors.sofi.com/news-releases",
  },
  {
    id: "news-4",
    title: "SoFi、SoFi Protect保険商品を拡充",
    summary: "SoFiは金融エコシステムの強化を目的に、生命保険や損害保険のラインナップを会員向けに大幅拡充した。",
    date: "2025年Q3",
    category: "製品",
    href: "https://www.sofi.com",
  },
];
