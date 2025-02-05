"use client";

import { useEffect, useState, ChangeEvent } from "react";

export default function useLogic() {
    const [language, setLanguage] = useState("pt");
    const [translations, setTranslations] = useState<Record<string, any>>({});

    const changeLanguage = (lang: string) => {
        setLanguage(lang);
        localStorage.setItem("language", lang);
        window.location.reload();
    };

    const handleChangeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = e.target.value;
        changeLanguage(selectedLanguage);
    };

    useEffect(() => {
        const savedLang = localStorage.getItem("language") || "pt";
        setLanguage(savedLang);
    }, []);

    useEffect(() => {
        const loadTranslations = async () => {
            try {
                const response = await fetch(`/locales/${language}.json`);
                const data = await response.json();
                setTranslations(data);
            } catch (error) {
                console.error("Erro ao carregar traduções:", error);
            }
        };

        loadTranslations();
    }, [language]);

    return {
        language,
        translations,
        handleChangeLanguage,
    };
}