"use client";

import { useEffect, useState, ChangeEvent } from "react";

export default function useLogic() {
    const [language, setLanguage] = useState("pt");
 
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
        const savedLang = localStorage.getItem("language");
        if (savedLang) setLanguage(savedLang);
    }, []);

    return{
        language,
        setLanguage,
        changeLanguage,
        handleChangeLanguage
    }

}
