import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import tex2texLogo from "@/assets/tex2tex-logo-dark.svg";

export default function HeroCover() {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.4], ["0%", "-8%"]);

  return (
    <section ref={sectionRef} data-slide-index="0" className="relative h-screen overflow-hidden bg-deck-charcoal">
      {/* Video background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <iframe
          src="https://player.vimeo.com/video/1176418295?autoplay=1&loop=1&muted=1&badge=0&autopause=0&title=0&byline=0&portrait=0&controls=0&player_id=0&app_id=58479"
          className="absolute top-1/2 left-1/2 border-0 pointer-events-none"
          style={
            isMobile
              ? {
                  width: "300vw",
                  height: "100vh",
                  minWidth: "177.78vh",
                  minHeight: "100vh",
                  transform: "translate(-50%, -50%) scale(1.25)",
                }
              : {
                  width: "177.78vh",
                  height: "56.25vw",
                  minWidth: "100%",
                  minHeight: "100%",
                  transform: "translate(-50%, -50%) scale(1.25)",
                }
          }
          allow="autoplay; fullscreen; picture-in-picture"
          title="Tex2Tex Background Video"
        />
      </div>

      {/* Dark overlay */}
      <motion.div
        className="absolute inset-0 z-[1] bg-black/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-col items-center mb-10"
        >
          <img src={tex2texLogo} alt="Tex2Tex® by Earth Protex™" className="h-16 md:h-24 w-auto brightness-0 invert opacity-90" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-black uppercase text-white leading-[0.95] tracking-tight"
          style={{ fontSize: "clamp(1.5rem, 5vw, 4.5rem)" }}
        >
          <span className="block">India Greenfield</span>
          <span className="block">Polyester Textile-to-Textile</span>
          <span className="block">Recycling Facility</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-white/50 text-xs sm:text-sm md:text-base max-w-lg mt-6 sm:mt-8 leading-relaxed font-light tracking-wide px-4 sm:px-0"
        >
          India's first large-scale, true textile-to-textile polyester recycling facility
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex items-center gap-6 sm:gap-8 md:gap-12 mt-8 sm:mt-12"
        >
          {[
            { value: "30K", unit: "Tons/yr" },
            { value: "33%", unit: "IRR" },
            { value: "<$10M", unit: "Capex" },
          ].map((stat) => (
            <div key={stat.unit} className="text-center">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">{stat.value}</p>
              <p className="text-[10px] font-mono uppercase tracking-widest text-white/30 mt-1">{stat.unit}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-8 sm:mt-14"
        >
          <a
            href="#why-tex2tex"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors duration-300 border-b border-white/20 pb-1 hover:border-white/50"
          >
            Explore the deck
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-0 left-0 right-0 z-10 px-4 sm:px-6 md:px-12 pb-4 sm:pb-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] sm:text-[11px] text-white/25 font-mono"
      >
        <div className="flex items-center gap-4">
          <a href="https://tex2tex.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white/50 transition-colors">
            tex2tex.com <ExternalLink className="w-3 h-3" />
          </a>
          <a href="https://earthprotex.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white/50 transition-colors">
            earthprotex.com <ExternalLink className="w-3 h-3" />
          </a>
        </div>
        <span><span>Confidential · Q2 2026</span></span>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown className="w-4 h-4 text-white/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}
