// src/data/irDocuments.ts
// IR資料リンク — リンクURLを差し替えて更新してください

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
    id: "10k-2024",
    title: "年次報告書（10-K）FY2024",
    type: "年次報告書",
    period: "FY2024",
    description: "2024年度年次報告書（SEC提出）",
    href: "https://investors.sofi.com/financial-information/sec-filings",
    date: "2025年2月",
  },
  {
    id: "10q-q3-2024",
    title: "四半期報告書（10-Q）Q3 2024",
    type: "四半期報告書",
    period: "Q3 2024",
    description: "2024年第3四半期報告書",
    href: "https://investors.sofi.com/financial-information/sec-filings",
    date: "2024年11月",
  },
  {
    id: "earnings-q4-2024",
    title: "Q4 2024 決算プレスリリース",
    type: "プレスリリース",
    period: "Q4 2024",
    description: "2024年第4四半期・通期決算発表",
    href: "https://investors.sofi.com/news-releases",
    date: "2025年1月",
  },
  {
    id: "presentation-q4-2024",
    title: "Q4 2024 決算プレゼンテーション",
    type: "決算プレゼン",
    period: "Q4 2024",
    description: "Q4 2024 投資家向けプレゼン資料",
    href: "https://investors.sofi.com/events-and-presentations",
    date: "2025年1月",
  },
  {
    id: "proxy-2024",
    title: "委任状説明書 2024",
    type: "委任状",
    period: "FY2024",
    description: "2024年株主総会委任状",
    href: "https://investors.sofi.com/financial-information/sec-filings",
    date: "2024年4月",
  },
];
