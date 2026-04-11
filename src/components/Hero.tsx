"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const headlineWords = "For Websites. from you. by you".split(" ");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const wordAnim = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      {/* Subtle background element */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(173,255,47,0.03)_0%,transparent_60%)]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center pt-12 md:pt-0 h-full">
        <div className="flex flex-col items-start w-full">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="font-heading font-bold text-6xl md:text-8xl lg:text-[5.5rem] leading-[1.1] tracking-tighter"
          >
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                variants={wordAnim}
                className={`inline-block mr-4 mb-2 ${word === "Xratch." ? "text-accent" : "text-white"}`}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-8 text-xl md:text-2xl text-white/60 max-w-xl font-sans"
          >
            We partner with ambitious clients to engineer high-end digital products,
            brand systems, and experiences that refuse to be ignored.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-12"
          >
            <a
              href="#connect"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-transform hover:scale-105"
            >
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                Connect With Us
              </span>
              <span className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300">
                &rarr;
              </span>
              <div className="absolute inset-0 bg-accent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
            </a>
          </motion.div>
        </div>

        {/* Right side Image block */}
        <div className="flex justify-center lg:justify-end w-full mt-12 lg:mt-0 mb-12 lg:mb-0 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1.2, type: "spring", stiffness: 60 }}
            className="relative will-change-transform w-full max-w-[350px] sm:max-w-[450px] lg:max-w-[550px]"
          >
            {/* The Image */}
            <img
              src="/images/iphone.png"
              alt="Xratch Mobile App"
              className="w-full h-auto object-contain relative z-10 drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
            />

            {/* Soft glow behind the phone to separate it from the background */}
            <div className="absolute inset-0 bg-accent/20 blur-[80px] lg:blur-[100px] -z-10 rounded-full transform scale-110"></div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
