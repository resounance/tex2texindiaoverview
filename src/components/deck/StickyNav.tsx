import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const sections = [
  { id: "why-tex2tex", label: "Why Tex2Tex®" },
  { id: "executive-summary", label: "Summary" },
  { id: "the-problem", label: "The Problem" },
  { id: "what-is-tex2tex", label: "Technology" },
  { id: "market", label: "Market" },
  { id: "investment", label: "Investment" },
];

export default function StickyNav() {
  const [active, setActive] = useState("");
  const [visible, setVisible] = useState(false);
  const lastScrollY = useRef(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const scrollingUp = currentY < lastScrollY.current;
      const pastThreshold = currentY > 100;
      setVisible(pastThreshold && scrollingUp);
      lastScrollY.current = currentY;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    window.addEventListener("scroll", handleScroll, { passive: true });
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          key="sticky-nav"
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50"
        >
          <div className="absolute inset-0 glass-filter" />
          <div className="absolute inset-0 glass-overlay" />
          <div className="absolute inset-0 glass-specular" />

          <motion.div
            className="absolute top-0 left-0 right-0 h-[2px] bg-secondary origin-left z-10"
            style={{ scaleX }}
          />

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-12">
            <span className="font-bold text-sm text-foreground">
              Tex2Tex<sup className="text-[8px]">®</sup>
            </span>
            <div className="hidden md:flex items-center gap-6">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={`text-xs font-medium transition-colors relative ${
                    active === s.id
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {s.label}
                  {active === s.id && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
