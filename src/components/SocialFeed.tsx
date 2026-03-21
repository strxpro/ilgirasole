"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

export default function SocialFeed() {
    const { t } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Check if script already exists
        const existingScript = document.querySelector(
            'script[src="https://elfsightcdn.com/platform.js"]'
        );

        if (!existingScript) {
            const script = document.createElement("script");
            script.src = "https://elfsightcdn.com/platform.js";
            script.async = true;
            script.onload = () => {
                setTimeout(() => setLoaded(true), 1000);
            };
            document.body.appendChild(script);
        } else {
            // Script already loaded, just show
            setTimeout(() => setLoaded(true), 500);
        }
    }, []);

    return (
        <section id="social" className="py-16 sm:py-24 bg-white-warm">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <p className="text-gold tracking-[0.3em] text-xs uppercase mb-3">
                        {t.social.label}
                    </p>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brown-deep mb-4">
                        {t.social.title}
                    </h2>
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold" />
                        <span className="text-gold text-sm">✦</span>
                        <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold" />
                    </div>
                </motion.div>

                {/* Elfsight Social Feed Widget */}
                <motion.div
                    ref={containerRef}
                    initial={{ opacity: 0, y: 20 }}
                    animate={loaded ? { opacity: 1, y: 0 } : {}}
                    whileInView={!loaded ? { opacity: 1, y: 0 } : undefined}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        minHeight: loaded ? undefined : "300px",
                    }}
                    className="relative"
                >
                    {/* Loading skeleton */}
                    {!loaded && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
                                <p className="text-gold/60 text-sm tracking-wide">
                                    Loading feed...
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Elfsight Widget */}
                    <div
                        className="elfsight-app-fac31397-5328-498f-a9e2-7609bdb78d6e"
                        data-elfsight-app-lazy
                        style={{
                            opacity: loaded ? 1 : 0,
                            transition: "opacity 0.6s ease-in-out",
                        }}
                    />
                </motion.div>
            </div>
        </section>
    );
}
