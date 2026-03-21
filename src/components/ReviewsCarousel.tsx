"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import Script from "next/script";

const GOOGLE_REVIEW_LINK =
    "https://www.google.com/search?sca_esv=1f1bc4ebf15b2244&sxsrf=ANbL-n4tGotRNxHR1-UH0PdtvqWwhk_c9g:1774111202140&q=Il+Girasole+Opinie&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDQ1MrMwNLIwNDYzMDMGssxMNjAyvmIU8sxRcM8sSizOz0lV8C_IzMtMXcSKRRAAB7z24EUAAAA&rldimm=11526812813606381264&tbm=lcl&hl=pl-PL&sa=X&ved=2ahUKEwivlvuft7GTAxWYIRAIHSAHGWkQ9fQKegQIUxAI&biw=1920&bih=919&dpr=1#lkt=LocalPoiReviews";

export default function ReviewsCarousel() {
    const { t } = useLanguage();

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
                <div className="mb-14">
                    <Script
                        src="https://cdn.trustindex.io/loader.js?e43ab6767464773eda36526823c"
                        strategy="lazyOnload"
                    />
                </div>

                {/* CTA links */}
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
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-100/0 via-amber-100/50 to-amber-100/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative flex items-center gap-3">
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
                            href="https://www.tripadvisor.com/Restaurant_Review-g608922-d1837416-Reviews-Il_Girasole-Santa_Teresa_Gallura_Province_of_Olbia_Tempio_Sardinia.html"
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
