// src/data/news.ts
// ニュース・トピックデータ — 新しいニュースを先頭に追加してください

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
    id: "news-1",
    title: "SoFiが会社史上初の年間GAAP黒字を達成",
    summary: "SoFi TechnologiesはFY2024に年間GAAP黒字を初めて達成した。フィンテック企業として重要なマイルストーンとなる。",
    date: "2025年1月",
    category: "決算",
    href: "https://investors.sofi.com/news-releases",
    isImportant: true,
  },
  {
    id: "news-2",
    title: "SoFiが1,000万会員のマイルストーンを突破",
    summary: "同社の会員数はYoY 34%増加し、初めて1,000万会員を突破した。",
    date: "2025年1月",
    category: "製品",
    href: "https://www.sofi.com/press",
    isImportant: true,
  },
  {
    id: "news-3",
    title: "GalileoがFY2024に166億件のトランザクションを処理",
    summary: "SoFiのテクノロジー部門Galileoがレコード数のトランザクションを処理し、B2B決済インフラを拡大し続けている。",
    date: "2025年1月",
    category: "製品",
    href: "https://www.galileo-ft.com",
  },
  {
    id: "news-4",
    title: "SoFiがSoFi Protect保険商品をローンチ",
    summary: "SoFiは会員向けに保険商品を提供するSoFi Protectのローンチでフィナンシャルサービスエコシステムを拡大した。",
    date: "Q3 2024",
    category: "製品",
    href: "https://www.sofi.com",
  },
  {
    id: "news-5",
    title: "SoFi Bankが全国銀行免許を取得し、預金商品を拡大",
    summary: "Golden Pacific Bancorpの買収後、SoFi Bankは全国銀行免許を活用して預金を大幅に増加させた。",
    date: "2022年",
    category: "規制",
    href: "https://www.sofi.com",
  },
];
