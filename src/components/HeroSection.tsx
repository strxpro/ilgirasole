"use client";

import { motion } from "framer-motion";
import { ChevronDown, Instagram, Facebook } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function HeroSection() {
    const { t } = useLanguage();
    return (
        <section
            id="hero"
            className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
        >
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 z-0">
                <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('/tlo.png')`,
                    }}
                />
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-brown-deep/60 via-brown-deep/30 to-brown-deep/70" />
                <div className="absolute inset-0 bg-gradient-to-r from-brown-deep/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                {/* Decoration */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="mb-6"
                >
                    <p className="text-gold tracking-[0.4em] text-xs sm:text-sm uppercase font-sans">
                        {t.hero.location}
                    </p>
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] mb-6 drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
                >
                    Il Girasole
                </motion.h1>

                {/* Ornamental divider */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="flex items-center justify-center gap-3 mb-6"
                >
                    <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent to-gold" />
                    <span className="text-gold text-lg">🌻</span>
                    <div className="w-16 sm:w-24 h-px bg-gradient-to-l from-transparent to-gold" />
                </motion.div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="font-serif text-lg sm:text-xl md:text-2xl text-cream italic mb-10 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
                >
                    {t.hero.subtitle}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#menu-selector"
                        className="px-8 py-3.5 bg-terracotta hover:bg-terracotta-dark text-cream font-sans text-sm tracking-wider uppercase rounded-sm transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        {t.hero.ctaMenu}
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3.5 bg-cream hover:bg-white text-brown-deep font-sans text-sm tracking-wider font-semibold uppercase rounded-sm transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        {t.hero.ctaBook}
                    </a>
                </motion.div>
            </div>


            {/* Scroll Indicator */}
            <motion.a
                href="#menu-selector"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-cream/40 hover:text-gold transition-colors duration-300"
            >
                <span className="text-[10px] tracking-[0.3em] uppercase">{t.hero.scroll}</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <ChevronDown size={20} />
                </motion.div>
            </motion.a>
        </section>
    );
}
