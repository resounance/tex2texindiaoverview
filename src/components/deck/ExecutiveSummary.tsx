import DeckSection from "./DeckSection";
import { motion } from "framer-motion";

export default function ExecutiveSummary() {
  return (
    <DeckSection id="executive-summary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-3">Executive Summary</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
            India Greenfield Polyester<br />Textile-to-Textile Recycling Facility
          </h2>
        </div>

        <motion.div
          className="deck-card-glass p-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-foreground leading-relaxed text-sm mb-6">
            Earth Protex™ is developing a <strong>30,000 ton/year greenfield polyester textile-to-textile recycling facility</strong> in Gujarat, India. Using our proprietary <strong>TMR™ (Thermo-Mechanical Recycling)</strong> technology, we convert post-consumer and post-industrial textile waste into high-quality recycled polyester pellets — suitable for fiber, yarn, and fabric production.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-6">
            <div>
              <span className="text-muted-foreground text-xs uppercase tracking-wider">Location</span>
              <p className="font-medium text-foreground mt-1">Gujarat, India</p>
            </div>
            <div>
              <span className="text-muted-foreground text-xs uppercase tracking-wider">Capacity</span>
              <p className="font-medium text-foreground mt-1">30,000 tons/year</p>
            </div>
            <div>
              <span className="text-muted-foreground text-xs uppercase tracking-wider">Commissioning</span>
              <p className="font-medium text-foreground mt-1">Q4 2026</p>
            </div>
            <div>
              <span className="text-muted-foreground text-xs uppercase tracking-wider">Certifications</span>
              <p className="font-medium text-foreground mt-1">GRS, OEKO-TEX®, ISO 14001</p>
            </div>
          </div>
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">TMR™ Output</p>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center px-4 pt-2 pb-1 rounded-full bg-primary text-primary-foreground font-semibold text-xs">
                Textile Waste
              </span>
              <span className="text-muted-foreground text-lg">→</span>
              <span className="deck-badge-teal">rPET Pellets</span>
              <span className="deck-badge-teal">Fiber</span>
              <span className="deck-badge-teal">Yarn</span>
            </div>
          </div>
        </motion.div>
      </div>
    </DeckSection>
  );
}
