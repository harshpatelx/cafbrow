import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export function FadeUp({ children, delay = 0, className = "", y = 44 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function KineticLine({ children, delay = 0, className = "", innerClassName = "" }) {
  return (
    <span className={`block overflow-hidden pb-[0.08em] ${className}`}>
      <motion.span
        className={`block will-change-transform ${innerClassName}`}
        initial={{ y: "115%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.1, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function SectionLabel({ children, light = false }) {
  return (
    <p
      className={`text-xs font-bold tracking-[0.3em] uppercase ${
        light ? "text-mustard" : "text-terracotta"
      }`}
    >
      {children}
    </p>
  );
}
