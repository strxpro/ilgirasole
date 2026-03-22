"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PartyPopper, X, Calendar } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const EVENT_DATE = new Date("2026-03-21T17:00:00+01:00");
const FIVE_DAYS_MS = 5 * 24 * 60 * 60 * 1000;

function isBannerExpired(): boolean {
    const now = new Date();
    return now.getTime() - EVENT_DATE.getTime() > FIVE_DAYS_MS;
}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

function getTimeLeft(): TimeLeft | null {
    const now = new Date();
    const diff = EVENT_DATE.getTime() - now.getTime();
    if (diff <= 0) return null;

    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
    };
}

export default function InaugurationBanner() {
    const { t } = useLanguage();
    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
    const [dismissed, setDismissed] = useState(false);
    const [expired, setExpired] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [visible, setVisible] = useState(false);
    const [hidden, setHidden] = useState(false);
    const bannerRef = useRef<HTMLDivElement>(null);
    const lastScrollY = useRef(0);

    const updateBannerHeight = useCallback(() => {
        if (bannerRef.current) {
            const h = bannerRef.current.offsetHeight;
            document.documentElement.style.setProperty("--banner-height", `${h}px`);
        }
    }, []);

    // Client-only: check expiration and start countdown
    useEffect(() => {
        if (isBannerExpired()) {
            setExpired(true);
            setMounted(true);
            return;
        }
        setMounted(true);
        setTimeLeft(getTimeLeft());
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (mounted && !expired) {
            setVisible(true);
        }
    }, [mounted, expired]);

    useEffect(() => {
        if (visible) {
            updateBannerHeight();
            window.addEventListener("resize", updateBannerHeight);
            return () => window.removeEventListener("resize", updateBannerHeight);
        }
    }, [visible, updateBannerHeight]);

    // Update banner height when language changes
    useEffect(() => {
        if (visible && !dismissed) {
            requestAnimationFrame(updateBannerHeight);
        }
    }, [t, visible, dismissed, updateBannerHeight]);

    // Scroll-based hide/show
    useEffect(() => {
        if (!visible || dismissed) return;
        const handleScroll = () => {
            const currentY = window.scrollY;
            const delta = currentY - lastScrollY.current;
            if (Math.abs(delta) < 5) return;
            
            if (delta > 0 && currentY > 80) {
                if (!hidden) {
                    setHidden(true);
                    document.documentElement.style.setProperty("--banner-height", "0px");
                }
            } else {
                if (hidden) {
                    setHidden(false);
                    if (bannerRef.current) {
                        document.documentElement.style.setProperty("--banner-height", `${bannerRef.current.offsetHeight}px`);
                    }
                }
            }
            lastScrollY.current = currentY;
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [visible, dismissed, hidden]);

    // Don't render anything on server or before mount
    if (!mounted || expired) return null;

    const showBanner = visible && !dismissed;
    const eventPassed = timeLeft === null;

    return (
        <AnimatePresence
            onExitComplete={() => {
                document.documentElement.style.setProperty("--banner-height", "0px");
            }}
        >
            {showBanner && (
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    ref={bannerRef}
                    className="fixed top-0 left-0 right-0 z-[70]"
                    onAnimationComplete={(def) => {
                        if (def === "animate" || (typeof def === "object" && "y" in def && def.y === 0)) {
                            updateBannerHeight();
                        }
                    }}
                >
                    <div className="relative bg-gradient-to-r from-terracotta via-terracotta-dark to-terracotta shadow-md">
                        {/* Animated background shimmer */}
                        <div className="absolute inset-0 opacity-20 overflow-hidden">
                            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.15)_50%,transparent_75%)] bg-[length:200%_200%] animate-[shimmer_3s_ease-in-out_infinite]" />
                        </div>

                        {/* Content + Close button in flex row */}
                        <div className="flex items-center">
                            <div className="flex-1 min-w-0 max-w-7xl mx-auto pl-3 pr-0 sm:pl-6 sm:pr-1 py-1.5 sm:py-2">
                                {/* Desktop: single row */}
                                <div className="hidden sm:flex items-center justify-center gap-3">
                                <motion.div
                                    animate={{ rotate: [0, -10, 10, -10, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                                >
                                    <PartyPopper size={14} className="text-gold" />
                                </motion.div>
                                <motion.span
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="bg-gold text-brown-deep text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0"
                                >
                                    {t.inauguration.newManagement}
                                </motion.span>
                                <p className="text-cream text-xs font-medium leading-snug truncate">
                                    {t.inauguration.title}
                                </p>
                                <span className="text-cream/30 shrink-0">|</span>
                                <div className="flex items-center gap-1 text-gold/90 shrink-0">
                                    <Calendar size={11} />
                                    <span className="text-[11px] font-semibold tracking-wide uppercase whitespace-nowrap">
                                        {t.inauguration.date}
                                    </span>
                                </div>
                                <span className="text-cream/30 shrink-0">|</span>
                                {eventPassed ? (
                                    <motion.p
                                        animate={{ scale: [1, 1.02, 1] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                        className="text-gold font-bold text-xs shrink-0"
                                    >
                                        {t.inauguration.eventStarted}
                                    </motion.p>
                                ) : (
                                    <div className="flex items-center gap-0.5 shrink-0">
                                        <CountdownUnit value={timeLeft.days} label={t.inauguration.days} />
                                        <Separator />
                                        <CountdownUnit value={timeLeft.hours} label={t.inauguration.hours} />
                                        <Separator />
                                        <CountdownUnit value={timeLeft.minutes} label={t.inauguration.minutes} />
                                        <Separator />
                                        <CountdownUnit value={timeLeft.seconds} label={t.inauguration.seconds} />
                                    </div>
                                )}
                                <motion.div
                                    animate={{ rotate: [0, 10, -10, 10, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                                    className="shrink-0"
                                >
                                    <PartyPopper size={14} className="text-gold scale-x-[-1]" />
                                </motion.div>
                            </div>

                            {/* Mobile: compact two-line layout */}
                            <div className="flex sm:hidden flex-col items-center gap-0.5">
                                <div className="flex items-center gap-1 w-full justify-center">
                                    <PartyPopper size={11} className="text-gold shrink-0" />
                                    <motion.span
                                        animate={{ scale: [1, 1.05, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="bg-gold text-brown-deep text-[7px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider shrink-0"
                                    >
                                        {t.inauguration.newManagement}
                                    </motion.span>
                                    <p className="text-cream text-[9px] font-medium leading-tight truncate min-w-0">
                                        {t.inauguration.title}
                                    </p>
                                    <PartyPopper size={11} className="text-gold scale-x-[-1] shrink-0" />
                                </div>
                                <div className="flex items-center gap-1">
                                    <Calendar size={9} className="text-gold/90 shrink-0" />
                                    <span className="text-gold/90 text-[8px] font-semibold tracking-wide uppercase whitespace-nowrap">
                                        {t.inauguration.date}
                                    </span>
                                    {eventPassed ? (
                                        <span className="text-gold font-bold text-[9px]">
                                            {t.inauguration.eventStarted}
                                        </span>
                                    ) : (
                                        <div className="flex items-center gap-0">
                                            <CountdownUnit value={timeLeft.days} label={t.inauguration.days} />
                                            <Separator />
                                            <CountdownUnit value={timeLeft.hours} label={t.inauguration.hours} />
                                            <Separator />
                                            <CountdownUnit value={timeLeft.minutes} label={t.inauguration.minutes} />
                                            <Separator />
                                            <CountdownUnit value={timeLeft.seconds} label={t.inauguration.seconds} />
                                        </div>
                                    )}
                                </div>
                                </div>
                            </div>

                            {/* Close button - in flex row, never clipped */}
                            <button
                                onClick={() => setDismissed(true)}
                                className="shrink-0 mr-5 sm:mr-6 w-7 h-7 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 border border-white/20 text-white transition-all duration-200 active:scale-90"
                                aria-label="Close"
                            >
                                <X size={14} strokeWidth={2.5} />
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
    return (
        <div className="flex flex-col items-center min-w-[28px] sm:min-w-[32px]">
            <motion.span
                key={value}
                initial={{ y: -4, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-cream font-bold text-sm sm:text-base leading-none tabular-nums"
            >
                {String(value).padStart(2, "0")}
            </motion.span>
            <span className="text-cream/50 text-[7px] sm:text-[8px] uppercase tracking-wider">
                {label}
            </span>
        </div>
    );
}

function Separator() {
    return (
        <span className="text-gold/60 text-xs sm:text-sm font-light mb-2">:</span>
    );
}
