// src/components/OverseasSentiment.tsx
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";

interface RedditPost {
  id: string;
  title: string;
  original: string;
  author: string;
  date: string;
  link: string;
}

interface OverseasNewsItem {
  id: string;
  title: string;
  summary: string;
  originalTitle: string;
  date: string;
  link: string;
  source: string;
}

interface OverseasSentimentProps {
  redditPosts: RedditPost[];
  overseasNews: OverseasNewsItem[];
}

export default function OverseasSentiment({
  redditPosts = [],
  overseasNews = [],
}: OverseasSentimentProps) {
  return (
    <section id="overseas" className="section-container bg-slate-900/40">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="海外の反応 / Reddit"
          accentColor="from-orange-400 to-rose-400"
          subtitle="米国個人投資家（r/sofistock）の声や、海外メディアの情報をリアルタイム翻訳。"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Reddit セクション */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">💬</span>
              <h3 className="text-lg font-bold text-white">Reddit (r/sofistock)</h3>
              <Badge label="翻訳" variant="amber" />
            </div>

            <div className="space-y-3">
              {redditPosts.length > 0 ? (
                redditPosts.map((post) => (
                  <div
                    key={post.id}
                    className="glass-card p-3 border-l-2 border-l-orange-500/50 hover:bg-slate-800/40 transition-colors flex flex-col justify-center"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[10px] text-slate-500 font-mono">
                        {post.date}
                      </span>
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] text-orange-400 hover:underline"
                      >
                        元記事 →
                      </a>
                    </div>
                    <p className="text-sm text-white font-bold leading-snug line-clamp-2">
                      {post.title}
                    </p>
                  </div>
                ))
              ) : (
                <div className="text-xs text-slate-600 text-center py-6 glass-card">
                  一時的に利用不可です。
                </div>
              )}
            </div>
          </div>

          {/* 海外ニュース セクション */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">🌍</span>
              <h3 className="text-lg font-bold text-white">海外金融メディア</h3>
              <Badge label="翻訳" variant="cyan" />
            </div>

            <div className="space-y-3">
              {overseasNews.length > 0 ? (
                overseasNews.map((news) => (
                  <div
                    key={news.id}
                    className="glass-card p-3 border-l-2 border-l-cyan-500/50 hover:bg-slate-800/40 transition-colors flex flex-col justify-center"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[10px] text-slate-400 font-bold">
                        {news.source} · {news.date}
                      </span>
                      <a
                        href={news.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] text-cyan-400 hover:underline"
                      >
                        元記事 →
                      </a>
                    </div>
                    <h4 className="text-sm text-white font-bold leading-snug line-clamp-2">
                      {news.title}
                    </h4>
                  </div>
                ))
              ) : (
                <div className="text-xs text-slate-600 text-center py-6 glass-card">
                  一時的に利用不可です。
                </div>
              )}
            </div>
          </div>
        </div>

        <p className="mt-6 text-[10px] text-slate-600 text-center">
          ※自動翻訳を使用しているため、誤訳や不自然な日本語が含まれる場合があります。
        </p>
      </div>
    </section>
  );
}
