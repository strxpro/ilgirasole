"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, ExternalLink, Quote } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

// ──────────────────────────────────────────────────────────────────────
// 🔗 LINK DO WYSTAWIENIA OPINII W GOOGLE
//    Zamień na prawdziwy link do profilu restauracji w Google Maps.
//    Aby go znaleźć: Google Maps → Il Girasole → "Napisz opinię" → skopiuj URL
// ──────────────────────────────────────────────────────────────────────
const GOOGLE_REVIEW_LINK =
    "https://www.google.com/maps/search/Il+Girasole+Santa+Teresa+Gallura/@41.2414,9.1889,17z";

// ──────────────────────────────────────────────────────────────────────
// Przykładowe opinie (mockup — do podmienienia na widget)
// ──────────────────────────────────────────────────────────────────────
const mockReviews = [
    {
        id: 1,
        author: "Marco B.",
        avatar: "M",
        rating: 5,
        date: "2 tygodnie temu",
        text: "Un'esperienza gastronomica indimenticabile! Il porceddu era perfetto e il Vermentino di Gallura si abbinava meravigliosamente. La vista dalla terrazza al tramonto è magica. Torneremo sicuramente!",
        source: "google" as const,
    },
    {
        id: 2,
        author: "Sarah L.",
        avatar: "S",
        rating: 5,
        date: "1 mese fa",
        text: "Best restaurant in Santa Teresa Gallura! The seafood is incredibly fresh and the atmosphere is pure Italian charm. The staff made us feel like family. A must-visit when in Sardinia.",
        source: "google" as const,
    },
    {
        id: 3,
        author: "Klaus M.",
        avatar: "K",
        rating: 5,
        date: "3 settimane fa",
        text: "Wunderbares Restaurant mit authentischer sardischer Küche. Die Fregola con Arselle war ein Traum. Die Terrasse bietet einen wunderschönen Blick auf die Piazza. Sehr empfehlenswert!",
        source: "google" as const,
    },
    {
        id: 4,
        author: "Marie D.",
        avatar: "M",
        rating: 5,
        date: "1 mese fa",
        text: "Le cocktail bar est fantastique! Le Sardinian Spritz est une révélation. L'ambiance est chaleureuse et le personnel très accueillant. Un bijou caché au cœur de Santa Teresa.",
        source: "google" as const,
    },
    {
        id: 5,
        author: "Giovanni R.",
        avatar: "G",
        rating: 5,
        date: "2 mesi fa",
        text: "Abbiamo cenato qui tre volte durante la nostra vacanza. I malloreddus alla campidanese sono i migliori che abbia mai assaggiato. Servizio impeccabile e prezzi giusti per la qualità offerta.",
        source: "google" as const,
    },
];

// ──────────────────────────────────────────────────────────────────────
// Google Logo SVG
// ──────────────────────────────────────────────────────────────────────
function GoogleLogo({ className = "w-5 h-5" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
            <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                fill="#4285F4"
            />
            <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
            />
            <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
            />
            <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
            />
        </svg>
    );
}

// ──────────────────────────────────────────────────────────────────────
// Star Rating Component
// ──────────────────────────────────────────────────────────────────────
function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    size={14}
                    className={
                        i < rating
                            ? "fill-amber-400 text-amber-400"
                            : "fill-gray-200 text-gray-200"
                    }
                />
            ))}
        </div>
    );
}

// ──────────────────────────────────────────────────────────────────────
// Main Component
// ──────────────────────────────────────────────────────────────────────
export default function ReviewsCarousel() {
    const { t } = useLanguage();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoplay, setAutoplay] = useState(true);

    // Auto-rotate reviews
    useEffect(() => {
        if (!autoplay) return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % mockReviews.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [autoplay]);

    const goTo = (idx: number) => {
        setAutoplay(false);
        setCurrentIndex(idx);
        // resume autoplay after 10s
        setTimeout(() => setAutoplay(true), 10000);
    };

    const prev = () => goTo((currentIndex - 1 + mockReviews.length) % mockReviews.length);
    const next = () => goTo((currentIndex + 1) % mockReviews.length);

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
                {/* ── HEADER ── */}
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

                    {/* Google rating summary */}
                    <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-5 py-2.5 shadow-sm border border-gold/10">
                        <GoogleLogo className="w-5 h-5" />
                        <div className="flex items-center gap-1.5">
                            <span className="text-brown-deep font-bold text-lg">4.9</span>
                            <StarRating rating={5} />
                        </div>
                        <span className="text-brown-medium/50 text-sm">
                            · {t.reviews.reviewCount}
                        </span>
                    </div>
                </motion.div>

                {/* ── REVIEW CAROUSEL ── */}
                {/* ──────────────────────────────────────────────────────────────
                   TUTAJ WKLEIMY KOD WIDGETU TRUSTINDEX / ELFSIGHT
                   
                   Aby podłączyć prawdziwe recenzje:
                   1. Załóż konto na https://trustindex.io lub https://elfsight.com
                   2. Podłącz profil Google Business (Il Girasole, Santa Teresa Gallura)
                   3. Skopiuj wygenerowany kod <script> + <div>
                   4. Zamień poniższy mockup (od komentarza START MOCKUP do END MOCKUP)
                      na skopiowany kod widgetu
                   5. Dodaj <script src="..."> do src/app/layout.tsx w <head>
                   
                   Przykład (Elfsight):
                     <div className="elfsight-app-XXXXXXXX" data-elfsight-app-lazy></div>
                   
                   Przykład (Trustindex):
                     <div className="trustindex-widget" data-widget-id="XXXXXXXX"></div>
                ────────────────────────────────────────────────────────────── */}

                {/* ── START MOCKUP ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative mb-14"
                >
                    {/* Review Card */}
                    <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gold/10 overflow-hidden">
                        {/* Decorative top bar */}
                        <div className="h-1 bg-gradient-to-r from-terracotta via-gold to-terracotta" />

                        <div className="p-8 sm:p-12">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -30 }}
                                    transition={{ duration: 0.4 }}
                                    className="flex flex-col items-center text-center"
                                >
                                    {/* Quote icon */}
                                    <Quote
                                        size={36}
                                        className="text-gold/20 mb-4 rotate-180"
                                    />

                                    {/* Review text */}
                                    <p className="font-serif text-lg sm:text-xl text-brown-deep/85 leading-relaxed max-w-2xl mb-8 italic">
                                        &ldquo;{mockReviews[currentIndex].text}&rdquo;
                                    </p>

                                    {/* Author info */}
                                    <div className="flex flex-col items-center gap-3">
                                        {/* Avatar with Google icon */}
                                        <div className="relative">
                                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-terracotta to-gold flex items-center justify-center shadow-lg">
                                                <span className="text-white font-serif text-xl font-bold">
                                                    {mockReviews[currentIndex].avatar}
                                                </span>
                                            </div>
                                            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100">
                                                <GoogleLogo className="w-3.5 h-3.5" />
                                            </div>
                                        </div>

                                        <div>
                                            <p className="font-serif font-semibold text-brown-deep text-base">
                                                {mockReviews[currentIndex].author}
                                            </p>
                                            <div className="flex items-center justify-center gap-2 mt-1">
                                                <StarRating rating={mockReviews[currentIndex].rating} />
                                                <span className="text-brown-medium/40 text-xs">
                                                    · {mockReviews[currentIndex].date}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Navigation */}
                        <div className="flex items-center justify-between px-4 sm:px-8 pb-6">
                            <button
                                onClick={prev}
                                className="w-10 h-10 rounded-full bg-sand-light hover:bg-gold/10 flex items-center justify-center transition-all duration-300 group"
                                aria-label="Precedente"
                            >
                                <ChevronLeft
                                    size={18}
                                    className="text-brown-medium/40 group-hover:text-terracotta transition-colors"
                                />
                            </button>

                            {/* Dots */}
                            <div className="flex items-center gap-2">
                                {mockReviews.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => goTo(idx)}
                                        className={`transition-all duration-300 rounded-full ${idx === currentIndex
                                            ? "w-8 h-2.5 bg-gradient-to-r from-terracotta to-gold"
                                            : "w-2.5 h-2.5 bg-brown-medium/15 hover:bg-gold/30"
                                            }`}
                                        aria-label={`Opinione ${idx + 1}`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={next}
                                className="w-10 h-10 rounded-full bg-sand-light hover:bg-gold/10 flex items-center justify-center transition-all duration-300 group"
                                aria-label="Successivo"
                            >
                                <ChevronRight
                                    size={18}
                                    className="text-brown-medium/40 group-hover:text-terracotta transition-colors"
                                />
                            </button>
                        </div>
                    </div>
                </motion.div>
                {/* ── END MOCKUP ── */}

                {/* ── CTA: ZOSTAW OPINIĘ ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center"
                >
                    <p className="font-serif text-lg sm:text-xl text-brown-deep/70 italic mb-6">
                        {t.reviews.cta}
                    </p>

                    <a
                        href={GOOGLE_REVIEW_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white rounded-xl shadow-lg hover:shadow-2xl border-2 border-gold/20 hover:border-gold/40 transition-all duration-500 hover:-translate-y-0.5"
                    >
                        {/* Animated glow */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-100/0 via-amber-100/50 to-amber-100/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-gray-200 shadow-sm group-hover:shadow-md transition-shadow">
                                <GoogleLogo className="w-5 h-5" />
                            </div>
                            <div className="text-left">
                                <p className="text-[11px] text-brown-medium/50 tracking-wide uppercase leading-tight">
                                    {t.reviews.leaveReviewOn}
                                </p>
                                <p className="text-base font-bold text-brown-deep group-hover:text-blue-600 transition-colors">
                                    {t.reviews.googleReviews}
                                </p>
                            </div>
                            <ExternalLink
                                size={16}
                                className="text-brown-medium/25 group-hover:text-blue-500 transition-colors ml-1"
                            />
                        </div>
                    </a>

                    {/* TripAdvisor link */}
                    <div className="mt-4">
                        <a
                            href="https://www.tripadvisor.com/Restaurant_Review-g194883-d0-Reviews-Il_Girasole-Santa_Teresa_Gallura_Province_of_Sassari_Sardinia.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-brown-medium/40 hover:text-[#00AF87] transition-colors duration-300"
                        >
                            <span className="text-lg">🦉</span>
                            <span>{t.reviews.orOnTripadvisor}</span>
                            <ExternalLink size={12} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
