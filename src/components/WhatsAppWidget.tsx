"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import SunflowerLogo from "./SunflowerLogo";

const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.299-.018-.461.13-.611.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
);

export default function WhatsAppWidget() {
    const { t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");

    const phoneNumber = "393793564407"; // Il Girasole's requested phone number

    const handleSend = () => {
        if (!message.trim()) return;
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
        setMessage("");
        setIsOpen(false);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex items-end justify-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        // Start tiny, transparent, and originating from the bottom right corner
                        initial={{ opacity: 0, scale: 0.1, y: 0, filter: "blur(8px)" }}
                        animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 0.1, y: 0, filter: "blur(8px)" }}
                        // Smooth bezier curve typical for macOS open/close animations
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        // Transform origin calculation:
                        // We want it to grow exactly from the center of the button.
                        // Since the window is now absolutely positioned right over the button area:
                        style={{ transformOrigin: "calc(100% - 28px) calc(100% - 28px)" }}
                        className="absolute bottom-0 right-0 bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] flex flex-col w-[320px] max-w-[calc(100vw-3rem)] overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-[#25D366] p-4 flex items-center justify-between text-white relative overflow-hidden">
                            <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>
                            <div className="flex items-center gap-3 relative z-10">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-inner overflow-hidden flex-shrink-0">
                                    <SunflowerLogo className="w-6 h-6 text-[#25D366]" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-semibold font-serif text-lg leading-tight shadow-sm">Il Girasole</span>
                                    <span className="text-xs text-white/90">{t.whatsapp.subtitle}</span>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white/80 hover:text-white transition-colors relative z-10"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Chat Body */}
                        <div className="p-4 bg-[#E5DDD5] min-h-[120px] flex flex-col relative">
                            {/* WhatsApp background pattern */}
                            <div className="absolute inset-0 opacity-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png')] bg-repeat bg-contain" style={{ backgroundSize: '100px' }}></div>

                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.25, duration: 0.3 }}
                                className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm self-start max-w-[85%] relative z-10 text-sm text-gray-800"
                            >
                                <p>{t.whatsapp.title} 👋</p>
                                <span className="text-[10px] text-gray-400 block mt-1 text-right">
                                    {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </span>
                            </motion.div>
                        </div>

                        {/* Input Area */}
                        <div className="p-3 bg-[#F0F2F5] flex gap-2 items-center">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                placeholder={t.whatsapp.placeholder}
                                className="flex-1 bg-white rounded-full px-4 py-2 border-none focus:ring-1 focus:ring-[#25D366] outline-none text-sm text-gray-700 shadow-sm"
                            />
                            <button
                                onClick={handleSend}
                                disabled={!message.trim()}
                                className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#20bd5a] transition-colors shadow-sm"
                            >
                                <Send size={18} className="translate-x-[-1px] translate-y-[1px]" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button - Hidden when open */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.5, filter: "blur(4px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 0.5, filter: "blur(4px)" }}
                        onClick={() => setIsOpen(true)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[#25D366]/30 shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.5)] transition-shadow focus:outline-none origin-center"
                        aria-label="Toggle WhatsApp Chat"
                    >
                        <WhatsAppIcon className="w-8 h-8" />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}
