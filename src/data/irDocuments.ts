// src/data/irDocuments.ts
// IR資料リンク — 2026年3月31日最終更新

export interface IRDocument {
  id: string;
  title: string;
  type: "年次報告書" | "四半期報告書" | "決算プレゼン" | "プレスリリース" | "委任状";
  period: string;
  description: string;
  href: string;
  date: string;
}

export const irDocuments: IRDocument[] = [
  {
    id: "10k-2025",
    title: "2025年度 年次報告書（10-K）",
    type: "年次報告書",
    period: "FY2025",
    description: "2025年度の通期財務状況と事業概況の完全開示。",
    href: "https://investors.sofi.com/financial-information/sec-filings",
    date: "2026年2月",
  },
  {
    id: "earnings-q4-2025",
    title: "Q4 2025 決算プレスリリース（最新）",
    type: "プレスリリース",
    period: "Q4 2025",
    description: "収益10億ドル突破とEPSの大幅改善を報告した最新のプレスリリース。",
    href: "https://investors.sofi.com/news-releases",
    date: "2026年1月30日",
  },
  {
    id: "presentation-q4-2025",
    title: "Q4 2025 決算プレゼンテーション",
    type: "決算プレゼン",
    period: "Q4 2025",
    description: "2025年Q4の結果と2026年の戦略指針をまとめた投資家向けスライド。",
    href: "https://investors.sofi.com/events-and-presentations",
    date: "2026年1月30日",
  },
  {
    id: "proxy-2025",
    title: "2025年 委任状説明書 (Proxy Statement)",
    type: "委任状",
    period: "FY2025",
    description: "2025年度株主総会のための委任状説明書。",
    href: "https://investors.sofi.com/financial-information/sec-filings",
    date: "2025年4月",
  },
  {
    id: "lpb-mar-2026",
    title: "Loan Platform Business 36億ドル契約資料",
    type: "プレスリリース",
    period: "2026/03",
    description: "キャピタルライト戦略の主要提携に関する詳細発表。",
    href: "https://www.sofi.com/press",
    date: "2026年3月26日",
  },
];
