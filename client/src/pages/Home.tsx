import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import InvestmentThesis from "@/components/InvestmentThesis";
import TrackRecord from "@/components/TrackRecord";
import Team from "@/components/Team";
import Portfolio from "@/components/Portfolio";
import FundDetails from "@/components/FundDetails";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
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
