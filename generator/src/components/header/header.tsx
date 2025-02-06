"use client"
import useTheme from "@/hooks/useTheme";
import LanguageSwitcher from "../suspense/languagesSwitcher";

export default function Header() {
    const { darkMode } = useTheme();
    return (
        <header className={`p-4 ${darkMode ? "bg-dark-background  text-gray-900" : "bg-background text-gray-900" }`}>
           <LanguageSwitcher/>
        </header>
    );
}
