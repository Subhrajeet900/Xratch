"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Ensure gsap has the plugin
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

interface ScrollyCanvasProps {
    frameCount: number;
    framePath: string;
    extension?: string;
    padLength?: number;
    className?: string;
    stickyChildren?: boolean;
    children?: React.ReactNode;
}

export const ScrollyCanvas: React.FC<ScrollyCanvasProps> = ({
    frameCount = 120,
    framePath = "/ezgif-4fc41fbf08ce4274-png-split/ezgif-frame-",
    extension = ".png",
    padLength = 3,
    className = "",
    stickyChildren = true,
    children
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    
    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;
        
        const context = canvas.getContext("2d");
        if (!context) return;

        // Set base resolution once; object-fit: cover via CSS will handle responsiveness
        canvas.width = 1920;
        canvas.height = 1080;

        const images = imagesRef.current;
        let loadedCount = 0;
        
        // Preload frames
        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            const frameNum = i.toString().padStart(padLength, '0');
            img.src = `${framePath}${frameNum}${extension}`;
            
            img.onload = () => {
                loadedCount++;
                if (loadedCount === 1) {
                    // Render first frame as soon as it's ready just in case
                    context.clearRect(0, 0, canvas.width, canvas.height);
                    context.drawImage(img, 0, 0, canvas.width, canvas.height);
                }
            };
            images.push(img);
        }

        // Object containing the current frame index for GSAP to animate
        const frameState = { frame: 0 };

        const renderFrame = () => {
            const index = Math.floor(frameState.frame);
            const img = images[index];
            if (img && img.complete) {
                // Using full canvas size, CSS object-fit will cover it
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.drawImage(img, 0, 0, canvas.width, canvas.height);
            }
        };

        // ScrollTrigger to scrub frames
        const trigger = ScrollTrigger.create({
            trigger: container,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.5,
            animation: gsap.to(frameState, {
                frame: frameCount - 1,
                snap: "frame",
                ease: "none",
                onUpdate: renderFrame
            })
        });

        return () => {
            trigger.kill();
        };

    }, [frameCount, framePath, extension, padLength]);

    return (
        <section ref={containerRef} className={`w-full relative bg-black h-[300vh] ${className}`}>
            <div className="sticky top-0 w-full h-screen overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {stickyChildren && children}
            </div>
            {!stickyChildren && (
                <div className="absolute inset-0 w-full h-full pointer-events-none">
                    <div className="pointer-events-auto h-full w-full">
                        {children}
                    </div>
                </div>
            )}
        </section>
    );
};
