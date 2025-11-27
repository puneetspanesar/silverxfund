import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import InvestmentThesis from "@/components/InvestmentThesis";
import TrackRecord from "@/components/TrackRecord";
import Team from "@/components/Team";
import Portfolio from "@/components/Portfolio";
import FundDetails from "@/components/FundDetails";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/use-seo";

export default function Home() {
  useSEO({
    title: "SilverX Fund - AI-First Venture Capital",
    description: "SilverX Fund (Silver X) is a $90M AI-first venture capital firm backing India's next generation of deep-tech unicorns. Seed+ to Series A/B investments with $5B+ portfolio value created.",
    keywords: "SilverX Fund, Silver X, SilverX, venture capital India, AI investing, deep tech VC, Hyderabad VC, startup funding, Series A funding, seed investment",
    canonical: "https://silverx.vc/"
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <InvestmentThesis />
        <TrackRecord />
        <Team />
        <Portfolio />
        <FundDetails />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
