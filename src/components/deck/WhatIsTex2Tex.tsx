import DeckSection from "./DeckSection";
import { ArrowRight, ChevronDown, Truck, ScanLine, Scissors, Flame, Sparkles, Filter, CircleDot, type LucideIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const processSteps: { label: string; desc: string; detail: string; icon: LucideIcon; color: string; activeBg: string }[] = [
  { icon: Truck, label: "Collection", desc: "Textile waste sourcing", detail: "Post-consumer and post-industrial textile waste is collected from garment factories, sorting centers, and municipal waste streams across India.", color: "text-deck-coral", activeBg: "bg-deck-coral" },
  { icon: ScanLine, label: "Sorting", desc: "Fiber identification", detail: "Advanced NIR (Near-Infrared) sorting technology identifies polyester-rich textiles, separating them by fiber composition and color for optimal processing.", color: "text-secondary", activeBg: "bg-secondary" },
  { icon: Scissors, label: "Shredding", desc: "Mechanical processing", detail: "Sorted textiles are mechanically shredded into small flakes, removing hardware (buttons, zippers) and non-polyester contaminants.", color: "text-deck-coral", activeBg: "bg-deck-coral" },
  { icon: Flame, label: "Melting", desc: "Thermal processing", detail: "Shredded polyester flakes are melted at controlled temperatures, creating a homogeneous polymer melt ready for purification.", color: "text-secondary", activeBg: "bg-secondary" },
  { icon: Sparkles, label: "Gen II TMR™", desc: "Proprietary purification", detail: "Our proprietary Thermo-Mechanical Recycling technology removes dyes, coatings, and micro-contaminants, producing virgin-equivalent polymer quality.", color: "text-deck-coral", activeBg: "bg-deck-coral" },
  { icon: Filter, label: "Filtration", desc: "Quality assurance", detail: "Multi-stage filtration removes remaining micro-particles, ensuring consistent IV (Intrinsic Viscosity) and color specifications for downstream use.", color: "text-secondary", activeBg: "bg-secondary" },
  { icon: CircleDot, label: "Pelletization", desc: "Final product", detail: "Purified polymer is extruded and pelletized into rPET chips, ready for fiber spinning, yarn production, or direct fabric manufacturing.", color: "text-deck-coral", activeBg: "bg-deck-coral" },
];

export default function WhatIsTex2Tex() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <DeckSection id="what-is-tex2tex">
      <div className="text-center mb-6">
        <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-3">Our Technology</p>
        <h2 className="text-2xl md:text-4xl font-bold text-foreground">
          Tex2Tex<sup className="text-base">®</sup> TMR™ Process
        </h2>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-sm">
          A proprietary 7-step thermo-mechanical recycling process that transforms textile waste into virgin-quality polyester.
        </p>
      </div>

      <div
        className="max-w-5xl mx-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Desktop: horizontal flow */}
        <div className="hidden md:flex flex-wrap justify-center items-start gap-x-1 gap-y-3">
          {processSteps.map((s, i) => (
            <div key={s.label} className="flex items-center gap-1">
              <motion.button
                className={`deck-card px-4 py-3 text-center min-w-[110px] cursor-pointer transition-all duration-300 ${
                  activeStep === i ? "ring-2 ring-secondary/40 shadow-lg shadow-secondary/10" : ""
                }`}
                onClick={() => { setActiveStep(i); setIsPaused(true); }}
                whileHover={{ y: -3 }}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <div className={`w-7 h-7 rounded-full flex items-center justify-center mx-auto mb-1.5 transition-colors duration-300 ${
                  activeStep === i ? `${s.activeBg} text-white` : `${s.activeBg}/10 ${s.color}`
                }`}>
                  <s.icon className="w-3.5 h-3.5" />
                </div>
                <h3 className="font-semibold text-xs text-foreground leading-tight">{s.label}</h3>
              </motion.button>
              {i < processSteps.length - 1 && (
                <motion.div
                  animate={{ x: activeStep === i ? [0, 4, 0] : 0, opacity: activeStep === i ? 1 : 0.3 }}
                  transition={{ duration: 0.6, repeat: activeStep === i ? Infinity : 0 }}
                  className="flex-shrink-0"
                >
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop: detail panel */}
        <div className="hidden md:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              className="deck-card-elevated p-8 text-center max-w-2xl mx-auto mt-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="text-lg font-bold text-foreground mb-2">{processSteps[activeStep].label}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{processSteps[activeStep].detail}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile: vertical stepper */}
        <div className="md:hidden space-y-0">
          <p className="text-[10px] text-center text-muted-foreground/60 mb-4">Tap a step to see details</p>
          {processSteps.map((s, i) => {
            const isActive = activeStep === i;
            return (
              <motion.button
                key={s.label}
                className="w-full text-left relative"
                onClick={() => { setActiveStep(i); setIsPaused(true); }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="flex items-start gap-3 py-2.5">
                  <div className="flex flex-col items-center shrink-0">
                    <motion.div
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive ? `${s.activeBg} text-white shadow-md` : `${s.activeBg}/10 ${s.color}`
                      }`}
                      animate={isActive ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 0.4 }}
                    >
                      <s.icon className="w-3.5 h-3.5" />
                    </motion.div>
                    {i < processSteps.length - 1 && (
                      <div className={`w-0.5 h-full min-h-[16px] transition-colors duration-300 ${isActive ? `${s.activeBg}/40` : "bg-border"}`} />
                    )}
                  </div>
                  <div className="flex-1 pb-2">
                    <div className="flex items-center gap-2">
                      <h3 className={`font-semibold text-sm transition-colors duration-200 ${isActive ? "text-foreground" : "text-muted-foreground"}`}>{s.label}</h3>
                      <motion.div animate={{ rotate: isActive ? 180 : 0 }} className="shrink-0">
                        <ChevronDown size={12} className="text-muted-foreground/60" />
                      </motion.div>
                    </div>
                    <p className={`text-[11px] mt-0.5 transition-colors ${isActive ? "text-muted-foreground" : "text-muted-foreground/50"}`}>{s.desc}</p>
                    <AnimatePresence>
                      {isActive && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                          <p className="text-xs text-foreground/80 leading-relaxed mt-2 p-3 rounded-lg bg-primary/5 border border-primary/10">{s.detail}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-1.5 mt-6">
          {processSteps.map((_, i) => (
            <motion.button key={i} className={`w-2 h-2 rounded-full transition-colors ${activeStep === i ? processSteps[i].activeBg : "bg-border"}`} onClick={() => { setActiveStep(i); setIsPaused(true); }} whileHover={{ scale: 1.3 }} />
          ))}
        </div>
      </div>
    </DeckSection>
  );
}
