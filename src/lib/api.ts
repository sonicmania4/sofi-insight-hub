// src/lib/api.ts
import yahooFinance from "yahoo-finance2";
import Parser from "rss-parser";
import translate from "translate";
import { Metric, metrics as staticMetrics } from "@/data/metrics";
import { NewsItem, news as staticNews } from "@/data/news";

const parser = new Parser({
  headers: {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
  },
});

// 翻訳の設定
const translateOptions = {
  from: "en",
  to: "ja",
  engine: "google",
};

/**
 * SOFIのライブ株価データを取得して主要指標を更新
 */
export async function getLiveMetrics(): Promise<Metric[]> {
  try {
    const quote = (await yahooFinance.quote("SOFI")) as any;
    if (!quote) return staticMetrics;

    const price = quote.regularMarketPrice ?? 0;
    const changePercent = quote.regularMarketChangePercent ?? 0;
    const marketCap = quote.marketCap ?? 0;
    const formattedMarketCap = `$${(marketCap / 1e9).toFixed(2)}B`;

    return staticMetrics.map((m) => {
      if (m.id === "revenue") return { ...m, period: "2026/03 最新" };
      return m;
    });
  } catch (error) {
    console.error("Error fetching live metrics:", error);
    return staticMetrics;
  }
}

/**
 * Google News RSSから最新のSoFiニュースを取得
 */
export async function getLiveNews(): Promise<NewsItem[]> {
  try {
    const FEED_URL = "https://news.google.com/rss/search?q=SoFi+Technologies+when:7d&hl=ja&gl=JP&ceid=JP:ja";
    const feed = await parser.parseURL(FEED_URL);

    const liveNews: NewsItem[] = feed.items.slice(0, 5).map((item, index) => ({
      id: `live-${index}`,
      title: item.title ?? "無題のニュース",
      summary: (item.contentSnippet || item.title || "").substring(0, 150) + "...",
      date: item.pubDate ? new Date(item.pubDate).toLocaleDateString("ja-JP") : "本日",
      category: "市場",
      href: item.link ?? "#",
      isImportant: index === 0,
    }));

    const importantStaticNews = staticNews.filter((n) => n.isImportant);
    return [...liveNews, ...importantStaticNews].slice(0, 10);
  } catch (error) {
    console.error("Error fetching live news:", error);
    return staticNews;
  }
}

/**
 * Reddit (r/sofistock) から投稿を取得して翻訳
 */
export async function getRedditSentiment() {
  try {
    const REDDIT_RSS = "https://www.reddit.com/r/sofistock/.rss";
    const feed = await parser.parseURL(REDDIT_RSS);

    // 最新3件を翻訳
    const posts = await Promise.all(
      feed.items.slice(0, 3).map(async (item) => {
        try {
          const originalTitle = item.title || "";
          // 翻訳を実行
          const translatedTitle = await translate(originalTitle, translateOptions);
          
          return {
            id: item.id || Math.random().toString(),
            title: translatedTitle,
            original: originalTitle,
            author: item.author || "Redditユーザー",
            date: item.pubDate ? new Date(item.pubDate).toLocaleDateString("ja-JP") : "最近",
            link: item.link || "#",
          };
        } catch (e) {
          return {
            id: item.id || Math.random().toString(),
            title: item.title || "翻訳エラー",
            original: item.title || "",
            author: item.author || "Redditユーザー",
            date: "最近",
            link: item.link || "#",
          };
        }
      })
    );

    return posts;
  } catch (error) {
    console.error("Error fetching Reddit sentiment:", error);
    return [];
  }
}

/**
 * 海外金融メディア (Yahoo Finance English 等) から情報を取得して翻訳
 */
export async function getOverseasNews() {
  try {
    // Yahoo Finance US の SoFi ニュース RSS
    const OVERSEAS_RSS = "https://finance.yahoo.com/rss/headline?s=SOFI";
    const feed = await parser.parseURL(OVERSEAS_RSS);

    const overseasNews = await Promise.all(
      feed.items.slice(0, 3).map(async (item) => {
        try {
          const transTitle = await translate(item.title || "", translateOptions);
          const transSummary = await translate((item.contentSnippet || "").substring(0, 100), translateOptions);
          
          return {
            id: item.id || Math.random().toString(),
            title: transTitle,
            summary: transSummary,
            originalTitle: item.title || "",
            date: item.pubDate ? new Date(item.pubDate).toLocaleDateString("ja-JP") : "本日",
            link: item.link || "#",
            source: "Yahoo Finance (US)",
          };
        } catch (e) {
          return null;
        }
      })
    );

    return overseasNews.filter((n): n is NonNullable<typeof n> => n !== null);
  } catch (error) {
    console.error("Error fetching overseas news:", error);
    return [];
  }
}

/**
 * 市場概況（株価、前日比、時価総額）
 */
export async function getMarketSummary() {
  try {
    const quote = (await yahooFinance.quote("SOFI")) as any;
    return {
      price: quote?.regularMarketPrice?.toFixed(2) ?? "0.00",
      change: quote?.regularMarketChangePercent?.toFixed(2) ?? "0.00",
      marketCap: quote?.marketCap ? `$${(quote.marketCap / 1e9).toFixed(2)}B` : "N/A",
      lastUpdated: new Date().toLocaleString("ja-JP"),
    };
  } catch (error) {
    return { price: "---", change: "0.00", marketCap: "---", lastUpdated: "取得失敗" };
  }
}
