// src/components/Hero.tsx
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.15)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(34,211,238,0.08)_0%,_transparent_60%)]" />

      {/* グリッドパターン */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* タグ */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          独立系・個人投資家向けダッシュボード
        </div>

        {/* タイトル */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            SoFi
          </span>
          <span className="text-white"> インサイトハブ</span>
        </h1>

        {/* サブタイトル */}
        <p className="text-xl md:text-2xl text-slate-300 font-medium mb-2">
          SoFi Technologies — 業績・決算・投資家向け情報まとめ
        </p>
        <p className="text-base md:text-lg text-slate-500 mb-10">
          SoFiの業績・決算・注目情報をひと目で確認できるダッシュボード
        </p>

        {/* CTAボタン */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#metrics"
            className="px-7 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-semibold transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
          >
            主要指標を見る →
          </a>
          <a
            href="#earnings"
            className="px-7 py-3 rounded-xl border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold transition-all duration-200 hover:-translate-y-0.5"
          >
            決算ハイライト
          </a>
        </div>

        {/* スクロール */}
        <div className="mt-16 flex flex-col items-center gap-2 text-slate-600 text-xs">
          <span>スクロール</span>
          <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent animate-bounce" />
        </div>
      </div>
    </section>
  );
}
