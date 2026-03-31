// src/components/Footer.tsx
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="border-t border-slate-800 bg-slate-950/80">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* ロゴ行 */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div>
            <h2 className="text-xl font-extrabold">
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                SoFi
              </span>
              <span className="text-white"> インサイトハブ</span>
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              独立系・個人投資家向けダッシュボード
            </p>
          </div>

          <nav className="flex flex-wrap gap-5 text-sm text-slate-500">
            <a href="#overview" className="hover:text-slate-300 transition-colors">企業概要</a>
            <a href="#metrics" className="hover:text-slate-300 transition-colors">主要指標</a>
            <a href="#earnings" className="hover:text-slate-300 transition-colors">決算</a>
            <a href="#ir" className="hover:text-slate-300 transition-colors">IR資料</a>
            <a href="#news" className="hover:text-slate-300 transition-colors">ニュース</a>
            <a href="#investor-notes" className="hover:text-slate-300 transition-colors">投資メモ</a>
          </nav>
        </div>

        {/* 免責事項 */}
        <div className="border border-amber-500/20 bg-amber-500/5 rounded-xl p-4 mb-6">
          <p className="text-xs text-amber-300/80 leading-relaxed">
            <strong>【免責事項】</strong>
            本サイトはSoFi Technologies, Inc.の公式IRサイトではなく、独立した情報まとめダッシュボードです。
            掲載情報はあくまで参考情報であり、投資助言を意図するものではありません。
            投資判断の前に必ず公式情報をご確認ください。
            また、本サイトにはアフィリエイト広告が含まれます。
          </p>
        </div>

        {/* ボトムバー */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-slate-600">
          <p>© {year} SoFi インサイトハブ. All rights reserved.</p>
          <div className="flex gap-4">
            <a
              href="https://investors.sofi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-400 transition-colors"
            >
              公式IRサイト →
            </a>
            <a
              href="https://www.sofi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-400 transition-colors"
            >
              SoFi.com →
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
