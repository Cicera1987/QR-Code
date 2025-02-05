"use client";

import { useEffect, useState } from "react";

export default function useTranslation() {
    const [language, setLanguage] = useState("pt");
    const [translations, setTranslations] = useState<Record<string, any>>({});

    useEffect(() => {
        const savedLang = localStorage.getItem("language") || "pt";
        setLanguage(savedLang);

        const loadTranslations = async () => {
            try {
                const response = await fetch(`/locales/${savedLang}.json`);
                const data = await response.json();
                setTranslations(data);
            } catch (error) {
                console.error("Erro ao carregar traduções:", error);
            }
        };

        loadTranslations();
    }, [language]);

    return translations;
}
