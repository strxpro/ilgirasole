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
    const bannerHeight = useRef(0);

    const updateBannerHeight = useCallback(() => {
        if (bannerRef.current) {
            const h = bannerRef.current.offsetHeight;
            bannerHeight.current = h;
            if (!hidden) {
                document.documentElement.style.setProperty("--banner-height", `${h}px`);
            }
        }
    }, [hidden]);

    // Scroll direction detection: hide on scroll down, show on scroll up
    useEffect(() => {
        if (!visible || dismissed) return;
        const handleScroll = () => {
            const currentY = window.scrollY;
            if (currentY > lastScrollY.current && currentY > 100) {
                // Scrolling down
                setHidden(true);
                document.documentElement.style.setProperty("--banner-height", "0px");
            } else {
                // Scrolling up
                setHidden(false);
                document.documentElement.style.setProperty("--banner-height", `${bannerHeight.current}px`);
            }
            lastScrollY.current = currentY;
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [visible, dismissed]);

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
        if (mounted) {
            const timeout = setTimeout(() => setVisible(true), 500);
            return () => clearTimeout(timeout);
        }
    }, [mounted]);

    useEffect(() => {
        if (visible) {
            updateBannerHeight();
            window.addEventListener("resize", updateBannerHeight);
            return () => window.removeEventListener("resize", updateBannerHeight);
        }
    }, [visible, updateBannerHeight]);

    useEffect(() => {
        if (dismissed) {
            document.documentElement.style.setProperty("--banner-height", "0px");
        }
    }, [dismissed]);

    // Update banner height when language changes (text size may differ)
    useEffect(() => {
        if (visible && !dismissed) {
            requestAnimationFrame(updateBannerHeight);
        }
    }, [t, visible, dismissed, updateBannerHeight]);

    if (!mounted || dismissed || expired) return null;

    const eventPassed = timeLeft === null;

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: hidden ? -bannerHeight.current : 0, opacity: hidden ? 0 : 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    ref={bannerRef}
                    className="fixed top-0 left-0 right-0 z-[70]"
                >
                    <div>
                        <div className="relative overflow-hidden bg-gradient-to-r from-terracotta via-terracotta-dark to-terracotta shadow-md">
                            {/* Animated background shimmer */}
                            <div className="absolute inset-0 opacity-20">
                                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.15)_50%,transparent_75%)] bg-[length:200%_200%] animate-[shimmer_3s_ease-in-out_infinite]" />
                            </div>

                            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-1.5 sm:py-2">
                                {/* Desktop: single row */}
                                <div className="hidden sm:flex items-center justify-center gap-3 pr-6">
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
                                <div className="flex sm:hidden flex-col items-center gap-0.5 pr-5">
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

                            {/* Close button */}
                            <button
                                onClick={() => setDismissed(true)}
                                className="absolute top-1/2 -translate-y-1/2 right-1.5 sm:right-2 text-cream/50 hover:text-cream transition-colors duration-200 p-1"
                                aria-label="Close"
                            >
                                <X size={14} />
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
