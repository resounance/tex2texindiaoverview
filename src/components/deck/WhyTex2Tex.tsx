import DeckSection from "./DeckSection";
import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "./StaggerChildren";
import { Factory, DollarSign, Leaf, Recycle } from "lucide-react";

const advantages = [
  {
    icon: Factory,
    title: "30,000T/yr Large Scale Production",
    desc: "India's first dedicated large-scale textile-to-textile polyester recycling facility, achieving economies of scale and reliable supply for global brands.",
    color: "text-deck-coral",
    bg: "bg-deck-coral/10",
  },
  {
    icon: DollarSign,
    title: "Cost Competitive with Commodity Polyester",
    desc: "Our TMR™ process delivers recycled polyester at price parity with virgin commodity polyester, eliminating the green premium barrier.",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
  {
    icon: Leaf,
    title: "Lowest Impact Polyester in the Marketplace",
    desc: "Independently verified by 3rd party Life Cycle Assessment (LCA). Our Tex2Tex® pellets have the lowest environmental footprint of any polyester on the market.",
    color: "text-deck-coral",
    bg: "bg-deck-coral/10",
  },
  {
    icon: Recycle,
    title: "Closing the Loop: 100% from Textile Waste",
    desc: "No virgin material or bottle flake inputs. 100% sourced from post-consumer and post-industrial textile waste, enabling true circular textile-to-textile recycling.",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
];

export default function WhyTex2Tex() {
  return (
    <DeckSection id="why-tex2tex">
      <div className="text-center mb-6">
        <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-3">Why Tex2Tex®</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Competitive Advantages</h2>
      </div>
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto" staggerDelay={0.1}>
        {advantages.map((a, i) => (
          <StaggerItem key={a.title} direction={i % 2 === 0 ? "left" : "right"}>
            <motion.div
              className="deck-card p-8 flex gap-5 h-full"
              whileHover={{ y: -3, boxShadow: "0 8px 30px -4px oklch(0.2 0.01 250 / 0.12)" }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className={`w-12 h-12 rounded-lg ${a.bg} flex items-center justify-center shrink-0`}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
              >
                <a.icon className={`w-6 h-6 ${a.color}`} />
              </motion.div>
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-1">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </DeckSection>
  );
}
