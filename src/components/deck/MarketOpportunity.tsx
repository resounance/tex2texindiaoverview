import DeckSection from "./DeckSection";
import AnimatedCounter from "./AnimatedCounter";
import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "./StaggerChildren";

const bars = [
  { label: "2021 Demand", value: 8.8, max: 23, color: "bg-deck-coral" },
  { label: "2021 Supply", value: 9.4, max: 23, color: "bg-secondary" },
  { label: "2026 Demand", value: 23, max: 23, color: "bg-deck-coral" },
  { label: "2026 Supply", value: 13, max: 23, color: "bg-secondary" },
];

export default function MarketOpportunity() {
  return (
    <DeckSection id="market" bg="muted">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-6">
          <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-3">Market Opportunity</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Polyester Market Opportunity</h2>
        </div>

        <StaggerContainer className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 mb-8" staggerDelay={0.1}>
          {[
            { value: 86, suffix: "%", label: "Virgin Polyester", sub: "Current market share" },
            { value: 14, suffix: "%", label: "Bottle rPET", sub: "Existing recycled source" },
            { value: 99, suffix: "%", label: "From Bottles", sub: "Current rPET sourcing" },
            { value: 10, suffix: "M", label: "Ton Shortage", sub: "Projected gap by 2030" },
          ].map((s) => (
            <StaggerItem key={s.label}>
              <div className="deck-card p-4 sm:p-6 text-center">
                <AnimatedCounter value={s.value} suffix={s.suffix} className="deck-stat text-2xl sm:text-3xl md:text-4xl text-primary" />
                <p className="font-semibold text-foreground mt-2 text-xs sm:text-sm">{s.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.sub}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="deck-card p-4 sm:p-8 max-w-3xl mx-auto mb-8">
          <h3 className="font-semibold text-foreground mb-4 sm:mb-6 text-xs sm:text-sm">rPET Demand vs Supply (Million Tons)</h3>
          <div className="space-y-3">
            {bars.map((b, i) => (
              <div key={b.label} className="flex items-center gap-2 sm:gap-4">
                <span className="text-[10px] sm:text-xs font-medium text-foreground w-20 sm:w-28 shrink-0 text-right">{b.label}</span>
                <div className="flex-1 h-7 bg-muted/60 rounded overflow-hidden">
                  <motion.div
                    className={`h-full rounded ${b.color} flex items-center justify-end pr-3`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(b.value / b.max) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <span className="text-[10px] font-mono font-semibold text-primary-foreground">{b.value}M</span>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-6 mt-4 justify-center">
            <span className="flex items-center gap-2 text-xs text-muted-foreground"><span className="w-3 h-3 rounded bg-deck-coral" /> Demand</span>
            <span className="flex items-center gap-2 text-xs text-muted-foreground"><span className="w-3 h-3 rounded bg-secondary" /> Supply</span>
          </div>
        </div>

        <div className="deck-card-elevated p-8 text-center max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <AnimatedCounter value={153} prefix="$" suffix="B" className="deck-stat text-3xl text-accent" />
              <p className="text-sm text-muted-foreground mt-1">Polyester Market 2030</p>
            </div>
            <div>
              <AnimatedCounter value={137.7} prefix="$" suffix="B" decimals={1} className="deck-stat text-3xl text-accent" />
              <p className="text-sm text-muted-foreground mt-1">Addressable Market</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-6 italic">"The rPET market is severely <p className="text-xs text-muted-foreground mt-6 italic">"The rPET market is severely undersupplied. Brands are desperate for non-bottle sources."</p> are desperate for non-bottle sources."</p>
        </div>
      </div>
    </DeckSection>
  );
}
