import DeckSection from "./DeckSection";
import AnimatedCounter from "./AnimatedCounter";
import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "./StaggerChildren";

const stats = [
  { value: 10, prefix: "$", suffix: "M", label: "Total Project Cost" },
  { value: 7.3, prefix: "$", suffix: "M", label: "Total Funding" },
  { value: 15, prefix: "$", suffix: "M", label: "Pre-Money Valuation" },
  { value: 3.5, prefix: "$", suffix: "M", label: "Series A" },
  { value: 20, prefix: "", suffix: "%", label: "Outstanding Shares" },
];

const allocation = [
  { label: "TMR™ Lines", value: "~$4.6M" },
  { label: "Facilities & Land", value: "~$1.5M" },
  { label: "Tech Center & QC", value: "~$0.5M" },
  { label: "OPEX & Working Capital", value: "~$3.4M" },
];

const terms = [
  { label: "Instrument", value: "Equity (Preferred Shares)" },
  { label: "Outstanding Shares", value: "20%" },
  { label: "Minimum Ticket", value: "$250,000" },
  { label: "Tranches", value: "2 tranches" },
  { label: "Tranche 1 Status", value: "Tranche 1 is already finished with a global workwear brand.", bold: true },
  { label: "Pre-Money Valuation", value: "$15M" },
  { label: "Investor Rights", value: "Board seat, anti-dilution, pro-rata" },
  { label: "Term Sheet", value: "Available upon request" },
];

export default function InvestmentOverview() {
  return (
    <DeckSection id="investment" className="glass-section-bg">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-6">
          <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-3">Investment</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Investment Overview</h2>
          <p className="text-sm text-muted-foreground mt-2 max-w-2xl mx-auto">Series A equity round to fund the construction and commissioning of our Gujarat facility.</p>
        </div>

        <StaggerContainer className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-5 mb-8" staggerDelay={0.1}>
          {stats.map((s) => (
            <StaggerItem key={s.label}>
              <div className="deck-card-glass-stat p-4 sm:p-6 text-center">
                <AnimatedCounter value={s.value} prefix={s.prefix} suffix={s.suffix} decimals={s.value % 1 !== 0 ? 1 : 0} className="deck-stat text-xl sm:text-2xl text-primary" />
                <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <motion.div className="deck-card-glass p-6 max-w-2xl mx-auto mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
          <h3 className="font-semibold text-foreground mb-4 text-sm">Capital Allocation</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            {allocation.map((a) => (
              <div key={a.label} className="flex flex-col">
                <span className="text-muted-foreground text-xs uppercase tracking-wider">{a.label}</span>
                <span className="font-mono font-medium text-foreground mt-1">{a.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="deck-card-glass p-8 max-w-3xl mx-auto mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
          <h3 className="font-semibold text-foreground mb-5">Terms</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            {terms.map((item) => (
              <div key={item.label} className="flex flex-col">
                <span className="text-muted-foreground text-xs uppercase tracking-wider">{item.label}</span>
                <span className={`${item.bold ? "font-bold" : "font-medium"} text-foreground mt-1`}>{item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </DeckSection>
  );
}
