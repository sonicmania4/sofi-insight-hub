// src/components/AffiliateSection.tsx
// アフィリエイト広告セクション

export default function AffiliateSection() {
  return (
    <section className="section-container bg-slate-900/60">
      <div className="max-w-6xl mx-auto">
        {/* セクションラベル */}
        <p className="text-center text-xs text-slate-600 mb-8 tracking-widest uppercase">
          — スポンサード / Sponsored —
        </p>

        <div className="flex flex-col items-center gap-10">

          {/* moomoo証券 — メインバナー（テキストリンク） */}
          <div className="w-full max-w-2xl glass-card p-6 flex flex-col items-center gap-4 border-indigo-500/20 bg-gradient-to-br from-indigo-600/10 to-cyan-600/5">
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest">おすすめ証券口座</p>
            <div className="text-center">
              <p className="text-white font-bold text-lg mb-1">moomoo証券</p>
              <p className="text-slate-400 text-sm mb-4">米国株・ETFをリアルタイム価格で売買。個人投資家に人気の高機能トレードアプリ。</p>
              <a
                href="https://j.jp.moomoo.com/0ACr1m"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-bold transition-all duration-200 shadow-lg shadow-indigo-500/20 hover:-translate-y-0.5 text-sm"
              >
                moomoo証券を詳しく見る →
              </a>
            </div>
          </div>

          {/* バナー広告エリア（横並び） */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 flex-wrap">

            {/* A8バナー 468x60 */}
            <div className="flex flex-col items-center gap-1">
              <a
                href="https://px.a8.net/svt/ejp?a8mat=4AZMKI+F7QTBM+1WP2+15Q22P"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  width={468}
                  height={60}
                  alt="スポンサー広告"
                  src="https://www22.a8.net/svt/bgt?aid=260323074920&wid=001&eno=01&mid=s00000008903007008000&mc=1"
                  className="rounded-lg max-w-full"
                />
              </a>
              {/* トラッキングピクセル */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                width={1}
                height={1}
                src="https://www10.a8.net/0.gif?a8mat=4AZMKI+F7QTBM+1WP2+15Q22P"
                alt=""
              />
            </div>

            {/* A8バナー 300x250 */}
            <div className="flex flex-col items-center gap-1">
              <a
                href="https://px.a8.net/svt/ejp?a8mat=4AZMKI+F6JY42+5ULO+5YZ75"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  width={300}
                  height={250}
                  alt="スポンサー広告"
                  src="https://www23.a8.net/svt/bgt?aid=260323074918&wid=001&eno=01&mid=s00000027294001003000&mc=1"
                  className="rounded-lg"
                />
              </a>
              {/* トラッキングピクセル */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                width={1}
                height={1}
                src="https://www16.a8.net/0.gif?a8mat=4AZMKI+F6JY42+5ULO+5YZ75"
                alt=""
              />
            </div>

          </div>

          {/* A8テキストリンク（20,000ポイント） */}
          <div className="glass-card p-4 text-center border-amber-500/20 bg-amber-500/5">
            <p className="text-amber-300 text-sm font-bold mb-1">🎁 期間限定キャンペーン</p>
            <a
              href="https://px.a8.net/svt/ejp?a8mat=4AZHWD+CONHRM+4TIO+626XU"
              rel="nofollow noopener noreferrer"
              target="_blank"
              className="text-amber-400 hover:text-amber-300 text-base font-extrabold underline underline-offset-2 transition-colors"
            >
              20,000ポイントプレゼント！
            </a>
            {/* トラッキングピクセル */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              width={1}
              height={1}
              src="https://www10.a8.net/0.gif?a8mat=4AZHWD+CONHRM+4TIO+626XU"
              alt=""
            />
          </div>

        </div>

        {/* 広告注記 */}
        <p className="text-center text-xs text-slate-700 mt-8">
          ※上記はアフィリエイト広告を含みます。投資は自己責任でお願いします。
        </p>
      </div>
    </section>
  );
}
