"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import PolicyModal from "./PolicyModal";

export default function CookieBanner() {
    const { t } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);
    const [isPolicyOpen, setIsPolicyOpen] = useState(false);

    useEffect(() => {
        // Check if user has already accepted/declined cookies
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            // Show banner after a slight delay for better UX
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("cookie-consent", "declined");
        setIsVisible(false);
    };

    return (
        <>
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 bg-cream border border-gold/20 shadow-[-5px_15px_30px_rgba(0,0,0,0.15)] rounded-2xl p-5"
                    >
                        <div className="flex flex-col gap-4">
                            <p className="text-sm text-brown-deep/80 leading-relaxed font-sans">
                                {t.cookieBanner.message}
                            </p>
                            <div className="flex flex-wrap items-center gap-3">
                                <button
                                    onClick={handleAccept}
                                    className="flex-1 min-w-[100px] bg-terracotta text-cream px-4 py-2 rounded-full text-xs sm:text-sm font-semibold hover:bg-terracotta-dark transition-colors"
                                >
                                    {t.cookieBanner.accept}
                                </button>
                                <button
                                    onClick={handleDecline}
                                    className="flex-1 min-w-[100px] border border-brown-deep/20 text-brown-deep px-4 py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-brown-deep/5 transition-colors"
                                >
                                    {t.cookieBanner.decline}
                                </button>
                                <button
                                    onClick={() => setIsPolicyOpen(true)}
                                    className="w-full sm:w-auto text-brown-deep/60 hover:text-gold text-xs underline underline-offset-2 transition-colors text-center mt-1 sm:mt-0"
                                >
                                    {t.cookieBanner.readMore}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Reusing existing PolicyModal for Cookie Policy details from the banner */}
            <PolicyModal
                isOpen={isPolicyOpen}
                onClose={() => setIsPolicyOpen(false)}
                title={t.footer.cookies}
                content={<p className="whitespace-pre-line">{t.footer.cookiesContent}</p>}
            />
        </>
    );
}
