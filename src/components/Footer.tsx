"use client";

import { useState } from "react";
import { Instagram, Facebook, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import SunflowerLogo from "./SunflowerLogo";
import { useLanguage } from "@/i18n/LanguageContext";
import PolicyModal from "./PolicyModal";

export default function Footer() {
    const { t } = useLanguage();
    const [activeModal, setActiveModal] = useState<"privacy" | "cookies" | null>(null);

    const footerLinks = [
        { label: t.nav.home, href: "#hero" },
        { label: t.nav.menu, href: "#menu-selector" },
        { label: t.nav.reviews, href: "#reviews" },
        { label: t.nav.social, href: "#social" },
        { label: t.nav.contact, href: "#contact" },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-brown-deep text-cream/80">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 py-14 sm:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">
                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-3 mb-5">
                            <SunflowerLogo size={38} />
                            <div>
                                <h3 className="font-serif text-lg font-semibold text-cream">
                                    Il Girasole
                                </h3>
                                <p className="text-[10px] text-gold/70 tracking-[0.2em] uppercase">
                                    Santa Teresa Gallura
                                </p>
                            </div>
                        </div>
                        <p className="text-cream/50 text-sm leading-relaxed mb-5">
                            {t.footer.description}
                        </p>
                        <div className="flex items-center gap-3">
                            <a
                                href="https://www.instagram.com/_ilgirasole26/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full bg-cream/5 hover:bg-gold/20 flex items-center justify-center transition-colors duration-300"
                                aria-label="Instagram"
                            >
                                <Instagram size={16} className="text-cream/60 hover:text-gold" />
                            </a>
                            <a
                                href="https://www.facebook.com/ristoranteilgirasole"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full bg-cream/5 hover:bg-gold/20 flex items-center justify-center transition-colors duration-300"
                                aria-label="Facebook"
                            >
                                <Facebook size={16} className="text-cream/60 hover:text-gold" />
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="font-serif text-sm font-semibold text-gold tracking-wider uppercase mb-5">
                            {t.footer.navigation}
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-cream/50 hover:text-gold text-sm transition-colors duration-300"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-serif text-sm font-semibold text-gold tracking-wider uppercase mb-5">
                            {t.footer.contactTitle}
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="tel:+393793564407"
                                    className="flex items-center gap-2 text-cream/50 hover:text-gold text-sm transition-colors duration-300"
                                >
                                    <Phone size={14} />
                                    <span>+39 379 356 4407</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:info@ilgirasole-sardegna.it"
                                    className="flex items-center gap-2 text-cream/50 hover:text-gold text-sm transition-colors duration-300"
                                >
                                    <Mail size={14} />
                                    <span>info@ilgirasole-sardegna.it</span>
                                </a>
                            </li>
                            <li className="flex items-start gap-2 text-cream/50 text-sm">
                                <MapPin size={14} className="mt-0.5 shrink-0" />
                                <span>
                                    Via Italia, 7
                                    <br />
                                    07028 Santa Teresa Gallura
                                    <br />
                                    Provincia della Gallura, Sardegna
                                </span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-cream/5">
                <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-cream/30 text-xs text-center sm:text-left">
                        {t.footer.copyright}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-cream/30">
                        <a
                            href="#"
                            onClick={(e) => { e.preventDefault(); setActiveModal("privacy"); }}
                            className="hover:text-gold transition-colors duration-300"
                        >
                            {t.footer.privacy}
                        </a>
                        <span>·</span>
                        <a
                            href="#"
                            onClick={(e) => { e.preventDefault(); setActiveModal("cookies"); }}
                            className="hover:text-gold transition-colors duration-300"
                        >
                            {t.footer.cookies}
                        </a>
                        <span>·</span>
                        <button
                            onClick={scrollToTop}
                            className="hover:text-gold transition-colors duration-300 flex items-center gap-1"
                        >
                            <ArrowUp size={12} />
                            ↑
                        </button>
                    </div>
                </div>
            </div>

            {/* Policy Modals */}
            <PolicyModal
                isOpen={activeModal !== null}
                onClose={() => setActiveModal(null)}
                title={activeModal === "privacy" ? t.footer.privacy : activeModal === "cookies" ? t.footer.cookies : ""}
                content={
                    <p className="whitespace-pre-line">
                        {activeModal === "privacy"
                            ? t.footer.privacyContent
                            : activeModal === "cookies"
                                ? t.footer.cookiesContent
                                : ""}
                    </p>
                }
            />
        </footer>
    );
}
