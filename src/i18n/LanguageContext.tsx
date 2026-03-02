"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import translations, { LangCode, Translations } from "./translations";

interface LanguageContextType {
    lang: LangCode;
    setLang: (lang: LangCode) => void;
    t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
    lang: "it",
    setLang: () => { },
    t: translations.it,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<LangCode>("it");

    return (
        <LanguageContext.Provider
            value={{ lang, setLang, t: translations[lang] }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
