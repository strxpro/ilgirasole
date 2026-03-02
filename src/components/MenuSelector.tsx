"use client";

import { motion } from "framer-motion";
import { UtensilsCrossed, Wine } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

interface MenuSelectorProps {
    activeMenu: "ristorante" | "bar";
    onSelect: (menu: "ristorante" | "bar") => void;
}

export default function MenuSelector({ activeMenu, onSelect }: MenuSelectorProps) {
    const { t } = useLanguage();

    return (
        <section id="menu-selector" className="relative py-20 bg-white-warm">
            {/* Decorative top pattern */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

            <div className="max-w-4xl mx-auto px-6 text-center">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-gold tracking-[0.3em] text-xs uppercase mb-3 font-sans">
                        {t.menuSelector.explore}
                    </p>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brown-deep mb-4">
                        {t.menuSelector.title}
                    </h2>
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold" />
                        <span className="text-gold text-sm">✦</span>
                        <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold" />
                    </div>
                    <p className="text-brown-medium/70 max-w-lg mx-auto mb-12 text-sm sm:text-base">
                        {t.menuSelector.description}
                    </p>
                </motion.div>

                {/* Toggle Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    {/* Ristorante Button */}
                    <button
                        onClick={() => onSelect("ristorante")}
                        className={`group relative w-full sm:w-72 py-8 px-6 rounded-sm border-2 transition-all duration-500 ${activeMenu === "ristorante"
                            ? "bg-terracotta border-terracotta text-cream shadow-xl shadow-terracotta/20"
                            : "bg-transparent border-brown-deep/15 text-brown-deep hover:border-terracotta/40 hover:shadow-lg"
                            }`}
                    >
                        <div className="flex flex-col items-center gap-3">
                            <UtensilsCrossed
                                size={32}
                                className={`transition-colors duration-300 ${activeMenu === "ristorante" ? "text-gold-light" : "text-terracotta"
                                    }`}
                            />
                            <span className="font-serif text-2xl font-bold tracking-wide">
                                {t.menuSelector.ristorante}
                            </span>
                            <span
                                className={`text-xs tracking-wider uppercase ${activeMenu === "ristorante" ? "text-cream/70" : "text-brown-medium/50"
                                    }`}
                            >
                                {t.menuSelector.ristoranteDesc}
                            </span>
                        </div>
                        {activeMenu === "ristorante" && (
                            <motion.div
                                layoutId="selector-indicator"
                                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-gold rounded-full"
                            />
                        )}
                    </button>

                    {/* Divider */}
                    <div className="hidden sm:flex flex-col items-center gap-2">
                        <div className="w-px h-8 bg-gold/30" />
                        <span className="text-gold/50 text-xs font-serif italic">o</span>
                        <div className="w-px h-8 bg-gold/30" />
                    </div>

                    {/* Bar Button */}
                    <button
                        onClick={() => onSelect("bar")}
                        className={`group relative w-full sm:w-72 py-8 px-6 rounded-sm border-2 transition-all duration-500 ${activeMenu === "bar"
                            ? "bg-olive-dark border-olive-dark text-cream shadow-xl shadow-olive/20"
                            : "bg-transparent border-brown-deep/15 text-brown-deep hover:border-olive/40 hover:shadow-lg"
                            }`}
                    >
                        <div className="flex flex-col items-center gap-3">
                            <Wine
                                size={32}
                                className={`transition-colors duration-300 ${activeMenu === "bar" ? "text-gold-light" : "text-olive"
                                    }`}
                            />
                            <span className="font-serif text-2xl font-bold tracking-wide">
                                {t.menuSelector.bar}
                            </span>
                            <span
                                className={`text-xs tracking-wider uppercase ${activeMenu === "bar" ? "text-cream/70" : "text-brown-medium/50"
                                    }`}
                            >
                                {t.menuSelector.barDesc}
                            </span>
                        </div>
                        {activeMenu === "bar" && (
                            <motion.div
                                layoutId="selector-indicator"
                                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-gold rounded-full"
                            />
                        )}
                    </button>
                </motion.div>
            </div>

            {/* Decorative bottom pattern */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        </section>
    );
}
