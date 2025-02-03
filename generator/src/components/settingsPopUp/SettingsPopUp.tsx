"use client";

import useTheme from "@/hooks/useTheme";
import ThemeToggle from "../themeToggle/ThemeToggle";
import { Icons } from "../assets";

interface SettingsPopUpProps {
    onClose: () => void;
    type: "theme" | "link";
    link?: string;
}

export default function SettingsPopUp({ onClose, link }: SettingsPopUpProps) {
const {darkMode}= useTheme()

    return (
        <div className={`absolute top-465 left-2 mt-2 shadow-lg rounded-lg p-4 w-60 z-50 ${darkMode ? "bg-dark-background text-white" : "bg-background text-gray-900" }`}>
            <button
                onClick={onClose}
                className={`absolute top-2 right-2 text-xl font-bold text-text hover:text-bgSidebar ${darkMode ? "bg-dark-background text-white" : "bg-background text-gray-900" }`}
            >
                <Icons.Close/>
            </button>
            <ThemeToggle />
            {link && (
                <div className="mt-2">
                    <a href={link} className="text-blue-600 hover:text-blue-800">
                        Configurações
                    </a>
                </div>
            )}
        </div>
    );
}
