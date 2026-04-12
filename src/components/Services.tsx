"use client";

import { motion } from "framer-motion";
import { PenTool, Box, LayoutGrid, TrendingUp } from "lucide-react";
import { ScrollyCanvas } from "@/components/ui/scrolly-canvas";

export default function Services() {
  const services = [
    {
      title: "Brand Strategy",
      description: "We forge identities that cut through the noise.",
      icon: <PenTool size={36} className="text-accent mb-6" />,
    },
    {
      title: "Digital Products",
      description: "High-performance applications built for scale.",
      icon: <Box size={36} className="text-accent mb-6" />,
    },
    {
      title: "Creative Direction",
      description: "Aesthetic precision that elevates your core message.",
      icon: <LayoutGrid size={36} className="text-accent mb-6" />,
    },
    {
      title: "Growth Systems",
      description: "Data-driven architectures designed to multiply revenue.",
      icon: <TrendingUp size={36} className="text-accent mb-6" />,
    },
  ];

  return (
    <ScrollyCanvas 
      frameCount={128} 
      framePath="/cars_scenes/ezgif-frame-"
      className="isolate"
      stickyChildren={false}
    >
      <div className="pointer-events-none absolute inset-0 bg-black/70 ring-1 ring-black/30" />
      
      {/* Top fade to blend with the previous section */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-black via-black/60 to-transparent z-20" />

      <div className="absolute inset-x-0 bottom-0 top-[150vh] flex flex-col justify-end pb-12 pt-20 bg-gradient-to-t from-black via-black/80 to-transparent">
        <section id="work" className="relative z-10 w-full mt-auto mb-10 overflow-hidden">
          <div className="w-full px-4 md:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tighter">
                What We Do
              </h2>
              <div className="w-20 h-1 bg-accent mt-6"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8 w-full">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group p-8 lg:p-10 bg-white/5 backdrop-blur-md border border-white/5 rounded-2xl hover:border-accent/50 transition-colors duration-500 flex flex-col"
                >
                  <div className="transform group-hover:scale-110 transition-transform duration-500 origin-left">
                    {service.icon}
                  </div>
                  <h3 className="font-heading text-2xl xl:text-3xl font-bold mb-3 mt-4">{service.title}</h3>
                  <p className="text-white/60 text-lg leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </ScrollyCanvas>
  );
}
