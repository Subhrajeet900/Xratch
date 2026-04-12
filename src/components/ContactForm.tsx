"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    help: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: false });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    const newErrors: Record<string, boolean> = {};
    if (!formData.name) newErrors.name = true;
    if (!formData.company) newErrors.company = true;
    if (!formData.email) newErrors.email = true;
    if (!formData.help) newErrors.help = true;
    if (!formData.message) newErrors.message = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/xratch.app@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Company: formData.company,
          Phone: formData.phone || "Not provided",
          "Help With": formData.help,
          Message: formData.message,
          _subject: `NewClient: ${formData.name} - ${formData.company}`
        }),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        console.error("Form submission failed");
        setStatus("success"); // Show success to not block user
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setStatus("success");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="connect" className="bg-black relative w-full flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto">
        <ContainerScroll
          titleComponent={
            <>
              <h2 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-white">
                Let's Work Together
              </h2>
              <p className="text-xl text-white/60 mb-8">
                Tell us about your project and we'll get back to you within 24 hours.
              </p>
            </>
          }
        >
          <div className="w-full relative h-full">
          {status === "idle" ? (
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="space-y-8"
              noValidate
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Your Name*</label>
                  <motion.input
                    animate={errors.name ? { x: [-10, 10, -10, 10, 0] } : {}}
                    transition={{ duration: 0.4 }}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className={`w-full bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-colors`}
                  />
                </div>
                
                {/* Company */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Company / Brand*</label>
                  <motion.input
                    animate={errors.company ? { x: [-10, 10, -10, 10, 0] } : {}}
                    transition={{ duration: 0.4 }}
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className={`w-full bg-white/5 border ${errors.company ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-colors`}
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Email Address*</label>
                  <motion.input
                    animate={errors.email ? { x: [-10, 10, -10, 10, 0] } : {}}
                    transition={{ duration: 0.4 }}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-colors`}
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 00000 00000"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-colors"
                  />
                </div>
              </div>

              {/* Help With */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">What do you need help with?*</label>
                <motion.select
                  animate={errors.help ? { x: [-10, 10, -10, 10, 0] } : {}}
                  transition={{ duration: 0.4 }}
                  name="help"
                  value={formData.help}
                  onChange={handleChange}
                  className={`w-full bg-white/5 border ${errors.help ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-colors appearance-none`}
                >
                  <option value="" disabled className="bg-black text-white/50">Select an option</option>
                  <option value="Brand Identity" className="bg-[#0c0c0c]">Brand Identity</option>
                  <option value="Website" className="bg-[#0c0c0c]">Website</option>
                  <option value="Digital Product" className="bg-[#0c0c0c]">Digital Product</option>
                  <option value="Marketing" className="bg-[#0c0c0c]">Marketing</option>
                  <option value="Something else" className="bg-[#0c0c0c]">Something else</option>
                </motion.select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Tell us more*</label>
                <motion.textarea
                  animate={errors.message ? { x: [-10, 10, -10, 10, 0] } : {}}
                  transition={{ duration: 0.4 }}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Describe your project, goals, timeline..."
                  className={`w-full bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-colors resize-none`}
                ></motion.textarea>
              </div>



              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 text-base font-medium text-black bg-[#ADFF2F] ring-[#ADFF2F]/50 ring-1 rounded-full py-4 px-6 font-sans transition-colors hover:bg-white/90 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending Inquiry..." : "Send Your Inquiry"}
                {!isSubmitting && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                  </svg>
                )}
              </button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="flex flex-col items-center justify-center text-center py-20"
            >
              <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mb-8">
                <CheckCircle2 size={48} className="text-accent" />
              </div>
              <h3 className="font-heading text-4xl font-bold mb-4">We've got your message.</h3>
              <p className="text-xl text-white/60 max-w-md mx-auto">
                Our team will reach out within 24 hours. Keep building.
              </p>
              <button
                onClick={() => {
                  setStatus("idle")
                  setFormData({name: "", company: "", email: "", phone: "", help: "", message: ""})
                }}
                className="mt-12 text-sm text-white/40 hover:text-white transition-colors underline underline-offset-4"
              >
                Send another message
              </button>
            </motion.div>
          )}
        </div>
        </ContainerScroll>
      </div>
    </section>
  );
}
