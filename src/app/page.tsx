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
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CompanyOverview />
      <KeyMetrics />
      <EarningsHighlights />
      <IRDocuments />
      <NewsSection />
      <BusinessSegments />
      <InvestorNotes />
      <AffiliateSection />
      <Footer />
    </>
  );
}
