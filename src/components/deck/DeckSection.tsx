import { motion } from "framer-motion";
import { ReactNode } from "react";

interface DeckSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  fullHeight?: boolean;
  bg?: "default" | "muted" | "charcoal" | "primary" | "teal";
  revealDirection?: "up" | "left" | "right";
}

const bgMap = {
  default: "bg-background",
  muted: "bg-muted/50",
  charcoal: "bg-deck-charcoal text-white",
  primary: "bg-primary text-primary-foreground",
  teal: "bg-secondary text-secondary-foreground",
};

const getInitial = (dir: "up" | "left" | "right") => {
  if (dir === "left") return { opacity: 0, x: -24 };
  if (dir === "right") return { opacity: 0, x: 24 };
  return { opacity: 0, y: 18 };
};

const getAnimate = (dir: "up" | "left" | "right") => {
  if (dir === "left" || dir === "right") return { opacity: 1, x: 0 };
  return { opacity: 1, y: 0 };
};

export default function DeckSection({ children, className = "", id, fullHeight = false, bg = "default", revealDirection = "up" }: DeckSectionProps) {
  return (
    <motion.section
      id={id}
      data-slide-index
      initial={getInitial(revealDirection)}
      whileInView={getAnimate(revealDirection)}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`${fullHeight ? "deck-section" : "deck-section-short"} ${bgMap[bg]} ${className}`}
    >
      <div className="deck-container w-full">{children}</div>
    </motion.section>
  );
}
