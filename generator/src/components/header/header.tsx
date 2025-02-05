"use client"
import useTheme from "@/hooks/useTheme";
import LanguageSwitcher from "../suspense/languagesSwitcher";
import { Icons } from "../assets";

export default function Header() {
    const { darkMode } = useTheme();
    return (
        <header className={`p-4 flex justify-between items-center shadow-md ${darkMode ? "bg-dark-bgColor text-gray-900" : "bg-dark-background text-white" }`}>
            <Icons.QrCode/>
           <LanguageSwitcher/>
        </header>
    );
}
