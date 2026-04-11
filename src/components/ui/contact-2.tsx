import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
}

export const Contact2 = ({
  title = "Start Your Project",
  description = "Ready to elevate your brand with premium, high-performance web applications? We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
  phone = "Available upon request",
  email = "xratch.app@gmail.com",
  web = { label: "xratch.com", url: "https://xratch.com" },
}: Contact2Props) => {
  return (
    <section id="contact" className="py-32 bg-zinc-950 text-white relative overflow-hidden">
      {/* Smoky Decorative Glows */}
      <div className="absolute top-0 right-1/4 h-[600px] w-[600px] rounded-full bg-zinc-300/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 h-[600px] w-[600px] rounded-full bg-zinc-400/10 blur-[140px] pointer-events-none" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
            <div className="text-center lg:text-left">
              <h2 className="mb-4 text-5xl font-medium tracking-tighter lg:mb-6 lg:text-6xl">
                {title}
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">{description}</p>
            </div>
            <div className="mx-auto w-fit lg:mx-0">
              <h3 className="mb-6 text-center text-xl font-medium lg:text-left text-zinc-200">
                Contact Details
              </h3>
              <ul className="ml-4 list-disc space-y-3 text-zinc-300">
                <li>
                  <span className="font-bold text-white">Email: </span>
                  <a href={`mailto:${email}`} className="underline text-blue-400 hover:text-blue-300 transition-colors">
                    {email}
                  </a>
                </li>
                <li>
                  <span className="font-bold text-white">Phone: </span>
                  {phone}
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mx-auto flex w-full max-w-screen-md flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur-xl shadow-2xl">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="firstname" className="text-zinc-300">First Name</Label>
                <Input type="text" id="firstname" placeholder="John" className="bg-white/10 border-white/10 text-white placeholder:text-zinc-500 focus-visible:ring-blue-500" />
              </div>
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="lastname" className="text-zinc-300">Last Name</Label>
                <Input type="text" id="lastname" placeholder="Doe" className="bg-white/10 border-white/10 text-white placeholder:text-zinc-500 focus-visible:ring-blue-500" />
              </div>
            </div>
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="email" className="text-zinc-300">Email</Label>
              <Input type="email" id="email" placeholder="john@company.com" className="bg-white/10 border-white/10 text-white placeholder:text-zinc-500 focus-visible:ring-blue-500" />
            </div>
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="subject" className="text-zinc-300">Subject</Label>
              <Input type="text" id="subject" placeholder="Project Inquiry" className="bg-white/10 border-white/10 text-white placeholder:text-zinc-500 focus-visible:ring-blue-500" />
            </div>
            <div className="grid w-full gap-2">
              <Label htmlFor="message" className="text-zinc-300">Message</Label>
              <Textarea placeholder="Tell us about your project or idea..." id="message" className="min-h-[150px] bg-white/10 border-white/10 text-white placeholder:text-zinc-500 focus-visible:ring-blue-500" />
            </div>
            <Button className="w-full mt-2 bg-white text-zinc-950 hover:bg-zinc-200 font-semibold py-6 rounded-xl transition-all hover:scale-[1.01]">
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
