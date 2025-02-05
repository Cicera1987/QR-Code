"use client";

import useLogic from "../../hooks/useLogic";
import { useEffect} from "react";

export default function LanguageSwitcher() {
    const { setLanguage, changeLanguage } = useLogic()

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
