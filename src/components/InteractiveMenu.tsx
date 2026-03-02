"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronDown } from "lucide-react";
import { MenuCategory } from "@/data/menuData";
import { useLanguage } from "@/i18n/LanguageContext";

interface InteractiveMenuProps {
    categories: MenuCategory[];
    type: "ristorante" | "bar";
}

export default function InteractiveMenu({ categories, type }: InteractiveMenuProps) {
    const { t } = useLanguage();
    const [activeCategory, setActiveCategory] = useState(categories[0]?.id || "");
    const [mobileAccordion, setMobileAccordion] = useState<string | null>(categories[0]?.id || null);

    // Reset to first category when menu type changes (ristorante ↔ bar)
    useEffect(() => {
        setActiveCategory(categories[0]?.id || "");
        setMobileAccordion(categories[0]?.id || null);
    }, [categories]);

    const activeCat = categories.find((c) => c.id === activeCategory);
    const accentColor = type === "ristorante" ? "terracotta" : "olive";

    return (
        <section id="menu" className="py-16 sm:py-24 bg-cream">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <p className="text-gold tracking-[0.3em] text-xs uppercase mb-3">
                        {type === "ristorante" ? t.interactiveMenu.ristoranteLabel : t.interactiveMenu.barLabel}
                    </p>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brown-deep mb-4">
                        {type === "ristorante" ? t.interactiveMenu.ristoranteTitle : t.interactiveMenu.barTitle}
                    </h2>
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold" />
                        <span className="text-gold text-sm">✦</span>
                        <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold" />
                    </div>
                </motion.div>

                {/* Desktop: Split View */}
                <div className="hidden md:grid md:grid-cols-[260px_1fr] gap-8">
                    {/* Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-2"
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`w-full text-left px-5 py-4 rounded-sm transition-all duration-300 group flex items-center justify-between ${activeCategory === cat.id
                                    ? `bg-${accentColor} text-cream shadow-lg`
                                    : "bg-white-warm hover:bg-sand-light text-brown-deep"
                                    }`}
                                style={
                                    activeCategory === cat.id
                                        ? { backgroundColor: type === "ristorante" ? "#C75B39" : "#3E4A35" }
                                        : {}
                                }
                            >
                                <span className="font-serif text-lg font-semibold tracking-wide flex items-center gap-2">
                                    {t.menuCategories[cat.id] || cat.name}
                                    {cat.isNew && (
                                        <span className="inline-flex items-center px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-gradient-to-r from-red-500 to-rose-400 text-white shadow-sm animate-pulse">
                                            NEW
                                        </span>
                                    )}
                                </span>
                                <ChevronRight
                                    size={18}
                                    className={`transition-transform duration-300 ${activeCategory === cat.id
                                        ? "text-gold-light translate-x-1"
                                        : "text-brown-medium/30 group-hover:translate-x-1"
                                        }`}
                                />
                            </button>
                        ))}

                        {/* Decorative element */}
                        <div className="pt-6 px-5">
                            <div className="border-t border-gold/20 pt-5">
                                <p className="text-brown-medium/60 max-w-2xl mx-auto text-sm sm:text-base">
                                    {t.interactiveMenu.allergyNote}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <div className="min-h-[400px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCategory}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className="grid gap-4"
                            >
                                {activeCat?.items.map((item, idx) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.08 }}
                                        className="group relative bg-white-warm rounded-sm p-5 sm:p-6 flex items-start gap-5 hover:shadow-md transition-all duration-300 border border-transparent hover:border-gold/10"
                                    >
                                        {item.isNew && (
                                            <div className="absolute top-0 left-0 z-10">
                                                <span className="inline-flex items-center px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-br-lg rounded-tl-sm bg-gradient-to-r from-red-500 to-rose-400 text-white shadow-md">
                                                    ✨ NEW
                                                </span>
                                            </div>
                                        )}
                                        <div className="flex-1">
                                            <div className="flex items-baseline gap-3 mb-2">
                                                <h3 className="font-serif text-lg font-semibold text-brown-deep group-hover:text-terracotta transition-colors duration-300">
                                                    {item.name}
                                                </h3>
                                                <div className="flex-1 border-b border-dotted border-gold/30 min-w-[30px] relative top-[-4px]" />
                                                <span
                                                    className="font-serif text-lg font-bold tracking-wide shrink-0"
                                                    style={{ color: type === "ristorante" ? "#C75B39" : "#3E4A35" }}
                                                >
                                                    {item.price}
                                                </span>
                                            </div>
                                            <p className="text-brown-medium/60 text-sm leading-relaxed">
                                                {t.menuDescriptions[item.id] || item.description}
                                            </p>
                                        </div>
                                        <div className="text-3xl shrink-0 mt-1 opacity-70 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-110 transform">
                                            {item.icon}
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Mobile: Accordion */}
                <div className="md:hidden space-y-3">
                    {categories.map((cat) => (
                        <div key={cat.id} className="rounded-sm overflow-hidden bg-white-warm">
                            <button
                                onClick={() =>
                                    setMobileAccordion(mobileAccordion === cat.id ? null : cat.id)
                                }
                                className="w-full flex items-center justify-between px-5 py-4 text-left"
                                style={
                                    mobileAccordion === cat.id
                                        ? { backgroundColor: type === "ristorante" ? "#C75B39" : "#3E4A35", color: "#FAF3E8" }
                                        : {}
                                }
                            >
                                <span className="font-serif text-lg font-semibold flex items-center gap-2">
                                    {t.menuCategories[cat.id] || cat.name}
                                    {cat.isNew && (
                                        <span className="inline-flex items-center px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-gradient-to-r from-red-500 to-rose-400 text-white shadow-sm animate-pulse">
                                            NEW
                                        </span>
                                    )}
                                </span>
                                <ChevronDown
                                    size={20}
                                    className={`transition-transform duration-300 ${mobileAccordion === cat.id ? "rotate-180 text-gold-light" : "text-brown-medium/40"
                                        }`}
                                />
                            </button>
                            <AnimatePresence>
                                {mobileAccordion === cat.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-4 space-y-3">
                                            {cat.items.map((item) => (
                                                <div
                                                    key={item.id}
                                                    className="relative flex items-start gap-3 p-3 bg-cream rounded-sm"
                                                >
                                                    {item.isNew && (
                                                        <div className="absolute top-0 left-0 z-10">
                                                            <span className="inline-flex items-center px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded-br-md rounded-tl-sm bg-gradient-to-r from-red-500 to-rose-400 text-white shadow-sm">
                                                                ✨ NEW
                                                            </span>
                                                        </div>
                                                    )}
                                                    <div className="flex-1">
                                                        <div className="flex items-baseline gap-2 mb-1">
                                                            <h3 className="font-serif text-base font-semibold text-brown-deep">
                                                                {item.name}
                                                            </h3>
                                                            <span
                                                                className="font-serif text-base font-bold ml-auto shrink-0"
                                                                style={{ color: type === "ristorante" ? "#C75B39" : "#3E4A35" }}
                                                            >
                                                                {item.price}
                                                            </span>
                                                        </div>
                                                        <p className="text-brown-medium/60 text-xs leading-relaxed">
                                                            {t.menuDescriptions[item.id] || item.description}
                                                        </p>
                                                    </div>
                                                    <span className="text-2xl shrink-0">{item.icon}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
