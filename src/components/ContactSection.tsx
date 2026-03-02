"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Map = dynamic(() => import("./Map"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-[450px] bg-brown-deep/5 flex items-center justify-center rounded-sm border border-gold/10">
            <div className="animate-pulse text-gold">Caricamento mappa...</div>
        </div>
    ),
});

export default function ContactSection() {
    const { t } = useLanguage();

    const restaurantCoords: [number, number] = [41.2414, 9.1889];
    const googleMapsUrl = "https://www.google.com/maps/dir/?api=1&destination=41.2414,9.1889";

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
                                    href="tel:+390789754321"
                                    className="text-brown-medium/60 text-sm hover:text-terracotta transition-colors duration-300"
                                >
                                    +39 0789 754 321
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
                            <div className="rounded-sm overflow-hidden shadow-lg border border-gold/10 relative group">
                                <div className="absolute inset-x-0 top-0 z-10 p-3 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="bg-brown-deep/60 backdrop-blur-sm text-cream text-[10px] px-3 py-1.5 rounded-full inline-block">
                                        Zoom con scroll · Click per indicazioni
                                    </div>
                                </div>
                                <Map
                                    center={restaurantCoords}
                                    zoom={15}
                                    destinationUrl={googleMapsUrl}
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
