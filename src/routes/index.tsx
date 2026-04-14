import { createFileRoute } from "@tanstack/react-router";
import HeroCover from "@/components/deck/HeroCover";
import ExecutiveSummary from "@/components/deck/ExecutiveSummary";
import WhyTex2Tex from "@/components/deck/WhyTex2Tex";
import TheProblem from "@/components/deck/TheProblem";
import WhatIsTex2Tex from "@/components/deck/WhatIsTex2Tex";
import MarketOpportunity from "@/components/deck/MarketOpportunity";
import KeyActivities from "@/components/deck/KeyActivities";
import InvestmentOverview from "@/components/deck/InvestmentOverview";
import StickyNav from "@/components/deck/StickyNav";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Tex2Tex® — India Greenfield Polyester Recycling Facility" },
      { name: "description", content: "Investor deck for Tex2Tex® by Earth Protex™ — the world's first large-scale textile-to-textile polyester recycling facility in India." },
      { property: "og:title", content: "Tex2Tex® — India Greenfield Polyester Recycling Facility" },
      { property: "og:description", content: "30,000T/yr textile-to-textile recycling. Cost competitive. Lowest impact polyester. 100% from textile waste." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <StickyNav />
      <HeroCover />
      <ExecutiveSummary />
      <WhyTex2Tex />
      <TheProblem />
      <WhatIsTex2Tex />
      <MarketOpportunity />
      <KeyActivities />
      <InvestmentOverview />
    </div>
  );
}
