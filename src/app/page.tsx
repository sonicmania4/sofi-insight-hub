// src/app/page.tsx
import Hero from "@/components/Hero";
import CompanyOverview from "@/components/CompanyOverview";
import KeyMetrics from "@/components/KeyMetrics";
import EarningsHighlights from "@/components/EarningsHighlights";
import IRDocuments from "@/components/IRDocuments";
import NewsSection from "@/components/NewsSection";
import BusinessSegments from "@/components/BusinessSegments";
import InvestorNotes from "@/components/InvestorNotes";
import AffiliateSection from "@/components/AffiliateSection";
import OverseasSentiment from "@/components/OverseasSentiment";
import Footer from "@/components/Footer";
import { getLiveMetrics, getLiveNews, getMarketSummary, getRedditSentiment, getOverseasNews } from "@/lib/api";

// 1時間ごとにページを再検証（ISR）
export const revalidate = 3600;

export default async function HomePage() {
  // サーバーサイドでライブデータをフェッチ
  const [liveMetrics, liveNews, market, redditPosts, overseasNews] = await Promise.all([
    getLiveMetrics(),
    getLiveNews(),
    getMarketSummary(),
    getRedditSentiment(),
    getOverseasNews(),
  ]);

  return (
    <>
      <Hero />
      
      {/* ライブ・マーケット・ステータスバー */}
      <div className="bg-slate-950/40 border-y border-slate-800/60 backdrop-blur-sm sticky top-14 z-40 overflow-x-auto">
        <div className="max-w-6xl mx-auto px-6 h-10 flex items-center gap-6 whitespace-nowrap text-[10px] md:text-xs">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-slate-400 font-semibold tracking-wider uppercase">Live Market</span>
          </div>
          <div className="flex gap-4 items-center">
            <span className="text-slate-500">SOFI株価:</span>
            <span className="text-white font-bold">${market.price}</span>
            <span className={`font-bold ${parseFloat(market.change) >= 0 ? "text-emerald-400" : "text-rose-400"}`}>
              ({parseFloat(market.change) >= 0 ? "+" : ""}{market.change}%)
            </span>
          </div>
          <div className="h-3 w-px bg-slate-800" />
          <div className="flex gap-2 text-slate-500">
            <span>時価総額:</span>
            <span className="text-slate-300 font-medium">{market.marketCap}</span>
          </div>
          <div className="ml-auto text-slate-600 italic">
            最終更新: {market.lastUpdated}
          </div>
        </div>
      </div>

      <CompanyOverview />
      <KeyMetrics metrics={liveMetrics} />
      <EarningsHighlights />
      <IRDocuments />
      <NewsSection news={liveNews} />
      <OverseasSentiment redditPosts={redditPosts} overseasNews={overseasNews} />
      <BusinessSegments />
      <InvestorNotes />
      <AffiliateSection />
      <Footer />
    </>
  );
}
