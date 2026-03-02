"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { ReactNode } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

interface PolicyModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    content: ReactNode;
}

const flags: Record<string, string> = { it: "🇮🇹", en: "🇬🇧", de: "🇩🇪", pl: "🇵🇱", fr: "🇫🇷" };

export default function PolicyModal({ isOpen, onClose, title, content }: PolicyModalProps) {
    const { lang } = useLanguage();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content - Bottom Sheet on Mobile, Centered Panel on Desktop */}
                    <motion.div
                        initial={{ y: "100%", x: "-50%" }}
                        animate={{ y: 0, x: "-50%" }}
                        exit={{ y: "100%", x: "-50%" }}
                        transition={{ type: "spring", damping: 28, stiffness: 220, mass: 0.8 }}
                        className="fixed bottom-0 left-1/2 z-[101] flex flex-col w-full max-w-[100vw] md:max-w-2xl md:mb-6 rounded-t-3xl md:rounded-3xl bg-cream max-h-[85vh] shadow-[0_-10px_40px_rgba(0,0,0,0.2)] md:shadow-2xl overscroll-contain origin-bottom"
                    >
                        {/* Drag Handle Indicator (Visual Only) */}
                        <div className="w-full flex justify-center pt-4 pb-2 md:hidden cursor-pointer" onClick={onClose}>
                            <div className="w-12 h-1.5 bg-brown-deep/20 rounded-full" />
                        </div>

                        {/* Header */}
                        <div className="flex items-center justify-between px-6 pt-2 pb-4 md:py-6 border-b border-brown-deep/10 shrink-0">
                            <div className="flex items-center gap-3">
                                <h2 className="font-serif text-2xl text-brown-deep font-semibold">
                                    {title}
                                </h2>
                                <span className="text-2xl drop-shadow-sm">{flags[lang] || "🇮🇹"}</span>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 text-brown-deep/60 hover:text-brown-deep hover:bg-brown-deep/5 rounded-full transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Scrollable Content */}
                        <div className="p-6 md:p-8 overflow-y-auto text-sm sm:text-base text-brown-medium/80 leading-relaxed font-sans pb-12 md:pb-8">
                            {content}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

