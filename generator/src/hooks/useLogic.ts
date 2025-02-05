"use client";

import {useEffect, useState } from "react";

export default function useLogic() {
    const [language, setLanguage] = useState("pt");


    const changeLanguage = (lang: string) => {
        setLanguage(lang);
        localStorage.setItem("language", lang);
        window.location.reload();
    };
    
    useEffect(() => {
        const savedLang = localStorage.getItem("language");
        if (savedLang) setLanguage(savedLang);
    }, []);

    return{
        language,
        setLanguage,
        changeLanguage
    }

}
