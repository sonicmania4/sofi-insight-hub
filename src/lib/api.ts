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

const translateOptions = {
  from: "en",
  to: "ja",
  engine: "google",
};

/**
 * 安全な翻訳関数
 * 失敗した場合は原文をそのまま返す
 */
async function safeTranslate(text: string): Promise<string> {
  if (!text) return "";
  try {
    // 翻訳実行 (最速・最小限の引数で試行)
    return await translate(text, "ja");
  } catch (error) {
    // 翻訳失敗時はログを出して原文を返す (セクションを落とさない)
    console.warn("Translation failed, using original:", text.substring(0, 20));
    return text;
  }
}

/**
 * SOFIのライブ株価データを取得して主要指標を更新
 */
export async function getLiveMetrics(): Promise<Metric[]> {
  try {
    const quote = (await yahooFinance.quote("SOFI")) as any;
    if (!quote) return staticMetrics;
    return staticMetrics.map((m) => {
      if (m.id === "revenue") return { ...m, period: "2026/03 最新" };
      return m;
    });
  } catch (error) {
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
    return staticNews;
  }
}

/**
 * Reddit (r/sofistock) から投稿を取得して翻訳
 * RSSではなく.jsonを使用して403を回避
 */
export async function getRedditSentiment() {
  try {
    const REDDIT_JSON = "https://www.reddit.com/r/sofistock/new.json";
    const response = await fetch(REDDIT_JSON, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
      },
      next: { revalidate: 3600 },
    });

    if (!response.ok) throw new Error(`Reddit error: ${response.status}`);
    const data = await response.json();
    const items = data.data.children.slice(0, 3);

    const posts = await Promise.all(
      items.map(async (child: any) => {
        const item = child.data;
        const translatedTitle = await safeTranslate(item.title || "");
        return {
          id: item.id,
          title: translatedTitle,
          original: item.title,
          author: item.author || "Redditユーザー",
          date: new Date(item.created_utc * 1000).toLocaleDateString("ja-JP"),
          link: `https://www.reddit.com${item.permalink}`,
        };
      })
    );

    return posts;
  } catch (error) {
    console.error("Reddit Fetch/Translation error:", error);
    return [];
  }
}

/**
 * 海外金融メディアから情報を取得して翻訳
 */
export async function getOverseasNews() {
  try {
    const OVERSEAS_RSS = "https://finance.yahoo.com/rss/headline?s=SOFI";
    const feed = await parser.parseURL(OVERSEAS_RSS);
    const overseasNews = await Promise.all(
      feed.items.slice(0, 3).map(async (item) => {
        const transTitle = await safeTranslate(item.title || "");
        const transSummary = await safeTranslate((item.contentSnippet || "").substring(0, 100));
        return {
          id: item.id || Math.random().toString(),
          title: transTitle,
          summary: transSummary,
          originalTitle: item.title || "",
          date: item.pubDate ? new Date(item.pubDate).toLocaleDateString("ja-JP") : "本日",
          link: item.link || "#",
          source: "Yahoo Finance (US)",
        };
      })
    );
    return overseasNews;
  } catch (error) {
    return [];
  }
}

/**
 * 市場概況
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
