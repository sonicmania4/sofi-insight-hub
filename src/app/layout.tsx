// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "SoFi インサイトハブ — 業績・決算ダッシュボード",
  description:
    "SoFi Technologies の業績・決算・主要指標・IR資料・投資家情報をひと目で確認できる独立系ダッシュボード。",
  keywords: [
    "SoFi",
    "SoFi Technologies",
    "SOFI",
    "SoFi 決算",
    "SoFi 株価",
    "SoFi 投資家情報",
    "フィンテック",
    "SoFi 投資",
  ],
  openGraph: {
    title: "SoFi インサイトハブ — 業績・決算ダッシュボード",
    description:
      "SoFi Technologies の業績・決算・投資家向け情報をまとめたダッシュボード。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="dark">
      <body className="min-h-screen bg-[#070b15]">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
