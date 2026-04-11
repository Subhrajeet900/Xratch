"use client";

import React, { useState } from 'react';
import { ScrollyCanvas } from '@/components/ui/scrolly-canvas';

interface NavLink {
    label: string;
    href: string;
    isActive?: boolean;
}

interface Partner {
    logoUrl: string;
    href: string;
}

interface ResponsiveHeroBannerProps {
    logoUrl?: string;
    backgroundImageUrl?: string;
    navLinks?: NavLink[];
    ctaButtonText?: string;
    ctaButtonHref?: string;
    badgeText?: string;
    badgeLabel?: string;
    title?: string;
    titleLine2?: string;
    description?: string;
    primaryButtonText?: string;
    primaryButtonHref?: string;
    secondaryButtonText?: string;
    secondaryButtonHref?: string;
    partnersTitle?: string;
    partners?: Partner[];
}

const ResponsiveHeroBanner: React.FC<ResponsiveHeroBannerProps> = ({
    logoUrl = "",
    backgroundImageUrl = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=3840&auto=format&fit=crop",
    navLinks = [
        { label: "Home", href: "#", isActive: true },
        { label: "Work", href: "#work" },
        { label: "About", href: "#about" }
    ],
    ctaButtonText = "Let's Connect",
    ctaButtonHref = "#connect",
    badgeLabel = "Xratch",
    badgeText = "for websites . from you . by you",
    title = "Digital Products",
    titleLine2 = "That Refuse To Be Ignored",
    description = "Ideas are nothing until they’re real — we take them from concepts to tangible products that create real impact.",
    primaryButtonText = "Connect With Us",
    primaryButtonHref = "#connect",
    secondaryButtonText = "View Our Work",
    secondaryButtonHref = "#work",
    partnersTitle = "Partnering with ambitious clients worldwide",
    partners = [
        { logoUrl: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f7466370-2832-4fdd-84c2-0932bb0dd850_800w.png", href: "#" },
        { logoUrl: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0a9a71ec-268b-4689-a510-56f57e9d4f13_1600w.png", href: "#" },
        { logoUrl: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a9ed4369-748a-49f8-9995-55d6c876bbff_1600w.png", href: "#" },
        { logoUrl: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d8966a4-8525-4e11-9d5d-2d7390b2c798_1600w.png", href: "#" },
        { logoUrl: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2ed33c8b-b8b2-4176-967f-3d785fed07d8_1600w.png", href: "#" }
    ]
}) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <ScrollyCanvas
            frameCount={120}
            framePath="/ezgif-4fc41fbf08ce4274-png-split/ezgif-frame-"
            className="isolate"
        >
            <div className="pointer-events-none absolute inset-0 ring-1 ring-black/30 bg-black/70" />

            <div className="absolute inset-0 w-full h-full flex flex-col justify-center">

                {/* We hide this header because standard Navbar is already being used in page.tsx for global navigation, 
                however we keep the markup as per component specification requested by user.
                Or we can render it. The instructions say "Copy-paste this component". */}
                <header className="z-10 xl:top-4 relative opacity-0 invisible h-0 overflow-hidden">
                    <div className="mx-6">
                        <div className="flex items-center justify-between pt-4">
                            {logoUrl ? (
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-cover rounded"
                                    style={{ backgroundImage: `url(${logoUrl})` }}
                                />
                            ) : (
                                <a href="#" className="font-heading font-bold text-2xl tracking-tighter text-white">Xratch<span className="text-accent">.</span></a>
                            )}

                            <nav className="hidden md:flex items-center gap-2">
                                <div className="flex items-center gap-1 rounded-full bg-white/5 px-1 py-1 ring-1 ring-white/10 backdrop-blur">
                                    {navLinks.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.href}
                                            className={`px-3 py-2 text-sm font-medium hover:text-white font-sans transition-colors ${link.isActive ? 'text-white/90' : 'text-white/80'
                                                }`}
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                    <a
                                        href={ctaButtonHref}
                                        className="ml-1 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-sm font-medium text-neutral-900 hover:bg-white/90 font-sans transition-colors"
                                    >
                                        {ctaButtonText}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                                            <path d="M7 7h10v10" />
                                            <path d="M7 17 17 7" />
                                        </svg>
                                    </a>
                                </div>
                            </nav>

                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur"
                                aria-expanded={mobileMenuOpen}
                                aria-label="Toggle menu"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-white/90">
                                    <path d="M4 5h16" />
                                    <path d="M4 12h16" />
                                    <path d="M4 19h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </header>

                <div className="z-10 relative">
                    <div className="sm:pt-28 md:pt-32 lg:pt-40 max-w-7xl mx-auto pt-28 px-6 pb-16">
                        <div className="mx-auto max-w-3xl text-center">
                            <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/10 px-2.5 py-2 ring-1 ring-white/15 backdrop-blur animate-fade-slide-in-1">
                                <span className="inline-flex items-center text-xs font-medium text-neutral-900 bg-white/90 rounded-full py-0.5 px-2 font-sans">
                                    {badgeLabel}
                                </span>
                                <span className="text-sm font-medium text-white/90 font-sans">
                                    {badgeText}
                                </span>
                            </div>

                            <h1 className="sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-4xl text-white tracking-tight font-heading font-bold animate-fade-slide-in-2">
                                {title}
                                <br className="hidden sm:block" />
                                {titleLine2}
                            </h1>

                            <p className="sm:text-lg animate-fade-slide-in-3 text-base text-white/80 max-w-2xl mt-6 mx-auto">
                                {description}
                            </p>

                            <div className="flex flex-col sm:flex-row sm:gap-4 mt-10 gap-3 items-center justify-center animate-fade-slide-in-4">
                                <a
                                    href={primaryButtonHref}
                                    className="inline-flex items-center gap-2 hover:bg-white/15 text-sm font-medium text-black bg-[#ADFF2F] ring-[#ADFF2F]/50 ring-1 rounded-full py-3 px-5 font-sans transition-colors"
                                >
                                    {primaryButtonText}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                                        <path d="M5 12h14" />
                                        <path d="m12 5 7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </ScrollyCanvas>
    );
};

export default ResponsiveHeroBanner;
