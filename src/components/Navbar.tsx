// src/components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-base font-extrabold">
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              SoFi
            </span>
            <span className="text-white"> インサイトハブ</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-400">
          <a href="#overview" className="hover:text-white transition-colors">企業概要</a>
          <a href="#metrics" className="hover:text-white transition-colors">主要指標</a>
          <a href="#earnings" className="hover:text-white transition-colors">決算</a>
          <a href="#ir" className="hover:text-white transition-colors">IR資料</a>
          <a href="#news" className="hover:text-white transition-colors">ニュース</a>
          <a href="#investor-notes" className="hover:text-white transition-colors">投資メモ</a>
        </nav>

        <a
          href="https://investors.sofi.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs px-3 py-1.5 rounded-lg border border-indigo-500/40 text-indigo-400 hover:bg-indigo-500/10 transition-colors hidden md:block"
        >
          公式IR →
        </a>
      </div>
    </header>
  );
}
