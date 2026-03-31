// src/components/IRDocuments.tsx
import { irDocuments, IRDocument } from "@/data/irDocuments";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";

const typeVariant: Record<IRDocument["type"], "indigo" | "cyan" | "green" | "amber" | "rose"> = {
  年次報告書: "indigo",
  四半期報告書: "cyan",
  決算プレゼン: "green",
  プレスリリース: "amber",
  委任状: "rose",
};

const typeIcon: Record<IRDocument["type"], string> = {
  年次報告書: "📋",
  四半期報告書: "📄",
  決算プレゼン: "📊",
  プレスリリース: "📰",
  委任状: "✉️",
};

export default function IRDocuments() {
  return (
    <section id="ir" className="section-container bg-slate-900/40">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="IR資料"
          accentColor="from-purple-400 to-indigo-400"
          subtitle="SoFi IRページからの主要な開示資料・プレゼン。"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {irDocuments.map((doc) => (
            <a
              key={doc.id}
              href={doc.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-5 hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-200 group block"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl">{typeIcon[doc.type]}</span>
                <div className="flex-1 min-w-0">
                  <Badge label={doc.type} variant={typeVariant[doc.type]} />
                  <p className="text-xs text-slate-500 mt-1">{doc.period} · {doc.date}</p>
                </div>
              </div>
              <h3 className="text-white font-semibold text-sm leading-snug mb-2 group-hover:text-indigo-300 transition-colors">
                {doc.title}
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">{doc.description}</p>
              <div className="mt-3 text-indigo-400 text-xs font-medium flex items-center gap-1">
                資料を見る
                <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </div>
            </a>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-slate-600">
          すべての資料は{" "}
          <a
            href="https://investors.sofi.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 hover:underline"
          >
            investors.sofi.com
          </a>
          {" "}でご確認ください。
        </p>
      </div>
    </section>
  );
}
