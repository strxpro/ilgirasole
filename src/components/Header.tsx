"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import SunflowerLogo from "./SunflowerLogo";
import { useLanguage } from "@/i18n/LanguageContext";
import { LangCode } from "@/i18n/translations";

// ── SVG Flag Components (Windows doesn't render emoji flags) ──
function FlagIT({ size = 20 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
            <rect width="36" height="36" rx="4" fill="#009246" />
            <rect x="12" width="12" height="36" fill="#fff" />
            <rect x="24" width="12" height="36" fill="#CE2B37" />
        </svg>
    );
}

function FlagGB({ size = 20 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
            <rect width="36" height="36" rx="4" fill="#00247D" />
            <path d="M0 0l36 36M36 0L0 36" stroke="#fff" strokeWidth="6" />
            <path d="M0 0l36 36M36 0L0 36" stroke="#CF142B" strokeWidth="2" />
            <path d="M18 0v36M0 18h36" stroke="#fff" strokeWidth="10" />
            <path d="M18 0v36M0 18h36" stroke="#CF142B" strokeWidth="6" />
        </svg>
    );
}

function FlagDE({ size = 20 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
            <rect width="36" height="12" rx="4" ry="4" fill="#000" />
            <rect y="12" width="36" height="12" fill="#DD0000" />
            <rect y="24" width="36" height="12" rx="4" ry="4" fill="#FFCE00" />
        </svg>
    );
}

function FlagPL({ size = 20 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
            <rect width="36" height="18" rx="4" ry="4" fill="#fff" />
            <rect y="18" width="36" height="18" rx="4" ry="4" fill="#DC143C" />
        </svg>
    );
}

function FlagFR({ size = 20 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
            <rect width="12" height="36" rx="4" ry="4" fill="#002395" />
            <rect x="12" width="12" height="36" fill="#fff" />
            <rect x="24" width="12" height="36" rx="4" ry="4" fill="#ED2939" />
        </svg>
    );
}

const flagComponents: Record<LangCode, React.FC<{ size?: number }>> = {
    it: FlagIT,
    en: FlagGB,
    de: FlagDE,
    pl: FlagPL,
    fr: FlagFR,
};

const languages: { code: LangCode; label: string }[] = [
    { code: "it", label: "Italiano" },
    { code: "en", label: "English" },
    { code: "de", label: "Deutsch" },
    { code: "pl", label: "Polski" },
    { code: "fr", label: "Français" },
];

export default function Header() {
    const { lang, setLang, t } = useLanguage();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const langRef = useRef<HTMLDivElement>(null);

    const navLinks = [
        { href: "#hero", label: t.nav.home },
        { href: "#menu-selector", label: t.nav.menu },
        { href: "#reviews", label: t.nav.reviews },
        { href: "#social", label: t.nav.social },
        { href: "#contact", label: t.nav.contact },
    ];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (langRef.current && !langRef.current.contains(e.target as Node)) {
                setLangOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const selectLang = (code: LangCode) => {
        setLang(code);
        setLangOpen(false);
    };

    const CurrentFlag = flagComponents[lang];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ top: "var(--banner-height, 0px)" }}
            className={`fixed left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "bg-brown-deep/95 backdrop-blur-md shadow-lg py-3"
                : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#hero" className="flex items-center gap-3 group">
                    <SunflowerLogo size={38} />
                    <div className="hidden sm:block">
                        <h1 className="font-serif text-lg font-semibold text-cream leading-none tracking-wide">
                            Il Girasole
                        </h1>
                        <p className="text-[10px] text-gold/80 tracking-[0.25em] uppercase">
                            Santa Teresa Gallura
                        </p>
                    </div>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-cream/80 hover:text-gold text-sm tracking-wider uppercase transition-colors duration-300 relative group"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}

                    {/* Social icons */}
                    <div className="flex items-center gap-3 ml-2 pl-4 border-l border-cream/20">
                        <a
                            href="https://www.instagram.com/ristorante_il_girasole_stg/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cream/60 hover:text-gold transition-colors duration-300"
                            aria-label="Instagram"
                        >
                            <Instagram size={18} />
                        </a>
                        <a
                            href="https://www.facebook.com/ristoranteilgirasole"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cream/60 hover:text-gold transition-colors duration-300"
                            aria-label="Facebook"
                        >
                            <Facebook size={18} />
                        </a>
                    </div>

                    {/* Language Switcher */}
                    <div className="relative ml-2" ref={langRef}>
                        <button
                            onClick={() => setLangOpen(!langOpen)}
                            className="w-9 h-9 rounded-lg border border-cream/20 hover:border-gold/40 flex items-center justify-center transition-all duration-300 hover:bg-cream/5"
                            aria-label="Language"
                        >
                            <CurrentFlag size={22} />
                        </button>

                        <AnimatePresence>
                            {langOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                                    transition={{ duration: 0.15 }}
                                    className="absolute right-0 top-full mt-2 bg-brown-deep/95 backdrop-blur-md border border-gold/20 rounded-xl shadow-2xl overflow-hidden min-w-[170px]"
                                >
                                    {languages.map((l) => {
                                        const FlagIcon = flagComponents[l.code];
                                        return (
                                            <button
                                                key={l.code}
                                                onClick={() => selectLang(l.code)}
                                                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors duration-200 ${lang === l.code
                                                    ? "text-gold bg-gold/10"
                                                    : "text-cream/70 hover:text-cream hover:bg-cream/5"
                                                    }`}
                                            >
                                                <FlagIcon size={18} />
                                                <span className="tracking-wide">{l.label}</span>
                                            </button>
                                        );
                                    })}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </nav>

                {/* Mobile: language + hamburger */}
                <div className="flex items-center gap-3 md:hidden">
                    <div className="relative" ref={langRef}>
                        <button
                            onClick={() => setLangOpen(!langOpen)}
                            className="w-9 h-9 rounded-lg border border-cream/20 flex items-center justify-center"
                            aria-label="Language"
                        >
                            <CurrentFlag size={20} />
                        </button>
                        <AnimatePresence>
                            {langOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                                    transition={{ duration: 0.15 }}
                                    className="absolute right-0 top-full mt-2 bg-brown-deep/95 backdrop-blur-md border border-gold/20 rounded-xl shadow-2xl overflow-hidden min-w-[160px] z-50"
                                >
                                    {languages.map((l) => {
                                        const FlagIcon = flagComponents[l.code];
                                        return (
                                            <button
                                                key={l.code}
                                                onClick={() => selectLang(l.code)}
                                                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors duration-200 ${lang === l.code
                                                    ? "text-gold bg-gold/10"
                                                    : "text-cream/70 hover:text-cream hover:bg-cream/5"
                                                    }`}
                                            >
                                                <FlagIcon size={18} />
                                                <span className="tracking-wide">{l.label}</span>
                                            </button>
                                        );
                                    })}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <button
                        className="text-cream p-2"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-brown-deep/98 backdrop-blur-md border-t border-gold/20"
                    >
                        <nav className="flex flex-col items-center py-6 gap-5">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-cream/80 hover:text-gold text-base tracking-wider uppercase transition-colors duration-300"
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                            <div className="flex items-center gap-4 mt-2 pt-4 border-t border-cream/10">
                                <a
                                    href="https://www.instagram.com/ristorante_il_girasole_stg/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-cream/60 hover:text-gold transition-colors"
                                    aria-label="Instagram"
                                >
                                    <Instagram size={20} />
                                </a>
                                <a
                                    href="https://www.facebook.com/ristoranteilgirasole"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-cream/60 hover:text-gold transition-colors"
                                    aria-label="Facebook"
                                >
                                    <Facebook size={20} />
                                </a>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
