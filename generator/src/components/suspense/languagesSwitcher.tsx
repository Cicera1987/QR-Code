"use client";

import { useEffect, useState } from "react";

export default function LanguageSwitcher() {
    const [language, setLanguage] = useState("pt");

    useEffect(() => {
        const savedLang = localStorage.getItem("language");
        if (savedLang) setLanguage(savedLang);
    }, []);

    const changeLanguage = (lang: string) => {
        setLanguage(lang);
        localStorage.setItem("language", lang);
        window.location.reload();
    };

    return (
        <div className="flex gap-2">
            <button onClick={() => changeLanguage("pt")} className="px-3 py-1 border rounded">
                🇧🇷 PT
            </button>
            <button onClick={() => changeLanguage("en")} className="px-3 py-1 border rounded">
                🇺🇸 EN
            </button>
        </div>
    );
}
