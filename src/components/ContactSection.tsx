"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function ContactSection() {
    const { t } = useLanguage();

    return (
        <section id="contact" className="py-16 sm:py-24 bg-cream">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <p className="text-gold tracking-[0.3em] text-xs uppercase mb-3">
                        {t.contact.label}
                    </p>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brown-deep mb-4">
                        {t.contact.title}
                    </h2>
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold" />
                        <span className="text-gold text-sm">✦</span>
                        <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold" />
                    </div>
                </motion.div>

                {/* Two Columns */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        {/* Address */}
                        <div className="flex items-start gap-4 group">
                            <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0 group-hover:bg-terracotta/20 transition-colors duration-300">
                                <MapPin size={20} className="text-terracotta" />
                            </div>
                            <div>
                                <h3 className="font-serif text-lg font-semibold text-brown-deep mb-1">
                                    {t.contact.address}
                                </h3>
                                <p className="text-brown-medium/60 text-sm leading-relaxed">
                                    Via Italia, 7
                                    <br />
                                    07028 Santa Teresa Gallura
                                    <br />
                                    Provincia della Gallura, Nord-Est Sardegna, Italia
                                </p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-4 group">
                            <div className="w-12 h-12 rounded-full bg-olive/10 flex items-center justify-center shrink-0 group-hover:bg-olive/20 transition-colors duration-300">
                                <Phone size={20} className="text-olive" />
                            </div>
                            <div>
                                <h3 className="font-serif text-lg font-semibold text-brown-deep mb-1">
                                    {t.contact.phone}
                                </h3>
                                <a
                                    href="tel:+393793564407"
                                    className="text-brown-medium/60 text-sm hover:text-terracotta transition-colors duration-300"
                                >
                                    +39 379 356 4407
                                </a>
                                <p className="text-brown-medium/40 text-xs mt-1">
                                    {t.contact.reservations}
                                </p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-4 group">
                            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors duration-300">
                                <Mail size={20} className="text-gold-dark" />
                            </div>
                            <div>
                                <h3 className="font-serif text-lg font-semibold text-brown-deep mb-1">
                                    {t.contact.email}
                                </h3>
                                <a
                                    href="mailto:info@ilgirasole-sardegna.it"
                                    className="text-brown-medium/60 text-sm hover:text-terracotta transition-colors duration-300"
                                >
                                    info@ilgirasole-sardegna.it
                                </a>
                            </div>
                        </div>

                        {/* Opening Hours */}
                        <div className="flex items-start gap-4 group">
                            <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0 group-hover:bg-terracotta/20 transition-colors duration-300">
                                <Clock size={20} className="text-terracotta" />
                            </div>
                            <div>
                                <h3 className="font-serif text-lg font-semibold text-brown-deep mb-3">
                                    {t.contact.hours}
                                </h3>
                                <div className="space-y-2">
                                    {[
                                        { day: t.contact.mondayToFriday, hours: "12:00 — 15:00 · 19:00 — 23:30" },
                                        { day: t.contact.saturday, hours: "12:00 — 16:00 · 18:30 — 00:00" },
                                        { day: t.contact.sunday, hours: "12:00 — 16:00 · 19:00 — 23:00" },
                                    ].map((schedule) => (
                                        <div
                                            key={schedule.day}
                                            className="flex items-center justify-between gap-4 text-sm"
                                        >
                                            <span className="text-brown-deep font-medium">
                                                {schedule.day}
                                            </span>
                                            <span className="text-brown-medium/50 text-xs">
                                                {schedule.hours}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-3 pt-3 border-t border-gold/10">
                                    <p className="text-xs text-olive italic">
                                        {t.contact.barOpen}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="sticky top-24">
                            <div className="rounded-sm overflow-hidden shadow-lg border border-gold/10">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.5!2d9.1875021!3d41.2423084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d960029bfaa17b%3A0x9ff7772eab6de6d0!2sIl%20Girasole!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Il Girasole - Google Maps"
                                />
                            </div>
                            <div className="mt-4 p-4 bg-white-warm rounded-sm border border-gold/10">
                                <p className="text-xs text-brown-medium/50 text-center italic">
                                    {t.contact.mapNote}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
