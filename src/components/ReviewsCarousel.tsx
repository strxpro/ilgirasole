"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

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

                {/* Review links */}
                <div className="flex flex-col items-center gap-3">
                    {/* Google Reviews link */}
                    <a
                        href="https://www.google.com/maps/place/Il+Girasole/@41.2414,9.1876,17z/data=!4m8!3m7!1s0x12d94b0d7a3b1b97:0x8f5b9b2b3b3b3b3b!8m2!3d41.2414!4d9.1876!9m1!1b1!16s%2Fg%2F11c1p1h1_1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-brown-medium/40 hover:text-[#4285F4] transition-colors duration-300"
                    >
                        <span className="text-lg">⭐</span>
                        <span>{t.reviews.leaveReviewOn} {t.reviews.googleReviews}</span>
                        <ExternalLink size={12} />
                    </a>

                    {/* TripAdvisor link */}
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
            </div>
        </section>
    );
}
