"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const yParallax = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const containerVariant: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const wordVariant: Variants = {
    hidden: { opacity: 0, y: 40, rotateX: -90 },
    visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.8, type: "spring", bounce: 0.4 } }
  };
  return (
    <section id="about" ref={containerRef} className="py-32 bg-[#0c0c0c] relative overflow-hidden">
      {/* Decorative accent line */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <motion.svg 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "circOut" }}
          className="relative block w-full h-[1px] origin-left" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 0L0 0 0 1 1200 1z" fill="var(--color-accent-green)" fillOpacity="0.5"></path>
        </motion.svg>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <motion.div
            style={{ y: yParallax }}
            className="w-full lg:w-1/2 perspective-[1000px]"
          >
            <motion.h2 
              variants={containerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter flex flex-col"
            >
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {["We", "don't", "do", "average."].map((word, i) => (
                  <motion.span key={i} variants={wordVariant} className="inline-block">{word}</motion.span>
                ))}
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2 items-baseline">
                <motion.span variants={wordVariant} className="text-white/40 inline-block">We</motion.span>
                <motion.span variants={wordVariant} className="text-accent underline decoration-accent/30 underline-offset-8 inline-block shadow-accent/20 drop-shadow-[0_0_15px_rgba(173,255,47,0.5)]">Xratch</motion.span>
                <motion.span variants={wordVariant} className="text-white/40 inline-block">the surface.</motion.span>
              </div>
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col gap-6"
          >
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-sans">
              Xratch isn&apos;t just an agency. We are a collective of designers, engineers, and strategists obsessed with the bleeding edge of the digital frontier.
            </p>
            <p className="text-lg text-white/50 leading-relaxed font-sans">
              We partner with visionary brands to architect experiences that disrupt complacency. If you are looking for safe, ordinary, or standard—you&apos;re in the wrong place. We build to dominate.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
