"use client";

import { useState } from "react";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MenuSelector from "@/components/MenuSelector";
import InteractiveMenu from "@/components/InteractiveMenu";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import SocialFeed from "@/components/SocialFeed";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import InaugurationBanner from "@/components/InaugurationBanner";
import Confetti from "@/components/Confetti";
import { menuData } from "@/data/menuData";

export default function Home() {
  const [activeMenu, setActiveMenu] = useState<"ristorante" | "bar">("ristorante");

  return (
    <LanguageProvider>
      <Confetti />
      <InaugurationBanner />
      <Header />

      <main>
        <HeroSection />

        <MenuSelector activeMenu={activeMenu} onSelect={setActiveMenu} />

        <InteractiveMenu
          categories={menuData[activeMenu]}
          type={activeMenu}
        />

        <ReviewsCarousel />

        <SocialFeed />

        <ContactSection />
      </main>

      <Footer />
      <WhatsAppWidget />
      <CookieBanner />
    </LanguageProvider>
  );
}
