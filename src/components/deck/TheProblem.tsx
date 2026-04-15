import DeckSection from "./DeckSection";
import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "./StaggerChildren";
import { Trash2, FlaskConical, Recycle, TrendingUp } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const problems = [
  { icon: Trash2, stat: 8, suffix: "M tons", title: "Annual Textile Waste", desc: "India generates over 8 million tons of textile waste annually, and most of it ends up in landfills or is incinerated.", color: "text-deck-coral" },
  { icon: Recycle, stat: 41, suffix: "%", title: "Polyester Content", desc: "41% of all textiles produced globally are polyester, the single largest fiber category.", color: "text-secondary" },
  { icon: FlaskConical, stat: 86, suffix: "%", title: "Virgin Polyester", desc: "86% of all polyester is still made from virgin petroleum, resulting in a massive carbon footprint.", color: "text-deck-coral" },
  { icon: TrendingUp, stat: 10, suffix: "M ton", title: "rPET Shortage by 2030", desc: "The recycled polyester market faces a projected 10M ton supply gap by 2030.", color: "text-secondary" },
];

export default function TheProblem() {
  return (
    <DeckSection id="the-problem" bg="muted">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-6">
          <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-3">The Problem</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">India's Textile Waste Crisis</h2>
          <p className="text-sm text-muted-foreground mt-3 max-w-2xl mx-auto">
            The global textile industry produces massive waste with no scalable recycling solution. Until now.
          </p>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.1}>
          {problems.map((p) => (
            <StaggerItem key={p.title}>
              <div className="deck-card p-6 h-full flex flex-col">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: [0.8, 1.15, 1], opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <p.icon className={`w-6 h-6 ${p.color} mb-3`} />
                </motion.div>
                <AnimatedCounter value={p.stat} suffix={p.suffix} decimals={0} className="deck-stat text-2xl text-primary" />
                <h3 className="text-sm font-bold text-foreground mt-2 mb-2">{p.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">{p.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <motion.div
          className="mt-8 deck-card-glass p-6 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-sm text-foreground font-medium">
            The industry needs a <strong>true textile-to-textile solution</strong>, not more bottle-to-fiber greenwashing.
          </p>
          <p className="text-xs text-muted-foreground mt-2">Less than 1% of textile waste is currently recycled back into new textiles.</p>
        </motion.div>
      </div>
    </DeckSection>
  );
}
