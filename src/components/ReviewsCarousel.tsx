"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

export default function ReviewsCarousel() {
    const { t } = useLanguage();
    const widgetRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!widgetRef.current) return;
        const existing = widgetRef.current.querySelector("script");
        if (existing) return;
        const script = document.createElement("script");
        script.src = "https://cdn.trustindex.io/loader.js?e43ab6767464773eda36526823c";
        script.async = true;
        script.defer = true;
        widgetRef.current.appendChild(script);
    }, []);

    return (
        <section id="reviews" className="relative py-20 sm:py-28 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-sand-light via-cream to-sand-light" />
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C8B75' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            />

            <div className="relative max-w-5xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-14"
                >
                    <p className="text-gold tracking-[0.3em] text-xs uppercase mb-4">
                        {t.reviews.label}
                    </p>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brown-deep mb-5 leading-tight">
                        {t.reviews.title1}
                        <br />
                        <span className="text-terracotta">{t.reviews.title2}</span>
                    </h2>
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold" />
                        <span className="text-gold text-lg">🌻</span>
                        <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold" />
                    </div>
                </motion.div>

                {/* Trustindex Google Reviews Widget */}
                <div ref={widgetRef} />
            </div>
        </section>
    );
}
